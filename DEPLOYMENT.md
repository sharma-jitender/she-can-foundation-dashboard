# 🚀 Render Deployment Guide

This guide will help you deploy the She Can Foundation Intern Dashboard to Render.

## 📋 Prerequisites

- GitHub repository with your project
- Render account (free tier available)
- Node.js project properly configured

## 🔧 Step-by-Step Deployment

### Step 1: Prepare Your Repository

1. **Ensure your repository is on GitHub** with all files committed
2. **Verify these files exist in your repository:**
   - ✅ `package.json` (root)
   - ✅ `render.yaml`
   - ✅ `backend/package.json`
   - ✅ `frontend/package.json`
   - ✅ `backend/server.js`
   - ✅ `.gitignore`

### Step 2: Create Render Account

1. **Go to [render.com](https://render.com)**
2. **Sign up** with your GitHub account
3. **Verify your email** if required

### Step 3: Deploy Using Blueprint (Recommended)

1. **Click "New +"** in your Render dashboard
2. **Select "Blueprint"**
3. **Connect your GitHub repository**
4. **Select your repository** from the list
5. **Render will automatically detect** the `render.yaml` configuration
6. **Click "Apply"** to start deployment

### Step 4: Manual Deployment (Alternative)

If you prefer manual setup:

1. **Click "New +"** in your Render dashboard
2. **Select "Web Service"**
3. **Connect your GitHub repository**
4. **Configure the service:**

   **Basic Settings:**
   - **Name:** `she-can-foundation-dashboard`
   - **Environment:** `Node`
   - **Region:** Choose closest to your users
   - **Branch:** `main` (or your default branch)

   **Build & Deploy Settings:**
   - **Build Command:** `npm run build`
   - **Start Command:** `npm start`
   - **Plan:** `Free` (or choose paid plan)

5. **Click "Create Web Service"**

### Step 5: Environment Variables (Optional)

Add these environment variables in Render dashboard:

1. **Go to your service settings**
2. **Click "Environment"**
3. **Add variables:**
   ```
   NODE_ENV=production
   PORT=10000
   ```

### Step 6: Monitor Deployment

1. **Watch the build logs** in real-time
2. **Wait for deployment** to complete (usually 2-5 minutes)
3. **Check for any errors** in the logs

### Step 7: Access Your Application

1. **Once deployed, Render will provide a URL** like:
   ```
   https://she-can-foundation-dashboard.onrender.com
   ```
2. **Test your application** by visiting the URL
3. **Verify all features work:**
   - ✅ Login page loads
   - ✅ Dashboard displays data
   - ✅ Leaderboard shows rankings
   - ✅ API endpoints respond

## 🔧 Configuration Files Explained

### `render.yaml`
```yaml
services:
  - type: web
    name: she-can-foundation-backend
    env: node
    plan: free
    buildCommand: |
      cd backend && npm install
      cd ../frontend && npm install && npm run build
    startCommand: cd backend && npm start
```

### Root `package.json`
```json
{
  "scripts": {
    "build": "cd frontend && npm install && npm run build",
    "start": "cd backend && npm install && npm start"
  }
}
```

## 🐛 Troubleshooting

### Common Issues

1. **Build Fails:**
   - Check Node.js version compatibility
   - Verify all dependencies are in package.json
   - Check for syntax errors in code

2. **Application Won't Start:**
   - Verify start command is correct
   - Check if port is properly configured
   - Review server logs for errors

3. **API Endpoints Not Working:**
   - Ensure backend server is running
   - Check CORS configuration
   - Verify API routes are correct

4. **Frontend Not Loading:**
   - Check if build completed successfully
   - Verify static file serving is configured
   - Check for JavaScript errors

### Debug Steps

1. **Check Build Logs:**
   - Go to your service in Render dashboard
   - Click "Logs" tab
   - Look for error messages

2. **Test Locally First:**
   ```bash
   npm run build
   npm start
   ```

3. **Check File Structure:**
   - Ensure `frontend/dist` folder is created after build
   - Verify all files are in correct locations

## 🔄 Updating Your Application

### Automatic Deployments
- Render automatically deploys when you push to your main branch
- No manual intervention required

### Manual Deployments
1. **Go to your service in Render dashboard**
2. **Click "Manual Deploy"**
3. **Select branch to deploy from**

## 📊 Monitoring

### Health Checks
- Render automatically monitors your application
- Check "Health" tab in dashboard

### Performance
- Monitor response times
- Check for memory usage
- Review error rates

## 🔒 Security Considerations

1. **Environment Variables:**
   - Never commit sensitive data
   - Use Render's environment variable feature

2. **CORS Configuration:**
   - Update CORS settings for production domain
   - Restrict to necessary origins

3. **API Security:**
   - Consider adding authentication
   - Implement rate limiting
   - Validate input data

## 💰 Cost Optimization

### Free Tier Limits
- **Build minutes:** 750 minutes/month
- **Runtime hours:** 750 hours/month
- **Bandwidth:** 100 GB/month

### Optimization Tips
- Use efficient build processes
- Minimize bundle sizes
- Implement caching strategies

## 🎉 Success Checklist

- ✅ Application deploys successfully
- ✅ All pages load correctly
- ✅ API endpoints respond
- ✅ Database connections work (if applicable)
- ✅ Environment variables are set
- ✅ Custom domain is configured (optional)
- ✅ SSL certificate is active
- ✅ Performance is acceptable

## 📞 Support

If you encounter issues:

1. **Check Render documentation:** [docs.render.com](https://docs.render.com)
2. **Review build logs** for specific errors
3. **Test locally** to isolate issues
4. **Contact Render support** if needed

---

**Your application is now live on Render! 🚀**

Visit your deployment URL to see your She Can Foundation Intern Dashboard in action. 