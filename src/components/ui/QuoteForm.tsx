"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { ArrowRight, Loader2 } from "lucide-react";

export function QuoteForm() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", company: "",
    occasion: "", budget: "", quantity: "", message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        toast.success("Quote request received! We'll be in touch shortly.");
        setForm({ name: "", email: "", phone: "", company: "", occasion: "", budget: "", quantity: "", message: "" });
      } else {
        toast.error("Something went wrong. Please try WhatsApp instead.");
      }
    } catch {
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-gold/15 p-8 lg:p-10 shadow-card space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block font-sans text-xs text-charcoal/60 tracking-wider mb-1.5 uppercase">Full Name *</label>
          <input value={form.name} onChange={(e) => set("name", e.target.value)} required className="luxury-input" placeholder="Your name" />
        </div>
        <div>
          <label className="block font-sans text-xs text-charcoal/60 tracking-wider mb-1.5 uppercase">Company</label>
          <input value={form.company} onChange={(e) => set("company", e.target.value)} className="luxury-input" placeholder="Company name" />
        </div>
        <div>
          <label className="block font-sans text-xs text-charcoal/60 tracking-wider mb-1.5 uppercase">Email *</label>
          <input type="email" value={form.email} onChange={(e) => set("email", e.target.value)} required className="luxury-input" placeholder="your@email.com" />
        </div>
        <div>
          <label className="block font-sans text-xs text-charcoal/60 tracking-wider mb-1.5 uppercase">Phone *</label>
          <input type="tel" value={form.phone} onChange={(e) => set("phone", e.target.value)} required className="luxury-input" placeholder="+91 99999 99999" />
        </div>
        <div>
          <label className="block font-sans text-xs text-charcoal/60 tracking-wider mb-1.5 uppercase">Occasion</label>
          <input value={form.occasion} onChange={(e) => set("occasion", e.target.value)} className="luxury-input" placeholder="e.g. Diwali, Employee Gifts" />
        </div>
        <div>
          <label className="block font-sans text-xs text-charcoal/60 tracking-wider mb-1.5 uppercase">Budget (per hamper)</label>
          <select value={form.budget} onChange={(e) => set("budget", e.target.value)} className="luxury-input">
            <option value="">Select budget range</option>
            <option>₹500 – ₹1,000</option>
            <option>₹1,000 – ₹2,500</option>
            <option>₹2,500 – ₹5,000</option>
            <option>₹5,000 – ₹10,000</option>
            <option>₹10,000+</option>
            <option>Custom / Flexible</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block font-sans text-xs text-charcoal/60 tracking-wider mb-1.5 uppercase">Quantity</label>
        <select value={form.quantity} onChange={(e) => set("quantity", e.target.value)} className="luxury-input">
          <option value="">How many hampers?</option>
          <option>1–5</option>
          <option>6–25</option>
          <option>26–100</option>
          <option>100–500</option>
          <option>500+</option>
        </select>
      </div>
      <div>
        <label className="block font-sans text-xs text-charcoal/60 tracking-wider mb-1.5 uppercase">Tell Us More</label>
        <textarea value={form.message} onChange={(e) => set("message", e.target.value)} rows={4} className="luxury-input resize-none" placeholder="Any special requirements, customization requests, delivery timeline..." />
      </div>
      <button type="submit" disabled={loading} className="btn-gold w-full justify-center py-4 disabled:opacity-70">
        {loading ? <Loader2 size={16} className="animate-spin" /> : <>Submit Quote Request <ArrowRight size={16} /></>}
      </button>
      <p className="font-sans text-xs text-charcoal/40 text-center">
        We respond within 2 business hours. Your information is never shared.
      </p>
    </form>
  );
}
