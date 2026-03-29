// ============================================================
// Company-wide constants — single source of truth for all data.
// Update this file when contact details, offices, or services change.
// ============================================================

// ------------------------------------------------------------
// Interfaces
// ------------------------------------------------------------

export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  /** ISO 8601 date string */
  foundingDate: string;
  url: string;
  logo: string;
  logoWhite: string;
}

export interface SocialLinks {
  linkedin: string;
  youtube: string;
}

export interface ContactInfo {
  email: string;
  phones: [string, string];
  social: SocialLinks;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Office {
  id: string;
  name: string;
  /** Each string is one displayed line of the address */
  address: [string, string];
  coordinates: Coordinates;
}

export interface Stat {
  label: string;
  value: string;
}

export interface NavLink {
  label: string;
  /** Anchor href, e.g. "#services" */
  href: string;
}

/** Lucide icon name — extend this union as new icons are added */
export type LucideIconName =
  | "Shield"
  | "Award"
  | "Handshake"
  | "Heart"
  | "Zap"
  | "Fuel"
  | "Mountain"
  | "Truck"
  | "Microscope"
  | "BadgeCheck"
  | "TrendingDown"
  | "Clock"
  | "Settings"
  | "Headphones";

export interface CoreValue {
  id: string;
  icon: LucideIconName;
  title: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  icon: LucideIconName;
  description: string;
  products: string[];
  industries: string[];
  image: string;
  /** Elements measurable by XRF — only present for the analytical equipment service */
  elements?: string[];
}

export interface ValueProposition {
  id: string;
  icon: LucideIconName;
  title: string;
  description: string;
}

// ------------------------------------------------------------
// Constants
// ------------------------------------------------------------

export const COMPANY_INFO = {
  name: "Mundala Corporation Limited",
  tagline: "Your reliable African plug",
  description:
    "A Zambian industrial supply company providing petroleum products, mining equipment, heavy machinery, and XRF mineral analytical solutions across Africa.",
  foundingDate: "2021-09-21",
  url: "https://www.mundalacorp.com",
  logo: "/images/logo.svg",
  logoWhite: "/images/logo-white.svg",
} satisfies CompanyInfo;

export const CONTACT = {
  email: "mundalacorp@yahoo.com",
  phones: ["+260 968 875 851", "+260 965 772 181"],
  social: {
    linkedin: "",
    youtube: "",
  },
} satisfies ContactInfo;

export const OFFICES: Office[] = [
  {
    id: "lusaka",
    name: "Lusaka Office",
    address: ["Plot No.14, Lungwebungu Road", "Rhodespark, Lusaka, Zambia"],
    coordinates: { lat: -15.4065, lng: 28.2871 },
  },
  {
    id: "kitwe",
    name: "Kitwe Office",
    address: [
      "Plot No. 3683, Chibuluma Road",
      "Light Industrial Area, Kitwe, Zambia",
    ],
    coordinates: { lat: -12.8024, lng: 28.2132 },
  },
];

export const STATS: Stat[] = [
  { label: "Established", value: "2021" },
  { label: "Offices", value: "2" },
  { label: "Industries Served", value: "4" },
  { label: "Partnership", value: "Exclusive BSI Partner" },
];

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Partnership", href: "#partnership" },
  { label: "Contact", href: "#contact" },
];

export const CORE_VALUES: CoreValue[] = [
  {
    id: "integrity",
    icon: "Shield",
    title: "Integrity",
    description: "Honest dealings in every transaction.",
  },
  {
    id: "reliability",
    icon: "Award",
    title: "Reliability",
    description: "Consistent delivery on every commitment.",
  },
  {
    id: "respect",
    icon: "Handshake",
    title: "Respect",
    description: "Valuing every client and partner relationship.",
  },
  {
    id: "loyalty",
    icon: "Heart",
    title: "Loyalty",
    description: "Long-term partnerships built on trust.",
  },
  {
    id: "efficiency",
    icon: "Zap",
    title: "Efficiency",
    description: "Streamlined processes that save time and cost.",
  },
];

export const SERVICES: Service[] = [
  {
    id: "petroleum",
    title: "Petroleum Products",
    icon: "Fuel",
    description:
      "Sale and distribution of motor and industrial fuels for power generation, manufacturing, mining, construction, transportation, and hospitality.",
    products: ["Petrol", "Diesel", "Heavy Fuel Oil (HFO)", "Jet A1"],
    industries: [
      "Power Generation",
      "Manufacturing",
      "Mining",
      "Road Construction",
      "Transportation",
      "Hospitality",
    ],
    image: "/images/service-petroleum.webp",
  },
  {
    id: "mining",
    title: "Mining Products",
    icon: "Mountain",
    description:
      "Full range of mining consumables and equipment through an established supplier network with competitive pricing.",
    products: [
      "Mining Solvents",
      "Mining Reagents",
      "Drilling Equipment",
      "Metallurgical Coal",
      "CIL Plant Equipment",
      "Gaskets",
      "Pumps / Valves / Motors",
      "Samplers",
    ],
    industries: ["Mining", "Metallurgy", "Mineral Processing"],
    image: "/images/service-mining.webp",
  },
  {
    id: "heavy-equipment",
    title: "Heavy Equipment",
    icon: "Truck",
    description:
      "Supply of heavy machinery essential for mining operations with comprehensive aftersales support.",
    products: [
      "Articulated Dump Trucks",
      "Loaders",
      "Drilling Rigs",
      "Electric Vehicles (Toyota Landcruisers)",
      "EV Underground Loaders",
      "EV Underground Dump Trucks",
    ],
    industries: ["Mining", "Construction", "Infrastructure"],
    image: "/images/service-equipment.webp",
  },
  {
    id: "xrf",
    title: "Mineral Analytical Equipment (XRF)",
    icon: "Microscope",
    description:
      "Exclusive BSI partnership delivering cutting-edge XRF mineral analysis for real-time ore grade assessment across Africa.",
    products: ["On-line XRF analyzers for conveyor belt mineral analysis"],
    industries: ["Mining", "Mineral Processing", "Quality Control"],
    elements: [
      "Copper",
      "Cobalt",
      "Gold",
      "Iron",
      "Calcium",
      "Magnesium",
      "Manganese",
      "Titanium",
      "Nickel",
      "Coal",
    ],
    image: "/images/service-xrf.webp",
  },
];

export const WHY_CHOOSE_US: ValueProposition[] = [
  {
    id: "compliance",
    icon: "BadgeCheck",
    title: "Regulatory Compliance",
    description:
      "Fully licensed across all Zambian regulatory bodies, ensuring every product meets legal and safety standards.",
  },
  {
    id: "quality",
    icon: "Award",
    title: "Quality Assurance",
    description:
      "Strict compliance standards applied to every product we supply, from petroleum to precision instruments.",
  },
  {
    id: "pricing",
    icon: "TrendingDown",
    title: "Competitive Pricing",
    description:
      "Deep understanding of operational costs means we deliver genuine value without compromising quality.",
  },
  {
    id: "delivery",
    icon: "Clock",
    title: "Reliable Delivery",
    description:
      "Timely delivery is a core commitment — your operations should never wait on us.",
  },
  {
    id: "custom",
    icon: "Settings",
    title: "Custom Solutions",
    description:
      "Tailor-suited products and configurations designed for your specific operational requirements.",
  },
  {
    id: "aftersales",
    icon: "Headphones",
    title: "Aftersales Support",
    description:
      "Comprehensive post-purchase technical support to keep your equipment and operations running smoothly.",
  },
];
