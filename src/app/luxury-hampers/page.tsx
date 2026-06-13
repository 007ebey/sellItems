'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Star, Package, Heart, Sparkles } from 'lucide-react';
import { getProductsByCategory } from '@/lib/products';
import { useCartStore } from '@/lib/cart-store';
import { formatPrice } from '@/lib/utils';
import { toast } from 'sonner';

const categories = [
  {
    id: 'corporate',
    title: 'Corporate Hampers',
    subtitle: 'Impress clients and teams',
    image: 'https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=600&q=80',
    color: 'from-purple-900',
  },
  {
    id: 'healthcare',
    title: 'Healthcare Hampers',
    subtitle: 'Care beyond medicine',
    image: 'https://images.unsplash.com/photo-1559181567-c3190ca9be46?w=600&q=80',
    color: 'from-rose-900',
  },
  {
    id: 'festival',
    title: 'Festival Hampers',
    subtitle: 'Celebrate every occasion',
    image: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?w=600&q=80',
    color: 'from-amber-900',
  },
  {
    id: 'wedding',
    title: 'Wedding Hampers',
    subtitle: "Gifting for life's biggest day",
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80',
    color: 'from-pink-900',
  },
  {
    id: 'executive',
    title: 'Executive Gifts',
    subtitle: 'For those who have everything',
    image: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=600&q=80',
    color: 'from-slate-900',
  },
  {
    id: 'wellness',
    title: 'Wellness Hampers',
    subtitle: 'Gift the joy of self-care',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80',
    color: 'from-green-900',
  },
  {
    id: 'gourmet',
    title: 'Gourmet Hampers',
    subtitle: 'A feast for every palate',
    image: 'https://images.unsplash.com/photo-1606914501449-5a96b6ce24ca?w=600&q=80',
    color: 'from-orange-900',
  },
  {
    id: 'baby',
    title: 'Baby & Maternity',
    subtitle: 'Welcome the little ones',
    image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&q=80',
    color: 'from-sky-900',
  },
];

const highlights = [
  { icon: Package, label: '500+ Premium Products', desc: 'Sourced from top luxury brands' },
  { icon: Star, label: 'Custom Branding', desc: 'Your logo on every hamper' },
  { icon: Heart, label: 'Handcrafted Packaging', desc: 'Every box tells a story' },
  { icon: Sparkles, label: 'Pan-India Delivery', desc: '50+ cities covered' },
];

export default function LuxuryHampersPage() {
  const { addItem } = useCartStore();
  const allProducts = [
    ...getProductsByCategory('corporate'),
    ...getProductsByCategory('healthcare'),
    ...getProductsByCategory('luxury'),
  ].slice(0, 6);

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=1600&q=80"
            alt="Luxury Hampers"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-950/90 via-purple-900/70 to-transparent" />
        </div>
        <div className="relative z-10 container mx-auto px-6 max-w-6xl">
          <span className="inline-block text-gold font-medium tracking-[0.3em] text-sm uppercase mb-4">
            Premium Collection
          </span>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Luxury Hampers <br />
            <span className="text-shimmer">Redefined</span>
          </h1>
          <p className="text-white/80 text-xl max-w-xl mb-8">
            Every hamper is a curated experience. Hand-selected products, artisan packaging,
            and a message that lingers long after the gift is opened.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/shop" className="btn-gold px-8 py-4 text-lg">
              Shop All Hampers
            </Link>
            <Link href="/build-hamper" className="btn-outline-gold px-8 py-4 text-lg">
              Build Your Own
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-[#4A235A] py-12">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {highlights.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="text-center text-white">
                <Icon className="w-7 h-7 text-gold mx-auto mb-3" />
                <p className="font-semibold text-sm">{label}</p>
                <p className="text-white/60 text-xs mt-1">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-gold tracking-widest text-sm uppercase font-medium">Browse By Category</span>
            <h2 className="section-heading mt-2">A Hamper For Every Moment</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              From boardrooms to baby showers — our luxury hampers are curated to make every recipient feel extraordinary.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/shop?category=${cat.id}`}
                className="group relative overflow-hidden rounded-2xl aspect-[3/4] luxury-card"
              >
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${cat.color}/60 via-transparent to-transparent`} />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <h3 className="font-display text-xl font-bold">{cat.title}</h3>
                  <p className="text-white/70 text-sm mt-1">{cat.subtitle}</p>
                  <span className="inline-flex items-center gap-1 text-gold text-sm mt-2 font-medium">
                    Explore <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-gold tracking-widest text-sm uppercase font-medium">Top Picks</span>
            <h2 className="section-heading mt-2">Most Loved Hampers</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProducts.map((product) => (
              <div key={product.id} className="luxury-card rounded-2xl overflow-hidden bg-white group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {product.badge && (
                    <span className="badge-gold absolute top-4 left-4">{product.badge}</span>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-charcoal">{product.name}</h3>
                  <p className="text-gray-500 text-sm mt-2 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="price-tag">{formatPrice(product.price)}</span>
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          addItem(product, 1);
                          toast.success('Added to cart');
                        }}
                        className="btn-purple text-sm px-4 py-2"
                      >
                        Add to Cart
                      </button>
                      <Link href={`/shop/${product.slug}`} className="btn-outline-gold text-sm px-4 py-2">
                        View
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/shop" className="btn-gold px-10 py-4 text-lg inline-flex items-center gap-2">
              View All Hampers <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-[#4A235A] text-white">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <span className="text-gold tracking-widest text-sm uppercase font-medium">How It Works</span>
          <h2 className="font-display text-4xl font-bold mt-2 mb-16">From Idea to Doorstep</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {['Choose & Customise', 'We Curate & Pack', 'Quality Check', 'Premium Delivery'].map((step, i) => (
              <div key={step} className="relative">
                <div className="w-16 h-16 rounded-full bg-gold/20 border-2 border-gold flex items-center justify-center mx-auto mb-4 text-gold font-display text-2xl font-bold">
                  {i + 1}
                </div>
                <p className="font-semibold">{step}</p>
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] border-t border-dashed border-gold/40" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-cream text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="section-heading">Need Something Truly Bespoke?</h2>
          <p className="text-gray-600 mt-4 mb-8 text-lg">
            Our gifting concierge will design a custom hamper that perfectly reflects your brand, your message, and your occasion.
          </p>
          <Link href="/contact" className="btn-gold px-10 py-4 text-lg inline-flex items-center gap-2">
            Talk to Our Concierge <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
