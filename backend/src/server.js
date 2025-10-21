const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Set environment to development if not set
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/announcements', require('./routes/announcements'));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    msg: 'Server is running',
    env: process.env.NODE_ENV,
    timestamp: new Date().toISOString()
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} in ${process.env.NODE_ENV} mode`);
});