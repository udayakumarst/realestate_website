import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { services } from "@/data/site";

export const metadata: Metadata = { title: "Capabilities" };

export default function ServicesPage() {
  return (
    <div className="bg-[#fbf9f5] min-h-screen text-[#0d1117]">
      <PageHero
        eyebrow="01 / CAPABILITIES"
        title="The full picture, not just one trade."
        text="From bulk earthworks to final turnkey handover — one accountable engineering team across design, approvals, construction, and property advisory."
      />
      <section className="py-24">
        <div className="container-apex">
          <div className="grid gap-px bg-[#e6e0d5] sm:grid-cols-2 lg:grid-cols-3 border border-[#e6e0d5]">
            {services.map((s, idx) => (
              <article
                key={s.slug}
                id={s.slug}
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

                  <h2 className="mt-6 font-sans text-2xl font-bold text-[#0d1117]">
                    {s.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-[#57606a]">
                    {s.summary}
                  </p>

                  <ul className="mt-6 space-y-2 border-t border-[#f0ede6] pt-5 text-sm text-[#0d1117]">
                    {s.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2">
                        <span className="text-[#e25c1d] font-bold">✓</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10 pt-6 border-t border-[#f0ede6] flex items-center justify-between">
                  <div className="flex flex-wrap gap-1 text-[10px] font-mono font-bold tracking-wider uppercase text-[#8c959f]">
                    {s.tags.slice(0, 2).join(" / ")}
                  </div>
                  <Link href="/contact" className="font-mono text-xs font-bold text-[#e25c1d] hover:underline">
                    INQUIRE ↗
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
