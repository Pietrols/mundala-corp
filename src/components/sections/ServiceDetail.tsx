"use client";

import Image from "next/image";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  ArrowRight,
  Fuel,
  Pickaxe,
  Truck,
  Microscope,
  type LucideIcon,
} from "lucide-react";
import type { Service, LucideIconName } from "@/lib/constants";

// ─────────────────────────────────────────────────────────────────────────────
// Icon + image maps
// ─────────────────────────────────────────────────────────────────────────────

const ICONS: Partial<Record<LucideIconName, LucideIcon>> = {
  Fuel,
  Pickaxe,
  Truck,
  Microscope,
};

const SERVICE_IMAGES: Record<string, string> = {
  petroleum: "/images/petroleum.jpg",
  mining: "/images/hero-mining.jpg",
  "heavy-equipment": "/images/heavy-equipment.jpg",
  xrf: "/images/IMG_3053.jpeg",
};

// ─────────────────────────────────────────────────────────────────────────────
// Props
// ─────────────────────────────────────────────────────────────────────────────

export interface ServiceDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: Service | null;
}

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

export default function ServiceDetailModal({
  isOpen,
  onClose,
  service,
}: ServiceDetailModalProps) {
  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  const handleRequestQuote = () => {
    onClose();
    // Let the drawer exit animation complete before scrolling
    setTimeout(() => {
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 350);
  };

  return (
    <AnimatePresence>
      {isOpen && service && (
        <>
          {/* ── Backdrop ──────────────────────────────────────────────────── */}
          <motion.div
            key="service-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-80 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* ── Drawer panel ──────────────────────────────────────────────── */}
          <motion.div
            key="service-modal-panel"
            role="dialog"
            aria-modal="true"
            aria-label={`${service.title} - full details`}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "tween",
              duration: 0.35,
              ease: [0.32, 0.72, 0, 1],
            }}
            className="fixed inset-y-0 right-0 z-90 flex w-full max-w-2xl flex-col
                       bg-card shadow-2xl overflow-hidden"
          >
            {/* ── Hero image ──────────────────────────────────────────────── */}
            <div className="relative h-52 w-full shrink-0 sm:h-64">
              <Image
                src={SERVICE_IMAGES[service.id] ?? "/images/hero-bg.webp"}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 672px"
              />
              {/* Gradient fades image into the card background below */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom, hsl(220 16% 12% / 0.25) 0%, transparent 35%, hsl(220 16% 12% / 0.75) 100%)",
                }}
              />

              {/* Close button */}
              <button
                type="button"
                onClick={onClose}
                aria-label="Close service details"
                className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center
                           rounded-lg bg-black/50 text-white backdrop-blur-sm
                           transition-colors duration-150 hover:bg-black/70"
              >
                <X size={18} strokeWidth={2} />
              </button>
            </div>

            {/* ── Scrollable body ─────────────────────────────────────────── */}
            <div className="flex flex-1 flex-col overflow-y-auto">
              <div className="px-6 pt-6 pb-2 sm:px-8 sm:pt-8">
                {/* Icon + title */}
                <div className="mb-5 flex items-center gap-4">
                  {(() => {
                    const Icon = ICONS[service.icon];
                    return Icon ? (
                      <div
                        className="flex h-12 w-12 shrink-0 items-center justify-center
                                   rounded-xl bg-white/10"
                      >
                        <Icon
                          size={22}
                          className="text-white"
                          strokeWidth={1.75}
                        />
                      </div>
                    ) : null;
                  })()}
                  <h2 className="font-display text-2xl font-bold text-foreground">
                    {service.title}
                  </h2>
                </div>

                {/* Detailed description */}
                <p className="mb-8 leading-relaxed text-muted-foreground">
                  {service.detailedDescription}
                </p>

                {/* Key Products */}
                <div className="mb-8">
                  <div className="mb-4 flex items-center gap-3">
                    <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-primary">
                      Key Products
                    </h3>
                    <div className="h-px flex-1 bg-white/10" />
                  </div>
                  <ul className="space-y-2.5">
                    {service.products.map((product) => (
                      <li key={product} className="flex items-start gap-3">
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/40"
                          aria-hidden="true"
                        />
                        <span className="text-sm leading-relaxed text-foreground/85">
                          {product}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* XRF: elements measured */}
                {service.elements && (
                  <div className="mb-8">
                    <div className="mb-4 flex items-center gap-3">
                      <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-primary">
                        Elements Measured
                      </h3>
                      <div className="h-px flex-1 bg-white/10" />
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {service.elements.map((el) => (
                        <span
                          key={el}
                          className="rounded-full border border-white/10 bg-white/5
                                     px-3 py-1 font-display text-xs font-medium
                                     text-muted-foreground"
                        >
                          {el}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Industries served */}
                <div className="mb-8">
                  <div className="mb-4 flex items-center gap-3">
                    <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-primary">
                      Industries Served
                    </h3>
                    <div className="h-px flex-1 bg-white/10" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {service.industries.map((ind) => (
                      <span
                        key={ind}
                        className="rounded-full border border-primary/30 bg-primary/10
                                   px-3 py-1 font-display text-xs font-semibold
                                   text-primary-light"
                      >
                        {ind}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Value proposition */}
                {service.valueProp && (
                  <div className="mb-6 rounded-xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm leading-relaxed text-white/70">
                      <span className="font-semibold text-white">
                        Why Mundala:{" "}
                      </span>
                      {service.valueProp}
                    </p>
                  </div>
                )}
              </div>

              {/* ── CTA - sticks to the bottom ──────────────────────────── */}
              <div className="mt-auto border-t border-white/10 px-6 py-6 sm:px-8">
                <button
                  type="button"
                  onClick={handleRequestQuote}
                  className="flex w-full items-center justify-center gap-2 rounded-lg
                             bg-primary px-6 py-3.5 font-display font-semibold
                             text-primary-foreground shadow-md transition-all duration-200
                             hover:bg-primary-light hover:-translate-y-0.5
                             hover:shadow-[0_8px_30px_hsl(232_45%_37%/0.35)]
                             active:translate-y-0 active:shadow-md"
                >
                  Request a Quote
                  <ArrowRight size={16} strokeWidth={2.5} />
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
