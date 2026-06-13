'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, MessageCircle, Send, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl } from '@/lib/utils';
import { toast } from 'sonner';

const contactInfo = [
  {
    icon: Phone,
    label: 'Call Us',
    value: '+91 99999 99999',
    href: 'tel:+919999999999',
  },
  {
    icon: Mail,
    label: 'Email Us',
    value: 'hello@doxora.in',
    href: 'mailto:hello@doxora.in',
  },
  {
    icon: MapPin,
    label: 'Our Studio',
    value: 'Bangalore, Karnataka, India',
    href: 'https://maps.google.com/?q=Bangalore',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Mon–Sat: 9 AM – 7 PM IST',
    href: null,
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', company: '', message: '', service: '',
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      toast.success('Thank you! We\'ll be in touch within 24 hours.');
      setForm({ name: '', email: '', phone: '', company: '', message: '', service: '' });
    } catch {
      toast.error('Something went wrong. Please try again or WhatsApp us directly.');
    } finally {
      setLoading(false);
    }
  };

  const services = [
    'Corporate Gifting',
    'Healthcare Gifting',
    'Luxury Hampers',
    'Events & Experiences',
    'Festival Gifting',
    'Wedding Gifting',
    'Custom Hampers',
    'Other',
  ];

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-[#4A235A] text-white text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <span className="text-gold tracking-widest text-sm uppercase font-medium">Get In Touch</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold mt-3 mb-5">
            Let's Create Something <span className="text-shimmer">Memorable</span>
          </h1>
          <p className="text-white/70 text-lg">
            Whether it's 10 hampers or 10,000 — our gifting concierge is ready to help you create an experience your recipients will never forget.
          </p>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-12 bg-cream">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="luxury-card rounded-2xl p-6 bg-white text-center group">
                <div className="w-12 h-12 bg-[#4A235A]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-6 h-6 text-[#4A235A]" />
                </div>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">{label}</p>
                {href ? (
                  <a href={href} className="text-charcoal font-semibold text-sm mt-1 hover:text-purple-700 transition-colors block">
                    {value}
                  </a>
                ) : (
                  <p className="text-charcoal font-semibold text-sm mt-1">{value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + WhatsApp */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="section-heading mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      className="luxury-input w-full"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      className="luxury-input w-full"
                      placeholder="+91 99999 99999"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    className="luxury-input w-full"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company / Organisation</label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={e => setForm({ ...form, company: e.target.value })}
                    className="luxury-input w-full"
                    placeholder="Company name (optional)"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Required</label>
                  <select
                    value={form.service}
                    onChange={e => setForm({ ...form, service: e.target.value })}
                    className="luxury-input w-full"
                  >
                    <option value="">Select a service</option>
                    {services.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    className="luxury-input w-full resize-none"
                    placeholder="Tell us about your gifting requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-gold w-full py-4 flex items-center justify-center gap-2 text-base"
                >
                  {loading ? (
                    <>Sending... <span className="animate-spin">⟳</span></>
                  ) : (
                    <>Send Message <Send className="w-4 h-4" /></>
                  )}
                </button>
              </form>
            </div>

            {/* WhatsApp + Map */}
            <div className="space-y-8">
              {/* WhatsApp */}
              <div className="bg-green-50 rounded-3xl p-8 border border-green-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-charcoal">Chat on WhatsApp</h3>
                    <p className="text-gray-500 text-sm">Get a response within minutes</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-5">
                  Prefer to chat? Our gifting concierge is available on WhatsApp to discuss your requirements, share catalogues, and send quotes.
                </p>
                <a
                  href={getWhatsAppUrl('Hello Doxora, I would like to discuss a gifting project.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Open WhatsApp
                </a>
              </div>

              {/* Quick Links */}
              <div className="luxury-card rounded-3xl p-8 bg-[#4A235A] text-white">
                <h3 className="font-display text-xl font-bold mb-5">Quick Actions</h3>
                <div className="space-y-3">
                  {[
                    { label: 'Request Corporate Quote', href: '/corporate-gifting' },
                    { label: 'Healthcare Gifting Enquiry', href: '/healthcare-gifting' },
                    { label: 'Browse Hampers', href: '/shop' },
                    { label: 'Build Custom Hamper', href: '/build-hamper' },
                  ].map(({ label, href }) => (
                    <a
                      key={label}
                      href={href}
                      className="flex items-center justify-between p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors text-sm font-medium"
                    >
                      {label}
                      <ArrowRight className="w-4 h-4 text-gold" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div className="luxury-card rounded-3xl overflow-hidden h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.886539092!2d77.4908527!3d12.9538477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1706601234567!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
