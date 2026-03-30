# STYLE_DIRECTIVE.md — Mundala Corporation Visual Restyling Guide

> **Purpose**: Restyle the existing Mundala Corporation Next.js site from a blue
> corporate light-first aesthetic to a **dark-first, gold-accented premium**
> design. This document is the single source of truth for every visual change.
> Claude Code should read this file before making any styling modifications.

---

## Design Philosophy

The site should feel like a **premium industrial brand** — think luxury watch
catalog meets heavy-machinery power. Dark backgrounds convey authority and
sophistication. Gold accents signal quality, trust, and value. The blue
corporate identity is preserved only as a subtle undertone in the dark
backgrounds (hue 220), not as a visible accent color anywhere.

**Three rules that govern every decision:**

1. **Dark is the default.** The page opens dark. Light sections are the
   exception, not the rule — used sparingly to create rhythm and breathing room.
2. **Gold is the single accent.** Every interactive element, every decorative
   detail, every highlight uses gold. No blue buttons, no blue links, no blue
   icons. Blue lives only in the background hue channel.
3. **Glass and depth over flat.** Cards use translucent backgrounds with
   backdrop-blur. Shadows create layering. Subtle gradients add dimension.
   Nothing should feel like a flat Bootstrap template.

---

## Color Palette — Replace Entirely

Remove all blue primary/accent variables. Replace with this system:

```css
/* === DARK THEME (Default — applied to :root) === */
:root {
  /* Base */
  --background: 220 18% 8%;           /* #121620 — deep navy-black */
  --foreground: 220 20% 95%;          /* #F0F2F7 — crisp off-white */

  /* Surfaces */
  --card: 220 16% 12%;                /* #1A1F2E — lifted dark surface */
  --card-foreground: 220 20% 95%;
  --muted: 220 14% 16%;               /* #232837 — subtle bg difference */
  --muted-foreground: 215 10% 55%;    /* #808A99 — secondary text */

  /* Borders */
  --border: 220 14% 20%;              /* #2C3244 — subtle dark border */
  --input: 220 14% 20%;

  /* Primary — Gold */
  --primary: 42 60% 50%;              /* #CC9A2E — rich gold */
  --primary-foreground: 220 18% 8%;   /* Dark text on gold buttons */

  /* Secondary */
  --secondary: 220 14% 16%;           /* Matches muted */
  --secondary-foreground: 220 20% 90%;

  /* Accent — also gold-based */
  --accent: 220 14% 18%;
  --accent-foreground: 220 20% 95%;

  /* Gold system */
  --gold: 42 60% 50%;                 /* Core gold — buttons, icons, lines */
  --gold-glow: 42 80% 65%;            /* Lighter gold — glows, gradients */
  --steel: 215 25% 55%;               /* Steel blue — subtle metadata only */

  /* Semantic */
  --destructive: 0 62% 30%;
  --destructive-foreground: 0 0% 100%;
  --ring: 42 60% 50%;                 /* Focus ring is gold, not blue */

  /* Radius */
  --radius: 0.75rem;
}

/* === LIGHT SECTIONS (used on alternating rhythm sections) === */
.section-light {
  --background: 220 20% 97%;          /* #F5F6FA — off-white */
  --foreground: 220 25% 10%;          /* #171C26 — near-black text */
  --card: 0 0% 100%;                  /* Pure white cards */
  --card-foreground: 220 25% 10%;
  --muted: 215 20% 93%;
  --muted-foreground: 215 12% 50%;
  --border: 215 20% 88%;
  --input: 215 20% 88%;
  /* Gold stays the same in light sections */
}
```

### What This Changes

| Element | Before (blue) | After (gold) |
|---------|---------------|--------------|
| Buttons (solid) | Blue bg, white text | Gold bg, dark text |
| Buttons (outline) | Blue border + text | Gold border + text |
| Focus rings | Blue | Gold |
| Icons in containers | Blue on blue/10 bg | Gold on gold/10 bg |
| Micro-labels | Blue text | Gold text |
| Decorative lines | None or blue | Gold gradient lines |
| Active nav link | Blue | Gold |
| Nav hover | Blue | Gold |
| CTA hover | Lighter blue | Gold glow + lift |
| Card icon containers | primary/10 (was blue) | gold/10 |
| Tab active state | Blue bg | Gold bg |
| Stats numbers | Blue | Gold |

---

## Utility Classes — Add to globals.css

```css
/* Gold text */
.text-gold {
  color: hsl(var(--gold));
}

/* Gold background */
.bg-gold {
  background-color: hsl(var(--gold));
}

/* Ambient gold glow — for hero elements, featured cards */
.gold-glow {
  box-shadow: 0 0 40px hsl(var(--gold-glow) / 0.15);
}

/* Glass card — translucent with blur, works on any background */
.glass-card {
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid hsl(var(--border));
  background: hsl(var(--card) / 0.85);
}

/* Consistent section padding */
.section-padding {
  padding: 4rem 1rem;
}
@media (min-width: 768px) {
  .section-padding {
    padding: 6rem 2rem;
  }
}

/* Gold decorative line — horizontal accent between label and heading */
.gold-line {
  height: 3px;
  background: linear-gradient(
    90deg,
    hsl(var(--gold)),
    hsl(var(--gold-glow)),
    transparent
  );
  border-radius: 2px;
}

/* Gold gradient text — for hero words, feature highlights */
.text-gradient-gold {
  background: linear-gradient(135deg, hsl(var(--gold)), hsl(var(--gold-glow)));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

---

## Micro-Label Update

```css
.micro-label {
  font-family: var(--font-montserrat), 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: hsl(var(--gold));  /* Was --primary-light (blue), now gold */
}
```

---

## Component-Level Restyling Instructions

### Navbar

- Logo text: "MUNDALA" in foreground color + "CORP" in gold
- Link hover color: gold (was blue)
- Active link: gold
- "Get In Touch" CTA: `bg-gold text-primary-foreground` (gold bg, dark text)
- CTA hover: slight lift (`translateY(-2px)`) + `gold-glow` box-shadow
- Scrolled state bg: `hsl(var(--background) / 0.9)` with `backdrop-blur-xl`
  (frosted dark glass, not white)

### Hero

- Keep dark background with image overlay
- Micro-label: gold text (not blue)
- Headline: keep white, but consider making one word gold using
  `text-gradient-gold` (e.g., "Powering Africa's **Industries**" where
  Industries is the gradient word)
- Primary CTA: `bg-gold text-primary-foreground` + hover lift + gold-glow
- Secondary CTA: `border border-gold/50 text-gold` → on hover:
  `bg-gold text-primary-foreground`
- Stats bar: glass-card style (`bg-white/5 backdrop-blur-md border-white/10`),
  stat numbers in gold

### About Section

- This should be a **section-light** section (light bg for rhythm contrast)
- Gold-line divider below micro-label
- Vision/Mission cards: white bg, subtle shadow, gold accent on heading or
  icon
- Core value icons: gold on gold/10 background containers

### Services Section

- **Dark section** (default root styles apply)
- Service cards: `bg-white/5 backdrop-blur-sm border border-white/10
  rounded-2xl` (glass-card-dark pattern)
- Icon containers: `bg-gold/10 rounded-xl` with gold icon
- Card hover: `translateY(-4px)` + `shadow-lg` + `border-gold/30`
- Gold-line divider below section micro-label

### Departments (Tabbed)

- **section-light** for rhythm
- Active tab button: `bg-gold text-primary-foreground shadow-md`
- Inactive tab: `bg-secondary text-muted-foreground hover:text-foreground`
- Product list bullets: small gold dots (`bg-gold rounded-full`)
- "Key Products" sub-heading: gold text, uppercase, letter-spaced

### BSI Partnership

- **Dark section**
- Check icons next to highlights: gold
- CTA button: gold solid
- If image has a border/frame: `border-gold/20`
- Consider a subtle `gold-glow` on the image container

### Why Choose Us

- **section-light**
- Card icon containers: `bg-gold/10` with gold icon
- Card hover: lift + shadow, optional `border-gold/20` on hover

### Contact

- **Dark section**
- Office cards: glass-card style (dark glass)
- MapPin, Phone, Mail icons: gold
- Phone/email link hover color: gold
- Form inputs: `bg-white/5 border-white/10 text-white
  focus:border-gold/60 placeholder:text-white/30`
- Submit button: `bg-gold text-primary-foreground` + hover lift
- Form card: optional subtle `gold-glow`

### Footer

- Darkest background: `hsl(220 20% 5%)` or `bg-[#0D0F14]`
- Logo: "MUNDALA" white + "CORP" gold
- Link hover color: gold
- Divider line above copyright: `border-white/10`
- Copyright text: muted-foreground

---

## Section Rhythm (Dark/Light Alternation)

The page should flow as:

| # | Section | Background |
|---|---------|-----------|
| 1 | Navbar | Transparent → frosted dark glass on scroll |
| 2 | Hero | Dark (image + overlay) |
| 3 | About | **Light** (section-light) |
| 4 | Services | Dark (default) |
| 5 | Departments | **Light** (section-light) |
| 6 | BSI Partnership | Dark (default) |
| 7 | Why Choose Us | **Light** (section-light) |
| 8 | Contact | Dark (default) |
| 9 | Footer | Darkest |

This alternation creates visual breathing room and signals topic changes.

---

## Animation Adjustments

No changes to animation timing or behavior. Only color-related updates:

- Hover lift shadows: use `rgba(0,0,0,0.3)` on dark sections (more visible),
  `rgba(0,0,0,0.1)` on light sections
- Gold-glow on CTA hover: `box-shadow: 0 8px 30px hsl(42 60% 50% / 0.25)`
- Focus outlines: `ring-2 ring-gold/50 ring-offset-2
  ring-offset-background`

---

## Scrollbar

```css
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: hsl(var(--background));
}
::-webkit-scrollbar-thumb {
  background: hsl(var(--gold));
  border-radius: 3px;
}
```

---

## What NOT to Change

- **Font families** — Montserrat + DM Sans stay as-is
- **Font sizes and weights** — no changes
- **Spacing and layout** — paddings, gaps, grid columns stay the same
- **Component structure** — no adding/removing sections or rearranging
- **Animation timing** — durations, delays, easing functions stay the same
- **SEO metadata** — don't touch
- **Image paths** — don't rename or move
- **TypeScript types** — no structural changes
- **Form behavior** — keep Formspree or current handler

---

## Implementation Checklist for Claude Code

When given the instruction to apply this directive, work through these files
in order:

1. `src/app/globals.css` — Replace color variables, add utility classes,
   update micro-label, add scrollbar styles
2. `src/components/layout/Navbar.tsx` — Gold links, gold CTA, frosted dark
   scroll state, gold logo accent
3. `src/components/sections/Hero.tsx` — Gold micro-label, gold gradient
   headline word, gold CTAs, glass stats bar
4. `src/components/sections/About.tsx` — Add section-light class, gold-line,
   gold value icons
5. `src/components/sections/Services.tsx` — Dark glass cards, gold icons,
   gold hover borders
6. `src/components/sections/Departments.tsx` — section-light, gold active
   tabs, gold product bullets
7. `src/components/sections/BSIPartnership.tsx` — Dark section, gold
   accents, gold CTA
8. `src/components/sections/WhyChooseUs.tsx` — section-light, gold icon
   containers
9. `src/components/sections/Contact.tsx` — Dark glass cards, gold form
   focus, gold icons, gold submit
10. `src/components/layout/Footer.tsx` — Darkest bg, gold logo accent,
    gold link hovers
