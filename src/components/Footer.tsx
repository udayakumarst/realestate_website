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

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 font-mono text-sm md:text-base text-white">
            {/* Email with Official Email Logo */}
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2.5 hover:text-[#e5a855] transition-colors py-1 group"
              title="Send an Email"
            >
              <span className="p-1.5 rounded-xs bg-[#161f2e] border border-[#2c3749] text-[#e5a855] group-hover:border-[#e5a855]">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <span className="underline decoration-[#e5a855] underline-offset-4 font-bold">{site.email}</span>
            </a>

            <span className="text-[#30363d] hidden sm:inline">•</span>

            {/* WhatsApp & Direct Call with Official WhatsApp Logo */}
            <a
              href={`https://wa.me/919008213348`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 hover:text-[#25D366] transition-colors py-1 group font-bold"
              title="Chat Directly on WhatsApp"
            >
              <span className="p-1.5 rounded-xs bg-[#161f2e] border border-[#2c3749] text-[#25D366] group-hover:border-[#25D366]">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.101.005.237-.038.37.284.144.35.49 1.198.533 1.285.044.086.073.187.015.303-.059.116-.088.188-.175.289l-.26.303c-.087.087-.178.182-.077.356.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.086.275.072.376-.044.102-.115.434-.506.549-.68.116-.173.232-.144.39-.086.159.058 1.011.477 1.184.564.174.087.289.13.332.203.043.072.043.419-.101.824z" />
                </svg>
              </span>
              <span>{site.phone}</span>
            </a>

            <span className="text-[#30363d] hidden sm:inline">•</span>

            {/* Location */}
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-[#e5a855] transition-colors text-[#c9d1d9] py-1"
            >
              <span>📍</span>
              <span>{site.address} ↗</span>
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
