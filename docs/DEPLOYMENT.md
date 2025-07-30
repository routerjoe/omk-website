# Deployment Guide - Render

This guide walks you through deploying the OMK website to Render.

## Prerequisites

- GitHub repository with your code
- Render account (free tier available)

## Deployment Steps

### 1. Push Code to GitHub

Ensure your code is pushed to a GitHub repository:

```bash
git add .
git commit -m "Prepare for Render deployment"
git push origin main
```

### 2. Create Render Service

1. Go to [render.com](https://render.com) and sign in
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Select the `omk-website` repository

### 3. Configure Service Settings

**Basic Settings:**
- **Name**: `omk-website` (or your preferred name)
- **Environment**: `Node`
- **Region**: Choose closest to your users
- **Branch**: `main`
- **Root Directory**: `omk-website`

**Build & Deploy:**
- **Build Command**: `npm ci && npm run build`
- **Start Command**: `npm start`

### 4. Environment Variables

Add these environment variables in Render dashboard:
- `NODE_ENV`: `production`

### 5. Deploy

Click "Create Web Service" - Render will automatically:
- Install dependencies
- Build the application
- Deploy to a `.onrender.com` URL

## Custom Domain Setup

### 1. Add Custom Domain
- In Render dashboard, go to Settings → Custom Domains
- Add your domain (e.g., `ohanamanakoa.org`)

### 2. Configure DNS
Point your domain to Render:
- **A Record**: Point to Render's IP (provided in dashboard)
- **CNAME**: Point `www` to your Render URL

### 3. SSL Certificate
Render automatically provides SSL certificates for custom domains.

## Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Verify forms work (contact, volunteer, newsletter)
- [ ] Check mobile responsiveness
- [ ] Test navigation menu
- [ ] Verify PDF documents are accessible
- [ ] Check SEO meta tags in browser
- [ ] Test 404 page functionality

## Monitoring & Updates

### Automatic Deployments
Render automatically redeploys when you push to your main branch.

### Manual Deployment
You can trigger manual deployments from the Render dashboard.

### Logs
View deployment and runtime logs in the Render dashboard under "Logs".

## Troubleshooting

### Build Failures
- Check build logs in Render dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

### Runtime Issues
- Check runtime logs
- Verify environment variables are set
- Ensure start command is correct

### Domain Issues
- Verify DNS settings
- Check SSL certificate status
- Allow 24-48 hours for DNS propagation

## Support

- Render Documentation: [render.com/docs](https://render.com/docs)
- Render Community: [community.render.com](https://community.render.com)

## Cost

- **Free Tier**: Available with limitations (sleeps after inactivity)
- **Paid Plans**: Start at $7/month for always-on service

---

Your OMK website is now ready for deployment to Render!