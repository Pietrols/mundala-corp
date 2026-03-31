# Mundala Corporation Limited — Corporate Website

A professional, SEO-optimized corporate landing page for Mundala Corporation Limited, a Zambian industrial supply company operating across petroleum products, mining supplies, heavy equipment, and mineral analytical equipment.

**Live Site → [mundala-corp.vercel.app](https://mundala-corp.vercel.app)**

---

## About the Company

Mundala Corporation Limited was established in September 2021 and serves the mining sector, private companies, government institutions, and the general public across Zambia and beyond. The company holds an exclusive partnership with Baltic Scientific Instruments (BSI) for the supply of XRF mineral analytical equipment across the African market.

**Offices:** Lusaka & Kitwe, Zambia

---

## Tech Stack

| Layer      | Technology                                                                                                                         |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Framework  | [Next.js 14](https://nextjs.org/) (App Router, SSG)                                                                                |
| Language   | [TypeScript](https://www.typescriptlang.org/)                                                                                      |
| Styling    | [Tailwind CSS v4](https://tailwindcss.com/) + CSS custom properties                                                                |
| Animations | [Framer Motion](https://www.framer.com/motion/)                                                                                    |
| Icons      | [Lucide React](https://lucide.dev/)                                                                                                |
| Fonts      | [Montserrat](https://fonts.google.com/specimen/Montserrat) (display) + [DM Sans](https://fonts.google.com/specimen/DM+Sans) (body) |
| Deployment | [Vercel](https://vercel.com/)                                                                                                      |

---

## Features

- **Dark-first design** with deep navy primary (`#34408A`) and white accents
- **Responsive layout** — mobile-first, tested across breakpoints
- **Scroll-triggered animations** via Framer Motion with `whileInView`
- **Frosted glass navbar** — transparent over hero, frosted dark glass on scroll
- **Tabbed departments section** with animated content transitions
- **SEO optimized** — semantic HTML, JSON-LD structured data, OpenGraph tags, auto-generated sitemap
- **Accessible** — proper heading hierarchy, `aria-labels`, keyboard navigation, `prefers-reduced-motion` support
- **Performance focused** — `next/image` optimization, font `display: swap`, static generation

---

## Site Sections

| Section         | Description                                                                   |
| --------------- | ----------------------------------------------------------------------------- |
| Hero            | Full-viewport with background image, staggered entrance animations, key stats |
| About           | Company history, regulatory compliance, vision/mission cards, core values     |
| Services        | Four service categories as animated glass cards                               |
| Departments     | Tabbed deep-dive into Petroleum, Mining Products, Heavy Equipment, XRF        |
| BSI Partnership | Spotlight on exclusive Baltic Scientific Instruments partnership              |
| Why Choose Us   | Six value propositions as a responsive card grid                              |
| Contact         | Office locations (Lusaka & Kitwe), contact form, phone/email                  |
| Footer          | Company info, quick links, services directory, contact details                |

---

## Project Structure

```
mundala-corp/
├── public/
│   └── images/            # Company logos, service photos, hero background
├── src/
│   ├── app/
│   │   ├── layout.tsx     # Root layout — fonts, metadata, global providers
│   │   ├── page.tsx       # Landing page — assembles all sections
│   │   ├── globals.css    # Tailwind directives + design token CSS variables
│   │   ├── sitemap.ts     # Auto-generated sitemap
│   │   └── not-found.tsx  # Custom 404
│   ├── components/
│   │   ├── layout/        # Navbar, Footer
│   │   ├── sections/      # Hero, About, Services, Departments, etc.
│   │   └── ui/            # Reusable components — ScrollReveal, buttons
│   ├── lib/
│   │   ├── constants.ts   # All company data, service definitions, contact info
│   │   └── metadata.ts    # SEO metadata generator
│   └── hooks/
│       └── useScrollspy.ts
├── MUNDALA_DESIGN.md      # Full design specification
├── STYLE_DIRECTIVE.md     # Visual restyling guide
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/mundala-corp.git
cd mundala-corp

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## Deployment

The site auto-deploys to Vercel on every push to `main`.

| Environment | URL                                                        |
| ----------- | ---------------------------------------------------------- |
| Production  | [mundala-corp.vercel.app](https://mundala-corp.vercel.app) |

To deploy manually:

```bash
npx vercel --prod
```

---

## Design System

The visual identity is defined in two reference documents:

- **`MUNDALA_DESIGN.md`** — Full design specification: color tokens, typography, spacing, component specs, animation patterns, SEO requirements, and build order
- **`STYLE_DIRECTIVE.md`** — Restyling guide for the dark-first navy + white accent aesthetic

### Design Tokens (Quick Reference)

| Token              | Value                          |
| ------------------ | ------------------------------ |
| Primary            | `#34408A` — deep indigo-navy   |
| Background (dark)  | `hsl(220 18% 8%)` — `#121620`  |
| Background (light) | `hsl(220 20% 97%)` — `#F5F6FA` |
| Foreground         | `hsl(220 20% 95%)` — `#F0F2F7` |
| Font display       | Montserrat 400–800             |
| Font body          | DM Sans 400–700                |
| Radius             | `0.75rem`                      |
| Section rhythm     | Dark → Light → Dark → Light    |

---

## License

All rights reserved. © 2026 Mundala Corporation Limited.
