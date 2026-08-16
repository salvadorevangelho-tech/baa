# Deployment Checklist

Complete this checklist to deploy your landing page to production.

## Pre-Deployment

- [ ] **Test locally**
  - [ ] Run `npm run dev`
  - [ ] Visit http://localhost:3000
  - [ ] Test all interactive elements
  - [ ] Test newsletter signup
  - [ ] Test on mobile devices

- [ ] **Production build test**
  - [ ] Run `npm run build`
  - [ ] Run `npm start`
  - [ ] Verify site loads without errors
  - [ ] Check build output size (~50-100KB for Next.js)

- [ ] **Environment setup**
  - [ ] Copy `.env.example` to `.env.local`
  - [ ] Fill in `NEXT_PUBLIC_LEMONSQUEEZY_STORE` with your store name
  - [ ] Verify no sensitive data in `.env.local`

- [ ] **Code quality**
  - [ ] Run `npm run lint`
  - [ ] Fix any ESLint warnings
  - [ ] Review component props and types

## GitHub Setup (Required)

- [ ] **Create GitHub account**
  - [ ] Go to [github.com](https://github.com)
  - [ ] Sign up or log in

- [ ] **Initialize Git repository**
  ```bash
  git init
  git add .
  git commit -m "Initial commit: Building Above Average landing page"
  ```

- [ ] **Create GitHub repository**
  - [ ] Go to [github.com/new](https://github.com/new)
  - [ ] Repository name: `baa-landing` (or your choice)
  - [ ] Description: "Building Above Average - Landing Page"
  - [ ] Choose Private or Public
  - [ ] Click "Create repository"

- [ ] **Push to GitHub**
  ```bash
  git remote add origin https://github.com/YOUR_USERNAME/baa-landing.git
  git branch -M main
  git push -u origin main
  ```

- [ ] **Verify on GitHub**
  - [ ] Go to your repository URL
  - [ ] Confirm all files are uploaded

## Vercel Deployment (Recommended - 5 min)

- [ ] **Create Vercel account**
  - [ ] Go to [vercel.com](https://vercel.com)
  - [ ] Click "Sign Up"
  - [ ] Choose "Continue with GitHub"
  - [ ] Authorize Vercel

- [ ] **Import project**
  - [ ] Click "Add New..." → "Project"
  - [ ] Select your GitHub repository
  - [ ] Click "Import"

- [ ] **Configure project**
  - [ ] Framework: Should auto-select "Next.js" ✓
  - [ ] Build Command: Should auto-fill `next build` ✓
  - [ ] Output Directory: Should auto-fill `.next` ✓
  - [ ] Install Command: Should auto-fill `npm install` ✓

- [ ] **Add environment variables**
  - [ ] Click "Environment Variables"
  - [ ] Add: `NEXT_PUBLIC_LEMONSQUEEZY_STORE` = `building-above-average`
  - [ ] Click "Save"

- [ ] **Deploy**
  - [ ] Click "Deploy"
  - [ ] Wait for build to complete (~2-3 minutes)
  - [ ] Click the deployment URL
  - [ ] Verify site loads correctly

- [ ] **Auto-deployments**
  - [ ] Verify automatic deployments are enabled
  - [ ] Any future git push to main will auto-deploy

## Connect Custom Domain (Vercel)

- [ ] **Prepare domain**
  - [ ] Purchase domain (Namecheap, GoDaddy, Google Domains, etc.)
  - [ ] Note your domain name: `buildingaboveaverage.com`

- [ ] **In Vercel dashboard**
  - [ ] Go to Project Settings → Domains
  - [ ] Click "Add"
  - [ ] Enter your domain name
  - [ ] Select "Use Nameservers" or "CNAME" (easier)

- [ ] **If using Nameservers**
  - [ ] Vercel provides 4 nameservers
  - [ ] Log in to your domain registrar
  - [ ] Update nameservers to Vercel's
  - [ ] Wait 24 hours for DNS propagation

- [ ] **If using CNAME**
  - [ ] Vercel provides a CNAME record
  - [ ] Log in to your domain registrar's DNS settings
  - [ ] Add CNAME record pointing to Vercel
  - [ ] Wait for DNS propagation (~15 min - 2 hours)

- [ ] **Verify domain**
  - [ ] Visit your domain in browser
  - [ ] Confirm site loads with HTTPS (green lock)
  - [ ] Check Vercel dashboard shows domain as connected

## Alternative: Netlify Deployment

- [ ] **Create Netlify account**
  - [ ] Go to [netlify.com](https://netlify.com)
  - [ ] Click "Sign up"
  - [ ] Choose "GitHub"
  - [ ] Authorize Netlify

- [ ] **Import project**
  - [ ] Click "New site from Git"
  - [ ] Select your GitHub repository
  - [ ] Click "Deploy site"

- [ ] **Configure**
  - [ ] Branch to deploy: `main`
  - [ ] Build command: `npm run build`
  - [ ] Publish directory: `.next`
  - [ ] Add env variable: `NEXT_PUBLIC_LEMONSQUEEZY_STORE`
  - [ ] Click "Deploy site"

- [ ] **Custom domain (Netlify)**
  - [ ] Go to Site settings → Domain management
  - [ ] Click "Add domain alias"
  - [ ] Enter your domain
  - [ ] Update DNS at your registrar (same as Vercel)
  - [ ] Wait for DNS propagation

## Post-Deployment Testing

- [ ] **Full site test**
  - [ ] Navigate all pages
  - [ ] Test all forms (newsletter signup)
  - [ ] Test all buttons and links
  - [ ] Verify analytics are tracking (if added)

- [ ] **Mobile testing**
  - [ ] Test on iPhone
  - [ ] Test on Android
  - [ ] Test on tablet
  - [ ] Verify responsive design works

- [ ] **Performance check**
  - [ ] Test with [Google PageSpeed Insights](https://pagespeed.web.dev)
  - [ ] Check Desktop score (target: 90+)
  - [ ] Check Mobile score (target: 85+)

- [ ] **Security check**
  - [ ] Verify HTTPS is enabled (green lock)
  - [ ] Test headers with [Security Headers](https://securityheaders.com)
  - [ ] Check there are no console errors

- [ ] **SEO check**
  - [ ] View page source
  - [ ] Verify meta tags are present
  - [ ] Verify Open Graph tags are present
  - [ ] Submit to Google Search Console

- [ ] **Email verification**
  - [ ] Subscribe to newsletter with test email
  - [ ] Check Lemon Squeezy dashboard for subscriber
  - [ ] Verify subscriber email is correct

## Ongoing Maintenance

- [ ] **Set up monitoring**
  - [ ] Enable Vercel Analytics (if using Vercel)
  - [ ] Set up Google Analytics
  - [ ] Monitor Core Web Vitals

- [ ] **Schedule updates**
  - [ ] Weekly: Check analytics
  - [ ] Monthly: Review subscriber growth
  - [ ] Quarterly: Test all functionality

- [ ] **Backup process**
  - [ ] Code is automatically backed up on GitHub
  - [ ] Database (if using) has automated backups
  - [ ] Download backups monthly

- [ ] **Documentation**
  - [ ] Keep this checklist updated
  - [ ] Document any custom changes
  - [ ] Document credentials securely (password manager)

---

## Support Contacts

| Issue | Resource |
|-------|----------|
| Next.js problems | [nextjs.org/docs](https://nextjs.org/docs) |
| Build failures | Check Vercel/Netlify build logs |
| Domain issues | Your domain registrar support |
| Lemon Squeezy issues | [lemonsqueezy.com/help](https://lemonsqueezy.com/help) |

## Deployment Completion

**Date deployed**: _______________

**Domain**: buildingaboveaverage.com

**Vercel/Netlify URL**: _______________

**Notes**: 

---

**Congratulations! Your site is live! 🎉**

Next steps:
1. Share your site with your network
2. Update your LinkedIn profile with the domain
3. Start sharing content
4. Monitor analytics and conversion rates
