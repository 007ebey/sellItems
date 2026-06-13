"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingBag, Star, SlidersHorizontal, X } from "lucide-react";
import { products } from "@/lib/products";
import { useCartStore } from "@/lib/cart-store";
import { formatPrice, getWhatsAppUrl } from "@/lib/utils";
import { cn } from "@/lib/utils";
import toast from "react-hot-toast";

const categories = [
  { value: "all", label: "All Hampers" },
  { value: "corporate", label: "Corporate" },
  { value: "healthcare", label: "Healthcare" },
  { value: "luxury", label: "Luxury" },
  { value: "wedding", label: "Wedding" },
  { value: "festival", label: "Festival" },
  { value: "executive", label: "Executive" },
  { value: "baby", label: "Baby & Maternity" },
  { value: "wellness", label: "Wellness" },
  { value: "gourmet", label: "Gourmet" },
];

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
];

export function ShopGrid() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [sort, setSort] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);
  const addItem = useCartStore((s) => s.addItem);

  let filtered = activeCategory === "all" ? products : products.filter((p) => p.category === activeCategory);

  if (sort === "price-asc") filtered = [...filtered].sort((a, b) => a.price - b.price);
  else if (sort === "price-desc") filtered = [...filtered].sort((a, b) => b.price - a.price);
  else if (sort === "rating") filtered = [...filtered].sort((a, b) => b.rating - a.rating);

  return (
    <section className="py-12 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        {/* Filters */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-gray-100">
          {/* Category pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={cn(
                  "px-4 py-1.5 font-sans text-sm transition-all duration-300",
                  activeCategory === cat.value
                    ? "bg-purple-600 text-white"
                    : "border border-gray-200 text-charcoal/70 hover:border-purple-600 hover:text-purple-600"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-3">
            <SlidersHorizontal size={16} className="text-charcoal/40" />
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="font-sans text-sm border border-gray-200 px-3 py-1.5 outline-none focus:border-gold"
            >
              {sortOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
            <span className="font-sans text-xs text-charcoal/40">
              {filtered.length} results
            </span>
          </div>
        </div>

        {/* Product Grid */}
        {filtered.length === 0 ? (
          <div className="py-24 text-center">
            <p className="font-display text-3xl text-charcoal/40">No hampers in this category yet.</p>
            <p className="font-sans text-sm text-charcoal/40 mt-2">
              <a href={getWhatsAppUrl("Hello, I'd like a custom hamper in a specific category.")} className="text-purple-600 underline">
                Chat with us for a custom curation →
              </a>
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((product) => (
              <div key={product.id} className="luxury-card group">
                {product.badge && (
                  <div className="absolute top-4 left-4 z-10 badge-gold">{product.badge}</div>
                )}

                <Link href={`/shop/${product.slug}`} className="block overflow-hidden aspect-[4/3] relative">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-white/80 flex items-center justify-center">
                      <span className="font-accent text-sm tracking-widest text-charcoal/60">Out of Stock</span>
                    </div>
                  )}
                </Link>

                <div className="p-6">
                  <p className="font-accent text-[10px] tracking-widest text-gold uppercase mb-1">
                    {product.category}
                  </p>
                  <Link href={`/shop/${product.slug}`}>
                    <h3 className="font-display text-2xl font-semibold text-charcoal mb-1 hover:text-purple-600 transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="font-display text-sm italic text-charcoal/50 mb-3">{product.tagline}</p>

                  <div className="flex items-center gap-1.5 mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} size={11} className={j < Math.floor(product.rating) ? "star-filled fill-current" : "star-empty"} />
                      ))}
                    </div>
                    <span className="font-sans text-xs text-charcoal/50">({product.reviewCount})</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-2">
                      <span className="price-tag">{formatPrice(product.price)}</span>
                      {product.comparePrice && (
                        <span className="font-sans text-xs text-charcoal/40 line-through">
                          {formatPrice(product.comparePrice)}
                        </span>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Link
                        href={`/shop/${product.slug}`}
                        className="font-sans text-xs text-purple-600 hover:underline"
                      >
                        View
                      </Link>
                      <button
                        disabled={!product.inStock}
                        onClick={() => {
                          addItem(product);
                          toast.success(`${product.name} added to cart`);
                        }}
                        className="bg-purple-600 text-white p-2 hover:bg-gold hover:text-charcoal transition-all duration-300 disabled:opacity-30"
                        title="Add to cart"
                      >
                        <ShoppingBag size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 bg-cream border border-gold/15 p-8 text-center">
          <h3 className="font-display text-3xl text-charcoal mb-2">Can't Find What You're Looking For?</h3>
          <p className="font-sans text-charcoal/60 mb-6">
            Our gifting concierge will curate something entirely bespoke for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/build-hamper" className="btn-gold">Build Your Hamper</Link>
            <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="btn-outline-gold">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
