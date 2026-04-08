import Link from "next/link";
import Image from "next/image";

interface LegalLayoutProps {
  children: React.ReactNode;
}

export default function LegalLayout({ children }: LegalLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#fafaf9" }}>
      {/* Header */}
      <header className="border-b border-stone-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-[800px] mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="ArborGRC" width={26} height={26} />
            <span
              className="text-base font-semibold text-stone-900"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", letterSpacing: "-0.03em" }}
            >
              Arbor<span style={{ color: "#15803d" }}>GRC</span>
            </span>
          </Link>
          <nav className="flex items-center gap-5">
            <Link
              href="/privacy"
              className="text-xs text-stone-400 hover:text-stone-600 transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-stone-400 hover:text-stone-600 transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/cookies"
              className="text-xs text-stone-400 hover:text-stone-600 transition-colors"
            >
              Cookies
            </Link>
          </nav>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 py-12 px-6">
        <div className="max-w-[800px] mx-auto">{children}</div>
      </main>

      {/* Footer */}
      <footer className="border-t border-stone-200 py-8 px-6" style={{ backgroundColor: "#1c1917" }}>
        <div className="max-w-[800px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-stone-500">
            &copy; {new Date().getFullYear()} A9 Advisory FZ-LLC. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy" className="text-xs text-stone-500 hover:text-stone-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-stone-500 hover:text-stone-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-xs text-stone-500 hover:text-stone-300 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
