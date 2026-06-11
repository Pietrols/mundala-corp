// ============================================================
// Company-wide constants - single source of truth for all data.
// Update this file when contact details, offices, or services change.
// ============================================================

// -
// Interfaces
// -

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

/** Lucide icon name - extend this union as new icons are added */
export type LucideIconName =
  | "Shield"
  | "ShieldCheck"
  | "Award"
  | "Handshake"
  | "Heart"
  | "Zap"
  | "Fuel"
  | "Pickaxe"
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
  /** Longer paragraph shown in the detail modal */
  detailedDescription: string;
  products: string[];
  industries: string[];
  /** Short value proposition shown in the detail modal (Mining, Heavy Equipment, XRF) */
  valueProp?: string;
  image: string;
  /** Elements measurable by XRF - only present for the analytical equipment service */
  elements?: string[];
}

export interface ValueProposition {
  id: string;
  icon: LucideIconName;
  title: string;
  description: string;
}

// -
// Constants
// -

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
  email: "info@mundalacorp.com",
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
    detailedDescription:
      "Mundala Corporation is a licensed petroleum distributor supplying motor and industrial fuels across Zambia. We source and deliver a full range of petroleum products - petrol, diesel, heavy fuel oil (HFO), and Jet A1 - to industrial operations, mining sites, power plants, construction projects, and hospitality businesses. Our supply chain is built on regulatory compliance: we hold all required Zambian Energy Regulation Board (ERB) licences and maintain strict quality standards on every litre we distribute. Whether you need bulk fuel supply contracts for a remote mining operation or reliable diesel delivery to a manufacturing plant, Mundala's logistics network ensures consistent, on-time delivery wherever you need it.",
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
    icon: "Pickaxe",
    description:
      "Full range of mining consumables and equipment through an established supplier network with competitive pricing.",
    detailedDescription:
      "Mundala supplies a comprehensive range of mining consumables and specialist equipment sourced through a well-established global supplier network. Our mining division serves Zambia's Copperbelt and beyond, providing everything from process chemicals and reagents to capital equipment for CIL plants and solvent extraction circuits. We understand that mining operations run on tight margins - our deep supplier relationships allow us to offer competitive pricing without compromising on product quality or delivery timelines. From routine consumables like gaskets, pumps, and samplers to specialist reagents and metallurgical coal, we stock or can rapidly source the products that keep your operation running at full capacity.",
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
    valueProp:
      "Competitive pricing through deep supplier relationships, with custom sourcing capability for specialist or hard-to-find requirements.",
    image: "/images/service-mining.webp",
  },
  {
    id: "heavy-equipment",
    title: "Heavy Equipment",
    icon: "Truck",
    description:
      "Supply of heavy machinery essential for mining operations with comprehensive aftersales support.",
    detailedDescription:
      "Mundala's heavy equipment division provides mining companies and construction contractors with top-specification machinery sourced from leading global manufacturers. Our range includes articulated dump trucks, front-end loaders, drilling rigs, and a growing selection of electric vehicles for both surface and underground operations. As the industry moves toward zero-emission underground mining, we supply next-generation EV underground loaders and dump trucks designed for Zambia's deep copper mines. Every equipment sale is backed by comprehensive aftersales support - technical training for operators and maintenance teams, spare parts supply, and flexible service agreements structured to maximise uptime and protect your capital investment.",
    products: [
      "Articulated Dump Trucks",
      "Loaders",
      "Drilling Rigs",
      "Electric Vehicles (Toyota Landcruisers)",
      "EV Underground Loaders",
      "EV Underground Dump Trucks",
    ],
    industries: ["Mining", "Construction", "Infrastructure"],
    valueProp:
      "Top-brand partnerships combined with comprehensive aftersales support - training, spare parts supply, and service agreements to maximise equipment uptime.",
    image: "/images/service-equipment.webp",
  },
  {
    id: "xrf",
    title: "Mineral Analytical Equipment (XRF)",
    icon: "Microscope",
    description:
      "Exclusive BSI partnership delivering cutting-edge XRF mineral analysis for real-time ore grade assessment across Africa.",
    detailedDescription:
      "As the exclusive African partner for Baltic Scientific Instruments (BSI), Mundala brings the world's most advanced on-line XRF mineral analysis technology to African mining operations. BSI's conveyor belt XRF analysers deliver continuous, real-time ore grade data without stopping the belt or requiring laboratory sampling - enabling mine operators to make instant, data-driven decisions about ore routing, blending, and reagent dosing. Founded in 1994 and rooted in decades of Soviet-era radiation science research dating to 1966, BSI's instruments are engineered for the harsh conditions of industrial mining environments. Their technology is already deployed across global mining operations, saving millions in operational costs by eliminating misrouted ore, reducing reagent overconsumption, and optimising plant throughput.",
    products: ["On-line XRF analyzers for conveyor belt mineral analysis"],
    industries: ["Mining", "Mineral Processing", "Quality Control"],
    valueProp:
      "Real-time ore grade assessment - continuous, non-contact, and faster than any laboratory method, directly reducing operational costs and improving recovery rates.",
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
      "Timely delivery is a core commitment - your operations should never wait on us.",
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
