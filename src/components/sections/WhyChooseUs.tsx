"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  BadgeCheck,
  TrendingDown,
  Clock,
  Settings,
  Headphones,
  type LucideIcon,
} from "lucide-react";
import ScrollReveal, { staggerChildVariants } from "@/components/ui/ScrollReveal";

// ─────────────────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────────────────

const PROPOSITIONS: {
  id: string;
  Icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    id: "compliance",
    Icon: ShieldCheck,
    title: "Regulatory Compliance",
    description:
      "Fully licensed across all Zambian regulatory bodies, ensuring every product meets legal and safety standards.",
  },
  {
    id: "quality",
    Icon: BadgeCheck,
    title: "Quality Assurance",
    description:
      "Strict compliance standards applied to every product we supply, from petroleum fuels to precision instruments.",
  },
  {
    id: "pricing",
    Icon: TrendingDown,
    title: "Competitive Pricing",
    description:
      "Deep understanding of operational costs means we deliver genuine value without compromising on quality.",
  },
  {
    id: "delivery",
    Icon: Clock,
    title: "Reliable Delivery",
    description:
      "Timely delivery is a core commitment — your operations should never be held up waiting on us.",
  },
  {
    id: "custom",
    Icon: Settings,
    title: "Custom Solutions",
    description:
      "Tailor-suited products and configurations designed around your specific operational requirements.",
  },
  {
    id: "aftersales",
    Icon: Headphones,
    title: "Aftersales Support",
    description:
      "Comprehensive post-purchase technical support to keep your equipment and operations running smoothly.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      aria-label="Why choose Mundala"
      className="bg-background section-light py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ── Header ─────────────────────────────────────────────────────── */}
        <ScrollReveal className="mb-12 text-center md:mb-16">
          <p className="micro-label mb-3">Why Mundala</p>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Your Trusted Industrial Partner
          </h2>
        </ScrollReveal>

        {/* ── Cards grid ─────────────────────────────────────────────────── */}
        <ScrollReveal
          stagger
          staggerDelay={0.09}
          delay={0.05}
          margin="-60px"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {PROPOSITIONS.map(({ id, Icon, title, description }) => (
            <motion.div
              key={id}
              variants={staggerChildVariants}
              className="group rounded-xl border border-border bg-card p-6 shadow-sm
                         transition-all duration-200 hover:-translate-y-1 hover:shadow-lg
                         hover:border-primary/20"
            >
              {/* Icon */}
              <div
                className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg
                           bg-primary/10 transition-colors duration-200 group-hover:bg-primary/15"
              >
                <Icon
                  size={20}
                  className="text-primary transition-transform duration-200 group-hover:scale-110"
                  strokeWidth={1.75}
                />
              </div>

              {/* Title */}
              <h3 className="mb-2 font-display text-base font-semibold text-foreground">
                {title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            </motion.div>
          ))}
        </ScrollReveal>

      </div>
    </section>
  );
}
