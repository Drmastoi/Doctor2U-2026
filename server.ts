import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Email API Endpoint
  app.post("/api/send-analysis", async (req, res) => {
    const { analysis, symptoms } = req.body;
    
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is missing");
      return res.status(500).json({ error: "Email service not configured. Please add RESEND_API_KEY to environment variables." });
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
        console.error("Resend error:", error);
        return res.status(400).json({ error });
      }

      res.status(200).json({ message: "Email sent successfully", data });
    } catch (error) {
      console.error("Server error:", error);
      res.status(500).json({ error: "Failed to send email" });
    }
  });
  
  // Contact Form API Endpoint
  app.post("/api/contact", async (req, res) => {
    const { name, email, phone, message, service, source } = req.body;
    
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is missing");
      return res.status(500).json({ error: "Email service not configured." });
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
        console.error("Resend error:", error);
        return res.status(400).json({ error });
      }

      res.status(200).json({ message: "Message sent successfully", data });
    } catch (error) {
      console.error("Server error:", error);
      res.status(500).json({ error: "Failed to send message" });
    }
  });

  // Explicitly serve robots.txt and sitemap.xml
  app.get('/robots.txt', (req, res) => {
    const robotsPath = process.env.NODE_ENV === 'production' 
      ? path.resolve(__dirname, 'dist/client/robots.txt')
      : path.resolve(__dirname, 'public/robots.txt');
    if (fs.existsSync(robotsPath)) {
      res.sendFile(robotsPath);
    } else {
      res.status(404).end();
    }
  });

  app.get('/sitemap.xml', (req, res) => {
    const sitemapPath = process.env.NODE_ENV === 'production' 
      ? path.resolve(__dirname, 'dist/client/sitemap.xml')
      : path.resolve(__dirname, 'public/sitemap.xml');
    if (fs.existsSync(sitemapPath)) {
      res.set('Content-Type', 'application/xml');
      res.sendFile(sitemapPath);
    } else {
      res.status(404).end();
    }
  });

  // Vite middleware for development
  let vite: any;
  if (process.env.NODE_ENV !== "production") {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "custom", // Changed from spa to custom for SSR
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(path.join(distPath, 'client'), { index: false }));
  }

  app.get('*', async (req, res) => {
    try {
      const url = req.originalUrl;
      let template, render;

      if (process.env.NODE_ENV !== "production") {
        template = await fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);
        render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render;
      } else {
        template = fs.readFileSync(path.resolve(__dirname, 'dist/client/index.html'), 'utf-8');
        // In production, we assume entry-server.js is built to dist/server
        render = (await import('./dist/server/entry-server.js')).render;
      }

      const { html: appHtml, head: appHead } = render(url);
      const html = template
        .replace('<!--ssr-head-->', appHead)
        .replace('<!--ssr-outlet-->', appHtml);

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e: any) {
      if (process.env.NODE_ENV !== "production") {
        vite?.ssrFixStacktrace(e);
      }
      console.error(e.stack);
      res.status(500).end(e.stack);
    }
  });

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
