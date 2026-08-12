import express from 'express';
import mongoose from 'mongoose';
import db from './config/database.js';

const app = express();
const port = process.env.PORT ? Number(process.env.PORT) : 8000;

app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.get('/', (_req, res) => {
  res.send('OctoFit Tracker backend is running');
});

mongoose.connection.once('open', () => {
  console.log('MongoDB connection open');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
