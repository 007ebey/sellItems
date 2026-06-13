import type { Metadata } from "next";
import { ShopGrid } from "@/components/shop/ShopGrid";

export const metadata: Metadata = {
  title: "Shop Luxury Hampers | Premium Gift Boxes India",
  description:
    "Browse Doxora's curated collection of luxury gift hampers. Corporate, healthcare, wedding, gourmet, wellness, and festival hampers. Free delivery on orders above ₹1,499.",
};

export default function ShopPage() {
  return (
    <div className="page-enter">
      {/* Header */}
      <section className="relative py-20 bg-purple-gradient px-4 text-center">
        <p className="section-eyebrow mb-3">Luxury Boutique</p>
        <h1 className="font-display text-6xl lg:text-7xl font-semibold text-white">
          Shop Hampers
        </h1>
        <p className="font-sans text-gold-champagne/70 mt-4 max-w-xl mx-auto">
          Every hamper is curated with purpose, designed with elegance, and delivered with care.
        </p>
      </section>

      <ShopGrid />
    </div>
  );
}
