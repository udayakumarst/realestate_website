"use client";

import { useState } from "react";

type Status = { state: "idle" | "sending" | "sent" | "error"; message?: string };

const inputStyle =
  "w-full rounded-xs border border-[#d0d7de] bg-[#ffffff] px-4 py-3 text-sm font-medium text-[#0d1117] placeholder:text-[#8c959f] outline-none transition focus:border-[#e25c1d] focus:ring-1 focus:ring-[#e25c1d]";

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ state: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus({ state: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Something went wrong.");
      form.reset();
      setStatus({ state: "sent", message: "Brief received. An engineer will contact you within 24 hours." });
    } catch (err) {
      setStatus({ state: "error", message: err instanceof Error ? err.message : "Something went wrong." });
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block mb-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-[#57606a]">
            Full Name *
          </label>
          <input name="name" required maxLength={100} className={inputStyle} placeholder="Your name" autoComplete="name" />
        </div>
        <div>
          <label className="block mb-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-[#57606a]">
            Organization / Company
          </label>
          <input name="organization" maxLength={100} className={inputStyle} placeholder="Company / developer" />
        </div>
        <div>
          <label className="block mb-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-[#57606a]">
            Email Address *
          </label>
          <input name="email" type="email" required maxLength={150} className={inputStyle} placeholder="you@company.com" autoComplete="email" />
        </div>
        <div>
          <label className="block mb-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-[#57606a]">
            Direct Phone *
          </label>
          <input name="phone" type="tel" required maxLength={20} className={inputStyle} placeholder="+91 90082 13348" autoComplete="tel" />
        </div>
        <div>
          <label className="block mb-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-[#57606a]">
            Project Type
          </label>
          <select name="service" className={inputStyle} defaultValue="Turnkey Villa / Residential">
            <option>Turnkey Villa / Residential</option>
            <option>Commercial Construction</option>
            <option>Luxury Interiors & Renovation</option>
            <option>Layout & Land Development</option>
            <option>Real Estate & Advisory</option>
            <option>3D Design & PMC Oversight</option>
          </select>
        </div>
        <div>
          <label className="block mb-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-[#57606a]">
            Target Timeline
          </label>
          <select name="timeline" className={inputStyle} defaultValue="1–3 months">
            <option>Immediate / Ready to start</option>
            <option>1–3 months</option>
            <option>3–6 months</option>
            <option>6–12 months</option>
          </select>
        </div>
        <div>
          <label className="block mb-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-[#57606a]">
            Site Location / Parcel
          </label>
          <input name="location" className={inputStyle} placeholder="e.g. Whitefield, Sarjapur, etc." />
        </div>
        <div>
          <label className="block mb-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-[#57606a]">
            Approx. Site Area
          </label>
          <input name="area" className={inputStyle} placeholder="e.g. 2,400 sq.ft. / 1 Acre" />
        </div>
      </div>

      <div>
        <label className="block mb-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-[#57606a]">
          What are you looking to deliver? *
        </label>
        <textarea
          name="message"
          required
          rows={3}
          maxLength={2000}
          className={inputStyle}
          placeholder="Share scope, approvals in place, site constraints or what you need assistance deciding..."
        />
      </div>

      {/* Honeypot anti-spam */}
      <input name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <button
        type="submit"
        disabled={status.state === "sending"}
        className="w-full btn-apex-orange py-3.5 text-xs font-bold tracking-widest uppercase disabled:opacity-60 cursor-pointer"
      >
        {status.state === "sending" ? "Submitting Brief…" : "Submit Project Brief ↗"}
      </button>

      {status.message && (
        <div
          role="status"
          className={`p-3 text-xs font-mono font-bold uppercase tracking-wide rounded-xs ${
            status.state === "error"
              ? "bg-[#ffebe9] text-[#cf222e] border border-[#ff8182]"
              : "bg-[#dafbe1] text-[#1a7f37] border border-[#4ac26b]"
          }`}
        >
          {status.message}
        </div>
      )}
    </form>
  );
}
