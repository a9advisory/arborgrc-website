"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Frameworks", href: "#frameworks" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
] as const;

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
      <div className="mx-auto max-w-[1200px] px-6 h-16 flex items-center justify-between gap-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <Image
            src="/logo.png"
            alt="ArborGRC logo"
            width={32}
            height={32}
            priority
          />
          <span
            className="text-lg"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            <span className="text-stone-900 font-semibold">Arbor</span>
            <span className="font-semibold" style={{ color: "#15803d" }}>
              GRC
            </span>
          </span>
        </Link>

        {/* Center nav — desktop */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="px-3 py-1.5 text-sm text-stone-600 hover:text-green-700 transition-colors duration-150 rounded"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Right actions — desktop */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <Link
            href="/signin"
            className="text-sm text-stone-600 hover:text-stone-900 transition-colors duration-150"
          >
            Sign In
          </Link>
          <Link
            href="/trial"
            className="text-sm font-medium text-white px-4 py-2 transition-colors duration-150"
            style={{
              backgroundColor: "#15803d",
              borderRadius: "4px",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                "#166534")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                "#15803d")
            }
          >
            Start Free Trial
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-stone-600 hover:text-stone-900 transition-colors"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </header>
  );
}
