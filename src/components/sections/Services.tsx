"use client";

import Image from "next/image";
import {
  Fuel,
  Pickaxe,
  Truck,
  Microscope,
  type LucideIcon,
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SERVICES } from "@/lib/constants";
import type { LucideIconName } from "@/lib/constants";

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
// Local image map (keyed by service id)
// ─────────────────────────────────────────────────────────────────────────────

const SERVICE_IMAGES: Record<string, string> = {
  petroleum: "/images/petroleum.jpg",
  mining: "/images/hero-mining.jpg",
  "heavy-equipment": "/images/heavy-equipment.jpg",
  xrf: "/images/IMG_3053.jpeg",
};

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

export default function Services() {
  return (
    <section
      id="services"
      aria-label="Our services"
      className="section-dark py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* ── Header ─────────────────────────────────────────────────────── */}
        <ScrollReveal className="mb-16 text-center">
          <p className="micro-label mb-3">What We Offer</p>
          <h2 className="font-display text-4xl font-bold tracking-tight text-primary-light md:text-5xl">
            Comprehensive Industrial Solutions
          </h2>
        </ScrollReveal>

        {/* ── Cards grid ─────────────────────────────────────────────────── */}
        <div className="grid gap-8 md:grid-cols-2">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon];
            const imageSrc = SERVICE_IMAGES[service.id] ?? service.image;

            return (
              <ScrollReveal key={service.id} delay={i * 0.1}>
                <div
                  className="group flex h-[520px] flex-col overflow-hidden rounded-2xl
                             border border-white/10 bg-slate-900 transition-all duration-200
                             hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10"
                >
                  {/* ── Image — top 70% ────────────────────────────────── */}
                  <div className="relative h-[70%] w-full shrink-0">
                    <Image
                      src={imageSrc}
                      alt={service.title}
                      fill
                      className="object-cover opacity-60 transition-all duration-500
                                 group-hover:scale-105 group-hover:opacity-100"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Gradient overlay fades out on hover */}
                    <div
                      className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/20
                                 to-transparent transition-opacity duration-500 group-hover:opacity-0"
                    />
                  </div>

                  {/* ── Content — bottom 30% ───────────────────────────── */}
                  <div className="flex h-[30%] flex-col justify-center gap-3 px-8 py-6">
                    <div className="flex items-center gap-3">
                      {/* Icon */}
                      <div
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg
                                   bg-primary/20 text-primary-light transition-colors duration-200
                                   group-hover:bg-primary/30"
                      >
                        {Icon && <Icon size={20} strokeWidth={1.75} />}
                      </div>

                      {/* Title */}
                      <h3 className="font-display text-xl font-bold text-white">
                        {service.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="line-clamp-2 text-sm leading-relaxed text-slate-400">
                      {service.description}
                    </p>

                    {/* Product tags — first 3 */}
                    <div className="flex flex-wrap gap-2">
                      {service.products.slice(0, 3).map((product) => (
                        <span
                          key={product}
                          className="rounded-full border border-white/10 bg-white/5
                                     px-3 py-1 text-[10px] uppercase tracking-wider text-white/70"
                        >
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
