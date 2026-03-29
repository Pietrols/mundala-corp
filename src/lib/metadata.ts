import type { Metadata } from "next";
import { COMPANY_INFO } from "./constants";

const baseUrl = COMPANY_INFO.url;

/** JSON-LD structured data for Organization */
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: COMPANY_INFO.name,
  description:
    "Trusted Zambian supplier of petroleum products, mining equipment, heavy machinery, and XRF mineral analytical solutions.",
  url: baseUrl,
  logo: `${baseUrl}/images/logo.svg`,
  foundingDate: COMPANY_INFO.foundingDate,
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "Plot No.14, Lungwebungu Road, Rhodespark",
      addressLocality: "Lusaka",
      addressCountry: "ZM",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "Plot No. 3683, Chibuluma Road, Light Industrial Area",
      addressLocality: "Kitwe",
      addressCountry: "ZM",
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+260968875851",
    email: "mundalacorp@yahoo.com",
    contactType: "sales",
  },
  sameAs: [],
};

/** Generate page-level metadata with optional overrides */
export function generateMetadata(overrides?: Partial<Metadata>): Metadata {
  const defaults: Metadata = {
    title: `${COMPANY_INFO.name} | Industrial Supply & Mining Solutions in Zambia`,
    description:
      "Trusted Zambian supplier of petroleum products, mining equipment, heavy machinery, and XRF mineral analytical solutions. Exclusive BSI partner for Africa. Offices in Lusaka and Kitwe.",
    keywords: [
      "mining supplies Zambia",
      "petroleum products Zambia",
      "XRF mineral analysis Africa",
      "heavy equipment Zambia",
      "BSI analytical equipment",
      "industrial supplier Zambia",
      "mining reagents",
      "Mundala Corporation",
    ],
    openGraph: {
      type: "website",
      locale: "en_ZM",
      siteName: COMPANY_INFO.name,
      images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      images: ["/og-image.jpg"],
    },
  };

  return { ...defaults, ...overrides };
}
