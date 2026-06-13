import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { QuoteForm } from "@/components/ui/QuoteForm";

export const metadata: Metadata = {
  title: "Corporate Gifting Bangalore | Premium Employee & Client Gifts",
  description:
    "Doxora's corporate gifting solutions include employee welcome kits, leadership gifts, festival hampers, and client appreciation gifts. Bulk orders. Custom branding. Pan-India delivery.",
};

const services = [
  {
    title: "Employee Welcome Kits",
    desc: "Make every new joiner feel valued from Day 1 with curated onboarding hampers that reflect your brand culture.",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600",
  },
  {
    title: "Client Appreciation Gifts",
    desc: "Strengthen client relationships with premium, personalised gifts that communicate respect, gratitude, and exclusivity.",
    image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=600",
  },
  {
    title: "Festival Gifting",
    desc: "Diwali, Christmas, Eid, and more — elevate your seasonal gifting with curated hampers delivered nationwide.",
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600",
  },
  {
    title: "Leadership Gifts",
    desc: "For your C-suite and senior leaders — premium, exclusive curation that reflects their stature and your appreciation.",
    image: "https://images.unsplash.com/photo-1612387290123-e1e7dcab2a0e?w=600",
  },
  {
    title: "Conference & Event Kits",
    desc: "Branded delegate kits, speaker gifts, and event hampers — every touchpoint elevated with luxury presentation.",
    image: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=600",
  },
  {
    title: "Dealer & Channel Programs",
    desc: "Reward your channel partners and distributors with curated gifting programs that keep them loyal and motivated.",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600",
  },
];

const features = [
  "Custom logo & branding on packaging",
  "Bulk order discounts from 25+ units",
  "Nationwide delivery within 5–7 days",
  "Dedicated account manager",
  "100% customizable contents",
  "GST-compliant invoicing",
  "COD & advance payment options",
  "Shiprocket-integrated tracking",
];

export default function CorporateGiftingPage() {
  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[480px] overflow-hidden flex items-center">
        <img
          src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=1920&q=90"
          alt="Corporate Gifting"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/92 to-purple-800/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
          <p className="section-eyebrow mb-3">For Businesses</p>
          <h1 className="font-display text-6xl lg:text-8xl font-semibold text-white leading-none">
            Corporate
            <span className="block text-gold-light font-light">Gifting</span>
          </h1>
          <p className="font-sans text-xl text-white/70 mt-4 max-w-xl">
            Premium gifting solutions for enterprises, startups, and everything in between.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a href="#quote" className="btn-gold">Request a Quote <ArrowRight size={16} /></a>
            <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="btn-outline-gold">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-eyebrow mb-3">Our Corporate Services</p>
            <h2 className="section-heading text-5xl text-charcoal">Gifting For Every Business Need</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <div key={s.title} className="luxury-card group">
                <div className="overflow-hidden aspect-video">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-semibold text-charcoal mb-2">{s.title}</h3>
                  <p className="font-sans text-sm text-charcoal/60 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-purple-gradient px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-eyebrow mb-4">Why Doxora Corporate</p>
            <h2 className="section-heading text-4xl lg:text-5xl text-white mb-8">
              Everything You Need,<br />
              <span className="text-gold-light font-light">Nothing You Don't</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((f) => (
                <div key={f} className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-gold mt-0.5 shrink-0" />
                  <span className="font-sans text-sm text-gold-champagne/80">{f}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white/10 border border-white/20 p-8">
            <h3 className="font-display text-3xl text-white mb-2">Bulk Order Inquiry</h3>
            <p className="font-sans text-gold-champagne/60 text-sm mb-6">
              Orders of 25+ units receive dedicated account management and exclusive pricing.
            </p>
            <div className="space-y-4">
              {["Company Name", "Contact Person", "Phone Number", "Email Address", "Number of Gifts", "Budget Per Gift"].map((field) => (
                <input key={field} placeholder={field} className="luxury-input bg-white/5 border-white/20 text-white placeholder-white/40 focus:border-gold" />
              ))}
              <textarea placeholder="Tell us about your gifting requirement" rows={3} className="luxury-input bg-white/5 border-white/20 text-white placeholder-white/40 focus:border-gold resize-none" />
              <button className="btn-gold w-full justify-center">Submit Enquiry</button>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section id="quote" className="py-24 bg-cream px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="section-heading text-4xl text-charcoal">Get a Custom Quote</h2>
          <p className="font-sans text-charcoal/60 mt-3">
            Tell us your requirements and we'll design the perfect gifting solution for your brand.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <QuoteForm />
        </div>
      </section>
    </div>
  );
}
