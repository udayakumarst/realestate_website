"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site } from "@/data/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 border-b border-[#1c2432] bg-[#090d13]/95 backdrop-blur-md">
      <div className="container-apex flex h-22 sm:h-24 items-center justify-between">
        {/* Enlarged Clean Transparent Logo (Micro-tagline removed as requested) */}
        <Link href="/" className="flex items-center group py-2" onClick={() => setOpen(false)}>
          <div className="relative h-16 sm:h-20 w-52 sm:w-68 md:w-80">
            <Image
              src="/shubham-logo.webp"
              alt={site.name}
              fill
              className="object-contain object-left transition-transform group-hover:scale-102"
              priority
            />
          </div>
        </Link>

        {/* Right Header: Phone Contact & Navigation */}
        <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
          {/* Direct Phone Contact (Top Right) */}
          <a
            href="tel:+919008213348"
            className="flex items-center gap-2 font-mono text-xs font-bold text-[#e5a855] hover:text-[#f3cf8c] transition-colors py-1.5 px-3 rounded-xs border border-[#e5a855]/40 bg-[#e5a855]/10 hover:bg-[#e5a855]/20 shadow-xs"
            title="Call Directly: +91 90082 13348"
          >
            <svg className="w-3.5 h-3.5 text-[#e5a855]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="hidden sm:inline font-mono tracking-wider">+91 90082 13348</span>
            <span className="sm:hidden text-[11px] font-bold">Call</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 md:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-mono text-xs font-bold tracking-widest uppercase transition-colors ${
                  isActive(item.href) ? "text-[#e5a855]" : "text-[#c9d1d9] hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-bookverse-gold py-2 px-4 text-xs font-bold uppercase tracking-wider">
              Start Brief →
            </Link>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            className="p-2 text-white hover:text-[#e5a855] transition-colors md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="border-t border-[#1c2432] bg-[#090d13] px-6 py-6 md:hidden">
          <div className="flex flex-col gap-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`font-mono text-sm font-bold tracking-widest uppercase py-2 ${
                  isActive(item.href) ? "text-[#e5a855]" : "text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:+919008213348"
              className="flex items-center justify-center gap-2 font-mono text-xs font-bold text-[#e5a855] py-2.5 px-4 rounded-xs border border-[#e5a855]/40 bg-[#e5a855]/10 mt-1"
            >
              📞 Direct Call: +91 90082 13348
            </a>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-bookverse-gold text-center mt-1 py-3"
            >
              Start Project Brief →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
