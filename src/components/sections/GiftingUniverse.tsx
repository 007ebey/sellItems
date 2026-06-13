"use client";

import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

const categories = [
  { label: "Corporate Gifting", href: "/corporate-gifting", emoji: "🏢", count: "50+ options" },
  { label: "Luxury Hampers", href: "/luxury-hampers", emoji: "✨", count: "40+ curations" },
  { label: "Personal Gifting", href: "/shop?category=personal", emoji: "💝", count: "30+ options" },
  { label: "Healthcare Gifting", href: "/healthcare-gifting", emoji: "🌸", count: "25+ kits" },
  { label: "Event Gifting", href: "/events", emoji: "🎉", count: "Custom" },
  { label: "Festival Gifting", href: "/festivals", emoji: "🪔", count: "Seasonal" },
  { label: "Wedding Gifting", href: "/shop?category=wedding", emoji: "💒", count: "20+ options" },
  { label: "Employee Rewards", href: "/corporate-gifting#rewards", emoji: "🏆", count: "Custom" },
  { label: "Executive Gifting", href: "/shop?category=executive", emoji: "👔", count: "15+ options" },
  { label: "Custom Merchandise", href: "/contact?type=custom", emoji: "🎨", count: "Bespoke" },
];

export function GiftingUniverse() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section ref={ref} className="py-24 bg-charcoal px-4">
      <div className="max-w-7xl mx-auto">
        <div className={cn("text-center mb-14 transition-all duration-700", inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}>
          <p className="section-eyebrow mb-3">Everything You Need</p>
          <h2 className="section-heading text-5xl lg:text-6xl text-white">
            Our Gifting Universe
          </h2>
          <div className="luxury-divider mt-6 max-w-xs mx-auto">
            <span className="font-display text-gold italic text-lg">every occasion covered</span>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {categories.map((cat, i) => (
            <Link
              key={cat.label}
              href={cat.href}
              className={cn(
                "group p-5 border border-white/10 hover:border-gold/50 bg-white/5 hover:bg-white/10 transition-all duration-400 text-center",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${i * 60}ms`, transition: "all 0.5s ease" }}
            >
              <div className="text-3xl mb-2">{cat.emoji}</div>
              <h3 className="font-sans text-sm font-medium text-white group-hover:text-gold transition-colors leading-snug">
                {cat.label}
              </h3>
              <p className="font-sans text-[11px] text-white/40 mt-0.5">{cat.count}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
