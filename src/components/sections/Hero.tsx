"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { COMPANY_INFO, STATS } from "@/lib/constants";

// ─────────────────────────────────────────────────────────────────────────────
// Animation variants
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Shared fade-up variant. Each element receives its delay via the `custom` prop
 * so a single variant definition drives the entire stagger sequence.
 */
// Typed as Variants so TypeScript validates the shape against Framer Motion's API.
// The bezier array is cast `as const` so it infers as a 4-element tuple
// ([number,number,number,number]) rather than the wider number[], which the
// Easing union type requires.
const EASE = [0.25, 0.46, 0.45, 0.94] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE, delay },
  }),
};

/** Stats bar rises from a few extra pixels below to create a clear final beat. */
const statsBarVariant: Variants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE, delay: 0.75 },
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

function scrollTo(href: string) {
  const id = href.replace("#", "");
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

/**
 * Generates the correct border classes for each stat cell so the dividers
 * work in both the mobile 2-column and the desktop 4-column layout.
 *
 *  Mobile (2-col):          Desktop (4-col):
 *  ┌──────┬──────┐          ┌──────┬──────┬──────┬──────┐
 *  │  0   │  1   │          │  0   │  1   │  2   │  3   │
 *  ├──────┼──────┤          └──────┴──────┴──────┴──────┘
 *  │  2   │  3   │
 *  └──────┴──────┘
 */
function statBorderClass(i: number): string {
  return [
    // Right column (i=1, i=3) → left divider on all breakpoints
    i % 2 === 1 && "border-l border-white/10",
    // Bottom row (i=2, i=3) → top divider on mobile only
    i >= 2 && "border-t border-white/10 lg:border-t-0",
    // i=2 is left-column on mobile (no border-l) but needs one on desktop
    i === 2 && "lg:border-l lg:border-white/10",
  ]
    .filter(Boolean)
    .join(" ");
}

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

export default function Hero() {
  return (
    <section
      id="home"
      aria-label="Mundala Corporation — hero"
      className="relative flex min-h-screen flex-col overflow-hidden"
    >
      {/* ── Background ─────────────────────────────────────────────────────── */}
      <div className="absolute inset-0" aria-hidden="true">
        {/*
          Solid fallback shown before / if the image fails.
          Sits behind everything via -z-10 so the Image renders on top of it.
        */}
        <div className="absolute inset-0 -z-10 bg-[hsl(220_25%_9%)]" />

        {/*
          Replace /images/hero-bg.webp with the real photo when available.
          Using `priority` because this is the LCP element.
        */}

        {/* Mundala logo — large centred watermark */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          aria-hidden="true"
        >
          <img
            src="/images/mundala-icon-3.svg"
            alt=""
            className="w-full  opacity-10"
          />
        </div>

        {/*
          Multi-stop gradient overlay:
          - Heavier at top so white nav links remain legible
          - Lighter through the mid section so the photo shows through
          - Heavier at bottom to frame the stats bar
        */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, " +
              "hsl(220 25% 8% / 0.82) 0%, " +
              "hsl(220 25% 8% / 0.58) 32%, " +
              "hsl(220 25% 8% / 0.68) 68%, " +
              "hsl(220 25% 8% / 0.93) 100%)",
          }}
        />
      </div>

      {/* ── Main content ───────────────────────────────────────────────────── */}
      {/*
        pt-20/pt-24 offsets the fixed navbar so the content is centred in the
        visible viewport, not the full document height.
      */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 pt-20 pb-4 text-center sm:px-6 sm:pt-24 lg:px-8">
        <div className="w-full max-w-4xl">
          {/* 1 ── Micro-label */}
          <motion.p
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-5 font-display text-xs font-semibold uppercase tracking-[0.18em] text-white/80 sm:text-sm"
          >
            {COMPANY_INFO.tagline}
          </motion.p>

          {/* 2 ── Heading — single h1 on the page per spec */}
          <motion.h1
            custom={0.15}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-6 font-display font-extrabold leading-[1.08] tracking-tight text-white
                       text-[2.5rem] sm:text-5xl lg:text-[4.5rem]"
          >
            Powering Africa&apos;s <br className="hidden sm:block" />
            <span className="text-white">Industries</span>
          </motion.h1>

          {/* 3 ── Subheading */}
          <motion.p
            custom={0.3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mx-auto mb-10 max-w-2xl leading-relaxed text-white/75
                       text-base sm:text-lg"
          >
            {COMPANY_INFO.description}
          </motion.p>

          {/* 4 ── CTAs */}
          <motion.div
            custom={0.45}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            {/* Primary CTA */}
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#services");
              }}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5
                         font-display font-semibold text-primary-foreground
                         shadow-lg shadow-primary/30
                         transition-all duration-200
                         hover:bg-primary-light hover:-translate-y-0.5 hover:shadow-[0_8px_30px_hsl(232_45%_37%/0.35)]
                         active:translate-y-0 active:shadow-md"
            >
              Explore Our Services
              <ArrowRight size={16} strokeWidth={2.5} />
            </a>

            {/* Outline CTA */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#contact");
              }}
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white/50 px-7 py-3.5
                         font-display font-semibold text-white
                         transition-all duration-200
                         hover:border-white hover:bg-white hover:text-primary hover:-translate-y-0.5
                         active:translate-y-0"
            >
              Contact Us
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator — appears last, bounces indefinitely */}
        <motion.div
          custom={0.6}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-14 flex flex-col items-center gap-1.5"
          aria-hidden="true"
        >
          <span className="text-[0.65rem] font-display font-medium uppercase tracking-widest text-white/35">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ repeat: Infinity, duration: 1.9, ease: "easeInOut" }}
          >
            <ArrowDown size={18} className="text-white/35" strokeWidth={2} />
          </motion.div>
        </motion.div>
      </div>

      {/* ── Stats bar ──────────────────────────────────────────────────────── */}
      {/*
        Slides up as the final beat of the entrance sequence.
        Frosted-glass panel spanning the full width at the hero's bottom edge.
      */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={statsBarVariant}
        className="relative z-10 w-full border-t border-white/10
                   bg-white/5 backdrop-blur-md"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-2 lg:grid-cols-4">
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={[
                  "flex flex-col items-center justify-center px-4 py-7 text-center sm:py-9",
                  statBorderClass(i),
                ].join(" ")}
              >
                {/* Value on top, label underneath — reversed DOM order via `order-*`
                    so screen readers announce the value before the label */}
                <dt className="order-2 mt-1.5 text-[0.7rem] font-display font-semibold uppercase tracking-widest text-white/45 sm:text-xs">
                  {stat.label}
                </dt>
                <dd className="order-1 font-display text-2xl font-bold text-white sm:text-3xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </motion.div>
    </section>
  );
}
