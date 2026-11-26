import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { ProjectGallery } from "@/components/ProjectGallery";
import { ContactForm } from "@/components/ContactForm";
import { HeroSlider } from "@/components/HeroSlider";
import { commitments, process, services, site, stats, testimonials } from "@/data/site";

export default function Home() {
  return (
    <>
      {/* 01. HERO SECTION WITH BACKGROUND IMAGE SLIDER (Shifting text up, increasing welcome font, right-side work card) */}
      <section className="relative min-h-[82vh] md:min-h-[86vh] flex items-center border-b border-[#1e2634] pt-12 sm:pt-16 md:pt-20 pb-16 sm:pb-24 md:pb-28 overflow-hidden">
        {/* Background Slideshow cycling background1, background2, background3, background4 */}
        <HeroSlider />

        <div className="container-apex relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Heading, Subtitle & CTAs (Shifted Up) */}
            <div className="lg:col-span-8 max-w-3xl">
              {/* Golden Eyebrow with INCREASED font size as requested */}
              <div className="flex items-center gap-3 font-mono text-sm sm:text-base md:text-lg font-black tracking-[0.28em] text-[#e5a855] uppercase mb-4 sm:mb-5">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#e5a855] animate-pulse" />
                <span>WELCOME TO SHUBHAM</span>
              </div>

              {/* Massive Luxury Serif Display Headline */}
              <h1 className="font-display-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-normal text-white tracking-tight leading-[1.06]">
                Groundwork For What Comes Next.
              </h1>

              {/* Subtitle */}
              <p className="mt-5 sm:mt-6 max-w-2xl text-base sm:text-lg md:text-xl font-normal leading-relaxed text-[#c9d1d9]">
                {site.description}
              </p>

              {/* CTAs */}
              <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
                <Link href="#work" className="btn-bookverse-gold text-xs sm:text-sm py-3 px-6 sm:py-3.5 sm:px-8 font-bold">
                  Explore Projects →
                </Link>
                <Link href="/contact" className="btn-bookverse-outline text-xs sm:text-sm py-3 px-6 sm:py-3.5 sm:px-8 font-bold">
                  Request Feasibility Assessment
                </Link>
              </div>
            </div>

            {/* Right Side Card (Requirement 3: Our work in the open space on right side) */}
            <div className="lg:col-span-4 hidden lg:block">
              <div className="p-6 bg-[#090d13]/85 backdrop-blur-md border border-[#e5a855]/40 rounded-xs shadow-2xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#1e2634]">
                  <span className="font-mono text-[11px] font-black tracking-[0.2em] text-[#e5a855] uppercase">
                    OUR CORE WORK
                  </span>
                  <span className="font-mono text-[10px] text-[#8b949e]">BENGALURU</span>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div className="flex items-center gap-3 p-2.5 rounded-xs bg-[#161f2e]/60 border border-[#2c3749]">
                    <span className="w-2 h-2 rounded-full bg-[#e5a855]" />
                    <span className="font-bold text-white tracking-wider">CONSTRUCTION</span>
                  </div>
                  <div className="flex items-center gap-3 p-2.5 rounded-xs bg-[#161f2e]/60 border border-[#2c3749]">
                    <span className="w-2 h-2 rounded-full bg-[#e5a855]" />
                    <span className="font-bold text-white tracking-wider">LAYOUT DEVELOPMENT</span>
                  </div>
                  <div className="flex items-center gap-3 p-2.5 rounded-xs bg-[#161f2e]/60 border border-[#2c3749]">
                    <span className="w-2 h-2 rounded-full bg-[#e5a855]" />
                    <span className="font-bold text-white tracking-wider">REAL ESTATE</span>
                  </div>
                  <div className="flex items-center gap-3 p-2.5 rounded-xs bg-[#161f2e]/60 border border-[#2c3749]">
                    <span className="w-2 h-2 rounded-full bg-[#e5a855]" />
                    <span className="font-bold text-white tracking-wider">INTERIORS</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#1e2634] flex items-center justify-between text-[11px] font-mono text-[#8b949e]">
                  <span>Direct Call:</span>
                  <a href="tel:+919008213348" className="text-[#e5a855] font-bold hover:underline">
                    +91 90082 13348
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02. STATS BAR */}
      <section className="bg-white text-[#0d1117] border-b border-[#e6e0d5]">
        <div className="container-apex">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-[#e6e0d5]">
            {stats.map((s) => (
              <div key={s.label} className="py-10 px-4 md:px-8 first:pl-0">
                <p className="font-mono text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#0d1117]">
                  {s.value}
                </p>
                <p className="mt-2 font-mono text-xs font-bold uppercase tracking-widest text-[#57606a]">
                  {s.label}
                </p>
                <p className="mt-1 text-xs text-[#8c959f]">
                  {s.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03. FOUR PILLARS SHOWCASE (Pic 2: Construction, Layout Development, Real Estate, Interiors) */}
      <section className="bg-[#0c121b] text-white py-20 border-b border-[#1e2634]">
        <div className="container-apex">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#e5a855] uppercase">
              OUR FOUR CORE DISCIPLINES
            </span>
            <h2 className="mt-3 font-display-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white">
              End-To-End Built Environment
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Pillar 1: Construction */}
            <div className="p-7 bg-[#090d13] border border-[#1e2634] rounded-xs flex flex-col justify-between transition-all hover:border-[#e5a855]/60 hover:translate-y-[-2px]">
              <div>
                <div className="h-12 w-12 rounded-xs bg-[#161f2e] text-[#e5a855] grid place-items-center mb-6 border border-[#2c3749]">
                  {/* Crane / Building SVG */}
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#8b949e] block">DISCIPLINE 01</span>
                <h3 className="mt-1 font-display-serif text-2xl font-normal text-white">Construction</h3>
                <p className="mt-3 text-xs leading-relaxed text-[#c9d1d9] italic border-l-2 border-[#e5a855] pl-3">
                  “Precision from foundation to pinnacle — building enduring turnkey villas, apartments and commercial landmarks.”
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#1e2634] font-mono text-[10px] text-[#8b949e] uppercase">
                G+2 VILLAS · G+4 COMMERCIAL · APARTMENTS
              </div>
            </div>

            {/* Pillar 2: Layout Development */}
            <div className="p-7 bg-[#090d13] border border-[#1e2634] rounded-xs flex flex-col justify-between transition-all hover:border-[#e5a855]/60 hover:translate-y-[-2px]">
              <div>
                <div className="h-12 w-12 rounded-xs bg-[#161f2e] text-[#e5a855] grid place-items-center mb-6 border border-[#2c3749]">
                  {/* Map Pin / Land Grid SVG */}
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#8b949e] block">DISCIPLINE 02</span>
                <h3 className="mt-1 font-display-serif text-2xl font-normal text-white">Layout Development</h3>
                <p className="mt-3 text-xs leading-relaxed text-[#c9d1d9] italic border-l-2 border-[#e5a855] pl-3">
                  “Transforming raw acreage into legally approved, fully serviced plotted townships ready for immediate build.”
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#1e2634] font-mono text-[10px] text-[#8b949e] uppercase">
                PLOTTED TOWNSHIPS · VILLA PLOTS · INFRASTRUCTURE
              </div>
            </div>

            {/* Pillar 3: Real Estate */}
            <div className="p-7 bg-[#090d13] border border-[#1e2634] rounded-xs flex flex-col justify-between transition-all hover:border-[#e5a855]/60 hover:translate-y-[-2px]">
              <div>
                <div className="h-12 w-12 rounded-xs bg-[#161f2e] text-[#e5a855] grid place-items-center mb-6 border border-[#2c3749]">
                  {/* Skyscrapers / City Towers SVG */}
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                  </svg>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#8b949e] block">DISCIPLINE 03</span>
                <h3 className="mt-1 font-display-serif text-2xl font-normal text-white">Real Estate</h3>
                <p className="mt-3 text-xs leading-relaxed text-[#c9d1d9] italic border-l-2 border-[#e5a855] pl-3">
                  “Guiding property acquisitions with 30-year title due diligence, RERA compliance, and joint development partnerships.”
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#1e2634] font-mono text-[10px] text-[#8b949e] uppercase">
                LAND SOURCING · TITLE DUE DILIGENCE · JOINT DEV
              </div>
            </div>

            {/* Pillar 4: Interiors */}
            <div className="p-7 bg-[#090d13] border border-[#1e2634] rounded-xs flex flex-col justify-between transition-all hover:border-[#e5a855]/60 hover:translate-y-[-2px]">
              <div>
                <div className="h-12 w-12 rounded-xs bg-[#161f2e] text-[#e5a855] grid place-items-center mb-6 border border-[#2c3749]">
                  {/* Armchair / Interiors SVG */}
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#8b949e] block">DISCIPLINE 04</span>
                <h3 className="mt-1 font-display-serif text-2xl font-normal text-white">Interiors</h3>
                <p className="mt-3 text-xs leading-relaxed text-[#c9d1d9] italic border-l-2 border-[#e5a855] pl-3">
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

      {/* 04. CAPABILITIES / SERVICES SECTION (Dark Architectural Theme) */}
      <section id="capabilities" className="bg-[#0c121b] text-white py-24 md:py-32 border-b border-[#1e2634]">
        <div className="container-apex">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-14 border-b border-[#1e2634]">
            <div className="max-w-2xl">
              <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#e5a855] uppercase">
                01 / CAPABILITIES
              </span>
              <h2 className="mt-4 font-display-serif text-4xl sm:text-5xl font-normal tracking-tight text-white">
                The Full Picture, Not Just One Trade.
              </h2>
              <p className="mt-4 text-base md:text-lg text-[#8b949e] leading-relaxed">
                Complex projects need one accountable team across the ground, the structure and every decision in between.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[#e5a855] hover:text-[#f3cf8c] transition-colors"
            >
              Talk through your site <span>→</span>
            </Link>
          </div>

          {/* Capabilities Grid */}
          <div className="mt-12 grid gap-px bg-[#1e2634] sm:grid-cols-2 lg:grid-cols-3 border border-[#1e2634]">
            {services.map((s, idx) => (
              <div
                key={s.slug}
                className="bg-[#090d13] p-8 md:p-10 flex flex-col justify-between transition-colors hover:bg-[#131a26]"
              >
                <div>
                  <div className="flex items-center justify-between pb-6 border-b border-[#1e2634]">
                    <span className="font-mono text-sm font-black text-[#e5a855]">
                      0{idx + 1}
                    </span>
                    <span className="text-[#e5a855]">
                      <Icon name={s.icon} className="h-6 w-6" />
                    </span>
                  </div>

                  <h3 className="mt-6 font-display-serif text-2xl font-normal text-white">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#c9d1d9]">
                    {s.summary}
                  </p>
                </div>

                <div className="mt-10 pt-6 border-t border-[#1e2634]">
                  <div className="flex flex-wrap gap-2 text-[10px] font-mono font-bold tracking-wider uppercase text-[#8b949e]">
                    {s.tags.map((t, i) => (
                      <span key={t}>
                        {t}{i < s.tags.length - 1 ? " / " : ""}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05. SELECTED WORK / PROJECTS */}
      <section id="work" className="bg-[#090d13] text-white py-24 md:py-32 border-b border-[#1e2634]">
        <div className="container-apex">
          <div className="pb-12 border-b border-[#1e2634]">
            <span className="section-index">02 / SELECTED WORK</span>
            <div className="mt-4 max-w-3xl">
              <h2 className="font-display-serif text-4xl sm:text-5xl font-normal tracking-tight text-white">
                Built For The Brief. Proven In The Field.
              </h2>
              <p className="mt-4 text-base md:text-lg text-[#8b949e] leading-relaxed">
                A verified showcase of completed, ongoing and upcoming villa plots, G+2 residential duplexes, apartments, and commercial complexes across Bengaluru and surrounding corridors.
              </p>
            </div>
          </div>

          {/* Interactive Project Gallery with Filters & Real Photos */}
          <div className="mt-12">
            <ProjectGallery />
          </div>
        </div>
      </section>

      {/* 06. METHOD & EXECUTION / SAFETY */}
      <section className="bg-white text-[#0d1117] py-24 md:py-32 border-b border-[#e6e0d5]">
        <div className="container-apex">
          <div className="max-w-3xl">
            <span className="section-index">03 / METHOD + EXECUTION</span>
            <h2 className="mt-4 font-display-serif text-4xl sm:text-5xl font-normal tracking-tight text-[#0d1117]">
              Certainty Is A Construction Material.
            </h2>
            <div className="mt-5 inline-flex items-center gap-2 rounded-xs border border-[#1b7c3f]/30 bg-[#eaf7ee] px-3.5 py-1.5 font-mono text-xs font-bold text-[#1b7c3f] uppercase">
              <span>✓</span>
              <span>ZERO-DEFECT QUALITY ASSURANCE / 100% TRANSPARENCY</span>
            </div>
          </div>

          {/* Method Process Rows */}
          <div className="mt-16 divide-y divide-[#e6e0d5] border-y border-[#e6e0d5]">
            {process.map((pr) => (
              <div
                key={pr.step}
                className="grid py-10 md:grid-cols-[1.5fr_2fr] gap-6 items-start hover:bg-[#faf8f4] px-4 md:px-6 transition-colors"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-black text-[#e25c1d]">
                      {pr.step} /
                    </span>
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#57606a]">
                      {pr.tag}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display-serif text-2xl font-normal text-[#0d1117]">
                    {pr.title}
                  </h3>
                </div>
                <div>
                  <p className="text-base text-[#57606a] leading-relaxed">
                    {pr.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07. COMPANY CREDIBILITY & CLEAN OFFICIAL LOGO (Pic 3) */}
      <section className="bg-[#fbf9f5] text-[#0d1117] py-24 md:py-32 border-b border-[#e6e0d5]">
        <div className="container-apex">
          <div className="grid lg:grid-cols-[1.1fr_1.3fr] gap-14 items-center">
            {/* Clean Official Logo Card matching Pic 3 */}
            <div className="rounded-xs border border-[#1e2634] bg-[#000000] p-8 md:p-12 text-white shadow-2xl flex items-center justify-center">
              <div className="relative aspect-[16/10] w-full max-w-md">
                <Image
                  src="/shubham-logo.webp"
                  alt="Shubham Construction, Layout Development, Real Estate & Interiors"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Commitments 2x2 Grid */}
            <div>
              <span className="section-index">04 / COMPANY CREDIBILITY</span>
              <h2 className="mt-4 font-display-serif text-4xl sm:text-5xl font-normal tracking-tight text-[#0d1117]">
                A Delivery Partner That Thinks Beyond Handover.
              </h2>
              <p className="mt-4 text-base text-[#57606a] leading-relaxed">
                {site.shortName} brings the engineering rigor, transparent billing and on-ground practical judgement to make ambitious residential, commercial, layout development, and interior projects predictable.
              </p>

              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {commitments.map((c) => (
                  <div key={c.title} className="p-6 bg-white border border-[#e6e0d5]">
                    <h3 className="font-display-serif text-lg font-normal text-[#0d1117]">
                      {c.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#57606a] leading-relaxed">
                      {c.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 08. CLIENT TESTIMONIALS & REVIEWS */}
      <section className="bg-[#090d13] text-white py-24 md:py-32 border-b border-[#1e2634]">
        <div className="container-apex">
          <div className="pb-12 border-b border-[#1e2634]">
            <span className="section-index">CLIENT REPUTATION</span>
            <div className="mt-4 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h2 className="font-display-serif text-4xl sm:text-5xl font-normal tracking-tight text-white">
                  Trusted By Completed Project Owners
                </h2>
                <p className="mt-4 max-w-2xl text-base md:text-lg text-[#8b949e] leading-relaxed">
                  Real feedback from homeowners, building owners, and layout investors across our completed projects in Bengaluru.
                </p>
              </div>
              <div className="font-mono text-xs text-[#3fb950] font-bold">
                ★★★★★ 100% VERIFIED CLIENT REVIEWS
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="p-8 bg-[#0c121b] border border-[#1e2634] rounded-xs flex flex-col justify-between transition-colors hover:border-[#2f3d53]"
              >
                <div>
                  <div className="flex gap-1 text-[#e5a855] text-sm mb-4">
                    {"★★★★★"}
                  </div>
                  <p className="text-sm md:text-base leading-relaxed text-[#c9d1d9] italic">
                    “{t.quote}”
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-[#1e2634]">
                  <p className="font-sans text-lg font-bold text-white">
                    {t.name}
                  </p>
                  <p className="font-mono text-xs text-[#8b949e] mt-0.5">
                    {t.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 09. CONTACT / START CONVERSATION */}
      <section id="contact" className="bg-[#e25c1d] text-white py-20 md:py-28">
        <div className="container-apex">
          <div className="grid lg:grid-cols-[1.1fr_1.4fr] gap-12 lg:gap-16 items-start">
            {/* Left Header */}
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#ffddc9] bg-black/20 px-3 py-1 rounded-xs">
                05 / START THE CONVERSATION
              </span>
              <h2 className="mt-6 font-display-serif text-5xl sm:text-6xl font-normal tracking-tight text-white leading-none">
                Bring Us The Hard Brief.
              </h2>
              <p className="mt-6 text-lg text-[#ffede3] max-w-lg leading-relaxed">
                Tell us what you know, what you are solving for and where the site is. We will help shape the next useful step.
              </p>

              <div className="mt-10 pt-8 border-t border-white/20 space-y-4 font-mono text-sm">
                <p className="flex items-center gap-3">
                  <span className="text-white/70">DIRECT LINE:</span>
                  <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="font-bold text-white hover:underline">
                    {site.phone}
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-white/70">EMAIL:</span>
                  <a href={`mailto:${site.email}`} className="font-bold text-white hover:underline">
                    {site.email}
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-white/70">LOCATION:</span>
                  <span className="font-bold text-white">{site.address}</span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-white/70">AVAILABILITY:</span>
                  <span className="font-bold text-white">{site.hours}</span>
                </p>
              </div>
            </div>

            {/* Industrial Project Brief Form */}
            <div className="bg-white text-[#0d1117] p-8 md:p-10 shadow-2xl rounded-xs">
              <div className="flex items-center justify-between pb-4 border-b border-[#e6e0d5] mb-6">
                <div>
                  <h3 className="font-display-serif text-2xl font-normal text-[#0d1117]">Project Brief</h3>
                  <p className="text-xs text-[#57606a] mt-0.5">A few details is enough to get started.</p>
                </div>
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#e25c1d] bg-[#faeae2] px-2.5 py-1 rounded-xs border border-[#f5d4c3]">
                  NO OBLIGATION
                </span>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
