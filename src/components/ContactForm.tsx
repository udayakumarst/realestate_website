"use client";

import { useState } from "react";

type Status = { state: "idle" | "sending" | "sent" | "error"; message?: string };

const inputStyle =
  "w-full rounded-xs border border-[#d0d7de] bg-[#ffffff] px-4 py-3 text-sm font-medium text-[#0d1117] placeholder:text-[#8c959f] outline-none transition focus:border-[#e25c1d] focus:ring-1 focus:ring-[#e25c1d]";

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ state: "idle" });
  const [whatsappHref, setWhatsappHref] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData) as Record<string, string>;

    setStatus({ state: "sending" });

    // Format professional WhatsApp message for 9008213348
    const waText = [
      "*NEW INQUIRY — SHUBHAM WEBSITE*",
      "---------------------------------------",
      `👤 *Name:* ${data.name || ""}`,
      `📞 *Phone:* ${data.phone || ""}`,
      `📧 *Email:* ${data.email || ""}`,
      data.organization ? `🏢 *Company:* ${data.organization}` : null,
      `🏗️ *Discipline / Service:* ${data.service || "Construction"}`,
      `⏱️ *Target Timeline:* ${data.timeline || "Immediate"}`,
      data.location ? `📍 *Location:* ${data.location}` : null,
      data.area ? `📐 *Site Area:* ${data.area}` : null,
      "",
      `💬 *Requirement / Scope:*`,
      `${data.message || ""}`,
      "---------------------------------------",
      "Sent from shubham-realty.vercel.app",
    ]
      .filter((line) => line !== null)
      .join("\n");

    const waUrl = `https://wa.me/919008213348?text=${encodeURIComponent(waText)}`;
    setWhatsappHref(waUrl);

    // Automatically trigger WhatsApp in a new tab/window
    try {
      window.open(waUrl, "_blank", "noopener,noreferrer");
    } catch {
      // In case popup is blocked, the user can click the button shown in success message
    }

    try {
      // Also post to internal API endpoint
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      setStatus({
        state: "sent",
        message: "Your inquiry has been prepared for WhatsApp (+91 90082 13348). Click below if WhatsApp did not open automatically.",
      });
      form.reset();
    } catch {
      setStatus({
        state: "sent",
        message: "Details ready! Click below to send directly via WhatsApp to +91 90082 13348.",
      });
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

      {/* Submit directly to WhatsApp */}
      <button
        type="submit"
        disabled={status.state === "sending"}
        className="w-full flex items-center justify-center gap-2.5 py-4 px-6 bg-[#25D366] hover:bg-[#20ba59] text-[#090d13] font-mono text-xs font-black tracking-widest uppercase rounded-xs transition-all shadow-lg hover:shadow-[#25D366]/20 cursor-pointer disabled:opacity-60"
      >
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.101.005.237-.038.37.284.144.35.49 1.198.533 1.285.044.086.073.187.015.303-.059.116-.088.188-.175.289l-.26.303c-.087.087-.178.182-.077.356.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.086.275.072.376-.044.102-.115.434-.506.549-.68.116-.173.232-.144.39-.086.159.058 1.011.477 1.184.564.174.087.289.13.332.203.043.072.043.419-.101.824z" />
        </svg>
        <span>{status.state === "sending" ? "Preparing Brief…" : "Submit & Send Directly to WhatsApp (9008213348) ↗"}</span>
      </button>

      {status.message && (
        <div
          role="status"
          className={`p-4 text-xs font-mono font-bold tracking-wide rounded-xs flex flex-col gap-2 ${
            status.state === "error"
              ? "bg-[#ffebe9] text-[#cf222e] border border-[#ff8182]"
              : "bg-[#090d13] text-[#25D366] border border-[#25D366]/40"
          }`}
        >
          <p>{status.message}</p>
          {whatsappHref && (
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white bg-[#25D366] hover:bg-[#20ba59] px-4 py-2 rounded-xs font-bold uppercase tracking-wider text-[11px] self-start mt-1"
            >
              Open WhatsApp Now 💬
            </a>
          )}
        </div>
      )}
    </form>
  );
}
