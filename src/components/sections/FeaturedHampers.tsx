"use client";

import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { ArrowRight, ShoppingBag, Star } from "lucide-react";
import { getFeaturedProducts } from "@/lib/products";
import { formatPrice, getWhatsAppUrl } from "@/lib/utils";
import { useCartStore } from "@/lib/cart-store";
import { cn } from "@/lib/utils";
import toast from "react-hot-toast";

export function FeaturedHampers() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const featured = getFeaturedProducts().slice(0, 3);
  const addItem = useCartStore((s) => s.addItem);

  return (
    <section ref={ref} className="py-24 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className={cn("flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4 transition-all duration-700", inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}>
          <div>
            <p className="section-eyebrow mb-3">Curated Collections</p>
            <h2 className="section-heading text-5xl lg:text-6xl text-charcoal">
              Featured Hampers
            </h2>
          </div>
          <Link href="/shop" className="btn-outline-gold self-start md:self-end whitespace-nowrap">
            View All <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((product, i) => (
            <div
              key={product.id}
              className={cn(
                "luxury-card group img-shine relative",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${i * 150}ms`, transition: "all 0.6s ease" }}
            >
              {/* Badge */}
              {product.badge && (
                <div className="absolute top-4 left-4 z-10 badge-gold">
                  {product.badge}
                </div>
              )}

              {/* Image */}
              <Link href={`/shop/${product.slug}`} className="block overflow-hidden aspect-[4/3]">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </Link>

              {/* Content */}
              <div className="p-6">
                <p className="font-accent text-[10px] tracking-widest text-gold uppercase mb-1">
                  {product.category}
                </p>
                <Link href={`/shop/${product.slug}`}>
                  <h3 className="font-display text-2xl font-semibold text-charcoal mb-1 hover:text-purple-600 transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <p className="font-display text-base italic text-charcoal/50 mb-3">
                  {product.tagline}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-1.5 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        size={12}
                        className={j < Math.floor(product.rating) ? "star-filled fill-current" : "star-empty"}
                      />
                    ))}
                  </div>
                  <span className="font-sans text-xs text-charcoal/50">
                    ({product.reviewCount})
                  </span>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="price-tag">{formatPrice(product.price)}</span>
                    {product.comparePrice && (
                      <span className="ml-2 font-sans text-sm text-charcoal/40 line-through">
                        {formatPrice(product.comparePrice)}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => {
                      addItem(product);
                      toast.success(`${product.name} added to cart`);
                    }}
                    className="flex items-center gap-1.5 bg-purple-600 text-white p-2.5 hover:bg-gold hover:text-charcoal transition-all duration-300"
                    title="Add to cart"
                  >
                    <ShoppingBag size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <div className="mt-12 text-center">
          <p className="font-sans text-sm text-charcoal/60 mb-3">
            Need something custom? Let our gifting concierge help.
          </p>
          <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="btn-purple">
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
