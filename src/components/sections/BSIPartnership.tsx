"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

// ─────────────────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────────────────

const HIGHLIGHTS = [
  "Exclusive African partnership with Baltic Scientific Instruments (BSI)",
  "BSI founded in 1994, built on decades of Soviet-era radiation research excellence dating to 1966",
  "Real-time conveyor belt XRF analysis - instant ore grade data without slowing operations",
  "Measures copper, cobalt, gold, iron, calcium, manganese, titanium, nickel, and more",
  "Already saving mines millions in operational costs across global deployments",
];

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

export default function BSIPartnership() {
  return (
    <section
      id="partnership"
      aria-label="BSI strategic partnership"
      className="bg-background py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* ── Left: content ──────────────────────────────────────────── */}
          <ScrollReveal direction="left" duration={0.7}>
            <p className="micro-label mb-3">Strategic Partnership</p>

            <h2 className="mb-6 font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">
              Transforming Mineral Analysis{" "}
              <span className="text-white">in Africa</span>
            </h2>

            <p className="mb-8 leading-relaxed text-muted-foreground text-justify">
              Through our exclusive partnership with Baltic Scientific
              Instruments, Mundala brings the world&apos;s most advanced on-line
              XRF mineral analysis technology to African mining operations -
              delivering results that were previously impossible in real time.
            </p>

            {/* Highlights list */}
            <ul className="mb-10 space-y-4">
              {HIGHLIGHTS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle
                    size={18}
                    className="mt-0.5 shrink-0 text-accent"
                    strokeWidth={2}
                  />
                  <span className="text-sm leading-relaxed text-foreground text-justify">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex items-center gap-4 flex-wrap">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center rounded-lg bg-primary px-6 py-3 font-display
                           font-semibold text-primary-foreground shadow-md transition-all duration-200
                           hover:bg-primary-light hover:-translate-y-0.5 hover:shadow-[0_8px_30px_hsl(232_45%_37%/0.35)]
                           active:translate-y-0 active:shadow-md"
              >
                Request Information
              </a>

              <a
                href="https://bsi.lv/en/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg border border-white/20 px-6 py-3 font-display
                           font-semibold text-white/80 transition-all duration-200
                           hover:border-white/40 hover:text-white hover:-translate-y-0.5
                           active:translate-y-0"
              >
                Visit BSI →
              </a>
            </div>
          </ScrollReveal>

          {/* ── Right: XRF image ───────────────────────────────────────── */}
          <ScrollReveal direction="right" duration={0.7} delay={0.15}>
            <div className="relative aspect-4/3 overflow-hidden rounded-2xl border border-white/20">
              {/* Branded placeholder shown until image loads / if missing */}
              <div
                aria-hidden="true"
                className="absolute inset-0 flex flex-col items-center justify-center gap-3
                           bg-linear-to-br from-primary/20 via-primary/10 to-primary-dark/25"
              >
                <p className="font-display text-sm font-medium text-primary-light/50">
                  XRF Equipment
                </p>
              </div>

              <Image
                src="/images/IMG_3053.jpeg"
                alt="BSI on-line XRF analyser for conveyor belt mineral analysis"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Corner badge */}
              <div
                className="absolute bottom-4 left-4 rounded-xl border border-white/15
                           bg-black/50 px-4 py-2.5 backdrop-blur-sm"
              >
                <p className="font-display text-xs font-semibold uppercase tracking-wider text-white/90">
                  BSI · Baltic Scientific Instruments
                </p>
                <p className="mt-0.5 text-xs text-white/55">
                  Est. 1994 · Riga, Latvia
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
