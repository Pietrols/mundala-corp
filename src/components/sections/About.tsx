"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Shield,
  CheckCircle,
  Heart,
  Star,
  Zap,
  Building2,
  type LucideIcon,
} from "lucide-react";
import ScrollReveal, { staggerChildVariants } from "@/components/ui/ScrollReveal";
import { COMPANY_INFO, CORE_VALUES } from "@/lib/constants";
import type { LucideIconName } from "@/lib/constants";

// ─────────────────────────────────────────────────────────────────────────────
// Icon map — keyed by the LucideIconName values used in CORE_VALUES
// ─────────────────────────────────────────────────────────────────────────────

const ICONS: Record<LucideIconName, LucideIcon> = {
  Shield,
  CheckCircle,
  Heart,
  Star,
  Zap,
  // The remaining names in the union are used by other sections; stub them
  // here so TypeScript's exhaustive-check on Record<LucideIconName, …> passes.
  Fuel:        Building2,
  Mountain:    Building2,
  Truck:       Building2,
  Microscope:  Building2,
  BadgeCheck:  Building2,
  Award:       Building2,
  TrendingDown:Building2,
  Clock:       Building2,
  Settings:    Building2,
  Headphones:  Building2,
};

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

export default function About() {
  return (
    <section
      id="about"
      aria-label="About Mundala Corporation"
      className="bg-background py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ── Two-column: content left / image right ─────────────────────── */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Content — slides in from the left */}
          <ScrollReveal direction="left" duration={0.7}>
            <p className="micro-label mb-3">About Us</p>

            <h2 className="mb-6 font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">
              Building Trust Across{" "}
              <span className="text-primary">Zambia&apos;s Industries</span>
            </h2>

            <div className="space-y-4 text-muted-foreground">
              <p>
                Mundala Corporation Limited was established in September 2021 with a
                clear mission: to be the most reliable industrial supply partner for
                Zambia&apos;s growing economy. From our offices in Lusaka and Kitwe,
                we serve the mining, petroleum, and analytical equipment sectors —
                industries that form the backbone of regional development.
              </p>
              <p>
                We supply a comprehensive range of products, from petroleum fuels
                and mining consumables to heavy machinery and cutting-edge XRF
                mineral analytical equipment. As the exclusive African partner for
                Baltic Scientific Instruments (BSI), we bring world-class
                technology to the continent&apos;s mining operations — enabling
                real-time ore grade assessment that saves millions in operational
                costs.
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

            {/* Founding callout */}
            <div className="mt-8 inline-flex items-center gap-3 rounded-lg border border-border bg-muted px-5 py-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Building2 size={17} className="text-primary" />
              </div>
              <div>
                <p className="font-display text-sm font-semibold text-foreground">
                  {COMPANY_INFO.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  Established 21 September 2021 · Lusaka &amp; Kitwe, Zambia
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Image — slides in from the right */}
          <ScrollReveal direction="right" duration={0.7} delay={0.1}>
            <div className="relative aspect-[6/5] overflow-hidden rounded-2xl shadow-xl">
              {/*
                Branded placeholder shown until /public/images/about-company.webp
                is placed. The real photo will render on top and cover this entirely.
              */}
              <div
                aria-hidden="true"
                className="absolute inset-0 flex flex-col items-center justify-center gap-3
                           bg-gradient-to-br from-primary/15 via-primary/8 to-primary-dark/20"
              >
                <Building2 size={52} className="text-primary/25" strokeWidth={1.25} />
                <p className="font-display text-sm font-medium text-primary/35">
                  Company photo coming soon
                </p>
              </div>

              <Image
                src="/images/about-company.webp"
                alt="Mundala Corporation industrial operations in Zambia"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Subtle bottom gradient to anchor the image visually */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-1/4
                           bg-gradient-to-t from-black/30 to-transparent"
              />
            </div>
          </ScrollReveal>
        </div>

        {/* ── Core values ────────────────────────────────────────────────── */}
        {/*
          ScrollReveal in stagger mode: triggers once the grid enters the viewport,
          then cascades the "visible" state to each motion.div child with a
          staggerChildren delay of 0.1 s between them.
        */}
        <ScrollReveal
          stagger
          staggerDelay={0.09}
          delay={0.05}
          margin="-60px"
          className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 md:mt-20 md:grid-cols-5 md:gap-5"
        >
          {CORE_VALUES.map((value) => {
            const Icon = ICONS[value.icon];
            return (
              <motion.div
                key={value.id}
                variants={staggerChildVariants}
                className="group flex flex-col items-center rounded-xl border border-border
                           bg-card p-5 text-center shadow-sm
                           transition-all duration-200
                           hover:-translate-y-1 hover:shadow-md hover:border-primary/20"
              >
                {/* Icon container */}
                <div
                  className="mb-3 flex h-11 w-11 items-center justify-center rounded-full
                             bg-primary/8 transition-colors duration-200
                             group-hover:bg-primary/14"
                >
                  <Icon
                    size={20}
                    className="text-primary transition-transform duration-200 group-hover:scale-110"
                    strokeWidth={1.75}
                  />
                </div>

                <h3 className="mb-1.5 font-display text-sm font-semibold text-foreground">
                  {value.title}
                </h3>

                <p className="text-xs leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </ScrollReveal>

      </div>
    </section>
  );
}
