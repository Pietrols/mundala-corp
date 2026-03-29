# Mundala Corporation Limited — Website Design Specification

> **Purpose**: Single-page corporate landing site for a Zambian industrial supply company.
> **Goal**: Professional online presence to expand market reach across mining, petroleum, pharmaceutical, and analytical equipment sectors.
> **Audience**: Mining companies, government procurement, industrial buyers, potential partners across Africa.

---

## Tech Stack

| Layer | Choice | Reason |
|-------|--------|--------|
| Framework | Next.js 14 (App Router) | SSG for SEO, `next/image` optimization, `metadata` API |
| Language | TypeScript | Type safety across components |
| Styling | Tailwind CSS v4 | Utility-first, design token support via CSS variables |
| Animations | Framer Motion | Scroll-triggered reveals, page transitions, hover effects |
| Icons | Lucide React | Consistent, tree-shakeable icon set |
| Fonts | Google Fonts (Montserrat + DM Sans) | Display + body pairing |
| Deployment | Vercel | Free tier, automatic HTTPS, global CDN |
| Video | YouTube embeds (facade pattern) | Free hosting, lazy-loaded for performance |

---

## Project Structure

```
mundala-corp/
├── public/
│   ├── images/              # Optimized static images
│   │   ├── hero-bg.webp
│   │   ├── logo.svg
│   │   ├── logo-white.svg
│   │   └── og-image.jpg     # OpenGraph preview image (1200x630)
│   ├── favicon.ico
│   └── sitemap.xml           # Auto-generated
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout: fonts, metadata, global styles
│   │   ├── page.tsx          # Landing page: assembles all sections
│   │   ├── globals.css       # Tailwind directives + CSS variables
│   │   └── not-found.tsx     # Custom 404
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Services.tsx       # Tabbed or card-based service overview
│   │   │   ├── ServiceDetail.tsx  # Reusable detail component per service
│   │   │   ├── WhyChooseUs.tsx
│   │   │   ├── BSIPartnership.tsx # XRF/BSI partnership highlight
│   │   │   ├── VideoShowcase.tsx  # YouTube embed section
│   │   │   └── Contact.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── SectionHeading.tsx
│   │       ├── ServiceCard.tsx
│   │       ├── ValueCard.tsx
│   │       ├── StatCounter.tsx
│   │       ├── YouTubeEmbed.tsx   # Facade pattern: thumbnail → iframe
│   │       └── ScrollReveal.tsx   # Framer Motion wrapper for scroll animations
│   ├── lib/
│   │   ├── constants.ts      # Company data, service definitions, contact info
│   │   └── metadata.ts       # SEO metadata generator
│   └── hooks/
│       └── useScrollspy.ts   # Active nav link tracking
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── DESIGN.md                 # This file
```

---

## Design Tokens

### Color Palette

The palette balances Mundala's corporate blue identity with warm neutral tones. Blue is the primary accent — used for CTAs, links, and key highlights. The base is a clean, professional neutral system.

```css
/* === Light Theme (Default) === */
:root {
  /* Base */
  --background: 220 20% 97%;        /* #F5F6FA — off-white, slight cool tone */
  --foreground: 220 25% 12%;        /* #171C26 — near-black for text */

  /* Surfaces */
  --card: 0 0% 100%;                /* #FFFFFF */
  --card-foreground: 220 25% 12%;
  --muted: 220 14% 93%;             /* #ECEEF3 — subtle background */
  --muted-foreground: 220 10% 46%;  /* #6B7280 — secondary text */

  /* Borders */
  --border: 220 13% 87%;            /* #DCDFE6 */
  --input: 220 13% 87%;

  /* Primary — Mundala Corporate Blue */
  --primary: 215 80% 30%;           /* Deep corporate navy */
  --primary-foreground: 0 0% 100%;  /* White text on blue */
  --primary-light: 215 75% 40%;     /* Hover states */
  --primary-dark: 215 85% 22%;      /* Active/pressed states */

  /* Secondary — Warm Accent */
  --accent: 38 92% 50%;             /* #F59E0B — amber/gold for CTAs */
  --accent-foreground: 220 25% 12%;

  /* Semantic */
  --destructive: 0 84% 60%;
  --ring: 215 80% 30%;              /* Focus ring matches primary */

  /* Radius */
  --radius: 0.5rem;
}

/* === Dark sections (used for hero, alternating sections) === */
.section-dark {
  --background: 220 25% 10%;        /* #151922 */
  --foreground: 220 20% 95%;        /* #F0F2F7 */
  --card: 220 25% 14%;              /* #1C2233 */
  --muted-foreground: 220 10% 60%;
  --border: 220 20% 20%;
}
```

### Typography

```
Display Font: 'Montserrat', sans-serif
  - Hero heading: 800 weight, 3.5rem–4.5rem, tracking tight (-0.02em)
  - Section headings: 700 weight, 2rem–2.5rem, tracking normal
  - Card headings: 600 weight, 1.25rem–1.5rem

Body Font: 'DM Sans', sans-serif
  - Body text: 400 weight, 1rem–1.125rem, line-height 1.7
  - Emphasis: 500 weight
  - Small/meta: 400 weight, 0.875rem

Usage rules:
  - Montserrat: headings, navigation links, button text, labels
  - DM Sans: body copy, descriptions, form inputs, footer text
  - Never use uppercase on body text
  - Section micro-labels (e.g., "OUR SERVICES") use Montserrat 600, uppercase, letter-spacing 0.1em, 0.75rem, primary color
```

### Spacing System

```
Section padding: py-20 md:py-28 (5rem / 7rem)
Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
Card padding: p-6 md:p-8
Grid gap: gap-6 md:gap-8
Between section heading and content: mb-12 md:mb-16
Between micro-label and heading: mb-3
```

### Border Radius

```
Buttons: rounded-lg (0.5rem)
Cards: rounded-xl (0.75rem)
Images: rounded-lg or rounded-xl
Badges/tags: rounded-full
```

### Shadows

```
Card resting: shadow-sm
Card hover: shadow-lg
Navbar scrolled: shadow-md
Hero CTA: shadow-lg shadow-primary/25
```

---

## Component Specifications

### Navbar

- **Fixed** at top, z-50
- **Transparent** on initial load (hero has dark background, so nav text is white)
- **After 50px scroll**: white background, subtle bottom border, shadow-md, text switches to foreground color
- **Logo**: Mundala logo SVG on the left. Use text fallback "MUNDALA" in Montserrat 700 if SVG unavailable — "MUNDALA" in primary blue, "Corp" in muted
- **Nav links**: Home, About, Services, Partnership, Contact — smooth scroll to sections
- **CTA button**: "Get In Touch" — primary blue, rounded-lg
- **Mobile**: hamburger menu → slide-in drawer from right, full-height overlay
- **Transition**: all properties 300ms ease

### Hero Section

- **Full viewport height** (min-h-screen)
- **Dark background** with a subtle overlay gradient over a background image (mining/industrial)
- **Content centered** vertically and horizontally
- **Micro-label**: "YOUR RELIABLE AFRICAN PLUG" — uppercase, letter-spaced, primary-light color
- **Headline**: "Powering Africa's Industries" — Montserrat 800, white, 3.5rem–4.5rem
- **Subheadline**: Brief company description — DM Sans, white/80, max-w-2xl, 1.125rem
- **Two CTAs**: "Explore Our Services" (solid primary blue) + "Contact Us" (white outline)
- **Stats bar**: Floating card at the bottom of hero with 3–4 key stats (e.g., "Est. 2021", "2 Offices", "4 Industries Served", "Exclusive BSI Partner")
- **Animation**: Staggered fade-up entrance — micro-label first, then heading, sub, CTAs, stats bar

### About Section

- **Light background**
- **Two-column layout**: Left = content, Right = image (mining operation or company photo)
- **Micro-label**: "ABOUT US"
- **Heading**: "Building Trust Across Zambia's Industries"
- **Body**: 2–3 paragraphs from company profile — established 2021, regulatory compliance, commitment to quality
- **Core values**: Displayed as a horizontal row of small icon + label cards (Integrity, Reliability, Respect, Loyalty, Efficiency)
- **Animation**: Content slides in from left, image from right

### Services Section

- **Dark background** (alternating rhythm)
- **Micro-label**: "WHAT WE OFFER"
- **Heading**: "Comprehensive Industrial Solutions"
- **Layout**: Tabbed interface OR scrollable cards — 4 service categories

#### Service Categories:

**1. Petroleum Products**
- Icon: Fuel/droplet
- Description: Sale and distribution of motor and industrial fuels for power generation, manufacturing, mining, construction, transportation, and hospitality
- Products: Petrol, Diesel, Heavy Fuel Oil (HFO), Jet A1
- Industries served: Power generation, manufacturing, mining, road construction, transportation, hospitality

**2. Mining Products**
- Icon: Pickaxe/mountain
- Description: Full range of mining consumables and equipment through established supplier network
- Products: Mining Solvents, Mining Reagents, Drilling Equipment, Metallurgical Coal, CIL Plant Equipment, Gaskets, Pumps/Valves/Motors, Samplers
- Value prop: Competitive pricing through understanding of operational costs, custom solutions

**3. Heavy Equipment**
- Icon: Truck/crane
- Description: Supply of heavy machinery essential for mining operations with full aftersales support
- Products: Articulated Dump Trucks, Loaders, Drilling Rigs, Electric Vehicles (Toyota Landcruisers), EV Underground Loaders & Dump Trucks
- Value prop: Top brand partnerships, comprehensive aftersales support

**4. Mineral Analytical Equipment (XRF)**
- Icon: Microscope/chart
- Description: Exclusive BSI partnership for cutting-edge XRF mineral analysis across Africa
- Products: On-line XRF analyzers for conveyor belt mineral analysis
- Elements measured: Copper, cobalt, gold, iron, calcium, magnesium, manganese, titanium, nickel, coal
- Value prop: Real-time ore grade assessment, faster than traditional methods, optimized mining efficiency

Each service card:
- Icon in a rounded container with primary/10 background
- Service name (Montserrat 600)
- Short description (DM Sans 400)
- List of key products/offerings
- "Learn More" link or expandable detail

### BSI Partnership Section

- **Light background**
- **Micro-label**: "STRATEGIC PARTNERSHIP"
- **Heading**: "Transforming Mineral Analysis in Africa"
- **Layout**: Feature spotlight — large image/graphic on one side, content on the other
- **Content highlights**:
  - Exclusive partnership with Baltic Scientific Instruments (BSI)
  - BSI founded 1994, rooted in decades of Soviet-era radiation research (est. 1966)
  - Equipment used across nuclear energy, medical research, space exploration, mining
  - Real-time conveyor belt analysis — instant ore grade data
  - Already saving mining operations millions in operational costs globally
- **CTA**: "Request a Demo" or "Learn More About BSI Solutions"

### Video Showcase Section (Future-Ready)

- **Dark background**
- **Heading**: "See Our Equipment in Action"
- **YouTube facade pattern**:
  - Display a static thumbnail image with a play button overlay
  - On click, replace thumbnail with actual YouTube iframe
  - This prevents YouTube's heavy iframe from loading until user interaction
- **Placeholder**: If no videos yet, show a "Coming Soon" state with a brief message

### Why Choose Us Section

- **Light background**
- **Micro-label**: "WHY MUNDALA"
- **Heading**: "Your Trusted Industrial Partner"
- **Grid of 4–6 value propositions** as cards:
  1. Regulatory Compliance — fully licensed across all Zambian regulatory bodies
  2. Quality Assurance — strict compliance standards on all products
  3. Competitive Pricing — understanding of operational costs drives value
  4. Reliable Delivery — timely delivery as a core commitment
  5. Custom Solutions — tailor-suited products for specific operational needs
  6. Aftersales Support — comprehensive post-purchase technical support

Each card: icon + heading + 1–2 sentence description

### Contact Section

- **Dark background**
- **Micro-label**: "GET IN TOUCH"
- **Heading**: "Let's Build Something Together"
- **Two-column layout**:
  - Left: Contact info cards for both offices
    - **Lusaka Office**: Plot No.14, Lungwebungu Road, Rhodespark, Lusaka, Zambia
    - **Kitwe Office**: Plot No. 3683, Chibuluma Road, Light Industrial Area, Kitwe, Zambia
    - **Email**: mundalacorp@yahoo.com
    - **Phone**: +260 968 875 851, +260 965 772 181
  - Right: Simple contact form (Name, Email, Company, Subject, Message, Submit)
- **Form handling**: Form submissions can use a service like Formspree, EmailJS, or a Next.js API route
- **Map**: Optional — embedded Google Maps showing both office locations

### Footer

- **Dark background** (darker than dark sections)
- **Four columns**:
  1. Logo + tagline ("Your reliable African plug") + brief description
  2. Quick Links: Home, About, Services, Partnership, Contact
  3. Services: Petroleum, Mining Products, Heavy Equipment, XRF Equipment
  4. Contact: addresses, phone, email
- **Bottom bar**: Copyright © 2026 Mundala Corporation Limited. All rights reserved.
- **Social links**: Placeholder icons for LinkedIn, YouTube (for future XRF demo channel)

---

## Animation Specifications (Framer Motion)

### Scroll Reveal Wrapper

Create a reusable `ScrollReveal` component:

```tsx
// Wraps any content — fades up into view when scrolling
variants:
  hidden: { opacity: 0, y: 30 }
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }

trigger: whileInView
viewport: { once: true, margin: "-100px" }
```

### Stagger Children

For card grids and lists:

```
container variant:
  visible: { transition: { staggerChildren: 0.1 } }

child variant:
  hidden: { opacity: 0, y: 20 }
  visible: { opacity: 1, y: 0 }
```

### Navbar Transition

```
On scroll > 50px:
  background: transparent → white
  Add border-bottom and shadow
  Transition: 300ms ease
```

### Hero Entrance

```
Staggered sequence (delay each by 0.15s):
  1. Micro-label fades up
  2. Heading fades up
  3. Subheading fades up
  4. CTA buttons fade up
  5. Stats bar slides up
```

### Hover Effects

```
Cards: translateY(-4px) + shadow-lg on hover, 200ms ease
Buttons: translateY(-2px) + increased shadow, 200ms ease
Nav links: color transition to primary, 150ms
Service tabs: bottom border slides in, 200ms
```

### Reduced Motion

```
@media (prefers-reduced-motion: reduce) {
  All animations: duration 0.01ms, no transforms
  Hover effects: color changes only, no movement
}
```

---

## SEO Requirements

### Metadata (via Next.js Metadata API)

```ts
title: "Mundala Corporation Limited | Industrial Supply & Mining Solutions in Zambia"
description: "Trusted Zambian supplier of petroleum products, mining equipment, heavy machinery, and XRF mineral analytical solutions. Exclusive BSI partner for Africa. Offices in Lusaka and Kitwe."
keywords: ["mining supplies Zambia", "petroleum products Zambia", "XRF mineral analysis Africa", "heavy equipment Zambia", "BSI analytical equipment", "industrial supplier Zambia", "mining reagents", "Mundala Corporation"]

OpenGraph:
  type: "website"
  locale: "en_ZM"
  siteName: "Mundala Corporation Limited"
  image: "/og-image.jpg" (1200x630, company branding)

Twitter:
  card: "summary_large_image"
```

### Structured Data (JSON-LD)

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Mundala Corporation Limited",
  "description": "Trusted Zambian supplier of petroleum products, mining equipment, heavy machinery, and XRF mineral analytical solutions.",
  "url": "https://www.mundalacorp.com",
  "logo": "https://www.mundalacorp.com/images/logo.svg",
  "foundingDate": "2021-09-21",
  "address": [
    {
      "@type": "PostalAddress",
      "streetAddress": "Plot No.14, Lungwebungu Road, Rhodespark",
      "addressLocality": "Lusaka",
      "addressCountry": "ZM"
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "Plot No. 3683, Chibuluma Road, Light Industrial Area",
      "addressLocality": "Kitwe",
      "addressCountry": "ZM"
    }
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+260968875851",
    "email": "mundalacorp@yahoo.com",
    "contactType": "sales"
  },
  "sameAs": []
}
```

### Semantic HTML Rules

- Single `<h1>` on the page (hero heading)
- Logical `<h2>` for each section heading
- `<h3>` for card/subsection headings
- All sections wrapped in `<section>` with descriptive `aria-label`
- Navigation in `<nav>`
- Main content in `<main>`
- Images: descriptive `alt` text, `next/image` with width/height/priority (hero only)
- Links: descriptive text, no "click here"

### Performance Targets

- Lighthouse score: 90+ on all categories
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- All images: WebP format, responsive sizes via next/image
- Fonts: `display: swap` to prevent FOIT

---

## Responsive Breakpoints

```
Mobile: < 640px (sm)
  - Single column layouts
  - Hamburger nav
  - Hero text: 2.25rem
  - Stacked service cards
  - Contact form full-width above contact info

Tablet: 640px – 1024px (sm → lg)
  - Two-column grids where appropriate
  - Nav links visible or collapsible (designer choice)
  - Hero text: 3rem

Desktop: > 1024px (lg+)
  - Full multi-column layouts
  - All nav links visible
  - Hero text: 3.5rem–4.5rem
  - Side-by-side sections (about, partnership, contact)
```

---

## Content Constants (src/lib/constants.ts)

All company data lives in a single constants file for easy updates:

- `COMPANY_INFO`: name, tagline, description, founding date, registration details
- `SERVICES`: array of service objects with id, title, icon, description, products, industries
- `CORE_VALUES`: array of value objects with icon, title, description
- `OFFICES`: array of office objects with name, address lines, coordinates
- `CONTACT`: email, phone numbers, social links
- `STATS`: array of stat objects for hero section
- `NAV_LINKS`: array of navigation items with label and href (anchor links)

---

## Image Requirements

For initial build, use placeholder images. The company will provide real photos later.

| Image | Dimensions | Usage |
|-------|-----------|-------|
| hero-bg.webp | 1920x1080 | Hero background — mining/industrial scene |
| og-image.jpg | 1200x630 | Social sharing preview |
| logo.svg | variable | Navbar, footer |
| logo-white.svg | variable | Dark section usage |
| service-petroleum.webp | 600x400 | Petroleum section |
| service-mining.webp | 600x400 | Mining section |
| service-equipment.webp | 600x400 | Heavy equipment section |
| service-xrf.webp | 600x400 | XRF/analytical section |
| about-company.webp | 600x500 | About section |
| bsi-partnership.webp | 600x400 | BSI partnership section |

For placeholders during development, use `https://placehold.co/600x400/1766B3/FFFFFF?text=Service+Name`

---

## Form Handling

Contact form submissions — choose ONE:

1. **Formspree** (simplest): Free tier, no backend needed, just POST to their endpoint
2. **Next.js API Route + Resend/Nodemailer**: More control, requires email service setup
3. **EmailJS**: Client-side email sending, free tier available

Recommendation for MVP: **Formspree** — zero backend code, works immediately.

---

## Build Order (Feature-Complete Progressive)

Each step produces a fully working, testable page:

1. **Scaffold** — Next.js project, Tailwind, TypeScript, fonts, CSS variables, deploy to Vercel
2. **Layout + Nav** — Root layout, responsive Navbar with scroll behavior, mobile menu
3. **Hero** — Full hero section with animations, stats bar
4. **About** — Company info, core values display
5. **Services** — Tabbed/card service overview with all 4 categories
6. **BSI Partnership** — Feature spotlight section
7. **Why Choose Us** — Value proposition grid
8. **Contact + Footer** — Contact form, office info, footer
9. **SEO Layer** — Metadata, JSON-LD, sitemap, OpenGraph
10. **Video Section** — YouTube facade (when content ready)
11. **Polish** — Animation refinement, performance audit, accessibility check
