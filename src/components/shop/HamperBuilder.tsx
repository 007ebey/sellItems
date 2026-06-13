"use client";

import { useState } from "react";
import { Check, ArrowRight, ArrowLeft, ShoppingBag } from "lucide-react";
import { products } from "@/lib/products";
import { formatPrice, getWhatsAppUrl } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { useCartStore } from "@/lib/cart-store";
import toast from "react-hot-toast";

const steps = [
  "Occasion",
  "Recipient",
  "Budget",
  "Products",
  "Personalise",
  "Delivery",
  "Review",
];

const occasions = ["Birthday", "Anniversary", "Baby Shower", "Wedding", "Corporate", "Diwali", "Christmas", "IVF/Healthcare", "Other"];
const recipients = ["Partner", "Parent", "Friend", "Colleague", "Client", "Employee", "Patient", "Child", "Executive"];
const budgets = [
  { label: "₹500–₹1,000", min: 500, max: 1000 },
  { label: "₹1,000–₹2,500", min: 1000, max: 2500 },
  { label: "₹2,500–₹5,000", min: 2500, max: 5000 },
  { label: "₹5,000–₹10,000", min: 5000, max: 10000 },
  { label: "₹10,000+", min: 10000, max: Infinity },
];

export function HamperBuilder() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    occasion: "",
    recipient: "",
    budget: "",
    budgetMax: Infinity,
    selectedProducts: [] as string[],
    message: "",
    packaging: "Luxury Kraft Box",
    ribbonColor: "Gold",
    deliveryDate: "",
  });
  const addItem = useCartStore((s) => s.addItem);

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  const selectedProductObjects = products.filter((p) => data.selectedProducts.includes(p.id));
  const totalPrice = selectedProductObjects.reduce((sum, p) => sum + p.price, 0);

  const handleFinish = () => {
    const msg = `Hello Doxora! I've built my custom hamper:\n\nOccasion: ${data.occasion}\nRecipient: ${data.recipient}\nBudget: ${data.budget}\nProducts: ${selectedProductObjects.map((p) => p.name).join(", ")}\nMessage: ${data.message}\nPackaging: ${data.packaging}\nRibbon: ${data.ribbonColor}\nDelivery by: ${data.deliveryDate || "Flexible"}\n\nPlease help me complete this order!`;
    window.open(getWhatsAppUrl(msg), "_blank");
  };

  return (
    <section className="py-16 bg-cream px-4">
      <div className="max-w-4xl mx-auto">
        {/* Progress Steps */}
        <div className="flex items-center justify-between mb-12 overflow-x-auto pb-2">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center">
              <div
                className={cn(
                  "flex flex-col items-center gap-1 cursor-pointer",
                  i <= step ? "opacity-100" : "opacity-40"
                )}
                onClick={() => i < step && setStep(i)}
              >
                <div className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-sm font-sans font-medium transition-all duration-300",
                  i < step ? "bg-gold text-charcoal" : i === step ? "bg-purple-600 text-white" : "bg-gray-200 text-charcoal/40"
                )}>
                  {i < step ? <Check size={14} /> : i + 1}
                </div>
                <span className={cn("font-sans text-xs whitespace-nowrap hidden sm:block", i === step ? "text-purple-600 font-medium" : "text-charcoal/50")}>
                  {s}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div className={cn("h-px w-8 lg:w-16 mx-1 transition-all", i < step ? "bg-gold" : "bg-gray-200")} />
              )}
            </div>
          ))}
        </div>

        {/* Step Content */}
        <div className="bg-white border border-gold/15 p-8 lg:p-12 shadow-card min-h-[360px]">
          {/* Step 0 – Occasion */}
          {step === 0 && (
            <div>
              <h2 className="section-heading text-3xl text-charcoal mb-2">Choose the Occasion</h2>
              <p className="font-sans text-charcoal/60 mb-8">What are you celebrating?</p>
              <div className="flex flex-wrap gap-3">
                {occasions.map((o) => (
                  <button key={o} onClick={() => setData({ ...data, occasion: o })}
                    className={cn("px-5 py-2.5 font-sans text-sm border-2 transition-all duration-300",
                      data.occasion === o ? "border-gold bg-gold/10 text-charcoal font-medium" : "border-gray-200 hover:border-gold/50")}>
                    {o}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 1 – Recipient */}
          {step === 1 && (
            <div>
              <h2 className="section-heading text-3xl text-charcoal mb-2">Who is it for?</h2>
              <p className="font-sans text-charcoal/60 mb-8">Help us personalise the perfect gift.</p>
              <div className="flex flex-wrap gap-3">
                {recipients.map((r) => (
                  <button key={r} onClick={() => setData({ ...data, recipient: r })}
                    className={cn("px-5 py-2.5 font-sans text-sm border-2 transition-all duration-300",
                      data.recipient === r ? "border-gold bg-gold/10 font-medium" : "border-gray-200 hover:border-gold/50")}>
                    {r}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2 – Budget */}
          {step === 2 && (
            <div>
              <h2 className="section-heading text-3xl text-charcoal mb-2">Set Your Budget</h2>
              <p className="font-sans text-charcoal/60 mb-8">Per hamper budget range.</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {budgets.map((b) => (
                  <button key={b.label} onClick={() => setData({ ...data, budget: b.label, budgetMax: b.max })}
                    className={cn("p-4 border-2 font-sans text-sm text-center transition-all duration-300",
                      data.budget === b.label ? "border-gold bg-gold/10 font-semibold" : "border-gray-200 hover:border-gold/50")}>
                    {b.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3 – Products */}
          {step === 3 && (
            <div>
              <h2 className="section-heading text-3xl text-charcoal mb-2">Choose Products</h2>
              <p className="font-sans text-charcoal/60 mb-8">Select items for your hamper
                {data.budget && ` (within ${data.budget})`}.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-80 overflow-y-auto pr-1">
                {products
                  .filter((p) => p.price <= data.budgetMax)
                  .map((p) => (
                    <label key={p.id} className={cn("flex gap-3 p-3 border cursor-pointer transition-all",
                      data.selectedProducts.includes(p.id) ? "border-gold bg-gold/5" : "border-gray-100 hover:border-gold/30")}>
                      <input type="checkbox" className="mt-1 accent-purple-600"
                        checked={data.selectedProducts.includes(p.id)}
                        onChange={(e) => {
                          if (e.target.checked) setData({ ...data, selectedProducts: [...data.selectedProducts, p.id] });
                          else setData({ ...data, selectedProducts: data.selectedProducts.filter((id) => id !== p.id) });
                        }} />
                      <img src={p.images[0]} alt={p.name} className="w-12 h-12 object-cover shrink-0" />
                      <div>
                        <p className="font-sans text-sm font-medium">{p.name}</p>
                        <p className="font-sans text-xs text-charcoal/50">{formatPrice(p.price)}</p>
                      </div>
                    </label>
                  ))}
              </div>
              {data.selectedProducts.length > 0 && (
                <p className="mt-4 font-sans text-sm text-purple-600">
                  {data.selectedProducts.length} items selected · Total: {formatPrice(totalPrice)}
                </p>
              )}
            </div>
          )}

          {/* Step 4 – Personalise */}
          {step === 4 && (
            <div>
              <h2 className="section-heading text-3xl text-charcoal mb-2">Add a Personal Touch</h2>
              <p className="font-sans text-charcoal/60 mb-8">Make it truly unforgettable.</p>
              <div className="space-y-5">
                <div>
                  <label className="block font-sans text-xs uppercase tracking-wider text-charcoal/60 mb-1.5">Personal Message</label>
                  <textarea value={data.message} onChange={(e) => setData({ ...data, message: e.target.value })}
                    rows={3} className="luxury-input resize-none" placeholder="Write a heartfelt message..." />
                </div>
                <div>
                  <label className="block font-sans text-xs uppercase tracking-wider text-charcoal/60 mb-1.5">Packaging Style</label>
                  <select value={data.packaging} onChange={(e) => setData({ ...data, packaging: e.target.value })} className="luxury-input">
                    {["Luxury Kraft Box", "Premium Wicker Basket", "Satin Gift Box", "Bamboo Tray"].map((o) => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block font-sans text-xs uppercase tracking-wider text-charcoal/60 mb-1.5">Ribbon Color</label>
                  <div className="flex gap-3">
                    {["Gold", "Purple", "Navy", "Ivory", "Blush Pink"].map((c) => (
                      <button key={c} onClick={() => setData({ ...data, ribbonColor: c })}
                        className={cn("px-3 py-1.5 font-sans text-xs border-2 transition-all",
                          data.ribbonColor === c ? "border-gold bg-gold/10 font-medium" : "border-gray-200")}>
                        {c}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 5 – Delivery */}
          {step === 5 && (
            <div>
              <h2 className="section-heading text-3xl text-charcoal mb-2">When Should It Arrive?</h2>
              <p className="font-sans text-charcoal/60 mb-8">We'll make sure it gets there in time.</p>
              <div>
                <label className="block font-sans text-xs uppercase tracking-wider text-charcoal/60 mb-1.5">Preferred Delivery Date</label>
                <input type="date" value={data.deliveryDate} onChange={(e) => setData({ ...data, deliveryDate: e.target.value })}
                  min={new Date(Date.now() + 3 * 86400000).toISOString().split("T")[0]}
                  className="luxury-input max-w-xs" />
              </div>
              <div className="mt-6 p-4 bg-cream border-l-2 border-gold">
                <p className="font-sans text-sm text-charcoal/60">
                  ✦ Standard delivery: 3–5 business days<br />
                  ✦ Express available for urgent orders — chat with us on WhatsApp
                </p>
              </div>
            </div>
          )}

          {/* Step 6 – Review */}
          {step === 6 && (
            <div>
              <h2 className="section-heading text-3xl text-charcoal mb-6">Review Your Hamper</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-2">
                  {[
                    ["Occasion", data.occasion],
                    ["Recipient", data.recipient],
                    ["Budget", data.budget],
                    ["Packaging", data.packaging],
                    ["Ribbon", data.ribbonColor],
                    ["Delivery by", data.deliveryDate || "Flexible"],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between font-sans text-sm py-1.5 border-b border-gray-100">
                      <span className="text-charcoal/50">{k}</span>
                      <span className="font-medium text-charcoal">{v || "—"}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="font-sans text-xs uppercase tracking-wider text-charcoal/50 mb-2">Selected Items</p>
                  {selectedProductObjects.length === 0 ? (
                    <p className="font-sans text-sm text-charcoal/40">No products selected</p>
                  ) : (
                    <ul className="space-y-1">
                      {selectedProductObjects.map((p) => (
                        <li key={p.id} className="flex justify-between font-sans text-sm">
                          <span>{p.name}</span>
                          <span className="text-purple-600">{formatPrice(p.price)}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {selectedProductObjects.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-gray-100 flex justify-between font-sans text-sm font-semibold">
                      <span>Estimated Total</span>
                      <span className="text-purple-600">{formatPrice(totalPrice)}</span>
                    </div>
                  )}
                </div>
              </div>
              {data.message && (
                <div className="p-4 bg-cream mb-6 border-l-2 border-gold">
                  <p className="font-sans text-xs uppercase tracking-wider text-charcoal/50 mb-1">Your Message</p>
                  <p className="font-display text-lg italic text-charcoal">{data.message}</p>
                </div>
              )}
              <button onClick={handleFinish} className="btn-gold w-full justify-center py-4">
                Complete Order via WhatsApp
                <ArrowRight size={16} />
              </button>
              <p className="font-sans text-xs text-charcoal/40 text-center mt-3">
                Our concierge team will confirm pricing and arrange payment.
              </p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-6">
          <button onClick={prev} disabled={step === 0}
            className="flex items-center gap-2 font-sans text-sm text-charcoal/60 hover:text-charcoal disabled:opacity-0 transition-all">
            <ArrowLeft size={16} /> Back
          </button>
          {step < steps.length - 1 && (
            <button onClick={next} className="btn-gold px-8 py-3">
              Next Step <ArrowRight size={16} />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
