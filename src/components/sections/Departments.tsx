"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Fuel, Pickaxe, Truck, Microscope, type LucideIcon } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SERVICES } from "@/lib/constants";
import type { LucideIconName, Service } from "@/lib/constants";

// ─────────────────────────────────────────────────────────────────────────────
// Icon map
// ─────────────────────────────────────────────────────────────────────────────

const ICONS: Partial<Record<LucideIconName, LucideIcon>> = {
  Fuel,
  Pickaxe,
  Truck,
  Microscope,
};

// ─────────────────────────────────────────────────────────────────────────────
// Local image map
// ─────────────────────────────────────────────────────────────────────────────

const SERVICE_IMAGES: Record<string, string> = {
  petroleum: "/images/petroleum.jpg",
  mining: "/images/hero-mining.jpg",
  "heavy-equipment": "/images/heavy-equipment.jpg",
  xrf: "/images/IMG_3053.jpeg",
};

// Tab labels (shorter than full title for the tab row)
const TAB_LABELS: Record<string, string> = {
  petroleum: "Petroleum Division",
  mining: "Mining Products",
  "heavy-equipment": "Heavy Equipment",
  xrf: "Mineral Analytical Equipment",
};

// ─────────────────────────────────────────────────────────────────────────────
// Content panel
// ─────────────────────────────────────────────────────────────────────────────

function DepartmentContent({ service }: { service: Service }) {
  const Icon = ICONS[service.icon];
  const imageSrc = SERVICE_IMAGES[service.id] ?? service.image;

  return (
    <motion.div
      key={service.id}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-14"
    >
      {/* ── Left: image ──────────────────────────────────────────────────── */}
      <div className="relative aspect-4/3 overflow-hidden rounded-2xl shadow-xl">
        <Image
          src={imageSrc}
          alt={service.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Bottom gradient so image bleeds into bg */}
        <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
      </div>

      {/* ── Right: detail ────────────────────────────────────────────────── */}
      <div className="flex flex-col justify-center">
        {/* Icon + title row */}
        <div className="mb-5 flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
            {Icon && <Icon size={20} className="text-primary" strokeWidth={1.75} />}
          </div>
          <h3 className="font-display text-2xl font-bold text-foreground">
            {service.title}
          </h3>
        </div>

        {/* Description */}
        <p className="mb-7 leading-relaxed text-muted-foreground">
          {service.description}
        </p>

        {/* Key Products */}
        <div>
          <div className="mb-4 flex items-center gap-3">
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-primary">
              Key Products
            </h4>
            {/* Gold-line divider */}
            <div className="h-px flex-1 bg-accent/50" />
          </div>

          <ul className="space-y-2">
            {service.products.map((product) => (
              <li key={product} className="flex items-start gap-2.5">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                  aria-hidden="true"
                />
                <span className="text-sm text-muted-foreground">{product}</span>
              </li>
            ))}
          </ul>

          {/* XRF: measurable elements */}
          {service.elements && (
            <div className="mt-6">
              <div className="mb-3 flex items-center gap-3">
                <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-primary">
                  Elements Measured
                </h4>
                <div className="h-px flex-1 bg-accent/50" />
              </div>
              <div className="flex flex-wrap gap-2">
                {service.elements.map((el) => (
                  <span
                    key={el}
                    className="rounded-full border border-border bg-muted px-3 py-1
                               font-display text-xs font-medium text-muted-foreground"
                  >
                    {el}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Main component
// ─────────────────────────────────────────────────────────────────────────────

export default function Departments() {
  const [activeId, setActiveId] = useState(SERVICES[0].id);
  const activeService = SERVICES.find((s) => s.id === activeId)!;

  return (
    <section
      id="departments"
      aria-label="Departments and specializations"
      className="bg-background section-light py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ── Header ─────────────────────────────────────────────────────── */}
        <ScrollReveal className="mb-12 text-center md:mb-14">
          <p className="micro-label mb-3">Our Divisions</p>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Departments &amp; Specializations
          </h2>
        </ScrollReveal>

        {/* ── Tab row ────────────────────────────────────────────────────── */}
        <ScrollReveal delay={0.1} className="mb-10 flex flex-wrap justify-center gap-2 md:mb-12">
          {SERVICES.map((service) => {
            const isActive = service.id === activeId;
            return (
              <button
                key={service.id}
                type="button"
                onClick={() => setActiveId(service.id)}
                className={[
                  "rounded-lg px-5 py-2.5 font-display text-sm font-semibold transition-all duration-200",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground",
                ].join(" ")}
              >
                {TAB_LABELS[service.id]}
              </button>
            );
          })}
        </ScrollReveal>

        {/* ── Animated content panel ─────────────────────────────────────── */}
        <AnimatePresence mode="wait">
          <DepartmentContent key={activeId} service={activeService} />
        </AnimatePresence>

      </div>
    </section>
  );
}
