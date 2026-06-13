import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Heart, Star, Users, Package } from "lucide-react";

export const metadata: Metadata = {
  title: "About Doxora – Our Story",
  description:
    "Discover the story behind Doxora — India's premium gifting concierge. Born from a passion for meaningful connections and luxury experiences.",
};

const values = [
  {
    icon: Heart,
    title: "Born From Emotion",
    desc: "Every hamper we craft is infused with intentionality — a belief that the right gift at the right moment can change how someone feels forever.",
  },
  {
    icon: Star,
    title: "Obsessed With Quality",
    desc: "We source only premium products, work with artisan suppliers, and maintain standards that reflect a ₹100 Crore brand in every box we send.",
  },
  {
    icon: Users,
    title: "Relationship First",
    desc: "We don't just send gifts — we help brands and individuals build genuine, lasting relationships through thoughtful, curated experiences.",
  },
  {
    icon: Package,
    title: "Flawless Execution",
    desc: "From the first call to final delivery, our concierge team manages every detail so your gift experience is always seamless and stunning.",
  },
];

export default function AboutPage() {
  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden flex items-center">
        <img
          src="https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=1920&q=90"
          alt="About Doxora"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-purple-800/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
          <p className="section-eyebrow mb-3">Our Story</p>
          <h1 className="font-display text-6xl lg:text-8xl font-semibold text-white leading-none">
            About
            <span className="block text-gold-light font-light">Doxora</span>
          </h1>
          <p className="font-sans text-xl text-white/70 mt-6 max-w-xl">
            India's premium gifting concierge — crafting memories, one hamper at a time.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-eyebrow mb-4">Who We Are</p>
            <h2 className="section-heading text-5xl text-charcoal mb-6">
              We Believe Every Gift
              <span className="block text-purple-600">Deserves a Story</span>
            </h2>
            <div className="space-y-4 font-sans text-charcoal/70 leading-relaxed">
              <p>
                Doxora was born from a simple but powerful belief — that gifting is not just about objects. 
                It's about the emotion behind the gesture, the care in the curation, and the memory it creates.
              </p>
              <p>
                Founded in Bangalore, we've grown from a boutique gifting studio to India's trusted gifting 
                concierge for corporates, hospitals, IVF clinics, wedding planners, and individuals who refuse 
                to settle for ordinary.
              </p>
              <p>
                Every hamper that leaves our hands has been thought about deeply — the colours, the textures, 
                the products, the packaging, the message. Because to us, gifting is an art form.
              </p>
            </div>
            <Link href="/contact" className="btn-gold mt-8 inline-flex">
              Work With Us <ArrowRight size={16} />
            </Link>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=800&q=90"
              alt="Doxora Story"
              className="w-full h-[500px] object-cover shadow-luxury"
            />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gold flex items-center justify-center shadow-gold hidden md:flex">
              <div className="text-center text-charcoal">
                <div className="font-display text-3xl font-bold">5+</div>
                <div className="font-sans text-xs uppercase tracking-wider">Years</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-cream px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-eyebrow mb-3">What Drives Us</p>
            <h2 className="section-heading text-5xl text-charcoal">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white p-8 border border-gold/10 hover:border-gold/30 hover:shadow-luxury transition-all duration-400 text-center group">
                <div className="w-12 h-12 mx-auto mb-4 bg-purple-600/5 group-hover:bg-purple-600 flex items-center justify-center transition-all duration-400">
                  <v.icon size={22} className="text-purple-600 group-hover:text-white transition-colors duration-400" />
                </div>
                <h3 className="font-display text-xl font-semibold text-charcoal mb-3">{v.title}</h3>
                <p className="font-sans text-sm text-charcoal/60 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-20 bg-charcoal px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="section-heading text-4xl text-white mb-4">Ready to Experience Doxora?</h2>
          <p className="font-sans text-white/60 mb-8">
            Join 500+ brands who trust us to create gifting moments their recipients never forget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-gold">Book a Consultation</Link>
            <Link href="/shop" className="btn-outline-gold">Explore Hampers</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
