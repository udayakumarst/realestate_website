"use client";

import { useState } from "react";
import { projects, type Project } from "@/data/site";
import { ProjectCard } from "./ProjectCard";

const filterOptions = [
  { key: "All", label: "ALL PROJECTS" },
  { key: "Completed", label: "COMPLETED (5)" },
  { key: "Ongoing", label: "ONGOING (2)" },
  { key: "Upcoming", label: "UPCOMING (2)" },
  { key: "Premium Villa Plots", label: "VILLA PLOTS" },
  { key: "Apartment", label: "APARTMENTS" },
  { key: "Residential", label: "RESIDENTIAL G+2" },
  { key: "Commercial", label: "COMMERCIAL G+4" },
] as const;

export function ProjectGallery() {
  const [active, setActive] = useState<string>("All");

  const shown: Project[] =
    active === "All"
      ? projects
      : active === "Completed" || active === "Ongoing" || active === "Upcoming"
      ? projects.filter((p) => p.status === active)
      : projects.filter((p) => p.category === active);

  return (
    <>
      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
        {filterOptions.map((f) => (
          <button
            key={f.key}
            role="tab"
            aria-selected={active === f.key}
            onClick={() => setActive(f.key)}
            className={`filter-pill ${active === f.key ? "active" : "inactive"}`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Grid of Projects */}
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>

      {shown.length === 0 && (
        <p className="mt-12 font-mono text-sm text-[#8b949e]">
          No projects found under this filter.
        </p>
      )}
    </>
  );
}
