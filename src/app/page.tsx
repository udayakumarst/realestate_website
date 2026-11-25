import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { ProjectGallery } from "@/components/ProjectGallery";
import { ContactForm } from "@/components/ContactForm";
import { commitments, process, services, site, stats, testimonials } from "@/data/site";

export default function Home() {
  return (
    <>
      {/* 01. HERO SECTION (Matching Video 00:00 - 00:02) */}
      <section className="hero-blueprint-bg relative min-h-[85vh] flex items-center border-b border-[#1e2634] py-24 md:py-32 overflow-hidden">
        {/* Subtle architectural ambient illumination */}
        <div className="absolute top-1/4 right-10 w-96 h-96 rounded-full bg-[#e25c1d]/10 blur-[120px] pointer-events-none" />

        <div className="container-apex relative z-10">
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 font-mono text-xs md:text-sm font-bold tracking-[0.2em] text-[#f07436] uppercase mb-6">
              <span>+</span>
              <span>CONSTRUCTION</span>
              <span>+</span>
              <span>LAYOUT DEVELOPMENT</span>
              <span>+</span>
              <span>REAL ESTATE</span>
              <span>+</span>
              <span>INTERIORS</span>
            </div>

            {/* Massive Bold Headline */}
            <h1 className="font-sans text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.02]">
              Groundwork for what comes next.
            </h1>

            {/* Subtitle with high-conviction engineering copy */}
            <p className="mt-8 max-w-2xl text-lg md:text-xl font-medium leading-relaxed text-[#c9d1d9]">
              {site.description}
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href="#work" className="btn-apex-orange">
                Explore Projects ↗
              </Link>
              <Link href="/contact" className="btn-apex-dark">
                Request Feasibility Assessment ↗
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 02. STATS BAR (Matching Video 00:02 - 00:04) */}
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

      {/* 03. CAPABILITIES / SERVICES SECTION (Matching Video 00:04 - 00:08) */}
      <section id="capabilities" className="bg-[#fbf9f5] text-[#0d1117] py-24 md:py-32 border-b border-[#e6e0d5]">
        <div className="container-apex">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-14 border-b border-[#e6e0d5]">
            <div className="max-w-2xl">
              <span className="section-index">01 / CAPABILITIES</span>
              <h2 className="mt-4 font-sans text-4xl sm:text-5xl font-black tracking-tight text-[#0d1117]">
                The full picture, not just one trade.
              </h2>
              <p className="mt-4 text-base md:text-lg text-[#57606a] leading-relaxed">
                Complex projects need one accountable team across the ground, the structure and every decision in between.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[#e25c1d] hover:text-[#c94b12] transition-colors"
            >
              Talk through your site <span>→</span>
            </Link>
          </div>

          {/* Capabilities Grid */}
          <div className="mt-12 grid gap-px bg-[#e6e0d5] sm:grid-cols-2 lg:grid-cols-3 border border-[#e6e0d5]">
            {services.map((s, idx) => (
              <div
                key={s.slug}
                className="bg-white p-8 md:p-10 flex flex-col justify-between transition-colors hover:bg-[#f6f2ea]"
              >
                <div>
                  <div className="flex items-center justify-between pb-6 border-b border-[#f0ede6]">
                    <span className="font-mono text-sm font-black text-[#57606a]">
                      0{idx + 1}
                    </span>
                    <span className="text-[#e25c1d]">
                      <Icon name={s.icon} className="h-6 w-6" />
                    </span>
                  </div>

                  <h3 className="mt-6 font-sans text-2xl font-bold text-[#0d1117]">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#57606a]">
                    {s.summary}
                  </p>
                </div>

                <div className="mt-10 pt-6 border-t border-[#f0ede6]">
                  <div className="flex flex-wrap gap-2 text-[10px] font-mono font-bold tracking-wider uppercase text-[#8c959f]">
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

      {/* 04. SELECTED WORK / PROJECTS (Matching Video 00:09 - 00:23) */}
      <section id="work" className="bg-[#090d13] text-white py-24 md:py-32 border-b border-[#1e2634]">
        <div className="container-apex">
          <div className="pb-12 border-b border-[#1e2634]">
            <span className="section-index">02 / SELECTED WORK</span>
            <div className="mt-4 max-w-3xl">
              <h2 className="font-sans text-4xl sm:text-5xl font-black tracking-tight text-white">
                Built for the brief. Proven in the field.
              </h2>
              <p className="mt-4 text-base md:text-lg text-[#8b949e] leading-relaxed">
                A verified showcase of completed, ongoing and upcoming villa plots, G+2 residential duplexes, apartments, and commercial complexes across Bengaluru and surrounding corridors.
              </p>
            </div>
          </div>

          {/* Interactive Project Gallery with Filters */}
          <div className="mt-12">
            <ProjectGallery />
          </div>
        </div>
      </section>

      {/* 05. METHOD & EXECUTION / SAFETY (Matching Video 00:24 - 00:27) */}
      <section className="bg-white text-[#0d1117] py-24 md:py-32 border-b border-[#e6e0d5]">
        <div className="container-apex">
          <div className="max-w-3xl">
            <span className="section-index">03 / METHOD + EXECUTION</span>
            <h2 className="mt-4 font-sans text-4xl sm:text-5xl font-black tracking-tight text-[#0d1117]">
              Certainty is a construction material.
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
                  <h3 className="mt-3 font-sans text-2xl font-bold text-[#0d1117]">
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

      {/* 06. COMPANY CREDIBILITY & OFFICIAL LOGO (No orange border, clean website background) */}
      <section className="bg-[#fbf9f5] text-[#0d1117] py-24 md:py-32 border-b border-[#e6e0d5]">
        <div className="container-apex">
          <div className="grid lg:grid-cols-[1.1fr_1.3fr] gap-14 items-center">
            {/* Official 3D Brand Master Emblem Card */}
            <div className="rounded-xs border border-[#1e2634] bg-[#090d13] text-white overflow-hidden shadow-2xl group">
              <div className="relative aspect-[16/11] w-full">
                <Image
                  src="/shubham-logo.jpg"
                  alt="Shubham Construction, Layout Development, Real Estate & Interiors"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-103"
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  priority
                />
              </div>
              <div className="p-6 bg-[#090d13] border-t border-[#1e2634] font-mono text-xs text-[#c9d1d9] flex justify-between items-center">
                <span>WHITEFIELD HQ, BENGALURU</span>
                <span className="text-[#8b949e]">EST. {site.established}</span>
              </div>
            </div>

            {/* Commitments 2x2 Grid */}
            <div>
              <span className="section-index">04 / COMPANY CREDIBILITY</span>
              <h2 className="mt-4 font-sans text-4xl sm:text-5xl font-black tracking-tight text-[#0d1117]">
                A delivery partner that thinks beyond handover.
              </h2>
              <p className="mt-4 text-base text-[#57606a] leading-relaxed">
                {site.shortName} brings the engineering rigor, transparent billing and on-ground practical judgement to make ambitious residential, commercial, layout development, and interior projects predictable.
              </p>

              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {commitments.map((c) => (
                  <div key={c.title} className="p-6 bg-white border border-[#e6e0d5]">
                    <h3 className="font-sans text-lg font-bold text-[#0d1117]">
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

      {/* 07. CLIENT TESTIMONIALS & REVIEWS (Rajashekar, Gangadhar, Uday Kumar, Kiran, Ashwini) */}
      <section className="bg-[#090d13] text-white py-24 md:py-32 border-b border-[#1e2634]">
        <div className="container-apex">
          <div className="pb-12 border-b border-[#1e2634]">
            <span className="section-index">CLIENT REPUTATION</span>
            <div className="mt-4 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h2 className="font-sans text-4xl sm:text-5xl font-black tracking-tight text-white">
                  Trusted by Completed Project Owners
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
                  <div className="flex gap-1 text-[#f07436] text-sm mb-4">
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

      {/* 08. CONTACT / START CONVERSATION (Matching Video 00:30 - 00:34) */}
      <section id="contact" className="bg-[#e25c1d] text-white py-20 md:py-28">
        <div className="container-apex">
          <div className="grid lg:grid-cols-[1.1fr_1.4fr] gap-12 lg:gap-16 items-start">
            {/* Left Header */}
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#ffddc9] bg-black/20 px-3 py-1 rounded-xs">
                05 / START THE CONVERSATION
              </span>
              <h2 className="mt-6 font-sans text-5xl sm:text-6xl font-black tracking-tight text-white leading-none">
                Bring us the hard brief.
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
                  <h3 className="font-sans text-2xl font-black text-[#0d1117]">Project brief</h3>
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
