"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Fuel,
  Pickaxe,
  Truck,
  Microscope,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SERVICES } from "@/lib/constants";
import type { LucideIconName, Service } from "@/lib/constants";
import ServiceDetailModal from "./ServiceDetail";

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
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (service: Service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <section
        id="services"
        aria-label="Our services"
        className="bg-[hsl(220_25%_10%)] py-24 md:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* ── Header ─────────────────────────────────────────────────────── */}
          <ScrollReveal className="mb-16 text-center">
            <p className="micro-label mb-3">What We Offer</p>
            <div className="accent-line w-12 mx-auto mt-3 mb-6" />
            <h2 className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
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
                    className="group flex h-130 flex-col overflow-hidden rounded-2xl
                               border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-200
                               hover:border-white/30 hover:shadow-2xl hover:shadow-black/30 hover:-translate-y-1"
                  >
                    {/* ── Image - top 70% ────────────────────────────────── */}
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

                    {/* ── Content - bottom 30% ───────────────────────────── */}
                    <div className="flex h-[30%] flex-col justify-between px-8 py-5">
                      <div className="flex items-center gap-3">
                        {/* Icon */}
                        <div
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl
                                     bg-white/10 text-white transition-colors duration-200
                                     group-hover:bg-white/15"
                        >
                          {Icon && <Icon size={20} strokeWidth={1.75} />}
                        </div>

                        {/* Title */}
                        <h3 className="font-display text-xl font-bold text-white">
                          {service.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="line-clamp-2 text-sm leading-relaxed text-slate-400 text-justify">
                        {service.description}
                      </p>

                      {/* Learn More */}
                      <button
                        type="button"
                        onClick={() => openModal(service)}
                        className="flex items-center gap-1.5 self-start text-sm
                                   text-white/55 transition-colors duration-150
                                   hover:text-white"
                      >
                        Learn More
                        <ArrowRight size={14} strokeWidth={2} />
                      </button>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Service detail modal ─────────────────────────────────────────── */}
      <ServiceDetailModal
        isOpen={modalOpen}
        onClose={closeModal}
        service={selectedService}
      />
    </>
  );
}
