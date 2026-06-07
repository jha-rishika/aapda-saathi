import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import connectDB from './config/db.js'; // Note the explicit .js extension
import sosRoutes from './routes/sosRoutes.js';

dotenv.config();

const app = express();

// ES module fix for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize Database connection parameters
connectDB();

// Global Middleware Config 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve the uploads directory as static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Core Routing Map Pipeline Intercept
app.use('/api/sos', sosRoutes);

// Root Health Check Route
app.get('/', (req, res) => {
  res.status(200).json({ status: "active", grid: "Aapda Saathi Command Central Node" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(` Emergency Server array firing up on port ${PORT}`);
});