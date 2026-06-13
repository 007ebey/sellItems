import Link from "next/link";
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      {/* Newsletter */}
      <div className="bg-purple-600 py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-3xl text-white">Stay Inspired</h3>
            <p className="text-gold-champagne/70 font-sans text-sm mt-1">
              Get exclusive gifting ideas, seasonal collections & early access to new hampers.
            </p>
          </div>
          <form className="flex gap-0 w-full md:w-auto max-w-md">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-5 py-3 bg-white/10 border border-white/20 text-white placeholder-white/40 font-sans text-sm outline-none focus:border-gold transition-colors"
            />
            <button className="btn-gold px-6 py-3 text-xs whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <span className="font-accent font-black text-3xl text-white tracking-widest">DOXORA</span>
              <p className="font-display text-gold italic text-sm mt-0.5">
                Thoughtfully Curated. Beautifully Delivered.
              </p>
            </div>
            <p className="font-sans text-sm text-white/60 leading-relaxed max-w-sm">
              India's premium gifting concierge crafting unforgettable experiences for corporates,
              celebrations, healthcare, and every occasion in between.
            </p>

            <div className="mt-6 space-y-3">
              <a
                href="tel:+919999999999"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-gold transition-colors font-sans"
              >
                <Phone size={15} className="text-gold" />
                +91 99999 99999
              </a>
              <a
                href="mailto:hello@doxora.in"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-gold transition-colors font-sans"
              >
                <Mail size={15} className="text-gold" />
                hello@doxora.in
              </a>
              <div className="flex items-start gap-3 text-sm text-white/60 font-sans">
                <MapPin size={15} className="text-gold mt-0.5 shrink-0" />
                <span>Bangalore, Karnataka, India</span>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              {[
                { icon: Instagram, href: "#" },
                { icon: Facebook, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Youtube, href: "#" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/60 hover:border-gold hover:text-gold transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-accent text-xs tracking-widest text-gold uppercase mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Corporate Gifting", href: "/corporate-gifting" },
                { label: "Healthcare Gifting", href: "/healthcare-gifting" },
                { label: "Events & Experiences", href: "/events" },
                { label: "Festival Collections", href: "/festivals" },
                { label: "Build Your Hamper", href: "/build-hamper" },
                { label: "Executive Gifts", href: "/shop?category=executive" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-white/60 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-accent text-xs tracking-widest text-gold uppercase mb-4">
              Shop
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "All Hampers", href: "/shop" },
                { label: "Luxury Hampers", href: "/luxury-hampers" },
                { label: "Corporate Hampers", href: "/shop?category=corporate" },
                { label: "Baby & Maternity", href: "/shop?category=baby" },
                { label: "Wellness Hampers", href: "/shop?category=wellness" },
                { label: "Gourmet Hampers", href: "/shop?category=gourmet" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-white/60 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-accent text-xs tracking-widest text-gold uppercase mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "About Doxora", href: "/about" },
                { label: "Gallery", href: "/gallery" },
                { label: "Blog", href: "/blog" },
                { label: "Contact Us", href: "/contact" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms & Conditions", href: "/terms" },
                { label: "Refund Policy", href: "/refund-policy" },
                { label: "Shipping Policy", href: "/shipping-policy" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-white/60 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-sans text-xs text-white/40">
            © {new Date().getFullYear()} Doxora. All rights reserved. Made with ♥ in India.
          </p>
          <div className="flex items-center gap-4">
            <img src="/images/razorpay-badge.svg" alt="Razorpay Secure" className="h-5 opacity-50" />
            <span className="text-white/40 font-sans text-xs">Secured by Razorpay</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
