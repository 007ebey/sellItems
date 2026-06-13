import type { Metadata } from "next";
import { HamperBuilder } from "@/components/shop/HamperBuilder";

export const metadata: Metadata = {
  title: "Build Your Own Hamper | Custom Gift Curation",
  description:
    "Create your dream gift hamper with Doxora's guided builder. Choose your occasion, recipient, budget, and products — we'll handle the rest.",
};

export default function BuildHamperPage() {
  return (
    <div className="page-enter">
      <section className="relative py-20 bg-purple-gradient px-4 text-center">
        <p className="section-eyebrow mb-3">Bespoke Curation</p>
        <h1 className="font-display text-6xl lg:text-7xl font-semibold text-white">
          Build Your Hamper
        </h1>
        <p className="font-sans text-gold-champagne/70 mt-4 max-w-xl mx-auto">
          Design your dream gift in 7 easy steps. Fully personalised, beautifully packaged.
        </p>
      </section>
      <HamperBuilder />
    </div>
  );
}
