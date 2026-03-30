"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Award,
  Handshake,
  Heart,
  Zap,
  type LucideIcon,
} from "lucide-react";
import ScrollReveal, {
  staggerChildVariants,
} from "@/components/ui/ScrollReveal";
import { CORE_VALUES } from "@/lib/constants";
import type { LucideIconName } from "@/lib/constants";

// ─────────────────────────────────────────────────────────────────────────────
// Icon map
// ─────────────────────────────────────────────────────────────────────────────

const ICONS: Record<LucideIconName, LucideIcon> = {
  Shield,
  Award,
  Handshake,
  Heart,
  Zap,
  // Stubs for icons used in other sections
  Fuel: Shield,
  Pickaxe: Shield,
  Truck: Shield,
  Microscope: Shield,
  ShieldCheck: Shield,
  BadgeCheck: Shield,
  TrendingDown: Shield,
  Clock: Shield,
  Settings: Shield,
  Headphones: Shield,
};

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

export default function About() {
  return (
    <section
      id="about"
      aria-label="About Mundala Corporation"
      className="bg-background section-light py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ── Left column: text ────────────────────────────────────────── */}
          <ScrollReveal direction="left" duration={0.7}>
            <p className="micro-label mb-3">About Us</p>
            <div className="accent-line w-12 mb-6" />

            <h2 className="mb-6 font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">
              Building Trust Across{" "}
              <span className="text-primary">Zambia&apos;s Industries</span>
            </h2>

            <div className="space-y-4 text-muted-foreground">
              <p>
                Mundala Corporation Limited was established in September 2021
                with a clear mission: to be the most reliable industrial supply
                partner for Zambia&apos;s growing economy. From our offices in
                Lusaka and Kitwe, we serve the mining, petroleum, and analytical
                equipment sectors — industries that form the backbone of
                regional development.
              </p>
              <p>
                We supply a comprehensive range of products, from petroleum
                fuels and mining consumables to heavy machinery and cutting-edge
                XRF mineral analytical equipment. As the exclusive African
                partner for Baltic Scientific Instruments (BSI), we bring
                world-class technology to the continent&apos;s mining operations
                — enabling real-time ore grade assessment that saves millions in
                operational costs.
              </p>
              <p>
                Regulatory compliance and quality assurance sit at the heart of
                everything we do. Fully licensed across all Zambian regulatory
                bodies, we uphold strict standards on every product we supply.
                Our commitment to timely delivery, competitive pricing, and
                comprehensive aftersales support makes us the partner of choice
                for mining companies, government procurement, and industrial
                buyers across Africa.
              </p>
            </div>
          </ScrollReveal>

          {/* ── Right column: Vision + Mission cards, then core values ───── */}
          <ScrollReveal direction="right" duration={0.7} delay={0.1}>
            {/* Vision card */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <p className="micro-label mb-2">Our Vision</p>
              <p className="text-muted-foreground">
                To be Africa&apos;s most trusted industrial supply partner —
                connecting Zambia&apos;s industries with world-class products
                and technology that drive sustainable growth across the
                continent.
              </p>
            </div>

            {/* Mission card */}
            <div className="mt-4 rounded-xl border border-border bg-card p-6 shadow-sm">
              <p className="micro-label mb-2">Our Mission</p>
              <p className="text-muted-foreground">
                To deliver reliable, compliant, and competitively priced
                industrial solutions that empower Zambia&apos;s mining,
                petroleum, and manufacturing sectors — backed by integrity,
                expert knowledge, and a genuine commitment to client success.
              </p>
            </div>

            {/* Core values — 2-column icon + label grid */}
            <ScrollReveal
              stagger
              staggerDelay={0.08}
              delay={0.05}
              margin="-60px"
              className="mt-6 grid grid-cols-2 gap-3 sm:gap-4"
            >
              {CORE_VALUES.map((value) => {
                const Icon = ICONS[value.icon];
                return (
                  <motion.div
                    key={value.id}
                    variants={staggerChildVariants}
                    className="group flex items-center gap-3 rounded-lg border border-border
                               bg-card px-4 py-3 shadow-sm transition-all duration-200
                               hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-md"
                  >
                    <div
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full
                                 bg-primary/10 transition-colors duration-200 group-hover:bg-primary/20"
                    >
                      <Icon
                        size={15}
                        className="text-primary transition-transform duration-200 group-hover:scale-110"
                        strokeWidth={1.75}
                      />
                    </div>
                    <span className="font-display text-sm font-semibold text-foreground">
                      {value.title}
                    </span>
                  </motion.div>
                );
              })}
            </ScrollReveal>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
