import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Start the Conversation" };

export default function ContactPage() {
  return (
    <div className="bg-[#fbf9f5] min-h-screen text-[#0d1117]">
      <PageHero
        eyebrow="05 / START THE CONVERSATION"
        title="Bring us the hard brief."
        text="Tell us what you know, what you are solving for, and where the site is. We will evaluate your parcel, timeline, and requirements and guide the next concrete step."
      />

      <section className="py-24">
        <div className="container-apex grid lg:grid-cols-[1fr_1.4fr] gap-14 items-start">
          {/* Direct Channels */}
          <div className="space-y-6">
            <div className="p-8 bg-white border border-[#e6e0d5]">
              <span className="section-index">HEADQUARTERS</span>
              <h3 className="mt-4 font-sans text-2xl font-black text-[#0d1117]">
                Whitefield, Bengaluru
              </h3>
              <p className="mt-3 text-sm text-[#57606a] leading-relaxed">
                {site.address}
              </p>

              <div className="mt-6 pt-6 border-t border-[#e6e0d5] space-y-4 font-mono text-sm">
                <div>
                  <span className="text-xs text-[#8c959f] block uppercase tracking-wider">DIRECT PHONE</span>
                  <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="font-bold text-[#0d1117] hover:text-[#e25c1d]">
                    {site.phone}
                  </a>
                </div>
                <div>
                  <span className="text-xs text-[#8c959f] block uppercase tracking-wider">EMAIL INQUIRIES</span>
                  <a href={`mailto:${site.email}`} className="font-bold text-[#0d1117] hover:text-[#e25c1d]">
                    {site.email}
                  </a>
                </div>
                <div>
                  <span className="text-xs text-[#8c959f] block uppercase tracking-wider">HOURS</span>
                  <span className="font-bold text-[#e25c1d]">{site.hours}</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#e6e0d5]">
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs font-bold uppercase tracking-wider text-[#e25c1d] hover:underline"
                >
                  Open in Google Maps ↗
                </a>
              </div>
            </div>

            <a
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full btn-apex-orange justify-center py-4 text-xs font-bold tracking-widest uppercase bg-[#1b7c3f] hover:bg-[#166533] shadow-none"
            >
              Direct Chat on WhatsApp ↗
            </a>
          </div>

          {/* Form */}
          <div className="bg-white p-8 md:p-10 border border-[#e6e0d5] shadow-sm">
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
      </section>
    </div>
  );
}
