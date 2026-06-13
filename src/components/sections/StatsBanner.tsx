"use client";

import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const stats = [
  { value: 500, suffix: "+", label: "Brands Served" },
  { value: 10000, suffix: "+", label: "Hampers Delivered" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 50, suffix: "+", label: "Cities Reached" },
];

export function StatsBanner() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section ref={ref} className="py-16 bg-purple-gradient px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-5xl lg:text-6xl font-semibold text-gold">
                {inView ? (
                  <CountUp end={stat.value} duration={2.5} delay={i * 0.2} />
                ) : (
                  "0"
                )}
                <span>{stat.suffix}</span>
              </div>
              <p className="font-sans text-sm text-gold-champagne/70 mt-2 tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
