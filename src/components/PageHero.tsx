export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <section className="relative overflow-hidden bg-[#090d13] text-white border-b border-[#1e2634] py-16 md:py-24">
      {/* Background blueprint subtle pattern */}
      <div className="absolute inset-0 opacity-15 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-[#e25c1d]/10 blur-3xl pointer-events-none" />

      <div className="container-apex relative z-10">
        <span className="section-index">{eyebrow}</span>
        <h1 className="mt-4 max-w-4xl font-sans text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base md:text-lg text-[#8b949e] leading-relaxed">
          {text}
        </p>
      </div>
    </section>
  );
}
