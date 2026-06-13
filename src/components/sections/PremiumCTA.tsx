import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function PremiumCTA() {
  return (
    <section className="relative py-28 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/95 via-purple-800/90 to-purple-900/95" />
      </div>

      {/* Geometric accents */}
      <div className="absolute top-8 left-8 w-32 h-32 border border-gold/20 rotate-45 hidden lg:block" />
      <div className="absolute bottom-8 right-8 w-20 h-20 border border-gold/15 rotate-45 hidden lg:block" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <p className="section-eyebrow mb-4">Exclusive</p>
        <h2 className="section-heading text-5xl lg:text-7xl text-white mb-6">
          Need Something
          <span className="block text-gold-shimmer">Truly Unique?</span>
        </h2>
        <p className="font-sans text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
          We design gifts people remember. From bespoke corporate collections to one-of-a-kind luxury hampers — our concierge team is here to make it extraordinary.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="btn-gold">
            Book a Consultation <ArrowRight size={16} />
          </Link>
          <Link href="/shop" className="btn-outline-gold">
            Explore Collections
          </Link>
        </div>
      </div>
    </section>
  );
}
