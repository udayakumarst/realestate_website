import Link from "next/link";
import { site } from "@/data/site";

export function Footer() {
  const tel = site.phone.replace(/\s/g, "");

  return (
    <footer className="bg-[#070a0e] text-[#8b949e] border-t border-[#1e2634] pt-20 pb-12">
      <div className="container-apex">
        {/* Giant Bold Footer Callout matching video (00:34 - 00:37) */}
        <div className="pb-16 border-b border-[#1e2634]">
          <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#f07436] uppercase">
            {site.shortName} · CONSTRUCTION · LAYOUT DEVELOPMENT · REAL ESTATE · INTERIORS
          </span>
          <h2 className="mt-4 font-sans text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-tight leading-none">
            Let's break ground.
          </h2>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-sm md:text-base text-white">
            <a href={`mailto:${site.email}`} className="hover:text-[#f07436] transition-colors underline decoration-[#e25c1d] underline-offset-4">
              {site.email}
            </a>
            <span className="text-[#30363d]">•</span>
            <a href={`tel:${tel}`} className="hover:text-[#f07436] transition-colors font-bold">
              {site.phone}
            </a>
            <span className="text-[#30363d]">•</span>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f07436] transition-colors text-[#c9d1d9]"
            >
              📍 {site.address} ↗
            </a>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-mono text-xs text-[#6e7681]">
          <div className="flex flex-wrap items-center gap-4">
            <span className="font-bold text-white">© {new Date().getFullYear()} {site.shortName}.</span>
            <span>RERA REGISTERED / ISO QUALITY CERTIFIED</span>
            <span className="text-[#f07436]">{site.hours}</span>
          </div>

          <Link href="#top" className="text-white hover:text-[#f07436] transition-colors uppercase tracking-widest font-bold">
            BACK TO TOP ↑
          </Link>
        </div>
      </div>
    </footer>
  );
}
