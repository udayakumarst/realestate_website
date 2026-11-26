import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { commitments, site, stats } from "@/data/site";

export const metadata: Metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <div className="bg-[#fbf9f5] min-h-screen text-[#0d1117]">
      <PageHero
        eyebrow="04 / COMPANY CREDIBILITY"
        title="A delivery partner that thinks beyond handover."
        text={`Established in ${site.established} in Bengaluru, ${site.shortName} was founded with a singular purpose: to execute construction and real estate with uncompromising engineering rigor and complete fiscal transparency.`}
      />

      {/* Stats Section */}
      <section className="bg-white border-b border-[#e6e0d5]">
        <div className="container-apex">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-[#e6e0d5]">
            {stats.map((s) => (
              <div key={s.label} className="py-10 px-4 md:px-8 first:pl-0">
                <p className="font-mono text-4xl sm:text-5xl font-black tracking-tight text-[#0d1117]">
                  {s.value}
                </p>
                <p className="mt-2 font-mono text-xs font-bold uppercase tracking-widest text-[#57606a]">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-24">
        <div className="container-apex grid gap-14 lg:grid-cols-2 items-center">
          <div>
            <span className="section-index">OUR PHILOSOPHY</span>
            <h2 className="mt-4 font-sans text-4xl font-black text-[#0d1117]">
              Engineers First, Builders Always
            </h2>
            <div className="mt-6 space-y-4 text-base text-[#57606a] leading-relaxed">
              <p>
                We started Shubham Nirmaan because property owners in Bengaluru were consistently frustrated by ambiguous estimates, subcontractor delays, and material compromises on site.
              </p>
              <p>
                By unifying architectural drafting, structural engineering, government approvals, and turnkey project management under one roof, we eliminate blind spots and deliver projects with zero budget surprises.
              </p>
            </div>
          </div>

          <div className="p-8 md:p-10 bg-[#0c121b] text-white border border-[#1e2634] rounded-xs">
            <span className="font-mono text-xs text-[#e5a855] tracking-widest uppercase">
              CERTIFIED STANDARDS
            </span>
            <h3 className="mt-4 font-sans text-2xl font-bold text-white">
              RERA Compliant & ISO Quality Audits
            </h3>
            <p className="mt-4 text-sm text-[#8b949e] leading-relaxed">
              Every foundation, concrete pour, and plumbing pressure test undergoes structured engineering checks with documented photo proof provided to you at each weekly milestone.
            </p>
            <div className="mt-6 pt-6 border-t border-[#1e2634] font-mono text-xs text-[#e5a855]">
              LOCATION: {site.address}
            </div>
          </div>
        </div>
      </section>

      {/* Four Core Disciplines (Pic 2: Construction, Layout Development, Real Estate, Interiors) */}
      <section className="bg-[#0c121b] text-white py-24 border-y border-[#1e2634]">
        <div className="container-apex">
          <div className="max-w-2xl mb-14">
            <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#e5a855] uppercase">
              OUR INTEGRATED EXPERTISE
            </span>
            <h2 className="mt-3 font-display-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white">
              The Four Pillars of Shubham
            </h2>
            <p className="mt-4 text-base text-[#8b949e] leading-relaxed">
              From raw land acquisition and legal clearances to structural delivery and bespoke interior finishing, our four integrated divisions handle your entire asset lifecycle under one contract.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* 1. Construction */}
            <div className="p-7 bg-[#090d13] border border-[#1e2634] rounded-xs flex flex-col justify-between hover:border-[#e5a855]/60 transition-all hover:-translate-y-1">
              <div>
                <div className="h-12 w-12 rounded-xs bg-[#161f2e] text-[#e5a855] grid place-items-center mb-6 border border-[#2c3749]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#8b949e] block">DISCIPLINE 01</span>
                <h3 className="mt-1 font-display-serif text-2xl font-normal text-white">Construction</h3>
                <p className="mt-4 text-xs leading-relaxed text-[#c9d1d9] italic border-l-2 border-[#e5a855] pl-3">
                  “Precision from foundation to pinnacle — building enduring turnkey villas, apartments and commercial landmarks with certified structural safety.”
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#1e2634] font-mono text-[10px] text-[#8b949e] uppercase">
                G+2 VILLAS · G+4 COMMERCIAL · APARTMENTS
              </div>
            </div>

            {/* 2. Layout Development */}
            <div className="p-7 bg-[#090d13] border border-[#1e2634] rounded-xs flex flex-col justify-between hover:border-[#e5a855]/60 transition-all hover:-translate-y-1">
              <div>
                <div className="h-12 w-12 rounded-xs bg-[#161f2e] text-[#e5a855] grid place-items-center mb-6 border border-[#2c3749]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#8b949e] block">DISCIPLINE 02</span>
                <h3 className="mt-1 font-display-serif text-2xl font-normal text-white">Layout Development</h3>
                <p className="mt-4 text-xs leading-relaxed text-[#c9d1d9] italic border-l-2 border-[#e5a855] pl-3">
                  “Transforming raw acreage into legally approved, fully serviced plotted townships ready for immediate build with bitumen roads and storm drains.”
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#1e2634] font-mono text-[10px] text-[#8b949e] uppercase">
                PLOTTED TOWNSHIPS · VILLA PLOTS · INFRASTRUCTURE
              </div>
            </div>

            {/* 3. Real Estate */}
            <div className="p-7 bg-[#090d13] border border-[#1e2634] rounded-xs flex flex-col justify-between hover:border-[#e5a855]/60 transition-all hover:-translate-y-1">
              <div>
                <div className="h-12 w-12 rounded-xs bg-[#161f2e] text-[#e5a855] grid place-items-center mb-6 border border-[#2c3749]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                  </svg>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#8b949e] block">DISCIPLINE 03</span>
                <h3 className="mt-1 font-display-serif text-2xl font-normal text-white">Real Estate</h3>
                <p className="mt-4 text-xs leading-relaxed text-[#c9d1d9] italic border-l-2 border-[#e5a855] pl-3">
                  “Guiding property acquisitions with 30-year title due diligence, RERA compliance, and joint development partnerships for capital growth.”
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#1e2634] font-mono text-[10px] text-[#8b949e] uppercase">
                LAND SOURCING · TITLE DUE DILIGENCE · JOINT DEV
              </div>
            </div>

            {/* 4. Interiors */}
            <div className="p-7 bg-[#090d13] border border-[#1e2634] rounded-xs flex flex-col justify-between hover:border-[#e5a855]/60 transition-all hover:-translate-y-1">
              <div>
                <div className="h-12 w-12 rounded-xs bg-[#161f2e] text-[#e5a855] grid place-items-center mb-6 border border-[#2c3749]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#8b949e] block">DISCIPLINE 04</span>
                <h3 className="mt-1 font-display-serif text-2xl font-normal text-white">Interiors</h3>
                <p className="mt-4 text-xs leading-relaxed text-[#c9d1d9] italic border-l-2 border-[#e5a855] pl-3">
                  “Infusing warmth, elegance, and bespoke German-hardware modular craftsmanship into every square foot of living space.”
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#1e2634] font-mono text-[10px] text-[#8b949e] uppercase">
                MODULAR KITCHENS · WARDROBES · VASTU FINISHES
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitments Grid */}
      <section className="bg-white py-24 border-t border-[#e6e0d5]">
        <div className="container-apex">
          <div className="max-w-xl">
            <span className="section-index">CORE VALUES</span>
            <h2 className="mt-4 font-sans text-4xl font-black text-[#0d1117]">
              How we guarantee reliability
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {commitments.map((c) => (
              <div key={c.title} className="p-6 bg-[#fbf9f5] border border-[#e6e0d5]">
                <h3 className="font-sans text-lg font-bold text-[#0d1117]">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm text-[#57606a] leading-relaxed">
                  {c.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
