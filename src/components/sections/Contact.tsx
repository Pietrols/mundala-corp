"use client";

import { MapPin, Phone, Mail } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { OFFICES, CONTACT } from "@/lib/constants";

// ─────────────────────────────────────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────────────────────────────────────

function OfficeCard({ office }: { office: (typeof OFFICES)[number] }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
      <h3 className="mb-4 font-display text-base font-semibold text-white">
        {office.name}
      </h3>
      <ul className="space-y-3">
        <li className="flex items-start gap-3">
          <MapPin size={16} className="mt-0.5 shrink-0 text-accent" strokeWidth={1.75} />
          <span className="text-sm leading-relaxed text-white/70">
            {office.address[0]}
            <br />
            {office.address[1]}
          </span>
        </li>
        <li className="flex items-center gap-3">
          <Phone size={16} className="shrink-0 text-accent" strokeWidth={1.75} />
          <span className="text-sm text-white/70">
            {CONTACT.phones[0]} &nbsp;·&nbsp; {CONTACT.phones[1]}
          </span>
        </li>
        <li className="flex items-center gap-3">
          <Mail size={16} className="shrink-0 text-accent" strokeWidth={1.75} />
          <a
            href={`mailto:${CONTACT.email}`}
            className="text-sm text-white/70 transition-colors duration-150 hover:text-white"
          >
            {CONTACT.email}
          </a>
        </li>
      </ul>
    </div>
  );
}

// Shared input class — extracted to avoid repetition
const inputCls =
  "w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white " +
  "placeholder:text-white/30 backdrop-blur-sm transition-colors duration-150 " +
  "focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/40";

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

export default function Contact() {
  return (
    <section
      id="contact"
      aria-label="Contact Mundala Corporation"
      className="bg-[hsl(220_25%_10%)] py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ── Header ─────────────────────────────────────────────────────── */}
        <ScrollReveal className="mb-12 text-center md:mb-16">
          <p className="micro-label mb-3">Get In Touch</p>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Let&apos;s Build Something Together
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-14">

          {/* ── Left: office cards ─────────────────────────────────────── */}
          <ScrollReveal direction="left" duration={0.7}>
            <p className="mb-5 text-sm font-medium uppercase tracking-wider text-white/50">
              Our Offices
            </p>
            <div className="space-y-4">
              {OFFICES.map((office) => (
                <OfficeCard key={office.id} office={office} />
              ))}
            </div>
          </ScrollReveal>

          {/* ── Right: contact form ───────────────────────────────────── */}
          <ScrollReveal direction="right" duration={0.7} delay={0.1}>
            <form
              action="https://formspree.io/f/placeholder"
              method="POST"
              className="space-y-4"
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-white/60">
                    Full Name <span className="text-accent">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className={inputCls}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-white/60">
                    Email Address <span className="text-accent">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    className={inputCls}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="mb-1.5 block text-xs font-medium text-white/60">
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Your organisation"
                  className={inputCls}
                />
              </div>

              <div>
                <label htmlFor="subject" className="mb-1.5 block text-xs font-medium text-white/60">
                  Subject <span className="text-accent">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  defaultValue=""
                  className={inputCls + " cursor-pointer"}
                >
                  <option value="" disabled className="bg-slate-900 text-white/40">
                    Select a topic…
                  </option>
                  <option value="petroleum" className="bg-slate-900 text-white">Petroleum Products</option>
                  <option value="mining" className="bg-slate-900 text-white">Mining Products</option>
                  <option value="heavy-equipment" className="bg-slate-900 text-white">Heavy Equipment</option>
                  <option value="xrf" className="bg-slate-900 text-white">XRF / BSI Partnership</option>
                  <option value="general" className="bg-slate-900 text-white">General Enquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-white/60">
                  Message <span className="text-accent">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us about your requirements…"
                  className={inputCls + " resize-none"}
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-primary px-6 py-3 font-display font-semibold
                           text-white shadow-md transition-all duration-200
                           hover:bg-primary-light hover:-translate-y-0.5 hover:shadow-lg
                           active:translate-y-0 active:shadow-md"
              >
                Send Message
              </button>
            </form>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
