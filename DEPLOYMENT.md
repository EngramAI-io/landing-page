# Deployment Guide - EngramAI Landing Page

## Recommended Hosting: Vercel (FREE)

**Why Vercel?**
- ✅ **100% FREE** for personal/commercial use
- ✅ Made by Next.js creators - perfect integration
- ✅ Free SSL certificate (HTTPS)
- ✅ Automatic deployments from Git
- ✅ Global CDN for fast loading
- ✅ Easy GoDaddy domain connection
- ✅ Unlimited bandwidth on free tier

## Step 1: Prepare Your Code

1. **Create a GitHub account** (if you don't have one): https://github.com
2. **Create a new repository** on GitHub for your landing page
3. **Push your code to GitHub:**

```bash
git init
git add .
git commit -m "Initial commit - EngramAI landing page"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

## Step 2: Deploy to Vercel

1. **Go to Vercel**: https://vercel.com
2. **Sign up** (use your GitHub account - it's free)
3. **Click "Add New" → "Project"**
4. **Import your GitHub repository**
5. **Configure project:**
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./`
   - Build Command: `npm run build` (auto-filled)
   - Output Directory: `.next` (auto-filled)
6. **Click "Deploy"**

Vercel will automatically:
- Install dependencies
- Build your site
- Deploy it (takes ~2 minutes)
- Give you a URL like: `your-project.vercel.app`

## Step 3: Connect Your GoDaddy Domain (engramai.io)

### Option A: Use Vercel's DNS (Recommended - FREE)

1. **In Vercel Dashboard:**
   - Go to your project → Settings → Domains
   - Click "Add Domain"
   - Enter: `engramai.io` and `www.engramai.io`

2. **Vercel will show you DNS records to add in GoDaddy:**
   - Note the nameservers or A/CNAME records provided

3. **In GoDaddy:**
   - Log into your GoDaddy account
   - Go to "My Products" → "DNS" for engramai.io
   - **Option 1 (Nameservers - Easiest):**
     - Change nameservers to Vercel's nameservers
     - Vercel will show: `ns1.vercel-dns.com`, `ns2.vercel-dns.com`
   - **Option 2 (DNS Records):**
     - Add A record: `@` → `76.76.21.21`
     - Add CNAME: `www` → `cname.vercel-dns.com`

4. **Wait 24-48 hours** for DNS propagation (usually much faster)

### Option B: Keep GoDaddy DNS (Slightly More Complex)

1. In Vercel: Add domain `engramai.io`
2. In GoDaddy DNS settings, add:
   - A record: `@` → Vercel's IP (shown in Vercel dashboard)
   - CNAME: `www` → `cname.vercel-dns.com`

## Step 4: SSL Certificate (Automatic)

Vercel automatically provides FREE SSL certificates. Once your domain is connected, HTTPS will be enabled automatically within a few minutes.

## Alternative Free Hosting Options

### Option 2: Netlify (Also FREE)
- Similar to Vercel
- Good for static sites
- https://netlify.com

### Option 3: Cloudflare Pages (Also FREE)
- Excellent performance
- Good for static sites
- https://pages.cloudflare.com

## Post-Deployment Checklist

- [ ] Domain is connected (engramai.io)
- [ ] SSL certificate is active (https://)
- [ ] www.engramai.io redirects to engramai.io
- [ ] All links work correctly
- [ ] Images load properly
- [ ] Mobile responsive check

## Custom Domain Setup Details

**For engramai.io:**
- Root domain: `engramai.io` → Vercel project
- WWW: `www.engramai.io` → redirects to `engramai.io`

## Need Help?

- Vercel Docs: https://vercel.com/docs
- GoDaddy DNS Help: https://www.godaddy.com/help
- Vercel Support: support@vercel.com

## Estimated Costs

- **Vercel Hosting: FREE** ✅
- **Domain (already purchased): $0** ✅
- **SSL Certificate: FREE** ✅
- **Total Monthly Cost: $0** 🎉

---

**Ready to deploy? Start with Step 1!**


