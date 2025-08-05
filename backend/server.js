const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: ['https://she-can-foundation-dashboard.onrender.com', 'http://localhost:3000'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// API Routes
app.get('/api/user', (req, res) => {
  res.json({
    name: "John Doe",
    referralCode: "johndoe2025",
    totalDonations: 500
  });
});

app.get('/api/leaderboard', (req, res) => {
  res.json([
    { 
      name: "John Doe", 
      referralCode: "johndoe2025", 
      totalDonations: 500 
    },
    { 
      name: "Jane Smith", 
      referralCode: "janesmith2025", 
      totalDonations: 450 
    },
    { 
      name: "Mike Johnson", 
      referralCode: "mikejohnson2025", 
      totalDonations: 380 
    },
    { 
      name: "Sarah Wilson", 
      referralCode: "sarahwilson2025", 
      totalDonations: 320 
    },
    { 
      name: "Alex Brown", 
      referralCode: "alexbrown2025", 
      totalDonations: 280 
    }
  ]);
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Backend server is running' });
});

// API documentation endpoint
app.get('/api', (req, res) => {
  res.json({
    message: 'She Can Foundation API',
    version: '1.0.0',
    endpoints: {
      user: '/api/user',
      leaderboard: '/api/leaderboard',
      health: '/health'
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`API available at http://localhost:${PORT}/api`);
}); 