# Quick Start - Deploy in 5 Minutes

## The Fastest Path: Vercel

### Step 1: GitHub (2 minutes)
```bash
git init
git add .
git commit -m "Initial commit"
```

Then:
- Go to [github.com/new](https://github.com/new)
- Create repo named `baa-landing`
- Copy the commands shown and run them

### Step 2: Vercel (3 minutes)
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Select your GitHub repository
4. Add environment variable: `NEXT_PUBLIC_LEMONSQUEEZY_STORE` = `building-above-average`
5. Click "Deploy"

**Done!** Your site is live at `baa-landing.vercel.app`

### Step 3: Custom Domain (Optional)
1. In Vercel: Settings → Domains → Add `buildingaboveaverage.com`
2. At your domain registrar: Update nameservers to Vercel's
3. Wait 24 hours for DNS

---

## What Files Are What

| File | Purpose |
|------|---------|
| `package.json` | Dependencies (React, Next.js, Tailwind) |
| `pages/` | Where your actual pages live |
| `components/` | Your React components |
| `styles/` | CSS files |
| `vercel.json` | Vercel deployment config |
| `netlify.toml` | Netlify deployment config (alternative) |
| `.env.example` | Template for environment variables |
| `README.md` | Full documentation |
| `DEPLOYMENT_CHECKLIST.md` | Detailed step-by-step guide |

---

## Running Locally First

```bash
# Install
npm install

# Run on localhost:3000
npm run dev

# Build for production
npm run build
npm start
```

---

## Most Common Issues

**1. "Port 3000 already in use"**
```bash
npm run dev -- -p 3001
```

**2. "Module not found"**
```bash
rm -rf node_modules
npm install
```

**3. "Build fails"**
Check the error message, then:
- Verify all imports are correct
- Ensure components exist in the right folder
- Check for typos in filenames (JavaScript is case-sensitive)

**4. "Newsletter signup not working"**
- Verify `NEXT_PUBLIC_LEMONSQUEEZY_STORE` is set
- Check browser console for errors (F12)
- Test with valid email

---

## Next Steps After Deploy

1. ✅ Test the site works
2. ✅ Add your custom domain
3. ✅ Share on LinkedIn
4. ✅ Add Google Analytics
5. ✅ Monitor email signups

---

**Questions?** Read the full `README.md` or `DEPLOYMENT_CHECKLIST.md`

**Ready?** Follow the 3 steps above in 5 minutes.
