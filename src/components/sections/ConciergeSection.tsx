"use client";

import { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

const occasions = ["Birthday", "Anniversary", "Corporate Event", "Wedding", "Baby Shower", "Festival", "IVF/Healthcare", "Other"];
const recipients = ["Employee", "Client", "Partner", "Family", "Friend", "Patient", "Doctor/Nurse", "Executive"];
const budgets = ["₹500–₹1,000", "₹1,000–₹2,500", "₹2,500–₹5,000", "₹5,000–₹10,000", "₹10,000+", "Custom"];
const quantities = ["1", "2–5", "6–25", "26–100", "100–500", "500+"];

export function ConciergeSection() {
  const [form, setForm] = useState({ occasion: "", recipient: "", budget: "", quantity: "" });

  const handleLet = () => {
    const msg = `Hello Doxora! I'd like a custom gifting solution.\n\nOccasion: ${form.occasion || "—"}\nRecipient: ${form.recipient || "—"}\nBudget: ${form.budget || "—"}\nQuantity: ${form.quantity || "—"}\n\nPlease help me curate the perfect hamper.`;
    window.open(getWhatsAppUrl(msg), "_blank");
  };

  return (
    <section className="py-24 bg-purple-gradient px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles size={16} className="text-gold" />
          <p className="section-eyebrow">Gifting Concierge</p>
        </div>
        <h2 className="section-heading text-4xl lg:text-6xl text-white mb-4">
          Tell Us The Occasion.
          <span className="block text-gold-light font-light">We Handle The Rest.</span>
        </h2>
        <p className="font-sans text-gold-champagne/70 mb-12 text-lg">
          Our gifting experts will curate a perfect hamper tailored to your needs.
        </p>

        <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 lg:p-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
            {/* Occasion */}
            <div>
              <label className="block font-sans text-xs text-gold tracking-widest uppercase mb-2">
                Occasion
              </label>
              <select
                value={form.occasion}
                onChange={(e) => setForm({ ...form, occasion: e.target.value })}
                className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 font-sans text-sm outline-none focus:border-gold transition-colors"
              >
                <option value="" className="text-charcoal">Select occasion</option>
                {occasions.map((o) => <option key={o} value={o} className="text-charcoal">{o}</option>)}
              </select>
            </div>

            {/* Recipient */}
            <div>
              <label className="block font-sans text-xs text-gold tracking-widest uppercase mb-2">
                Recipient
              </label>
              <select
                value={form.recipient}
                onChange={(e) => setForm({ ...form, recipient: e.target.value })}
                className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 font-sans text-sm outline-none focus:border-gold transition-colors"
              >
                <option value="" className="text-charcoal">Who is it for?</option>
                {recipients.map((r) => <option key={r} value={r} className="text-charcoal">{r}</option>)}
              </select>
            </div>

            {/* Budget */}
            <div>
              <label className="block font-sans text-xs text-gold tracking-widest uppercase mb-2">
                Budget (per hamper)
              </label>
              <select
                value={form.budget}
                onChange={(e) => setForm({ ...form, budget: e.target.value })}
                className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 font-sans text-sm outline-none focus:border-gold transition-colors"
              >
                <option value="" className="text-charcoal">Select budget</option>
                {budgets.map((b) => <option key={b} value={b} className="text-charcoal">{b}</option>)}
              </select>
            </div>

            {/* Quantity */}
            <div>
              <label className="block font-sans text-xs text-gold tracking-widest uppercase mb-2">
                Quantity
              </label>
              <select
                value={form.quantity}
                onChange={(e) => setForm({ ...form, quantity: e.target.value })}
                className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 font-sans text-sm outline-none focus:border-gold transition-colors"
              >
                <option value="" className="text-charcoal">How many?</option>
                {quantities.map((q) => <option key={q} value={q} className="text-charcoal">{q}</option>)}
              </select>
            </div>
          </div>

          <button
            onClick={handleLet}
            className="btn-gold w-full justify-center text-sm py-4"
          >
            Let Doxora Curate It
            <ArrowRight size={16} />
          </button>

          <p className="font-sans text-xs text-gold-champagne/50 mt-4">
            We respond within 2 business hours. No obligation.
          </p>
        </div>
      </div>
    </section>
  );
}
