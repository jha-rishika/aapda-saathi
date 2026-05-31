import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import sosRoutes from './routes/sosRoutes.js'; // <-- 1. ADD THIS IMPORT LINE AT THE TOP

dotenv.config();

connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware Array
app.use(cors());
app.use(express.json());

// Baseline Test Route
app.get('/api/health', (req, res) => {
  res.json({ status: "online", message: "Aapda Saathi Terminal Engine Operational" });
});

// Link our Emergency SOS API Routes
app.use('/api/sos', sosRoutes); // <-- 2. ADD THIS MOUNTING LINE HERE

app.listen(PORT, () => {
  console.log(`🚀 Emergency Server array firing up on port ${PORT}`);
});