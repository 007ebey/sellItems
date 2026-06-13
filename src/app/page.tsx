import { HeroSection } from "@/components/sections/HeroSection";
import { WhyDoxora } from "@/components/sections/WhyDoxora";
import { GiftingUniverse } from "@/components/sections/GiftingUniverse";
import { FeaturedOccasions } from "@/components/sections/FeaturedOccasions";
import { IndustriesServed } from "@/components/sections/IndustriesServed";
import { ConciergeSection } from "@/components/sections/ConciergeSection";
import { FeaturedHampers } from "@/components/sections/FeaturedHampers";
import { Testimonials } from "@/components/sections/Testimonials";
import { StatsBanner } from "@/components/sections/StatsBanner";
import { PremiumCTA } from "@/components/sections/PremiumCTA";
import { MarqueeBanner } from "@/components/sections/MarqueeBanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Doxora – India's Premium Gifting Concierge | Luxury Hampers & Corporate Gifts",
  description:
    "Doxora crafts bespoke luxury gifting experiences. Corporate gifts, premium hampers, IVF & healthcare gifting, weddings, festivals. Nationwide delivery. Request a quote today.",
};

export default function HomePage() {
  return (
    <div className="page-enter">
      <HeroSection />
      <MarqueeBanner />
      <WhyDoxora />
      <FeaturedHampers />
      <GiftingUniverse />
      <StatsBanner />
      <FeaturedOccasions />
      <ConciergeSection />
      <IndustriesServed />
      <Testimonials />
      <PremiumCTA />
    </div>
  );
}
