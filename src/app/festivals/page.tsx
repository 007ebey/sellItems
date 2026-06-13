'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const festivals = [
  {
    name: 'Diwali',
    tagline: 'The Festival of Lights Deserves the Best',
    desc: 'From artisan mithai hampers to premium dry fruit boxes and personalized diyas — celebrate Diwali with Doxora.',
    image: 'https://images.unsplash.com/photo-1605543667606-52b0f037d2b7?w=800&q=80',
    color: 'from-amber-700',
    accent: '#D4AF37',
    tag: 'Most Popular',
  },
  {
    name: 'Christmas',
    tagline: 'Tis the Season to Gift Luxuriously',
    desc: 'Elegantly wrapped Christmas hampers with gourmet treats, wines, and premium accessories.',
    image: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?w=800&q=80',
    color: 'from-red-800',
    accent: '#e63946',
  },
  {
    name: 'New Year',
    tagline: 'Ring in the New Year in Style',
    desc: 'Premium New Year celebration kits with champagne, artisan chocolates, and luxury essentials.',
    image: 'https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=800&q=80',
    color: 'from-indigo-900',
    accent: '#6366f1',
  },
  {
    name: 'Eid',
    tagline: 'Celebrate Eid with Premium Gifting',
    desc: 'Handcrafted Eid hampers with premium dates, sweets, and luxury gifting boxes.',
    image: 'https://images.unsplash.com/photo-1576016770956-debb63d92058?w=800&q=80',
    color: 'from-emerald-900',
    accent: '#059669',
  },
  {
    name: 'Onam',
    tagline: 'Harvest the Joy of Giving',
    desc: 'Authentic Kerala hampers with spices, kasavu accessories, and premium traditional items.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    color: 'from-yellow-800',
    accent: '#ca8a04',
  },
  {
    name: 'Raksha Bandhan',
    tagline: 'Celebrate the Bond of Love',
    desc: 'Curated sibling gift hampers with designer rakhis, sweets, and personalised keepsakes.',
    image: 'https://images.unsplash.com/photo-1606914501449-5a96b6ce24ca?w=800&q=80',
    color: 'from-pink-800',
    accent: '#db2777',
  },
  {
    name: 'Pongal',
    tagline: 'Harvest Blessings, Gift Joy',
    desc: 'Traditional Pongal hampers with artisan pottery, organic jaggery, and premium rice varieties.',
    image: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=800&q=80',
    color: 'from-orange-800',
    accent: '#ea580c',
  },
  {
    name: "Valentine's Day",
    tagline: 'Love, Curated Beautifully',
    desc: 'Romantic gifting experiences — luxury chocolates, florals, and personalised love notes.',
    image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800&q=80',
    color: 'from-rose-800',
    accent: '#e11d48',
  },
];

export default function FestivalsPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1605543667606-52b0f037d2b7?w=1600&q=80"
            alt="Festival Collections"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-950/90 via-purple-900/70 to-transparent" />
        </div>
        <div className="relative z-10 container mx-auto px-6 max-w-6xl text-center">
          <span className="inline-block text-gold font-medium tracking-[0.3em] text-sm uppercase mb-4">
            Seasonal Collections
          </span>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Festival <span className="text-shimmer">Collections</span>
          </h1>
          <p className="text-white/80 text-xl max-w-2xl mx-auto">
            Every festival is a story. Let Doxora curate the most beautiful chapter — a luxury hamper that captures the spirit of every celebration.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-cream text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <p className="text-gray-700 text-lg leading-relaxed">
            India is a land of festivals, and each one deserves to be celebrated with intention. Our seasonal collections are thoughtfully designed to honour traditions while adding a layer of luxury and personalisation that sets your gifts apart.
          </p>
        </div>
      </section>

      {/* Festival Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {festivals.map((fest, i) => (
              <div
                key={fest.name}
                className={`relative overflow-hidden rounded-3xl luxury-card group flex ${
                  i % 3 === 0 ? 'md:col-span-2' : ''
                }`}
              >
                <div className={`relative ${i % 3 === 0 ? 'h-80 md:h-96 w-full' : 'h-80 w-full'} overflow-hidden`}>
                  <Image
                    src={fest.image}
                    alt={fest.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${fest.color}/70 via-black/30 to-transparent`} />

                  {fest.tag && (
                    <span className="badge-gold absolute top-5 right-5">{fest.tag}</span>
                  )}

                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="font-display text-3xl md:text-4xl font-bold mb-2">{fest.name}</h3>
                    <p className="text-white/90 font-medium mb-2">{fest.tagline}</p>
                    <p className="text-white/70 text-sm max-w-lg">{fest.desc}</p>
                    <Link
                      href={`/shop?festival=${fest.name.toLowerCase()}`}
                      className="inline-flex items-center gap-2 mt-5 text-white border border-white/50 px-5 py-2.5 rounded-full text-sm hover:bg-white/20 transition-colors"
                    >
                      Shop {fest.name} Collection <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bulk Gifting Banner */}
      <section className="py-20 bg-[#4A235A]">
        <div className="container mx-auto px-6 max-w-5xl text-center text-white">
          <h2 className="font-display text-4xl font-bold mb-4">Corporate Festival Gifting at Scale</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
            Sending festival hampers to 50 or 5,000 recipients? Our corporate team handles sourcing, branding, packaging, and delivery — so you don't have to.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/corporate-gifting" className="btn-gold px-8 py-4">
              Corporate Festival Gifting
            </Link>
            <Link href="/contact" className="btn-outline-gold px-8 py-4">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
