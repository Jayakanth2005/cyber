# Deploy Frontend to Vercel

## Prerequisites
- GitHub account
- Vercel account (free)

## Steps

### 1. Push to GitHub
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### 2. Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Import your repository
5. Set these configurations:
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

### 3. Environment Variables (if needed)
Add in Vercel dashboard:
- `VITE_API_URL`: Your backend URL (will be set after backend deployment)

---

# Deploy Backend to Railway

## Prerequisites
- GitHub account
- Railway account (free)

## Steps

### 1. Deploy to Railway
1. Go to [railway.app](https://railway.app)
2. Sign in with GitHub
3. Click "New Project"
4. Select "Deploy from GitHub repo"
5. Choose your repository
6. Set these configurations:
   - **Root Directory**: `backend`
   - **Build Command**: `npm run build`
   - **Start Command**: `npm run start:prod`

### 2. Add PostgreSQL Database
1. In Railway dashboard, click "New"
2. Select "Database" → "PostgreSQL"
3. Railway will provide database credentials

### 3. Environment Variables
Add in Railway dashboard:
- `DATABASE_URL`: (Railway will auto-generate)
- `NODE_ENV`: `production`
- `PORT`: `${{PORT}}` (Railway auto-assigns)
- `JWT_SECRET`: `your-secret-key`
- `CORS_ORIGIN`: Your Vercel frontend URL

### 4. Update Frontend API URL
Update your frontend's environment to point to Railway backend URL.

---

## Alternative Free Hosting Options

### Frontend Alternatives:
1. **Netlify** - Great for static sites
2. **GitHub Pages** - Simple deployment
3. **Surge.sh** - Quick deployments

### Backend Alternatives:
1. **Render** - Free tier with PostgreSQL
2. **Heroku** - Limited free tier
3. **Supabase** - Free PostgreSQL + API
4. **PlanetScale** - Free MySQL database

---

## Cost Breakdown (Monthly)
- **Vercel**: $0 (up to 100GB bandwidth)
- **Railway**: $0 (up to $5 credit monthly)
- **Total**: $0/month

This gives you professional hosting with custom domains, SSL, and automatic deployments!