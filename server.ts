import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const isProduction = process.env.NODE_ENV === 'production';

// Ensure data directory exists
const DATA_DIR = path.resolve(__dirname, 'data');
const SUBSCRIBERS_FILE = path.join(DATA_DIR, 'subscribers.json');

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

if (!fs.existsSync(SUBSCRIBERS_FILE)) {
  fs.writeFileSync(SUBSCRIBERS_FILE, JSON.stringify([], null, 2), 'utf-8');
}

// Helpers for subscriber storage
interface Subscriber {
  id: string;
  email: string;
  name?: string;
  interest?: string;
  createdAt: string;
  notified: boolean;
}

function getSubscribers(): Subscriber[] {
  try {
    const raw = fs.readFileSync(SUBSCRIBERS_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function saveSubscribers(subscribers: Subscriber[]): boolean {
  try {
    fs.writeFileSync(SUBSCRIBERS_FILE, JSON.stringify(subscribers, null, 2), 'utf-8');
    return true;
  } catch (err) {
    console.error('Failed to save subscribers:', err);
    return false;
  }
}

// Parse JSON request bodies
app.use(express.json());

// API Routes
// 1. Notification Signup Endpoint
app.post('/api/notify', (req, res) => {
  const { email, name, interest } = req.body;

  // Validate email
  if (!email || typeof email !== 'string') {
    return res.status(400).json({
      success: false,
      error: 'Please provide a valid email address.',
    });
  }

  const cleanEmail = email.trim().toLowerCase();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(cleanEmail)) {
    return res.status(400).json({
      success: false,
      error: 'Please enter a valid email format (e.g. name@example.com).',
    });
  }

  const subscribers = getSubscribers();
  const existing = subscribers.find((s) => s.email === cleanEmail);

  if (existing) {
    return res.status(200).json({
      success: true,
      alreadySubscribed: true,
      message: 'You are already registered on our launch notification list. We will notify you as soon as Esaal-E-Swaab launches!',
      totalSubscribers: subscribers.length,
    });
  }

  const newSubscriber: Subscriber = {
    id: `sub_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    email: cleanEmail,
    name: typeof name === 'string' ? name.trim() : undefined,
    interest: typeof interest === 'string' ? interest.trim() : 'General Launch Notification',
    createdAt: new Date().toISOString(),
    notified: false,
  };

  subscribers.push(newSubscriber);
  const saved = saveSubscribers(subscribers);

  if (!saved) {
    return res.status(500).json({
      success: false,
      error: 'Failed to save your email. Please try again shortly.',
    });
  }

  return res.status(201).json({
    success: true,
    alreadySubscribed: false,
    message: 'Thank you for joining. You will be among the very first to be notified when Esaal-E-Swaab opens.',
    totalSubscribers: subscribers.length,
  });
});

// 2. Subscriber count & statistics
app.get('/api/notify/stats', (_req, res) => {
  const subscribers = getSubscribers();
  return res.json({
    total: subscribers.length,
    status: 'active',
    updatedAt: new Date().toISOString(),
  });
});

// 3. Export subscribers (for owner to download CSV directly from website)
app.get('/api/notify/export', (req, res) => {
  const subscribers = getSubscribers();
  const format = req.query.format === 'json' ? 'json' : 'csv';

  if (format === 'json') {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Content-Disposition', 'attachment; filename="esaal-subscribers.json"');
    return res.send(JSON.stringify(subscribers, null, 2));
  }

  // Generate CSV
  const header = 'ID,Email,Name,Interest,Created At,Notified\n';
  const rows = subscribers
    .map(
      (s) =>
        `"${s.id}","${s.email}","${(s.name || '').replace(/"/g, '""')}","${(s.interest || '').replace(/"/g, '""')}","${s.createdAt}","${s.notified}"`
    )
    .join('\n');

  res.setHeader('Content-Type', 'text/csv');
  res.setHeader('Content-Disposition', 'attachment; filename="esaal-subscribers.csv"');
  return res.send(header + rows);
});

// 4. Download full project archive (for uploading to Vercel/GitHub)
app.get('/api/download-project', (_req, res) => {
  const zipPath = path.resolve(__dirname, 'esaal-e-swaab-project.zip');
  if (fs.existsSync(zipPath)) {
    res.download(zipPath, 'esaal-e-swaab-project.zip');
  } else {
    res.status(404).send('Project zip is generating, please retry in a few seconds.');
  }
});

// 5. Healthcheck
app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    domain: 'esaal-e-swaab.com',
    service: 'Esaal-E-Swaab Coming Soon API',
    timestamp: new Date().toISOString(),
  });
});

// Vite middleware in dev or static files in production
async function startServer() {
  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`Esaal-E-Swaab server running on http://localhost:${PORT}`);
  });
}

startServer();
