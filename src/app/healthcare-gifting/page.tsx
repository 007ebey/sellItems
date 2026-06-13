import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";
import { QuoteForm } from "@/components/ui/QuoteForm";

export const metadata: Metadata = {
  title: "Healthcare Gifting | IVF Hampers, Maternity Kits & Hospital Gifts",
  description:
    "Doxora specializes in premium healthcare gifting — IVF journey hampers, pregnancy celebration kits, baby arrival hampers, and hospital appreciation gifts.",
};

const sections = [
  {
    tag: "Fertility & IVF",
    title: "IVF Journey Hampers",
    headline: "A Gentle Embrace Through Every Step",
    desc: "The IVF journey is one of the most emotional paths a couple can walk. Our IVF gifting range is designed with deep empathy — to comfort, uplift, and carry them forward with hope and love.",
    items: [
      "IVF Welcome Kits — for couples starting their journey",
      "Embryo Transfer Hampers — thoughtful gifts for the big day",
      "Fertility Journey Hampers — calming, nourishing, uplifting",
      "Pregnancy Success Hampers — celebrating the miracle",
    ],
    image: "https://images.unsplash.com/photo-1559181567-c3190ca9d5db?w=800",
    cta: "View IVF Hampers",
    href: "/shop?category=healthcare",
    bg: "bg-purple-50",
  },
  {
    tag: "Maternity",
    title: "Maternity & Baby Hampers",
    headline: "Celebrating New Life Beautifully",
    desc: "From the first heartbeat to hospital discharge — we have a luxury gift for every milestone of the maternity journey. Thoughtful, organic, and breathtakingly presented.",
    items: [
      "Pregnancy Hampers — for the glowing mother-to-be",
      "New Mother Hampers — recovery and self-care essentials",
      "Baby Arrival Hampers — welcoming the little one in style",
      "Hospital Discharge Hampers — a beautiful journey home",
    ],
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800",
    cta: "View Maternity Hampers",
    href: "/shop?category=baby",
    bg: "bg-cream",
  },
  {
    tag: "Hospitals & Clinics",
    title: "Hospital & Staff Appreciation",
    headline: "Honouring Those Who Heal",
    desc: "Healthcare professionals give everything to their patients. Doxora helps hospitals honour their teams with premium gifting programs for doctors, nurses, and support staff — making them feel as valued as they truly are.",
    items: [
      "Patient Appreciation Gifts — for discharge & recovery",
      "Doctor Recognition Gifts — for milestones & achievements",
      "Nurse Appreciation Kits — on Nurses Day and beyond",
      "Wellness Programs — ongoing staff wellbeing gifts",
    ],
    image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=800",
    cta: "Explore Hospital Gifting",
    href: "/contact?type=healthcare",
    bg: "bg-white",
  },
];

export default function HealthcareGiftingPage() {
  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="relative h-[65vh] min-h-[500px] overflow-hidden flex items-center">
        <img
          src="https://images.unsplash.com/photo-1559181567-c3190ca9d5db?w=1920&q=90"
          alt="Healthcare Gifting"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/95 via-purple-900/80 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex items-center gap-2 mb-4">
            <Heart size={16} className="text-gold" />
            <p className="section-eyebrow">A Doxora Specialty</p>
          </div>
          <h1 className="font-display text-6xl lg:text-8xl font-semibold text-white leading-none">
            Healthcare
            <span className="block text-gold-light font-light">Gifting</span>
          </h1>
          <p className="font-sans text-xl text-white/70 mt-4 max-w-xl leading-relaxed">
            Gifts that carry emotion, hope, and healing — crafted for life's most tender moments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link href="/shop?category=healthcare" className="btn-gold">
              Explore Healthcare Hampers <ArrowRight size={16} />
            </Link>
            <Link href="#quote" className="btn-outline-gold">Request Custom Quote</Link>
          </div>
        </div>
      </section>

      {/* Emotional intro */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="section-eyebrow mb-4">Why Healthcare Gifting Matters</p>
          <h2 className="section-heading text-4xl lg:text-5xl text-charcoal mb-6">
            A Gift In A Hospital Room<br />
            <span className="text-purple-600">Means More Than You Know</span>
          </h2>
          <p className="font-sans text-lg text-charcoal/65 leading-relaxed">
            In moments of vulnerability, uncertainty, or joy — a beautifully curated gift communicates something 
            words alone cannot. It says: <em>"You are seen. You are valued. You are not alone."</em> 
            That is the philosophy at the heart of everything Doxora creates for healthcare.
          </p>
        </div>
      </section>

      {/* Sections */}
      {sections.map((section, i) => (
        <section key={section.tag} className={`py-20 px-4 ${section.bg}`}>
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div className={i % 2 === 1 ? "lg:order-2" : ""}>
              <p className="section-eyebrow mb-3">{section.tag}</p>
              <h2 className="section-heading text-4xl lg:text-5xl text-charcoal mb-3">
                {section.title}
              </h2>
              <p className="font-display text-2xl italic text-purple-600 mb-4">{section.headline}</p>
              <p className="font-sans text-charcoal/65 leading-relaxed mb-6">{section.desc}</p>
              <ul className="space-y-2 mb-8">
                {section.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 font-sans text-sm text-charcoal/70">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href={section.href} className="btn-gold inline-flex">
                {section.cta} <ArrowRight size={16} />
              </Link>
            </div>
            <div className={i % 2 === 1 ? "lg:order-1" : ""}>
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-[450px] object-cover shadow-luxury"
              />
            </div>
          </div>
        </section>
      ))}

      {/* Quote */}
      <section id="quote" className="py-24 bg-cream px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="section-eyebrow mb-3">Custom Programs</p>
          <h2 className="section-heading text-4xl text-charcoal">Healthcare Gifting Enquiry</h2>
          <p className="font-sans text-charcoal/60 mt-3 max-w-xl mx-auto">
            Whether it's for 10 patients or 10,000 — we'll design a program that's perfect for your clinic or hospital.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <QuoteForm />
        </div>
      </section>
    </div>
  );
}
