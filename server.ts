import fs from 'fs/promises';
import path from 'path';

import dotenv from 'dotenv';
import express from 'express';
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Resend } from 'resend';
import { createServer as createViteServer, type ViteDevServer } from 'vite';

import App from './src/App';

dotenv.config();

const CANONICAL_HOST = 'www.doctor2u.co.uk';
const PORT = Number(process.env.PORT || 3000);

function renderApp(url: string) {
  const helmetContext: { helmet?: any } = {};
  const appHtml = renderToString(
    React.createElement(
      HelmetProvider,
      { context: helmetContext },
      React.createElement(
        StaticRouter,
        { location: url },
        React.createElement(App)
      )
    )
  );

  const { helmet } = helmetContext;
  const head = [
    helmet?.title?.toString() ?? '',
    helmet?.priority?.toString() ?? '',
    helmet?.meta?.toString() ?? '',
    helmet?.link?.toString() ?? '',
  ]
    .filter(Boolean)
    .join('\n');

  return { appHtml, head };
}

function injectApp(template: string, appHtml: string, head: string) {
  return template
    .replace('<!--app-head-->', head)
    .replace('<!--app-html-->', appHtml);
}

async function getTemplate(vite?: ViteDevServer, url = '/') {
  const templatePath = vite
    ? path.resolve(process.cwd(), 'index.html')
    : path.resolve(process.cwd(), 'dist', 'index.html');

  const template = await fs.readFile(templatePath, 'utf-8');
  return vite ? vite.transformIndexHtml(url, template) : template;
}

async function startServer() {
  const app = express();
  const isProduction = process.env.NODE_ENV === 'production';
  const distPath = path.resolve(process.cwd(), 'dist');

  app.use(express.json());

  app.use((req, res, next) => {
    const host = (req.headers.host || '').split(':')[0];
    if (host === 'doctor2u.co.uk') {
      res.redirect(301, `https://${CANONICAL_HOST}${req.originalUrl}`);
      return;
    }
    next();
  });

  app.get('/favicon.ico', (_req, res) => {
    res.redirect(301, '/favicon.svg');
  });

  app.get(/^\/.+\/_service-worker\.js$/, (_req, res) => {
    res.redirect(302, '/_service-worker.js');
  });

  app.post('/api/send-analysis', async (req, res) => {
    const { analysis, symptoms } = req.body;

    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is missing');
      res.status(500).json({ error: 'Email service not configured. Please add RESEND_API_KEY to environment variables.' });
      return;
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
      const { data, error } = await resend.emails.send({
        from: 'Clinical Analysis <analysis@doctor2u.co.uk>',
        to: ['drawais@gmail.com'],
        subject: 'New AI Health Insights Analysis',
        html: `
          <h1>New Patient AI Analysis</h1>
          <p><strong>Initial Symptoms:</strong> ${symptoms}</p>
          <hr />
          <h2>AI Analysis Summary:</h2>
          <div style="font-family: sans-serif; line-height: 1.6; color: #334155;">
            ${analysis.replace(/\n/g, '<br />')}
          </div>
        `,
      });

      if (error) {
        console.error('Resend error:', error);
        res.status(400).json({ error });
        return;
      }

      res.status(200).json({ message: 'Email sent successfully', data });
    } catch (error) {
      console.error('Server error:', error);
      res.status(500).json({ error: 'Failed to send email' });
    }
  });

  app.post('/api/contact', async (req, res) => {
    const { name, email, phone, message, service, source } = req.body;

    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is missing');
      res.status(500).json({ error: 'Email service not configured.' });
      return;
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
      const { data, error } = await resend.emails.send({
        from: 'Contact Form <hello@doctor2u.co.uk>',
        to: ['drawais@gmail.com'],
        subject: `New Contact Form Submission: ${name}`,
        html: `
          <h1>New Contact Request</h1>
          <p><strong>Source:</strong> ${source || 'General Contact Form'}</p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
          ${service ? `<p><strong>Service of Interest:</strong> ${service}</p>` : ''}
          <hr />
          <h2>Message:</h2>
          <div style="font-family: sans-serif; line-height: 1.6; color: #334155;">
            ${message.replace(/\n/g, '<br />')}
          </div>
        `,
      });

      if (error) {
        console.error('Resend error:', error);
        res.status(400).json({ error });
        return;
      }

      res.status(200).json({ message: 'Message sent successfully', data });
    } catch (error) {
      console.error('Server error:', error);
      res.status(500).json({ error: 'Failed to send message' });
    }
  });

  let vite: ViteDevServer | undefined;
  if (!isProduction) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(distPath, { index: false }));
  }

  app.get('*', async (req, res) => {
    if (req.path.startsWith('/api/') || path.extname(req.path)) {
      res.status(404).end();
      return;
    }

    try {
      const template = await getTemplate(vite, req.originalUrl);
      const { appHtml, head } = renderApp(req.originalUrl);
      const html = injectApp(template, appHtml, head);
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (error) {
      vite?.ssrFixStacktrace(error as Error);
      console.error('SSR render failed:', error);

      try {
        const template = await getTemplate(vite, req.originalUrl);
        const html = injectApp(template, '', '');
        res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
      } catch (fallbackError) {
        console.error('Fallback render failed:', fallbackError);
        res.status(500).end('Internal Server Error');
      }
    }
  });

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
