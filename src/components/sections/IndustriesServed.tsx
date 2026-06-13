"use client";

import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

const industries = [
  { name: "Healthcare", icon: "🏥" },
  { name: "IVF Clinics", icon: "🌸" },
  { name: "Hospitals", icon: "🏨" },
  { name: "Manufacturing", icon: "⚙️" },
  { name: "Technology", icon: "💻" },
  { name: "Aerospace", icon: "✈️" },
  { name: "Financial Services", icon: "💼" },
  { name: "Real Estate", icon: "🏗️" },
  { name: "Education", icon: "📚" },
  { name: "Hospitality", icon: "🏨" },
  { name: "Startups", icon: "🚀" },
];

export function IndustriesServed() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section ref={ref} className="py-20 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className={cn("text-center mb-12 transition-all duration-700", inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}>
          <p className="section-eyebrow mb-3">Trusted By</p>
          <h2 className="section-heading text-4xl lg:text-5xl text-charcoal">
            Industries We Serve
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {industries.map((ind, i) => (
            <div
              key={ind.name}
              className={cn(
                "flex items-center gap-2.5 px-6 py-3.5 bg-cream border border-transparent hover:border-gold/30 hover:bg-gold/5 transition-all duration-300 cursor-default",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              )}
              style={{ transitionDelay: `${i * 50}ms`, transition: "all 0.5s ease" }}
            >
              <span className="text-lg">{ind.icon}</span>
              <span className="font-sans text-sm font-medium text-charcoal">{ind.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
