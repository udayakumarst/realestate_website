import Link from "next/link";
import { site } from "@/data/site";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#c2542a] via-[#ab431b] to-[#882f11] py-14 text-white border-y-2 border-[#70240b] shadow-xl">
      {/* Decorative architectural background blueprint glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.15),transparent_60%)] pointer-events-none" />
      <div className="absolute top-0 right-0 h-full w-1/3 wood-slats-light opacity-10 pointer-events-none" />

      <div className="container-x relative z-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#fbdcd0] bg-black/20 px-3 py-1 rounded-full border border-white/20">
            Start Your Construction Journey
          </span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-extrabold tracking-tight text-white drop-shadow-sm">
            Planning to Build, Renovate or Buy Land?
          </h2>
          <p className="mt-2 text-base text-[#fbece4] max-w-xl">
            Get a complimentary site feasibility visit and an itemised, transparent estimate from our engineers.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3.5">
          <Link href="/contact" className="btn btn-wood">
            Request a Quote
          </Link>
          <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="btn btn-outline">
            Call {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
