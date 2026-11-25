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
            <span className="font-mono text-xs text-[#f07436] tracking-widest uppercase">
              CERTIFIED STANDARDS
            </span>
            <h3 className="mt-4 font-sans text-2xl font-bold text-white">
              RERA Compliant & ISO Quality Audits
            </h3>
            <p className="mt-4 text-sm text-[#8b949e] leading-relaxed">
              Every foundation, concrete pour, and plumbing pressure test undergoes structured engineering checks with documented photo proof provided to you at each weekly milestone.
            </p>
            <div className="mt-6 pt-6 border-t border-[#1e2634] font-mono text-xs text-[#e25c1d]">
              LOCATION: {site.address}
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
