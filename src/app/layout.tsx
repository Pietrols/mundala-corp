import type { Metadata } from "next";
import { Montserrat, DM_Sans } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mundalacorp.com"),
  title:
    "Mundala Corporation Limited | Industrial Supply & Mining Solutions in Zambia",
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
    siteName: "Mundala Corporation Limited",
    title:
      "Mundala Corporation Limited | Industrial Supply & Mining Solutions in Zambia",
    description:
      "Trusted Zambian supplier of petroleum products, mining equipment, heavy machinery, and XRF mineral analytical solutions. Exclusive BSI partner for Africa.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mundala Corporation Limited",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Mundala Corporation Limited | Industrial Supply & Mining Solutions in Zambia",
    description:
      "Trusted Zambian supplier of petroleum products, mining equipment, heavy machinery, and XRF mineral analytical solutions.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${dmSans.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
