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
      <div className="container-apex flex h-20 items-center justify-between">
        {/* Clean Official Logo from Pic 3 */}
        <Link href="/" className="flex items-center group" onClick={() => setOpen(false)}>
          <div className="relative h-14 w-48 sm:w-56 md:w-64">
            <Image
              src="/shubham-logo.webp"
              alt={site.name}
              fill
              className="object-contain object-left transition-transform group-hover:scale-102"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
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
          <Link href="/contact" className="btn-bookverse-gold py-2.5 px-5 text-xs font-bold uppercase tracking-wider">
            Start Brief →
          </Link>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          className="p-2.5 text-white hover:text-[#e5a855] transition-colors md:hidden"
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
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-bookverse-gold text-center mt-2 py-3"
            >
              Start Project Brief →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
