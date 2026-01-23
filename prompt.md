
# Landing Page Prompt - Platanito Solutions

## Context
I need a modern and professional landing page for "Platanito Solutions", a custom software development company based in Ecuador. The company specializes in creating innovative digital solutions including healthcare platforms, e-commerce systems, educational platforms, and agricultural technology.

## Technical Requirements

### Framework and Deployment
- Use **React** with **Vite** (Vercel compatible)
- Ready-to-deploy configuration for Vercel
- Include necessary configuration files (vercel.json if needed)
- Optimized build settings for production

### Required Libraries
- **GSAP 3.12+** (main animation library)
- **GSAP ScrollTrigger** (for scroll-based animations)
- **GSAP ScrollSmoother** (optional, for smoother scrolling)
- Tailwind CSS for base styling
- React hooks for animation lifecycle management

## Design Requirements

### Pastel Color Palette (Harmonious & Combinable)
Primary palette inspired by the company's Ecuador roots and innovation focus:
- **Soft Peach/Coral**: #FFB5A7, #FFC8B8, #FF9A76
- **Lavender/Purple**: #E6D5F5, #D4C5E8, #C5B9E8
- **Mint Green**: #C8E6C9, #B2DFDB, #A8E6CF
- **Powder Blue**: #B3D9E8, #A5C9DD, #4A90E2
- **Cream/Beige**: #FEF7F0, #FAF0E6, #FFF8E7
- **Pastel Pink**: #FFD1DC, #FFC9DE
- **Soft Yellow**: #FFD700 (accent for highlights)

Color usage guidelines:
- Ensure high contrast for accessibility (WCAG AA minimum)
- Use gradients between complementary pastels
- Background should be light cream/beige (#FEF7F0)
- Text primary: dark gray (#8b7e74) for readability
- Accent colors: coral (#FF9A76) and blue (#4A90E2)

### Visual Aesthetics
- Minimalist design inspired by Apple's product pages
- Clean, modern typography (Inter, SF Pro Display, or Outfit)
- Generous spacing (breathing room between sections)
- Subtle glassmorphism on cards and overlays
- Soft, diffused shadows (no harsh edges)
- Rounded corners on all interactive elements
- Premium feel with attention to micro-interactions

## GSAP Animations (CRITICAL - Main Focus)

### Apple-Style Animations (Priority)

#### 1. **Product/Image Zoom on Scroll** (Signature Effect)
- Elements start small and distant (scale: 0.5-0.7, z-index effect)
- As user scrolls, elements scale up smoothly (scale: 1.0-1.2)
- Create depth illusion - items "coming towards the user"
- Use ScrollTrigger with `scrub: true` for precise control
- Apply to:
  - Featured project showcases
  - Service cards
  - Technology stack icons
  - Team member cards

Example implementation:
```javascript
gsap.to('.project-card', {
  scale: 1.2,
  scrollTrigger: {
    trigger: '.project-card',
    start: 'top bottom',
    end: 'center center',
    scrub: 1,
  }
});
```

#### 2. **Pinned Sections with Transitions**
- Pin sections while content scrolls over them
- Cross-fade between pinned content
- Services section pins while individual services animate in
- Portfolio section pins while projects scale and reveal

#### 3. **Multi-Layer Parallax**
- Background elements move slower than foreground
- Create depth with 3-4 different scroll speeds
- Apply to hero section background elements
- Floating geometric shapes with parallax

#### 4. **Smooth Fade & Slide Animations**
- Elements fade in with upward motion (translateY: 50px → 0)
- Stagger animations for groups (0.1-0.2s delay between items)
- Apply to text blocks, cards, and list items

#### 5. **Text Reveal Effects**
- Split text animations for hero headline
- Letter-by-letter or word-by-word reveals
- Use SplitText plugin or custom implementation
- Gradient color transitions on reveal

#### 6. **Horizontal Scroll Sections**
- Technology stack scrolls horizontally while page scrolls vertically
- Pin container and animate inner elements horizontally
- Smooth scrubbing experience

### Specific Scroll Interactions

**Hero Section:**
- Background gradient animates on scroll
- Headline splits and fades in on load
- CTA button subtle pulse animation
- Scroll indicator bounces infinitely

**Services Section:**
- Cards start at 60% scale and opacity 0
- Scale to 100% and fade to opacity 1 on scroll
- Each card staggers 0.15s after previous
- Hover effect: lift and glow

**Portfolio Showcase (Main Apple Effect):**
- Projects start at scale 0.7, positioned lower
- As they enter viewport, scale to 1.0 and move up
- When centered, briefly scale to 1.1 (emphasis)
- Pin section while individual projects animate
- Parallax background shift on each project

**Tech Stack:**
- Horizontal scroll container
- Icons fly in from sides with rotation
- Continuous subtle floating animation
- Hover: scale up with colored glow

**Team Section:**
- Cards flip or rotate on scroll
- Stagger reveal from left to right
- Parallax on avatar images

### Performance Optimizations
- Use `will-change: transform` on animated elements
- GPU acceleration with `transform3d`
- RequestAnimationFrame for smooth 60fps
- Lazy load images with intersection observer
- Disable complex animations on mobile if needed

## Content Structure

### 1. Navigation Header (Fixed)
- Logo: "Platanito Solutions" with banana emoji 🍌
- Menu items: Inicio | Servicios | Proyectos | Tecnología | Equipo | Contacto
- Smooth scroll to sections
- Glassmorphism background on scroll
- Animated hamburger menu for mobile

### 2. Hero Section
**Content:**
- Main headline: "Soluciones Innovadoras para un Mañana Mejor"
- Subheadline: "Construimos tecnología que transforma ideas en realidad"
- CTA button: "Conversemos sobre tu proyecto"
- Secondary CTA: "Ver nuestros proyectos"
- Background: Animated gradient mesh with floating geometric shapes

**Animations:**
- Text split reveal on load
- Gradient shifts on scroll
- Floating shapes parallax
- Scroll indicator pulse

### 3. About/Introduction
**Content:**
- Title: "¿Quiénes Somos?"
- Description: Brief about Platanito Solutions being an Ecuador-based tech company
- Key stats:
  - "100% Enfoque en Innovación"
  - "Basados en Ecuador 🇪🇨"
  - "Soluciones a Medida"
- Icons with animated counters

**Animations:**
- Section pins while text fades in
- Stats counter animation
- Background parallax

### 4. Services Section
**Content (4 cards):**

1. **Desarrollo de Software a Medida**
   - Icon: Code symbol
   - Description: "Soluciones personalizadas para tus necesidades únicas"

2. **Aplicaciones Móviles y Web**
   - Icon: Mobile/Desktop
   - Description: "Experiencias multiplataforma de excelencia"

3. **Diseño UI/UX**
   - Icon: Palette
   - Description: "Interfaces hermosas e intuitivas"

4. **Integración de IA**
   - Icon: Brain/Robot
   - Description: "Soluciones inteligentes con inteligencia artificial"

**Animations:**
- Apple-style zoom on scroll (main effect)
- Cards start small, scale up as they enter
- Stagger animation between cards
- Hover: lift with shadow and glow
- Icon subtle rotation on hover

### 5. Featured Projects Showcase
**Projects (from README):**

1. **HealthConnect** 🏥
   - Healthcare management platform
   - "10,000+ usuarios activos"
   - Tech: React, Node.js, PostgreSQL, AWS
   - Image: Healthcare dashboard mockup

2. **EcoMart** 🛒
   - E-commerce platform for local businesses
   - "500+ comerciantes"
   - Tech: Next.js, TypeScript, MongoDB, Stripe
   - Image: Store interface mockup

3. **EduPlatform** 📚
   - AI-powered learning management
   - "25,000+ estudiantes"
   - Tech: Vue.js, Python, TensorFlow
   - Image: Learning dashboard

4. **AgroTech** 🌾
   - IoT agricultural management
   - "2,000+ agricultores"
   - Tech: React Native, Firebase, IoT
   - Image: Mobile app interface

**Animations (MAIN APPLE EFFECT HERE):**
- Section pins while projects animate
- Each project starts at scale: 0.6, positioned below
- Scrolls into view and scales to 1.0
- When centered: scale to 1.15 briefly (emphasis)
- Parallax on project images
- Tech tags fade in sequentially
- Background color shift per project

### 6. Technology Stack
**Content:**
Display tech logos in categories:

**Frontend:**
- React, Next.js, Vue.js, Angular, TailwindCSS

**Backend:**
- Node.js, Express, NestJS, PostgreSQL, MongoDB, Redis

**Cloud & DevOps:**
- AWS, Docker, Kubernetes, GitHub Actions, Supabase

**AI/ML:**
- TensorFlow, PyTorch, OpenAI

**Animations:**
- Horizontal scroll container (pins while scrolling)
- Icons slide in from sides with rotation
- Continuous floating animation
- Hover: scale + colored glow effect
- Category labels fade in

### 7. Process/Methodology
**Content:**
Timeline with 4 steps:
1. **Descubrimiento** - Understanding your needs
2. **Diseño** - Creating the blueprint
3. **Desarrollo** - Building your solution
4. **Entrega** - Launch and support

**Animations:**
- Vertical timeline that fills on scroll
- Each step scales in when reached
- Connecting line draws progressively
- Icons bounce in

### 8. Team Section
**Team members (from README):**
- José Cerezo - Founder
- Camilo Brazales - Founder
- Camily Solórzano - Founder
- Ariel Anchapaxi - Founder

**Animations:**
- Cards flip/rotate on scroll entrance
- Stagger from left to right
- Hover: card lifts, avatar subtle zoom
- Background gradient shift

### 9. Why Choose Us
**Content (4 points):**
- 🎨 "Diseño Primero" - Beautiful, intuitive interfaces
- ⚡ "Entrega Rápida" - Agile methodology
- 🔒 "Seguro y Escalable" - Enterprise-grade
- 🤝 "Soporte 24/7" - Always available

**Animations:**
- Cards fade and slide up on scroll
- Icons animate with micro-interactions
- Hover: glow and lift effect

### 10. Final CTA + Footer
**Content:**
- Headline: "¡Construyamos Algo Increíble Juntos!"
- CTA Button: "Empecemos tu proyecto"
- Contact: hello@platanitosolutions.com
- Location: "📍 Quito, Ecuador"
- Social links: Twitter, LinkedIn, Instagram
- Copyright: "© 2025 Platanito Solutions. Hecho con ❤️ en Ecuador 🇪🇨"

**Animations:**
- CTA section fades in on scroll
- Button pulse animation
- Social icons bounce on hover
- Footer elements stagger in

## Code Structure

### Project Structure
```
platanito-solutions/
├── public/
│   ├── images/
│   │   ├── projects/
│   │   ├── team/
│   │   └── tech-icons/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   └── Footer.jsx
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── TechStack.jsx
│   │   │   ├── Process.jsx
│   │   │   ├── Team.jsx
│   │   │   ├── WhyUs.jsx
│   │   │   └── CTA.jsx
│   │   └── ui/
│   │       ├── Card.jsx
│   │       ├── Button.jsx
│   │       └── Badge.jsx
│   ├── animations/
│   │   ├── gsapConfig.js
│   │   ├── heroAnimations.js
│   │   ├── scrollAnimations.js
│   │   └── appleEffects.js
│   ├── utils/
│   │   └── helpers.js
│   ├── data/
│   │   ├── projects.js
│   │   ├── services.js
│   │   └── techStack.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

### GSAP Configuration Example
```javascript
// src/animations/gsapConfig.js
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollSmoother from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export const initGSAP = () => {
  // Global GSAP settings
  gsap.defaults({
    ease: 'power2.out',
    duration: 1
  });

  // ScrollSmoother init
  ScrollSmoother.create({
    smooth: 1.5,
    effects: true,
    smoothTouch: 0.1
  });
};
```

### Apple Effect Implementation Example
```javascript
// src/animations/appleEffects.js
export const appleZoomEffect = (selector) => {
  gsap.from(selector, {
    scale: 0.6,
    y: 100,
    opacity: 0.8,
    scrollTrigger: {
      trigger: selector,
      start: 'top 80%',
      end: 'center center',
      scrub: 1,
      markers: false // Set to true during development
    }
  });

  // Emphasis when centered
  gsap.to(selector, {
    scale: 1.1,
    scrollTrigger: {
      trigger: selector,
      start: 'center 60%',
      end: 'center 40%',
      scrub: 1,
      markers: false
    }
  });
};
```

## Additional Requirements

### Responsive Design
- **Mobile (< 768px):**
  - Stack sections vertically
  - Simplify animations (reduce complexity)
  - Hamburger menu
  - Touch-optimized interactions
  
- **Tablet (768px - 1024px):**
  - 2-column grid for services/projects
  - Moderate animations
  
- **Desktop (> 1024px):**
  - Full experience with all animations
  - Multi-column layouts
  - Enhanced parallax effects

### Performance
- Lazy load images with blur placeholder
- Code splitting by route/section
- Debounce scroll events
- Use IntersectionObserver for triggering animations
- Optimize GSAP with `fastScrollEnd`
- Compress images (WebP format)
- Critical CSS inline

### Accessibility
- Respect `prefers-reduced-motion`
- Keyboard navigation support
- ARIA labels on interactive elements
- Alt text on all images
- Color contrast ratio > 4.5:1
- Focus indicators on all focusable elements
- Screen reader friendly

### SEO
- Semantic HTML5 tags
- Meta tags (title, description, og:tags)
- Structured data (JSON-LD)
- Sitemap.xml
- robots.txt

## Installation & Setup Commands

```bash
# Create Vite + React project
npm create vite@latest platanito-solutions -- --template react

# Navigate to directory
cd platanito-solutions

# Install dependencies
npm install

# Install GSAP
npm install gsap

# Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Install additional libraries
npm install react-icons
npm install clsx

# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Tailwind Configuration

```javascript
// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastel: {
          peach: '#FFB5A7',
          coral: '#FF9A76',
          lavender: '#E6D5F5',
          mint: '#C8E6C9',
          blue: '#B3D9E8',
          cream: '#FEF7F0',
          pink: '#FFD1DC',
          yellow: '#FFD700'
        }
      },
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', 'sans-serif']
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
```

## Vercel Deployment

Include `vercel.json`:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

Deploy steps:
1. Push to GitHub
2. Import project in Vercel
3. Auto-detects Vite
4. Deploy

## Deliverables Checklist

- [ ] Complete React + Vite project
- [ ] All dependencies in package.json
- [ ] README.md with setup instructions
- [ ] Minimum 8 distinct GSAP animation types
- [ ] Apple-style zoom effect on at least 3 sections
- [ ] Fully responsive (mobile, tablet, desktop)
- [ ] Accessibility compliant
- [ ] Performance optimized (Lighthouse score > 90)
- [ ] Ready for Vercel deployment
- [ ] All sections with Spanish content
- [ ] Smooth scroll experience
- [ ] Glassmorphism effects
- [ ] Pastel color palette implemented
- [ ] Team section with founder info
- [ ] Project showcase with real data from README

## Success Criteria

1. **Visual Impact:** Landing page should evoke "wow" reaction
2. **Smooth Animations:** 60fps on modern browsers
3. **Apple-like Feel:** Zoom effects feel premium and polished
4. **Brand Alignment:** Reflects Ecuador roots and innovation
5. **User Engagement:** Encourages scrolling and exploration
6. **Fast Loading:** < 3s first contentful paint
7. **Mobile Experience:** Simplified but still impressive
8. **Call-to-Action:** Clear conversion path

## Inspiration References
- apple.com/iphone (product zoom effects)
- awwwards.com (scroll animations)
- vercel.com (clean design)
- stripe.com (subtle animations)
- linear.app (smooth interactions)

---

**Final Note:** The landing page should feel like a premium, cutting-edge tech company while maintaining warmth and approachability. The pastel colors should create a friendly, innovative atmosphere that sets Platanito Solutions apart from typical corporate tech sites. GSAP animations should be the star of the show, especially the Apple-style zoom effects on the projects section.


