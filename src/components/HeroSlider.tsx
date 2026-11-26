"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  { src: "/background1.jpg", alt: "Architectural Landmark 1" },
  { src: "/background2.jpg", alt: "Architectural Landmark 2" },
  { src: "/background3.jpg", alt: "Architectural Landmark 3" },
  { src: "/background4.jpg", alt: "Architectural Landmark 4" },
];

export function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none">
      {/* Background Slides with crossfade */}
      {slides.map((slide, idx) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={idx === 0}
            className="object-cover object-center scale-105 transition-transform duration-[7000ms] ease-out"
          />
        </div>
      ))}

      {/* Atmospheric dark gradient overlays calibrated for enhanced image prominence & crisp contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#090d13]/68 via-[#090d13]/45 to-[#090d13]/88" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_35%,rgba(9,13,19,0.18),rgba(9,13,19,0.82))]" />

      {/* Slide Indicator Dots (clickable via pointer-events-auto) */}
      <div className="absolute bottom-6 right-6 md:bottom-10 md:right-12 z-20 flex items-center gap-2 pointer-events-auto">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              idx === current
                ? "w-8 h-2 bg-[#e5a855]"
                : "w-2 h-2 bg-white/40 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
