import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ProjectGallery } from "@/components/ProjectGallery";

export const metadata: Metadata = { title: "Selected Projects" };

export default function ProjectsPage() {
  return (
    <div className="bg-[#090d13] min-h-screen text-white">
      <PageHero
        eyebrow="02 / SELECTED WORK"
        title="Built for the brief. Proven in the field."
        text="A snapshot of residential turnkey villas, commercial towers, layout formations, and interior transformations delivered across Bengaluru."
      />
      <section className="py-20">
        <div className="container-apex">
          <ProjectGallery />
        </div>
      </section>
    </div>
  );
}
