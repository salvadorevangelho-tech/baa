# Component Structure Guide

Your landing page is built from modular React components. This guide explains the organization.

## Component Directory

All components live in `components/`:

```
components/
├── BAALandingFinal.jsx          # Main landing page component
├── Tokens.jsx                   # Design tokens & global styles
├── InteractiveBackground.jsx    # Canvas-based particle animation
├── NewsletterForm.jsx           # Email signup form (reusable)
├── Navbar.jsx                   # Navigation header
├── WaitlistSection.jsx          # Early access section
├── Hero.jsx                     # Hero section
├── LeadMagnet.jsx              # Lead magnet offer
├── Principles.jsx              # Core principles section
├── Benefits.jsx                # Benefits showcase
├── Comparison.jsx              # Product comparison
├── WhatsInside.jsx             # Course/product contents
├── Testimonials.jsx            # Social proof
├── Pricing.jsx                 # Pricing table
├── FAQ.jsx                     # Frequently asked questions
├── FinalCTA.jsx                # Final call-to-action
├── Footer.jsx                  # Footer
├── StickyMobileCTA.jsx         # Mobile fixed CTA
└── ExitIntentPopup.jsx         # Exit-intent engagement popup
```

## Component Hierarchy

```
BAALandingFinal (Main)
├── Tokens (Global styles)
├── Navbar
├── WaitlistSection
├── Hero
│   └── InteractiveBackground
├── LeadMagnet
│   └── NewsletterForm
├── Principles
├── Benefits
├── Comparison
├── WhatsInside
├── Testimonials
├── Pricing
│   └── NewsletterForm (variant)
├── FAQ
├── FinalCTA
│   └── NewsletterForm (variant)
├── Footer
├── StickyMobileCTA
│   └── NewsletterForm (variant)
└── ExitIntentPopup
    └── NewsletterForm (variant)
```

## Component Descriptions

### Core Layout
**BAALandingFinal.jsx**
- Main entry component
- Renders all sections in order
- Manages page state
- Handles scroll animations

### Styling & Design
**Tokens.jsx**
- CSS custom properties (variables)
- Design system definitions
- Global utility classes
- Font loading
- Color palette:
  - Cream: `#fafaf8` (background)
  - Charcoal: `#0a0a0a` (dark)
  - Lime: `#CFF43A` (accent)

### Sections

**Navbar**
- Fixed or sticky header
- Logo placement
- Navigation menu
- CTA button
- Mobile menu toggle

**Hero**
- Main headline
- Subheadline
- CTA buttons
- Background animation (InteractiveBackground)
- Value prop

**WaitlistSection**
- Early access offer
- Email capture (NewsletterForm)
- Urgency elements
- Benefits preview

**LeadMagnet**
- Free offer section
- Lead capture form
- Description
- Benefits of opt-in

**Principles**
- 3-5 core principles/pillars
- Icons or visual elements
- Brief descriptions
- Reinforce brand positioning

**Benefits**
- Feature showcase
- Problem → Solution format
- Icons and imagery
- Social proof elements

**Comparison**
- Comparison table
- "Before/After" or "Traditional vs Our Way"
- Highlight differences
- Show superiority

**WhatsInside**
- What's included in offer
- Breakdown of contents
- Modules or sections
- Preview of value

**Testimonials**
- Social proof section
- Client/student testimonials
- Photos and credentials
- Metrics/results

**Pricing**
- Pricing tiers or single offer
- Features per tier
- CTA per tier
- FAQ integration

**FAQ**
- Common questions
- Collapsible answers
- Objection handling
- Clarification of value

**FinalCTA**
- Last persuasion push
- Strong value statement
- Primary CTA
- Urgency/scarcity if applicable

**Footer**
- Links (Privacy, Terms, etc.)
- Contact info
- Social media links
- Copyright/branding

**StickyMobileCTA**
- Mobile-only component
- Fixed position at bottom
- CTA button or form
- Dismiss option

**ExitIntentPopup**
- Triggered on mouse exit
- Offer or engagement message
- Form or CTA
- Close button

### Reusable Components

**NewsletterForm**
Props:
```javascript
{
  variant: 'outline' | 'solid' | 'outlineLight' | 'outlineDark' | 'lime',
  label: string,           // Form label text
  theme: 'dark' | 'light'  // Color scheme
}
```

Features:
- Email validation
- Loading state
- Success state
- Error handling
- Lemon Squeezy integration

**InteractiveBackground**
Props:
```javascript
{
  particleCount: number,   // Number of particles (default: 50)
  color: string,          // Particle color (default: lime)
  speed: number           // Animation speed (default: 0.5)
}
```

Features:
- Canvas-based animation
- Mouse interaction (particle repulsion)
- Auto-movement
- Boundary collision
- Connection lines between particles

---

## Styling System

### CSS Approach
- **Tailwind CSS** for utility classes
- **CSS Variables** (from Tokens.jsx) for theming
- **Inline styles** for dynamic values
- **CSS-in-JS** (styled-components) optional for complex components

### Color Usage
```javascript
// Use Tailwind classes
<div className="bg-charcoal text-cream">

// Or CSS variables
<div style={{ color: 'var(--color-lime)' }}>

// Or Tailwind with variables
<div className="bg-[var(--color-lime)]">
```

### Responsive Design
```javascript
// Mobile-first approach
<div className="text-sm md:text-base lg:text-lg">
  // Small on mobile, base on tablet, large on desktop
```

### Animation
```javascript
// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-fade-in');
    }
  });
});
```

---

## Common Patterns

### Form Handling
```javascript
const [email, setEmail] = useState('');
const [loading, setLoading] = useState(false);
const [submitted, setSubmitted] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  // API call
  setLoading(false);
  setSubmitted(true);
};
```

### Scroll Animations
```javascript
useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  });
  
  const elements = document.querySelectorAll('.fade-in');
  elements.forEach(el => observer.observe(el));
  
  return () => observer.disconnect();
}, []);
```

### Conditional Rendering
```javascript
// Show different content based on user state
{submitted ? (
  <div className="success-message">Thank you!</div>
) : (
  <NewsletterForm variant="lime" />
)}
```

---

## File Size & Performance

### Typical Sizes
- `BAALandingFinal.jsx`: 15-20KB
- `Tokens.jsx`: 5-10KB
- Component files: 2-5KB each
- Total gzipped: 40-60KB

### Optimization Tips
1. Use `React.lazy()` for below-fold components
2. Implement code splitting with `next/dynamic`
3. Lazy-load images with `next/image`
4. Minimize re-renders with `useMemo` and `useCallback`

---

## Adding New Components

1. **Create file** in `components/NewComponent.jsx`

2. **Write component**:
```javascript
export default function NewComponent({ prop1, prop2 }) {
  return (
    <div className="component-container">
      {/* Your content */}
    </div>
  );
}
```

3. **Import in BAALandingFinal.jsx**:
```javascript
import NewComponent from './NewComponent';
```

4. **Add to render**:
```javascript
<NewComponent prop1="value" prop2="value" />
```

5. **Style with Tailwind**:
```javascript
<div className="bg-cream text-charcoal py-12 px-4">
```

---

## Testing Components

### Local Testing
```bash
# Run dev server
npm run dev

# Component appears at http://localhost:3000
# Check browser console (F12) for errors
# Test all interactive elements
```

### Performance Testing
```bash
# Build for production
npm run build

# Check bundle size
npm run build -- --analyze
```

---

## Common Issues & Solutions

**Component not showing?**
- Check import path is correct
- Verify component is exported as default
- Check for typos in component name (case-sensitive)
- Look at browser console for errors

**Styling not applied?**
- Verify Tailwind class names are correct
- Check for conflicting CSS
- Inspect element with DevTools
- Verify CSS file is imported in _app.js

**Form not working?**
- Check email format validation
- Verify environment variables are set
- Check browser console for API errors
- Test with valid Lemon Squeezy store name

**Animation not triggering?**
- Verify Intersection Observer is set up
- Check element actually scrolls into view
- Verify animation class is in Tailwind config
- Check z-index conflicts

---

## Resources

- [React Documentation](https://react.dev)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [MDN Web Docs](https://developer.mozilla.org)

---

**Ready to customize?** Pick a component and start editing!
