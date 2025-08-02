const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
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

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Catch all handler: send back React's index.html file for any non-API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`API available at http://localhost:${PORT}/api`);
}); 