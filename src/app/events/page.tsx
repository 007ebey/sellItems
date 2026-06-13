'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, Star, Users, Zap } from 'lucide-react';
import QuoteForm from '@/components/ui/QuoteForm';

const services = [
  {
    title: 'Corporate Events',
    desc: 'Product launches, town halls, award nights — we design every gifting touchpoint for maximum impact.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80',
    icon: Users,
  },
  {
    title: 'Product Launches',
    desc: 'Memorable unboxing kits, influencer seeding hampers, and launch-day gift experiences.',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&q=80',
    icon: Zap,
  },
  {
    title: 'Wedding Styling',
    desc: 'Bridal hampers, welcome kits for guests, trousseau gifting — luxury wedding experiences.',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80',
    icon: Star,
  },
  {
    title: 'Baby Showers',
    desc: 'Delightful hampers for moms-to-be, gender reveals, and hospital homecoming celebrations.',
    image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&q=80',
    icon: Calendar,
  },
  {
    title: 'Birthday Celebrations',
    desc: 'Personalised birthday hampers, milestone curation boxes, and luxury surprise experiences.',
    image: 'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=600&q=80',
    icon: Star,
  },
  {
    title: 'Luxury Installations',
    desc: 'Custom gifting walls, hamper displays, and branded gift stations for premium events.',
    image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=600&q=80',
    icon: Zap,
  },
];

const gallery = [
  'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=500&q=80',
  'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=500&q=80',
  'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=500&q=80',
  'https://images.unsplash.com/photo-1485872299829-c673f5194813?w=500&q=80',
  'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=500&q=80',
  'https://images.unsplash.com/photo-1472653431158-6364773b2a56?w=500&q=80',
];

export default function EventsPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&q=80"
            alt="Events and Experiences"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-950/90 via-purple-900/60 to-transparent" />
        </div>
        <div className="relative z-10 container mx-auto px-6 max-w-6xl">
          <span className="inline-block text-gold font-medium tracking-[0.3em] text-sm uppercase mb-4">
            Experiences & Events
          </span>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Gifting That <br />
            <span className="text-shimmer">Transforms Events</span>
          </h1>
          <p className="text-white/80 text-xl max-w-xl mb-8">
            From corporate galas to intimate celebrations, Doxora designs gifting experiences that leave your guests speechless.
          </p>
          <Link href="#services" className="btn-gold px-8 py-4 text-lg inline-flex items-center gap-2">
            Explore Services <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-cream text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="section-heading">Every Event Deserves a Gift Worth Remembering</h2>
          <p className="text-gray-600 mt-6 text-lg leading-relaxed">
            Whether you're celebrating a corporate milestone, welcoming a new baby, or hosting the wedding of the decade —
            Doxora curates gift experiences that become the most-talked-about part of your event.
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-gold tracking-widest text-sm uppercase font-medium">What We Do</span>
            <h2 className="section-heading mt-2">Event Gifting Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="luxury-card rounded-2xl overflow-hidden group bg-white">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="font-display text-xl font-bold text-white">{service.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1 text-purple-700 font-medium text-sm mt-4 hover:gap-2 transition-all"
                  >
                    Get a Quote <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-[#4A235A]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-gold tracking-widest text-sm uppercase font-medium">Our Work</span>
            <h2 className="font-display text-4xl font-bold text-white mt-2">Events We've Made Magical</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((src, i) => (
              <div key={i} className="relative aspect-square overflow-hidden rounded-xl luxury-card group">
                <Image
                  src={src}
                  alt={`Event ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '200+', label: 'Events Executed' },
              { value: '50K+', label: 'Hampers Delivered' },
              { value: '500+', label: 'Happy Clients' },
              { value: '98%', label: 'Satisfaction Rate' },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="font-display text-4xl font-bold text-[#4A235A]">{value}</p>
                <p className="text-gray-600 text-sm mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-12">
            <span className="text-gold tracking-widest text-sm uppercase font-medium">Get Started</span>
            <h2 className="section-heading mt-2">Tell Us About Your Event</h2>
            <p className="text-gray-600 mt-4">
              Share the details and our concierge team will design a gifting plan that perfectly complements your event.
            </p>
          </div>
          <QuoteForm />
        </div>
      </section>
    </main>
  );
}
