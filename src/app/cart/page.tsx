"use client";

import Link from "next/link";
import { Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { useCartStore } from "@/lib/cart-store";
import { formatPrice } from "@/lib/utils";
import toast from "react-hot-toast";

export default function CartPage() {
  const { items, removeItem, updateQuantity, subtotal, total } = useCartStore();
  const sub = subtotal();
  const tot = total();
  const shipping = tot - sub;

  if (items.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 page-enter">
        <ShoppingBag size={64} className="text-purple-600/20 mb-6" />
        <h1 className="font-display text-4xl text-charcoal mb-3">Your cart is empty</h1>
        <p className="font-sans text-charcoal/60 mb-8">Discover our curated collection of luxury hampers.</p>
        <Link href="/shop" className="btn-gold">Browse Hampers <ArrowRight size={16} /></Link>
      </div>
    );
  }

  return (
    <div className="page-enter">
      <div className="bg-cream py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-display text-4xl text-charcoal">Your Cart</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Items */}
          <div className="lg:col-span-2 space-y-6">
            {items.map(({ product, quantity }) => (
              <div key={product.id} className="flex gap-5 pb-6 border-b border-gray-100">
                <img src={product.images[0]} alt={product.name} className="w-24 h-24 object-cover shrink-0" />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-sans text-xs text-gold uppercase tracking-wider">{product.category}</p>
                      <h3 className="font-display text-xl font-semibold text-charcoal">{product.name}</h3>
                    </div>
                    <button onClick={() => { removeItem(product.id); toast.success("Removed from cart"); }}
                      className="text-charcoal/30 hover:text-red-400 transition-colors p-1">
                      <Trash2 size={16} />
                    </button>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center border border-gray-200">
                      <button onClick={() => updateQuantity(product.id, quantity - 1)} className="px-3 py-1 hover:bg-cream transition-colors">−</button>
                      <span className="px-3 py-1 font-sans text-sm">{quantity}</span>
                      <button onClick={() => updateQuantity(product.id, quantity + 1)} className="px-3 py-1 hover:bg-cream transition-colors">+</button>
                    </div>
                    <span className="price-tag text-xl">{formatPrice(product.price * quantity)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div>
            <div className="bg-cream border border-gold/15 p-6 sticky top-24">
              <h2 className="font-display text-2xl font-semibold text-charcoal mb-6">Order Summary</h2>
              <div className="space-y-3 font-sans text-sm mb-6">
                <div className="flex justify-between">
                  <span className="text-charcoal/60">Subtotal</span>
                  <span>{formatPrice(sub)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal/60">Shipping</span>
                  <span className={shipping === 0 ? "text-green-600 font-medium" : ""}>
                    {shipping === 0 ? "Free" : formatPrice(shipping)}
                  </span>
                </div>
                {shipping === 0 && (
                  <p className="text-xs text-green-600">✓ Free delivery applied</p>
                )}
                <div className="border-t border-gray-200 pt-3 flex justify-between font-semibold text-base">
                  <span>Total</span>
                  <span className="price-tag text-2xl">{formatPrice(tot)}</span>
                </div>
              </div>
              <Link href="/checkout" className="btn-gold w-full justify-center py-4 mb-3">
                Proceed to Checkout <ArrowRight size={16} />
              </Link>
              <Link href="/shop" className="btn-outline-gold w-full justify-center py-3 text-xs">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
