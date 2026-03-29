import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ArborGRC — Governance, Risk & Compliance Platform",
  description:
    "ArborGRC is an enterprise-grade GRC platform built for modern security teams. Manage ISO 27001, SOC 2, UAE-IA, ISO 31000, and ITIL 4 compliance in one unified workspace.",
  keywords: [
    "GRC platform",
    "governance risk compliance",
    "ISO 27001",
    "SOC 2 compliance",
    "UAE-IA",
    "ISO 31000",
    "ITIL 4",
    "compliance management software",
    "risk management",
    "enterprise GRC",
  ],
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  openGraph: {
    title: "ArborGRC — Governance, Risk & Compliance Platform",
    description:
      "Enterprise-grade GRC platform for ISO 27001, SOC 2, UAE-IA, ISO 31000, and ITIL 4. Unified compliance management built for modern security teams.",
    type: "website",
    locale: "en_US",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${playfair.variable} ${jetbrains.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
