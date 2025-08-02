# She Can Foundation - Intern Dashboard

A complete web application for She Can Foundation interns to track their fundraising progress, view leaderboards, and unlock rewards.

## 🚀 Features

- **Dashboard**: View personal stats, referral codes, and total donations
- **Leaderboard**: See top-performing interns with rankings and badges
- **Rewards System**: Unlock badges based on fundraising milestones
- **Responsive Design**: Modern UI built with Tailwind CSS
- **REST API**: Node.js backend with Express

## 📁 Project Structure

```
She Can Foundation/
├── backend/                 # Node.js + Express API
│   ├── package.json
│   └── server.js
├── frontend/               # React + Vite + Tailwind
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── index.html
│   └── src/
│       ├── main.jsx
│       ├── App.jsx
│       ├── index.css
│       └── components/
│           ├── Login.jsx
│           ├── Dashboard.jsx
│           ├── Leaderboard.jsx
│           └── Navigation.jsx
└── README.md
```

## 🛠️ Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## 🚀 Quick Deploy to Render

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy)

**One-click deployment to Render:**

1. Click the "Deploy to Render" button above
2. Connect your GitHub account
3. Select this repository
4. Click "Deploy"

**Manual deployment:** See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

### Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

   The backend will run on `http://localhost:5000`

### Frontend Setup

1. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

   The frontend will run on `http://localhost:3000`

### Production Build

1. **Build the frontend:**
   ```bash
   cd frontend
   npm run build
   ```

2. **Start the production server:**
   ```bash
   cd backend
   npm start
   ```

   The application will be available at `http://localhost:5000`

## 🔧 API Endpoints

### GET `/api/user`
Returns current user data:
```json
{
  "name": "John Doe",
  "referralCode": "johndoe2025",
  "totalDonations": 500
}
```

### GET `/api/leaderboard`
Returns leaderboard data:
```json
[
  {
    "name": "John Doe",
    "referralCode": "johndoe2025",
    "totalDonations": 500
  },
  {
    "name": "Jane Smith",
    "referralCode": "janesmith2025",
    "totalDonations": 450
  }
]
```

## 🎨 Features Overview

### Dashboard
- **User Stats Cards**: Display intern name, referral code, and total donations
- **Rewards Section**: Show unlocked and locked badges with progress indicators
- **Responsive Design**: Works on desktop, tablet, and mobile devices

### Leaderboard
- **Ranking Table**: Shows top interns with their performance metrics
- **Badge System**: Automatic badge assignment based on donation amounts
- **Statistics Summary**: Total participants, total raised, and average per intern

### Authentication
- **Dummy Login**: Simple form that redirects to dashboard (no real authentication)
- **Session Management**: Basic state management for logged-in status

## 🎯 Badge System

- **🥉 Bronze**: $100+ in donations
- **🥈 Silver**: $250+ in donations
- **🥇 Gold**: $500+ in donations
- **💎 Platinum**: $1000+ in donations
- **💠 Diamond**: $2000+ in donations

## 🛠️ Technologies Used

### Frontend
- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **React Router**: Client-side routing
- **Axios**: HTTP client for API calls

### Backend
- **Node.js**: JavaScript runtime
- **Express**: Web framework
- **CORS**: Cross-origin resource sharing
- **Nodemon**: Development server with auto-reload

## 🚀 Development

### Running Both Servers

1. **Terminal 1 - Backend:**
   ```bash
   cd backend
   npm run dev
   ```

2. **Terminal 2 - Frontend:**
   ```bash
   cd frontend
   npm run dev
   ```

### Proxy Configuration

The frontend is configured to proxy API requests to the backend during development. This is handled in `vite.config.js`.

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🔧 Customization

### Adding New API Endpoints

1. Add new routes in `backend/server.js`
2. Create corresponding API calls in frontend components
3. Update the frontend to handle the new data

### Styling Changes

- Modify `frontend/tailwind.config.js` for theme customization
- Update component styles using Tailwind classes
- Add custom CSS in `frontend/src/index.css`

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use:**
   - Change the port in `backend/server.js` or `frontend/vite.config.js`
   - Kill processes using the ports: `npx kill-port 3000 5000`

2. **CORS errors:**
   - Ensure the backend is running on port 5000
   - Check that CORS middleware is properly configured

3. **Build errors:**
   - Clear node_modules and reinstall: `rm -rf node_modules && npm install`
   - Check for version conflicts in package.json

## 📄 License

This project is created for She Can Foundation intern program.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

**Happy Coding! 🎉** 