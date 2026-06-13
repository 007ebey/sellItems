"use client";

import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

const occasions = [
  { label: "Birthdays", emoji: "🎂", href: "/shop?occasion=birthday" },
  { label: "Anniversaries", emoji: "💍", href: "/shop?occasion=anniversary" },
  { label: "Baby Showers", emoji: "🍼", href: "/shop?occasion=baby-shower" },
  { label: "Housewarming", emoji: "🏡", href: "/shop?occasion=housewarming" },
  { label: "Weddings", emoji: "💒", href: "/shop?category=wedding" },
  { label: "Corporate", emoji: "🤝", href: "/corporate-gifting" },
  { label: "Diwali", emoji: "🪔", href: "/festivals#diwali" },
  { label: "Christmas", emoji: "🎄", href: "/festivals#christmas" },
  { label: "New Year", emoji: "🥂", href: "/festivals#new-year" },
  { label: "Valentine's", emoji: "❤️", href: "/festivals#valentine" },
  { label: "Mother's Day", emoji: "🌷", href: "/festivals#mothers-day" },
  { label: "Father's Day", emoji: "👔", href: "/festivals#fathers-day" },
  { label: "Women's Day", emoji: "💜", href: "/festivals#womens-day" },
];

export function FeaturedOccasions() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section ref={ref} className="py-24 bg-cream px-4">
      <div className="max-w-7xl mx-auto">
        <div className={cn("text-center mb-14 transition-all duration-700", inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}>
          <p className="section-eyebrow mb-3">Perfect For</p>
          <h2 className="section-heading text-5xl lg:text-6xl text-charcoal">
            Every Occasion
          </h2>
          <p className="font-sans text-charcoal/60 mt-4 max-w-xl mx-auto">
            From life's grandest celebrations to everyday moments of gratitude — we have a gift for it.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {occasions.map((occ, i) => (
            <Link
              key={occ.label}
              href={occ.href}
              className={cn(
                "group flex items-center gap-2.5 px-5 py-3 border border-gold/20 bg-white hover:border-gold hover:bg-gold/5 hover:shadow-gold transition-all duration-300",
                inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
              )}
              style={{ transitionDelay: `${i * 40}ms`, transition: "all 0.4s ease" }}
            >
              <span className="text-xl">{occ.emoji}</span>
              <span className="font-sans text-sm text-charcoal group-hover:text-purple-600 transition-colors font-medium">
                {occ.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
