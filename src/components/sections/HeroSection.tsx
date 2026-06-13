"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=1920&q=90",
    tag: "Corporate Gifting",
    headline: "Luxury Gifting Crafted",
    headlineSub: "For Every Occasion",
  },
  {
    image: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=1920&q=90",
    tag: "Premium Hampers",
    headline: "Every Gift Tells",
    headlineSub: "A Beautiful Story",
  },
  {
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920&q=90",
    tag: "Healthcare Gifting",
    headline: "Thoughtfully Curated",
    headlineSub: "Beautifully Delivered",
  },
];

const services = [
  "Corporate Gifts",
  "Luxury Hampers",
  "Healthcare Gifting",
  "Celebration Experiences",
  "Custom Curations",
];

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeService, setActiveService] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveSlide((p) => (p + 1) % slides.length);
    }, 5000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  useEffect(() => {
    const t = setInterval(() => setActiveService((p) => (p + 1) % services.length), 2500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] max-h-[950px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: activeSlide === i ? 1 : 0 }}
        >
          <img
            src={slide.image}
            alt={slide.tag}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-purple-900/30 to-black/70" />
        </div>
      ))}

      {/* Geometric accent */}
      <div className="absolute top-1/4 right-10 w-64 h-64 border border-gold/20 rotate-45 hidden lg:block" />
      <div className="absolute top-1/3 right-20 w-40 h-40 border border-gold/10 rotate-45 hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
        {/* Tag */}
        <div className="flex items-center gap-2 mb-6 animate-fade-up" style={{ animationDelay: "0.1s", animationFillMode: "both" }}>
          <Sparkles size={14} className="text-gold" />
          <span className="font-accent text-xs tracking-[0.25em] text-gold uppercase">
            {slides[activeSlide].tag}
          </span>
          <div className="h-px w-12 bg-gold/60" />
        </div>

        {/* Headline */}
        <h1
          className="font-display text-white text-shadow-luxury animate-fade-up"
          style={{ animationDelay: "0.2s", animationFillMode: "both" }}
        >
          <span className="block text-5xl sm:text-6xl lg:text-8xl font-semibold leading-none">
            {slides[activeSlide].headline}
          </span>
          <span className="block text-5xl sm:text-6xl lg:text-8xl font-light leading-none text-gold-light mt-1">
            {slides[activeSlide].headlineSub}
          </span>
        </h1>

        {/* Dynamic services */}
        <div
          className="mt-6 flex items-center gap-3 animate-fade-up"
          style={{ animationDelay: "0.3s", animationFillMode: "both" }}
        >
          <div className="w-1 h-8 bg-gold" />
          <div className="overflow-hidden h-8">
            {services.map((s, i) => (
              <div
                key={s}
                className="font-sans text-lg text-white/90 font-light transition-all duration-500"
                style={{
                  transform: `translateY(${(i - activeService) * 2}rem)`,
                  opacity: i === activeService ? 1 : 0,
                }}
              >
                {s}
              </div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div
          className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up"
          style={{ animationDelay: "0.4s", animationFillMode: "both" }}
        >
          <Link href="/shop" className="btn-gold">
            Explore Collections
            <ArrowRight size={16} />
          </Link>
          <Link href="/contact" className="btn-outline-gold">
            Request a Quote
          </Link>
        </div>

        {/* Trust badges */}
        <div
          className="mt-12 flex flex-wrap gap-6 animate-fade-up"
          style={{ animationDelay: "0.5s", animationFillMode: "both" }}
        >
          {["500+ Brands Served", "10,000+ Hampers Delivered", "Nationwide Delivery", "100% Customizable"].map((t) => (
            <div key={t} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-gold rounded-full" />
              <span className="font-sans text-xs text-white/70 tracking-wide">{t}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveSlide(i)}
            className="transition-all duration-300"
          >
            <div
              className={`h-0.5 transition-all duration-500 ${
                activeSlide === i ? "w-8 bg-gold" : "w-4 bg-white/40"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 hidden lg:flex flex-col items-center gap-2 z-10">
        <span className="font-accent text-[10px] text-white/40 tracking-widest rotate-90 origin-center translate-x-8">
          SCROLL
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
