# Building Above Average - Landing Page

Production-ready landing page for the Building Above Average personal brand. Built with React 18, Next.js 14, and Tailwind CSS.

## Features

- ✨ Interactive canvas-based particle animation
- 📱 Fully responsive design
- 🎨 Dark theme with lime accent color (#CFF43A)
- 💌 Newsletter signup integration (Lemon Squeezy)
- 📊 Exit-intent popup engagement
- 🎯 High-converting layout with proven copy structure
- ⚡ Optimized for performance
- 🔍 SEO-ready

## Tech Stack

- **Framework**: Next.js 14.0.0
- **UI**: React 18.2.0
- **Styling**: Tailwind CSS 3.3.6
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Playfair Display, Caveat, Inter)
- **Payment**: Lemon Squeezy integration

## Prerequisites

- Node.js 16+ and npm (or yarn/pnpm)
- GitHub account (optional, for version control)
- Vercel or Netlify account (for free hosting)

## Local Development

1. **Clone or setup the project**:
   ```bash
   cd baa-landing
   npm install
   ```

2. **Create environment variables**:
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` with your Lemon Squeezy store name.

3. **Run development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the site.

4. **Build for production**:
   ```bash
   npm run build
   npm start
   ```

## Project Structure

```
baa-landing/
├── pages/
│   ├── _app.js              # Next.js app wrapper
│   ├── _document.js         # HTML structure
│   └── index.js             # Main landing page
├── components/
│   ├── BAALandingFinal.jsx  # Main landing component
│   ├── Tokens.jsx           # Design tokens & styling
│   ├── InteractiveBackground.jsx
│   ├── NewsletterForm.jsx
│   └── ...other components
├── styles/
│   └── globals.css          # Global styles
├── public/                  # Static assets
├── package.json             # Project dependencies
├── next.config.js           # Next.js configuration
├── vercel.json              # Vercel deployment config
├── netlify.toml             # Netlify deployment config
└── tailwind.config.js       # Tailwind CSS config
```

## Deployment

### Option 1: Vercel (Recommended - Easiest)

Vercel is created by the Next.js team and offers the best integration.

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/baa-landing.git
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js
   - Add environment variables:
     - `NEXT_PUBLIC_LEMONSQUEEZY_STORE`: `building-above-average`
   - Click "Deploy"

3. **Connect custom domain** (buildingaboveaverage.com):
   - In Vercel dashboard, go to Settings → Domains
   - Add your domain
   - Update DNS records as instructed
   - SSL certificate auto-generated

### Option 2: Netlify

Alternative free hosting with built-in form handling.

1. **Push to GitHub** (same as Vercel above)

2. **Deploy to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Choose your GitHub repository
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Add environment variables:
     - `NEXT_PUBLIC_LEMONSQUEEZY_STORE`: `building-above-average`
   - Click "Deploy"

3. **Connect custom domain**:
   - In Netlify dashboard, go to Site settings → Domain management
   - Add your domain
   - Update DNS records as instructed

### Option 3: Manual Deployment (Any VPS)

If you prefer hosting elsewhere:

1. **Build the site**:
   ```bash
   npm run build
   ```

2. **Upload to server**:
   - Upload entire project to your server
   - Run `npm install --production` on server
   - Run `npm start`

3. **Setup reverse proxy** (nginx/Apache):
   ```nginx
   location / {
     proxy_pass http://localhost:3000;
     proxy_http_version 1.1;
     proxy_set_header Upgrade $http_upgrade;
     proxy_set_header Connection 'upgrade';
   }
   ```

## Environment Variables

Create a `.env.local` file (already templated in `.env.example`):

```env
# Your Lemon Squeezy store name
NEXT_PUBLIC_LEMONSQUEEZY_STORE=building-above-average

# Optional: Thank you URL after newsletter signup
# NEXT_PUBLIC_THANK_YOU_URL=https://buildingaboveaverage.com/thank-you-newsletter
```

**Note**: Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser. Never put secrets here.

## Lemon Squeezy Integration

The landing page integrates with Lemon Squeezy for:
- Newsletter signup
- Product sales
- Email capture

1. **Setup Lemon Squeezy account**:
   - Go to [lemonsqueezy.com](https://lemonsqueezy.com)
   - Create account
   - Create a store
   - Get your store name from Settings

2. **Update environment variables**:
   - Set `NEXT_PUBLIC_LEMONSQUEEZY_STORE` to your store name

3. **Test newsletter signup**:
   - Go to your landing page
   - Subscribe with test email
   - Check Lemon Squeezy dashboard for subscriber

## Performance Optimization

The site includes:
- Image optimization (Next.js Image component)
- CSS minification (Tailwind)
- Code splitting (Next.js)
- Font loading optimization
- Lazy loading for components
- Caching headers configured

Monitor performance:
- [Google PageSpeed Insights](https://pagespeed.web.dev)
- [Web Vitals](https://web.dev/vitals/)

## Available Scripts

```bash
npm run dev     # Start development server
npm run build   # Build for production
npm run start   # Start production server
npm run lint    # Run ESLint
npm run export  # Export as static site (alternative to build)
```

## Customization

### Change Colors
Edit `components/Tokens.jsx` - modify CSS variables:
```javascript
--color-cream: #fafaf8;
--color-charcoal: #0a0a0a;
--color-lime: #CFF43A;
```

### Change Copy
Edit `components/BAALandingFinal.jsx` - all text strings are defined there for easy customization.

### Add Your Own Components
1. Create component in `components/` folder
2. Import in `components/BAALandingFinal.jsx`
3. Add to the JSX

## Troubleshooting

**Port 3000 already in use**:
```bash
npm run dev -- -p 3001
```

**Build fails**:
```bash
rm -rf .next node_modules
npm install
npm run build
```

**Images not loading on deployed site**:
Ensure `NEXT_PUBLIC_` variables are set in deployment platform environment variables.

**Newsletter signup not working**:
- Verify `NEXT_PUBLIC_LEMONSQUEEZY_STORE` is correct
- Check browser console for errors
- Test with valid email address

## Support

For issues with:
- **Next.js**: [nextjs.org/docs](https://nextjs.org/docs)
- **Tailwind**: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **Vercel**: [vercel.com/docs](https://vercel.com/docs)
- **Netlify**: [docs.netlify.com](https://docs.netlify.com)
- **Lemon Squeezy**: [lemonsqueezy.com/help](https://lemonsqueezy.com/help)

## License

Personal project - Building Above Average

---

**Ready to deploy?** Start with Vercel (Option 1) for the fastest setup. Takes ~5 minutes from start to live site.
