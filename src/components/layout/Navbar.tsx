"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // ── Scroll listener ─────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll(); // set initial state without waiting for a scroll event
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Body scroll lock when drawer is open ────────────────────
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // ── Keyboard: close on Escape ────────────────────────────────
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileOpen) closeMobile();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Focus management ─────────────────────────────────────────
  useEffect(() => {
    if (mobileOpen) {
      // Small delay lets the animation start before we steal focus
      const id = setTimeout(() => closeButtonRef.current?.focus(), 50);
      return () => clearTimeout(id);
    } else {
      hamburgerRef.current?.focus();
    }
  }, [mobileOpen]);

  // ── Helpers ──────────────────────────────────────────────────
  const openMobile = () => setMobileOpen(true);
  const closeMobile = () => setMobileOpen(false);

  const scrollTo = (href: string) => {
    closeMobile();
    const id = href.replace("#", "");
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // ── Derived style helpers ─────────────────────────────────────
  const linkClass = scrolled
    ? "text-foreground hover:text-white"
    : "text-white/90 hover:text-white";

  const iconClass = scrolled
    ? "text-foreground hover:bg-muted"
    : "text-white hover:bg-white/10";

  // ── Render ────────────────────────────────────────────────────
  return (
    <>
      {/* ── Top bar ─────────────────────────────────────────── */}
      <header
        className={[
          "fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-in-out",
          scrolled
            ? "bg-[hsl(220_18%_8%/0.90)] backdrop-blur-xl border-b border-border shadow-md"
            : "bg-transparent",
        ].join(" ")}
      >
        <nav
          aria-label="Main navigation"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="flex h-16 items-center justify-between md:h-20">
            {/* Logo ─────────────────────────────────────────── */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#home");
              }}
              aria-label="Mundala Corporation — back to top"
              className="select-none"
            >
              <span
                className={[
                  "font-display font-bold tracking-tight transition-colors duration-300",
                  scrolled ? "text-foreground" : "text-white",
                ].join(" ")}
              >
                <span className="text-2xl">m</span>
                <span className="text-xl">undala</span>
              </span>
              <span className="font-display text-xl font-medium text-white/70 transition-colors duration-300">
                {" "}
                Corp
              </span>
            </a>

            {/* Desktop links ──────────────────────────────── */}
            <ul className="hidden lg:flex items-center gap-8 list-none m-0 p-0">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.href);
                    }}
                    className={[
                      "font-display font-medium text-sm transition-colors duration-150",
                      linkClass,
                    ].join(" ")}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Right side ─────────────────────────────────── */}
            <div className="flex items-center gap-3">
              {/* Desktop CTA */}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("#contact");
                }}
                className="hidden lg:inline-flex items-center rounded-lg bg-primary px-5 py-2.5 font-display font-semibold text-sm text-primary-foreground shadow-sm transition-all duration-200 hover:bg-primary-light hover:-translate-y-0.5 hover:shadow-[0_8px_30px_hsl(232_45%_37%/0.35)] active:translate-y-0 active:shadow-sm"
              >
                Get In Touch
              </a>

              {/* Hamburger */}
              <button
                ref={hamburgerRef}
                type="button"
                onClick={openMobile}
                aria-label="Open navigation menu"
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
                className={[
                  "lg:hidden rounded-lg p-2 transition-colors duration-150",
                  iconClass,
                ].join(" ")}
              >
                <Menu size={22} strokeWidth={2} />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* ── Mobile drawer ─────────────────────────────────────── */}
      {/*
        Rendered as a sibling to <header> — not a child — so it
        participates in the root stacking context and isn't clipped
        by the header's own stacking context.
      */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Scrim */}
            <motion.div
              key="mobile-scrim"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-60 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={closeMobile}
              aria-hidden="true"
            />

            {/* Panel */}
            <motion.div
              id="mobile-menu"
              key="mobile-panel"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "tween",
                duration: 0.3,
                ease: [0.32, 0.72, 0, 1],
              }}
              className="fixed inset-y-0 right-0 z-70 flex w-80 max-w-[calc(100vw-3rem)] flex-col bg-card shadow-2xl lg:hidden"
            >
              {/* Panel header */}
              <div className="flex items-center justify-between border-b border-border px-6 py-5">
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo("#home");
                  }}
                  aria-label="Mundala Corporation"
                  className="select-none"
                >
                  <span className="font-display text-lg font-bold text-foreground">
                    MUNDALA
                  </span>
                  <span className="font-display text-lg font-medium text-foreground/70">
                    {" "}
                    Corp
                  </span>
                </a>

                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={closeMobile}
                  aria-label="Close navigation menu"
                  className="rounded-lg p-2 text-muted-foreground transition-colors duration-150 hover:bg-muted hover:text-foreground"
                >
                  <X size={20} strokeWidth={2} />
                </button>
              </div>

              {/* Links — stagger in from the right */}
              <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-6">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.href);
                    }}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.05 + i * 0.055,
                      duration: 0.22,
                      ease: "easeOut",
                    }}
                    className="flex items-center rounded-lg px-4 py-3.5 font-display font-medium text-foreground transition-colors duration-150 hover:bg-muted hover:text-foreground"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              {/* CTA */}
              <motion.div
                className="border-t border-border px-6 py-6"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.36, duration: 0.22 }}
              >
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo("#contact");
                  }}
                  className="flex w-full items-center justify-center rounded-lg bg-primary py-3.5 font-display font-semibold text-primary-foreground transition-colors duration-200 hover:bg-primary-light"
                >
                  Get In Touch
                </a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
