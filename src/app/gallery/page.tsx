'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, ArrowRight } from 'lucide-react';

const categories = ['All', 'Corporate', 'Healthcare', 'Weddings', 'Festivals', 'Events', 'Packaging'];

const galleryItems = [
  { src: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&q=80', category: 'Packaging', title: 'Premium Gift Box' },
  { src: 'https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=800&q=80', category: 'Corporate', title: 'Corporate Welcome Kit' },
  { src: 'https://images.unsplash.com/photo-1559181567-c3190ca9be46?w=800&q=80', category: 'Healthcare', title: 'IVF Journey Hamper' },
  { src: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?w=800&q=80', category: 'Festivals', title: 'Christmas Hamper' },
  { src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80', category: 'Weddings', title: 'Bridal Gifting' },
  { src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80', category: 'Events', title: 'Product Launch Kits' },
  { src: 'https://images.unsplash.com/photo-1606914501449-5a96b6ce24ca?w=800&q=80', category: 'Packaging', title: 'Artisan Packaging' },
  { src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80', category: 'Events', title: 'Corporate Gala Gifts' },
  { src: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&q=80', category: 'Healthcare', title: 'Baby Arrival Hamper' },
  { src: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=800&q=80', category: 'Corporate', title: 'Executive Gift Set' },
  { src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80', category: 'Packaging', title: 'Wellness Box' },
  { src: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&q=80', category: 'Events', title: 'Celebration Event' },
  { src: 'https://images.unsplash.com/photo-1605543667606-52b0f037d2b7?w=800&q=80', category: 'Festivals', title: 'Diwali Collection' },
  { src: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800&q=80', category: 'Events', title: 'Gifting Installation' },
  { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', category: 'Festivals', title: 'Onam Hamper' },
  { src: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&q=80', category: 'Events', title: 'Birthday Experience' },
  { src: 'https://images.unsplash.com/photo-1485872299829-c673f5194813?w=800&q=80', category: 'Weddings', title: 'Wedding Welcome Kits' },
  { src: 'https://images.unsplash.com/photo-1472653431158-6364773b2a56?w=800&q=80', category: 'Events', title: 'Baby Shower Setup' },
];

export default function GalleryPage() {
  const [active, setActive] = useState('All');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = active === 'All' ? galleryItems : galleryItems.filter(i => i.category === active);

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-[#4A235A] text-center text-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <span className="text-gold tracking-widest text-sm uppercase font-medium">Our Portfolio</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold mt-3 mb-5">
            A Glimpse Into Our <span className="text-shimmer">Craft</span>
          </h1>
          <p className="text-white/70 text-lg">
            Every hamper is a work of art. Every event a memory. Browse our gallery and imagine what we can create for you.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="sticky top-20 z-30 bg-white border-b border-gray-100 py-4 shadow-sm">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex gap-3 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  active === cat
                    ? 'bg-[#4A235A] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {filtered.map((item, i) => (
              <div
                key={i}
                className="break-inside-avoid relative overflow-hidden rounded-xl cursor-pointer luxury-card group"
                onClick={() => setLightbox(galleryItems.indexOf(item))}
              >
                <div className="relative">
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={500}
                    height={400}
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
                    <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="font-semibold text-sm">{item.title}</p>
                      <p className="text-white/70 text-xs">{item.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-gold transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="relative max-w-4xl max-h-[80vh] w-full" onClick={e => e.stopPropagation()}>
            <Image
              src={galleryItems[lightbox].src}
              alt={galleryItems[lightbox].title}
              width={1200}
              height={800}
              className="object-contain max-h-[75vh] w-full rounded-xl"
            />
            <div className="text-white text-center mt-4">
              <p className="font-display text-xl font-bold">{galleryItems[lightbox].title}</p>
              <p className="text-white/60 text-sm">{galleryItems[lightbox].category}</p>
            </div>
          </div>
          {/* Navigation */}
          {lightbox > 0 && (
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
              onClick={(e) => { e.stopPropagation(); setLightbox(lightbox - 1); }}
            >
              ←
            </button>
          )}
          {lightbox < galleryItems.length - 1 && (
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
              onClick={(e) => { e.stopPropagation(); setLightbox(lightbox + 1); }}
            >
              →
            </button>
          )}
        </div>
      )}

      {/* CTA */}
      <section className="py-20 bg-[#4A235A] text-center">
        <div className="container mx-auto px-6 max-w-3xl text-white">
          <h2 className="font-display text-4xl font-bold mb-4">Create Your Story With Us</h2>
          <p className="text-white/70 text-lg mb-8">
            Every gift in our gallery started with a conversation. Let's start yours.
          </p>
          <Link href="/contact" className="btn-gold px-10 py-4 text-lg inline-flex items-center gap-2">
            Start a Project <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
