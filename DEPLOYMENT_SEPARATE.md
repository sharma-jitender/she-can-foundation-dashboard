# 🚀 Separate Frontend & Backend Deployment Guide

This guide is specifically for deploying the She Can Foundation Dashboard with separate frontend and backend services on Render.

## 📋 Current Setup

- **Frontend**: https://she-can-foundation-dashboard.onrender.com
- **Backend**: https://she-can-foundation-dashboard-backend.onrender.com

## 🔧 Configuration Changes Made

### 1. Backend Configuration (`backend/server.js`)
- ✅ Updated CORS settings to allow frontend domain
- ✅ Added health check endpoint (`/health`)
- ✅ Added API documentation endpoint (`/api`)
- ✅ Removed static file serving (not needed for API-only backend)

### 2. Frontend Configuration (`frontend/src/config/api.js`)
- ✅ Created environment-aware API configuration
- ✅ Development: `http://localhost:5000`
- ✅ Production: `https://she-can-foundation-dashboard-backend.onrender.com`
- ✅ Added request/response interceptors for better error handling

### 3. Component Updates
- ✅ Updated `Dashboard.jsx` to use new API client
- ✅ Updated `Leaderboard.jsx` to use new API client
- ✅ Improved error handling and logging

### 4. Deployment Configuration (`render.yaml`)
- ✅ Configured separate services for frontend and backend
- ✅ Added health check path for backend
- ✅ Optimized build commands for each service

## 🚀 Deployment Steps

### Step 1: Deploy Backend First
1. **Go to [render.com](https://render.com)**
2. **Click "New +" → "Web Service"**
3. **Connect your GitHub repository**
4. **Configure the backend service:**
   - **Name:** `she-can-foundation-dashboard-backend`
   - **Environment:** `Node`
   - **Build Command:** `cd backend && npm install`
   - **Start Command:** `cd backend && npm start`
   - **Plan:** `Free`

### Step 2: Deploy Frontend
1. **Click "New +" → "Web Service"**
2. **Connect your GitHub repository**
3. **Configure the frontend service:**
   - **Name:** `she-can-foundation-dashboard`
   - **Environment:** `Node`
   - **Build Command:** `cd frontend && npm install && npm run build`
   - **Start Command:** `cd frontend && npm install -g serve && serve -s dist -l 10000`
   - **Plan:** `Free`

### Step 3: Environment Variables
**Backend Service:**
```
NODE_ENV=production
PORT=10000
```

**Frontend Service:**
```
NODE_ENV=production
PORT=10000
```

## 🔍 Testing Your Deployment

### 1. Test Backend API
```bash
# Health check
curl https://she-can-foundation-dashboard-backend.onrender.com/health

# User data
curl https://she-can-foundation-dashboard-backend.onrender.com/api/user

# Leaderboard data
curl https://she-can-foundation-dashboard-backend.onrender.com/api/leaderboard
```

### 2. Test Frontend
- Visit: https://she-can-foundation-dashboard.onrender.com
- Check browser console for API requests
- Verify data loads correctly

## 🐛 Troubleshooting

### Common Issues

1. **CORS Errors:**
   - Verify backend CORS settings include frontend URL
   - Check browser console for specific error messages

2. **API Connection Issues:**
   - Ensure backend is deployed and running
   - Check backend logs in Render dashboard
   - Verify API endpoints are accessible

3. **Frontend Build Issues:**
   - Check if all dependencies are installed
   - Verify Node.js version compatibility
   - Review build logs for errors

### Debug Steps

1. **Check Backend Health:**
   ```
   https://she-can-foundation-dashboard-backend.onrender.com/health
   ```

2. **Test API Endpoints:**
   ```
   https://she-can-foundation-dashboard-backend.onrender.com/api/user
   https://she-can-foundation-dashboard-backend.onrender.com/api/leaderboard
   ```

3. **Check Browser Console:**
   - Open browser developer tools
   - Look for API request logs
   - Check for any error messages

## 🔄 Updating Your Application

### Backend Updates
1. Push changes to your repository
2. Render will automatically redeploy the backend
3. Test API endpoints

### Frontend Updates
1. Push changes to your repository
2. Render will automatically redeploy the frontend
3. Test the application

## 📊 Monitoring

### Backend Monitoring
- Check Render dashboard for backend service health
- Monitor API response times
- Review error logs

### Frontend Monitoring
- Check Render dashboard for frontend service health
- Monitor page load times
- Review browser console for errors

## 🔒 Security Considerations

1. **CORS Configuration:**
   - Only allow necessary origins
   - Consider adding authentication for production

2. **Environment Variables:**
   - Never commit sensitive data
   - Use Render's environment variable feature

3. **API Security:**
   - Consider rate limiting
   - Implement proper authentication
   - Validate all input data

## 🎉 Success Checklist

- ✅ Backend deploys successfully
- ✅ Frontend deploys successfully
- ✅ API endpoints respond correctly
- ✅ Frontend can communicate with backend
- ✅ All features work as expected
- ✅ No CORS errors in browser console
- ✅ Health check endpoint responds
- ✅ Application loads without errors

## 📞 Support

If you encounter issues:

1. **Check Render documentation:** [docs.render.com](https://docs.render.com)
2. **Review service logs** in Render dashboard
3. **Test API endpoints** directly
4. **Check browser console** for frontend errors
5. **Contact Render support** if needed

---

**Your separate frontend and backend services are now live! 🚀**

- Frontend: https://she-can-foundation-dashboard.onrender.com
- Backend: https://she-can-foundation-dashboard-backend.onrender.com 