"use client";

import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Meera Iyer",
    company: "Apollo Hospitals",
    role: "Head of Patient Experience",
    content:
      "Doxora elevated our patient gifting program to something truly extraordinary. The IVF journey hampers brought tears to our patients' eyes. The quality, thoughtfulness, and presentation are unmatched.",
    rating: 5,
  },
  {
    name: "Arjun Kapoor",
    company: "Infosys BPM",
    role: "HR Director",
    content:
      "We've been using Doxora for all our corporate gifting — Diwali, employee welcome kits, and leadership gifts. Each time, they exceed our expectations. Our employees genuinely look forward to these gifts.",
    rating: 5,
  },
  {
    name: "Priya Suresh",
    company: "Nova IVF Fertility",
    role: "Clinic Manager",
    content:
      "The Embryo Transfer hampers from Doxora have become an integral part of our patient journey. The couples feel so cared for. It's more than a gift — it's an experience of hope.",
    rating: 5,
  },
  {
    name: "Rahul Mehta",
    company: "Prestige Group",
    role: "VP – Sales & Marketing",
    content:
      "For our premium client appreciation event, Doxora curated 200 executive hampers in 72 hours. Flawless execution, stunning presentation, and our clients were genuinely impressed.",
    rating: 5,
  },
  {
    name: "Divya Sharma",
    company: "Manipal Hospitals",
    role: "Director – Operations",
    content:
      "Doxora's nurse appreciation hampers for our annual event were a massive hit. The personalisation, packaging, and delivery were all seamless. Truly a gifting partner who cares.",
    rating: 5,
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  return (
    <section ref={ref} className="py-24 bg-cream px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className={cn("text-center mb-14 transition-all duration-700", inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}>
          <p className="section-eyebrow mb-3">What Our Clients Say</p>
          <h2 className="section-heading text-5xl lg:text-6xl text-charcoal">
            Loved by India's Best
          </h2>
        </div>

        <div className={cn("transition-all duration-700", inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12")}>
          <div className="relative bg-white border border-gold/15 p-8 lg:p-12 shadow-luxury">
            <Quote size={48} className="text-gold/20 absolute top-6 left-8" />

            <div className="relative">
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="star-filled fill-current" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="font-display text-2xl lg:text-3xl font-medium text-charcoal leading-relaxed mb-8 italic">
                "{testimonials[active].content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-sans font-semibold text-charcoal">{testimonials[active].name}</p>
                  <p className="font-sans text-sm text-charcoal/60">
                    {testimonials[active].role}, {testimonials[active].company}
                  </p>
                </div>

                {/* Navigation */}
                <div className="flex gap-2">
                  <button
                    onClick={prev}
                    className="w-10 h-10 border border-gold/30 flex items-center justify-center hover:bg-gold hover:border-gold transition-all duration-300 group"
                  >
                    <ChevronLeft size={18} className="text-gold group-hover:text-charcoal" />
                  </button>
                  <button
                    onClick={next}
                    className="w-10 h-10 border border-gold/30 flex items-center justify-center hover:bg-gold hover:border-gold transition-all duration-300 group"
                  >
                    <ChevronRight size={18} className="text-gold group-hover:text-charcoal" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`transition-all duration-300 ${active === i ? "w-6 h-1.5 bg-gold" : "w-1.5 h-1.5 bg-gold/30 rounded-full"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
