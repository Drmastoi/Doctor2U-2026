import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
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

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
