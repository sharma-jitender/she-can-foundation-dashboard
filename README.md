She Can Foundation - Intern Dashboard
A professional web application designed for She Can Foundation interns to monitor fundraising progress, view leaderboards, and unlock achievement-based rewards.

**Features**

Intern Dashboard: Displays personal statistics, unique referral codes, and total donations raised.
Leaderboard: Showcases top-performing interns with rankings and achievement badges.
Rewards System: Unlocks badges based on fundraising milestones.
Responsive Design: Optimized for seamless use across desktop, tablet, and mobile devices using Tailwind CSS.
RESTful API: Powered by a Node.js and Express backend for efficient data management.

**Project Structure**
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
```            # Project documentation

**Setup Instructions**
Prerequisites

Node.js: Version 14 or higher
npm or yarn: Package manager for dependency installation

Backend Setup

Navigate to the backend directory:
cd backend


Install dependencies:
npm install


Start the development server:
npm run dev

The backend API will be available at http://localhost:5000.


Frontend Setup

Navigate to the frontend directory:
cd frontend


Install dependencies:
npm install


Start the development server:
npm run dev

The frontend will be accessible at http://localhost:3000.


Production Build

Build the frontend for production:
cd frontend
npm run build


Start the production server:
cd backend
npm start

The application will be available at http://localhost:5000.


**API Endpoints**
GET /api/user
Retrieves data for the authenticated user:
{
  "name": "John Doe",
  "referralCode": "johndoe2025",
  "totalDonations": 500
}

GET /api/leaderboard
Fetches leaderboard data for all interns:
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

**Feature Details**
Intern Dashboard

Statistics Cards: Displays intern name, referral code, and total donations.
Rewards Section: Visualizes unlocked and locked badges with progress tracking.
Responsive Layout: Fully optimized for desktop, tablet, and mobile devices.

Leaderboard

Ranking Table: Lists top interns with performance metrics and rankings.
Badge System: Automatically assigns badges based on donation milestones.
Summary Metrics: Displays total participants, total funds raised, and average donations per intern.

Authentication

Login Interface: Simple form redirecting to the dashboard (mock authentication).
Session Management: Basic state management for tracking logged-in status.

**Badge System**

🥉 Bronze: $100+ in donations
🥈 Silver: $250+ in donations
🥇 Gold: $500+ in donations
💎 Platinum: $1,000+ in donations
💠 Diamond: $2,000+ in donations

**Technology Stack**
Frontend

React 18: Component-based UI with modern hooks.
Vite: High-performance build tool and development server.
Tailwind CSS: Utility-first CSS framework for rapid styling.
React Router: Handles client-side navigation.
Axios: Facilitates API requests.

Backend

Node.js: JavaScript runtime for server-side logic.
Express: Robust web framework for API development.
CORS: Enables cross-origin resource sharing.
Nodemon: Auto-restarts server during development.

**Development Workflow**
Running Both Servers

Backend (Terminal 1):
cd backend
npm run dev


Frontend (Terminal 2):
cd frontend
npm run dev



Proxy Configuration
API requests are proxied from the frontend to the backend during development, configured in frontend/vite.config.js.
**Responsive Design**
The application is optimized for:

Desktop: 1200px and above
Tablet: 768px–1199px
Mobile: Below 768px

**Customization**
Adding API Endpoints

Define new routes in backend/server.js.
Implement corresponding API calls in frontend components.
Update frontend to render new data.

Styling Modifications

Customize the theme in frontend/tailwind.config.js.
Apply Tailwind utility classes in components.
Add custom styles in frontend/src/index.css.

**Troubleshooting**
Common Issues

Port Conflicts:

Update ports in backend/server.js or frontend/vite.config.js.
Terminate conflicting processes: npx kill-port 3000 5000.


CORS Errors:

Verify backend is running on port 5000.
Confirm CORS middleware is correctly configured in backend/server.js.


Build Failures:

Remove and reinstall dependencies: rm -rf node_modules && npm install.
Check for dependency version conflicts in package.json.



**License**
This project is developed exclusively for the She Can Foundation intern program. All rights reserved.

**Contributing**

Fork the repository.
Create a feature branch (git checkout -b feature/your-feature).
Commit changes (git commit -m "Add your feature").
Test thoroughly.
Submit a pull request.

**Contact**
+91 8178153261
jitendes2022@gmail.com 
For support or inquiries, contact the She Can Foundation development team.

Built for Impact. Powered by She Can Foundation. 🌍
