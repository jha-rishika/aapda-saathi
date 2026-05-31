const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Allows us to parse JSON bodies in incoming requests

// Test Route
app.get('/', (req, res) => {
  res.send('Aapda Saathi Backend API is running perfectly!');
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is happily running on port ${PORT}`);
});