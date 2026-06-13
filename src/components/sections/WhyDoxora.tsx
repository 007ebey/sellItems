"use client";

import { useInView } from "react-intersection-observer";
import { Gem, UserCheck, Truck, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const pillars = [
  {
    icon: Gem,
    title: "Luxury Curation",
    desc: "Every hamper is meticulously sourced, designed, and presented to reflect premium quality and thoughtfulness.",
  },
  {
    icon: UserCheck,
    title: "Personalized Experiences",
    desc: "From custom packaging to handwritten notes — every detail is tailored to create a truly personal connection.",
  },
  {
    icon: Truck,
    title: "Nationwide Delivery",
    desc: "We deliver across India with the same care and elegance as a luxury concierge — on time, every time.",
  },
  {
    icon: Star,
    title: "End-to-End Execution",
    desc: "From curation to delivery, we manage every step so you can focus on the relationship, not the logistics.",
  },
];

export function WhyDoxora() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section ref={ref} className="py-24 bg-cream px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={cn("text-center mb-16 transition-all duration-700", inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}>
          <p className="section-eyebrow mb-3">Why Choose Us</p>
          <h2 className="section-heading text-5xl lg:text-6xl text-charcoal">
            The Doxora Difference
          </h2>
          <div className="luxury-divider mt-6 max-w-xs mx-auto">
            <span className="font-display text-gold italic text-lg">crafted with purpose</span>
          </div>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className={cn(
                "group bg-white p-8 border border-gold/10 hover:border-gold/40 transition-all duration-500 hover:shadow-luxury text-center",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="w-14 h-14 mx-auto mb-5 bg-purple-600/5 group-hover:bg-purple-600 flex items-center justify-center transition-all duration-500 rounded-sm">
                <pillar.icon
                  size={24}
                  className="text-purple-600 group-hover:text-white transition-colors duration-500"
                />
              </div>
              <h3 className="font-display text-xl font-semibold text-charcoal mb-3">
                {pillar.title}
              </h3>
              <p className="font-sans text-sm text-charcoal/60 leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
