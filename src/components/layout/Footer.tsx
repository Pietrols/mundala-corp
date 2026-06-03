import { COMPANY_INFO, CONTACT, NAV_LINKS, SERVICES } from "@/lib/constants";

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      aria-label="Site footer"
      className="bg-[hsl(220_20%_5%)]"
    >
      {/* ── Main grid ──────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:py-16">

          {/* Col 1 — Brand ─────────────────────────────────────────────── */}
          <div className="lg:col-span-1">
            <a
              href="#home"
              aria-label="Mundala Corporation — back to top"
              className="mb-4 inline-block select-none"
            >
              <span className="font-display text-xl font-bold text-white">
                mundala
              </span>
              <span className="font-display text-xl font-medium text-white/60">
                {" "}Corp
              </span>
            </a>
            <p className="mb-5 text-sm leading-relaxed text-white/50 text-justify">
              {COMPANY_INFO.description}
            </p>
            {/* Social placeholder icons */}
            <div className="flex gap-3">
              <a
                href={CONTACT.social.linkedin || "#"}
                aria-label="LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10
                           text-white/40 transition-colors duration-150 hover:border-white/30 hover:text-white"
              >
                {/* LinkedIn mark */}
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href={CONTACT.social.youtube || "#"}
                aria-label="YouTube"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10
                           text-white/40 transition-colors duration-150 hover:border-white/30 hover:text-white"
              >
                {/* YouTube play mark */}
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="hsl(220 20% 5%)" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2 — Quick Links ────────────────────────────────────────── */}
          <div>
            <h3 className="mb-4 font-display text-xs font-semibold uppercase tracking-wider text-white/40">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 transition-colors duration-150 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Services ───────────────────────────────────────────── */}
          <div>
            <h3 className="mb-4 font-display text-xs font-semibold uppercase tracking-wider text-white/40">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="text-sm text-white/60 transition-colors duration-150 hover:text-white"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact ────────────────────────────────────────────── */}
          <div>
            <h3 className="mb-4 font-display text-xs font-semibold uppercase tracking-wider text-white/40">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <p className="mb-0.5 font-medium text-white/80">Lusaka</p>
                <p>Plot No.14, Lungwebungu Road</p>
                <p>Rhodespark, Lusaka, Zambia</p>
              </li>
              <li>
                <p className="mb-0.5 font-medium text-white/80">Kitwe</p>
                <p>Plot No. 3683, Chibuluma Road</p>
                <p>Light Industrial Area, Kitwe, Zambia</p>
              </li>
              <li className="pt-1">
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="transition-colors duration-150 hover:text-white"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT.phones[0].replace(/\s/g, "")}`}
                  className="transition-colors duration-150 hover:text-white"
                >
                  {CONTACT.phones[0]}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* ── Bottom bar ─────────────────────────────────────────────────── */}
        <div className="border-t border-white/10 py-6">
          <p className="text-center text-xs text-white/35">
            &copy; {year} {COMPANY_INFO.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
