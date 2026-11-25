import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/site";

export function ProjectCard({ project }: { project: Project }) {
  // Status badge styling
  const statusConfig = {
    Completed: {
      label: "✓ Completed",
      classes: "bg-[#090d13]/90 text-[#3fb950] border border-[#238636]/60",
    },
    Ongoing: {
      label: "● In Progress",
      classes: "bg-[#090d13]/90 text-[#f07436] border border-[#e25c1d]/60",
    },
    Upcoming: {
      label: "✦ Upcoming",
      classes: "bg-[#090d13]/90 text-[#58a6ff] border border-[#388bfd]/60",
    },
  }[project.status];

  return (
    <article className="group relative overflow-hidden rounded-xs border border-[#1e2634] bg-[#0c121b] transition-all duration-300 hover:border-[#2f3d53]">
      {/* Visual Canvas Area */}
      <div className={`relative aspect-[16/10] bg-gradient-to-br ${project.tone} overflow-hidden`}>
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center p-6">
            {/* Blueprint Grid Texture */}
            <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:24px_24px]" />
            <div className="relative text-center">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#8b949e] block">
                {project.category}
              </span>
              <span className="font-sans text-xl font-bold text-white mt-1 block">
                {project.scope}
              </span>
            </div>
          </div>
        )}

        {/* Category Tag on Top Left */}
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-block px-2.5 py-1 text-[10px] font-mono font-bold tracking-widest uppercase bg-[#090d13]/90 text-[#f07436] border border-[#e25c1d]/60 rounded-xs backdrop-blur-xs">
            {project.category}
          </span>
        </div>

        {/* Status Pill on Top Right */}
        <div className="absolute top-4 right-4 z-10">
          <span
            className={`inline-block px-2.5 py-1 text-[10px] font-mono font-bold tracking-widest uppercase rounded-xs backdrop-blur-xs ${statusConfig.classes}`}
          >
            {statusConfig.label}
          </span>
        </div>

        {/* Diagonal Corner Arrow on Bottom Right */}
        <Link
          href="/contact"
          className="absolute bottom-4 right-4 z-10 corner-arrow-btn"
          aria-label={`Inquire about ${project.title}`}
        >
          <span className="font-mono text-base font-bold">↗</span>
        </Link>
      </div>

      {/* Details Body */}
      <div className="p-7">
        {/* Location & Year */}
        <div className="flex items-center gap-2 font-mono text-[11px] font-semibold text-[#f07436] uppercase tracking-wider">
          <span className="h-1.5 w-1.5 rounded-full bg-[#e25c1d]" />
          <span>{project.location}</span>
          <span className="text-[#484f58]">/</span>
          <span className="text-[#8b949e]">{project.year}</span>
        </div>

        {/* Title */}
        <h3 className="mt-3 font-sans text-2xl font-bold text-white group-hover:text-[#f07436] transition-colors leading-snug">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-sm leading-relaxed text-[#8b949e]">
          {project.description}
        </p>

        {/* Technical Specs Footer */}
        <div className="mt-8 pt-5 border-t border-[#1e2634] grid grid-cols-2 gap-4">
          <div>
            <p className="font-mono text-base font-black text-white">{project.area}</p>
            <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#6e7681]">SCOPE / UNITS</p>
          </div>
          <div>
            <p className="font-mono text-base font-black text-[#e25c1d]">{project.value}</p>
            <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#6e7681]">PROJECT STATUS</p>
          </div>
        </div>
      </div>
    </article>
  );
}
