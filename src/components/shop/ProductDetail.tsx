"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingBag, Heart, Star, Check, Truck, Shield, ArrowRight, MessageCircle } from "lucide-react";
import { Product } from "@/types";
import { useCartStore } from "@/lib/cart-store";
import { formatPrice, getWhatsAppUrl } from "@/lib/utils";
import toast from "react-hot-toast";

interface Props {
  product: Product;
}

declare global {
  interface Window {
    Razorpay: new (options: Record<string, unknown>) => { open: () => void };
  }
}

export function ProductDetail({ product }: Props) {
  const [activeImage, setActiveImage] = useState(0);
  const [qty, setQty] = useState(1);
  const [personalization, setPersonalization] = useState<Record<string, string>>({});
  const [buyLoading, setBuyLoading] = useState(false);
  const addItem = useCartStore((s) => s.addItem);

  const loadRazorpay = () =>
    new Promise<void>((resolve) => {
      if (document.getElementById("razorpay-script")) { resolve(); return; }
      const s = document.createElement("script");
      s.id = "razorpay-script";
      s.src = "https://checkout.razorpay.com/v1/checkout.js";
      s.onload = () => resolve();
      document.body.appendChild(s);
    });

  const handleBuyNow = async () => {
    setBuyLoading(true);
    try {
      await loadRazorpay();
      const res = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: product.price * qty }),
      });
      const { orderId, amount } = await res.json();

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount,
        currency: "INR",
        name: "Doxora",
        description: product.name,
        order_id: orderId,
        image: "/logo.png",
        prefill: { name: "", email: "", contact: "" },
        theme: { color: "#4A235A" },
        handler: async (response: { razorpay_payment_id: string; razorpay_order_id: string; razorpay_signature: string }) => {
          const verify = await fetch("/api/verify-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(response),
          });
          const vData = await verify.json();
          if (vData.success) {
            toast.success("Payment successful! Order confirmed.");
          } else {
            toast.error("Payment verification failed. Contact support.");
          }
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setBuyLoading(false);
    }
  };

  return (
    <div className="page-enter">
      {/* Breadcrumb */}
      <div className="bg-cream px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-2 font-sans text-xs text-charcoal/50">
          <Link href="/" className="hover:text-purple-600">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-purple-600">Shop</Link>
          <span>/</span>
          <span className="text-charcoal">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Images */}
          <div>
            <div className="aspect-square overflow-hidden bg-cream mb-4">
              <img
                src={product.images[activeImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`w-20 h-20 overflow-hidden border-2 transition-all ${
                    activeImage === i ? "border-gold" : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div>
            {product.badge && <div className="badge-gold mb-3">{product.badge}</div>}
            <p className="font-accent text-xs tracking-widest text-gold uppercase mb-2">{product.category}</p>
            <h1 className="section-heading text-4xl lg:text-5xl text-charcoal mb-2">{product.name}</h1>
            <p className="font-display text-xl italic text-purple-600 mb-4">{product.tagline}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} className={j < Math.floor(product.rating) ? "star-filled fill-current" : "star-empty"} />
                ))}
              </div>
              <span className="font-sans text-sm text-charcoal/60">{product.rating} ({product.reviewCount} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="price-tag text-4xl">{formatPrice(product.price)}</span>
              {product.comparePrice && (
                <span className="font-sans text-lg text-charcoal/40 line-through">{formatPrice(product.comparePrice)}</span>
              )}
              <span className="font-sans text-xs text-green-600 bg-green-50 px-2 py-0.5">Free delivery over ₹1,499</span>
            </div>

            <p className="font-sans text-charcoal/70 leading-relaxed mb-8">{product.description}</p>

            {/* Contents */}
            <div className="mb-8 p-5 bg-cream border-l-2 border-gold">
              <h3 className="font-accent text-xs tracking-widest text-charcoal uppercase mb-3">What's Included</h3>
              <ul className="space-y-1.5">
                {product.contents.map((item) => (
                  <li key={item} className="flex items-start gap-2 font-sans text-sm text-charcoal/70">
                    <Check size={14} className="text-gold mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Personalization */}
            {product.personalizationOptions.length > 0 && (
              <div className="mb-8">
                <h3 className="font-accent text-xs tracking-widest text-charcoal uppercase mb-3">Personalization</h3>
                <div className="space-y-3">
                  {product.personalizationOptions.map((opt) => (
                    <div key={opt.id}>
                      <label className="block font-sans text-xs text-charcoal/60 mb-1.5">
                        {opt.label} {opt.required && "*"}
                      </label>
                      {opt.type === "select" ? (
                        <select
                          value={personalization[opt.id] || ""}
                          onChange={(e) => setPersonalization({ ...personalization, [opt.id]: e.target.value })}
                          className="luxury-input"
                        >
                          <option value="">Select...</option>
                          {opt.options?.map((o) => <option key={o}>{o}</option>)}
                        </select>
                      ) : (
                        <input
                          type="text"
                          value={personalization[opt.id] || ""}
                          onChange={(e) => setPersonalization({ ...personalization, [opt.id]: e.target.value })}
                          className="luxury-input"
                          placeholder={opt.label}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="flex items-center gap-4 mb-8">
              <span className="font-sans text-xs text-charcoal/60 uppercase tracking-wider">Quantity</span>
              <div className="flex items-center border border-gray-200">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-4 py-2 font-sans text-lg hover:bg-cream transition-colors">−</button>
                <span className="px-4 py-2 font-sans text-sm font-medium min-w-[3rem] text-center">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="px-4 py-2 font-sans text-lg hover:bg-cream transition-colors">+</button>
              </div>
              <span className="font-display text-xl text-purple-600">{formatPrice(product.price * qty)}</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <button
                onClick={handleBuyNow}
                disabled={buyLoading || !product.inStock}
                className="btn-gold flex-1 justify-center py-4 disabled:opacity-50"
              >
                {buyLoading ? "Processing..." : "Buy Now"}
                <ArrowRight size={16} />
              </button>
              <button
                onClick={() => {
                  addItem(product, qty, personalization);
                  toast.success(`${product.name} added to cart`);
                }}
                disabled={!product.inStock}
                className="btn-purple flex-1 justify-center py-4 disabled:opacity-50"
              >
                <ShoppingBag size={16} />
                Add to Cart
              </button>
            </div>

            <a
              href={getWhatsAppUrl(`I'm interested in ${product.name} (₹${product.price}). Can you help me?`)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-sans text-sm text-[#25D366] hover:underline mb-8"
            >
              <MessageCircle size={16} className="fill-current" />
              Chat on WhatsApp for bulk orders
            </a>

            {/* Delivery */}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2 p-3 bg-cream">
                <Truck size={16} className="text-gold shrink-0" />
                <div>
                  <p className="font-sans text-xs font-medium text-charcoal">Delivery</p>
                  <p className="font-sans text-xs text-charcoal/60">{product.deliveryTimeline}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 p-3 bg-cream">
                <Shield size={16} className="text-gold shrink-0" />
                <div>
                  <p className="font-sans text-xs font-medium text-charcoal">Secure Payment</p>
                  <p className="font-sans text-xs text-charcoal/60">Razorpay encrypted</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
