"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, Menu, X, ChevronDown, Phone } from "lucide-react";
import { useCartStore } from "@/lib/cart-store";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "#",
    children: [
      { label: "Corporate Gifting", href: "/corporate-gifting" },
      { label: "Healthcare Gifting", href: "/healthcare-gifting" },
      { label: "Events & Experiences", href: "/events" },
      { label: "Festival Collections", href: "/festivals" },
    ],
  },
  {
    label: "Shop",
    href: "#",
    children: [
      { label: "Luxury Hampers", href: "/luxury-hampers" },
      { label: "Shop All Hampers", href: "/shop" },
      { label: "Build Your Hamper", href: "/build-hamper" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const itemCount = useCartStore((s) => s.itemCount());

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => setMobileOpen(false), [pathname]);

  const isHome = pathname === "/";

  return (
    <>
      {/* Top Bar */}
      <div className="bg-purple-600 text-gold-champagne text-center py-2 px-4 text-xs font-accent tracking-widest">
        ✦ Free Nationwide Delivery on Orders Above ₹1,499 ✦ WhatsApp:{" "}
        <a
          href="https://wa.me/919999999999"
          className="underline hover:text-gold transition-colors"
        >
          +91 99999 99999
        </a>{" "}
        ✦
      </div>

      {/* Main Navbar */}
      <nav
        className={cn(
          "sticky top-0 z-50 transition-all duration-500",
          scrolled || !isHome
            ? "bg-white/95 backdrop-blur-md shadow-luxury"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex flex-col leading-none group">
              <span
                className={cn(
                  "font-accent font-black text-2xl tracking-widest transition-colors duration-300",
                  scrolled || !isHome ? "text-purple-600" : "text-white"
                )}
              >
                DOXORA
              </span>
              <span
                className={cn(
                  "font-display text-xs italic tracking-wider transition-colors duration-300",
                  scrolled || !isHome ? "text-gold" : "text-gold-light"
                )}
              >
                Thoughtfully Curated
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div
                    key={link.label}
                    className="relative group"
                    onMouseEnter={() => setActiveDropdown(link.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className={cn(
                        "flex items-center gap-1 px-4 py-2 font-sans text-sm font-medium tracking-wide transition-colors duration-300",
                        scrolled || !isHome
                          ? "text-charcoal hover:text-purple-600"
                          : "text-white/90 hover:text-white"
                      )}
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className={cn(
                          "transition-transform duration-300",
                          activeDropdown === link.label && "rotate-180"
                        )}
                      />
                    </button>
                    {/* Dropdown */}
                    <div
                      className={cn(
                        "absolute top-full left-0 w-56 bg-white shadow-hover border-t-2 border-gold transition-all duration-300 origin-top",
                        activeDropdown === link.label
                          ? "opacity-100 scale-y-100 pointer-events-auto"
                          : "opacity-0 scale-y-95 pointer-events-none"
                      )}
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-5 py-3 text-sm text-charcoal hover:bg-cream hover:text-purple-600 transition-colors font-sans border-b border-gray-50 last:border-0"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={cn(
                      "px-4 py-2 font-sans text-sm font-medium tracking-wide transition-colors duration-300",
                      scrolled || !isHome
                        ? "text-charcoal hover:text-purple-600"
                        : "text-white/90 hover:text-white",
                      pathname === link.href && "text-gold font-semibold"
                    )}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              <a
                href="tel:+919999999999"
                className={cn(
                  "hidden md:flex items-center gap-2 font-sans text-sm font-medium transition-colors duration-300",
                  scrolled || !isHome ? "text-charcoal hover:text-purple-600" : "text-white/90 hover:text-white"
                )}
              >
                <Phone size={15} />
                <span className="hidden lg:block">+91 99999 99999</span>
              </a>

              <Link
                href="/shop"
                className={cn(
                  "btn-gold text-xs px-5 py-2.5 hidden md:inline-flex"
                )}
              >
                Get a Quote
              </Link>

              <Link href="/cart" className="relative p-2 group">
                <ShoppingBag
                  size={22}
                  className={cn(
                    "transition-colors duration-300",
                    scrolled || !isHome ? "text-charcoal group-hover:text-purple-600" : "text-white"
                  )}
                />
                {itemCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-gold text-charcoal text-xs font-bold rounded-full flex items-center justify-center font-sans">
                    {itemCount}
                  </span>
                )}
              </Link>

              <button
                className="lg:hidden p-2"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? (
                  <X size={22} className={scrolled || !isHome ? "text-charcoal" : "text-white"} />
                ) : (
                  <Menu size={22} className={scrolled || !isHome ? "text-charcoal" : "text-white"} />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden bg-white border-t border-gray-100 transition-all duration-300 overflow-hidden",
            mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <p className="px-3 py-2 text-xs font-accent tracking-widest text-gold uppercase">
                    {link.label}
                  </p>
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-5 py-2.5 text-sm text-charcoal hover:text-purple-600 font-sans"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block px-3 py-2.5 text-sm text-charcoal hover:text-purple-600 font-sans font-medium"
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="pt-4 pb-2 border-t border-gray-100">
              <Link href="/contact" className="btn-gold w-full justify-center">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
