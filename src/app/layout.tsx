import type { Metadata } from "next";
import { Cormorant_Garamond, Jost, Cinzel } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { CartProvider } from "@/components/layout/CartProvider";
import { Toaster } from "react-hot-toast";
import AIChatbot from "@/components/ui/AIChatbot";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jost",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-cinzel",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://doxora.in"),
  title: {
    default: "Doxora – Luxury Gifting & Premium Hampers | India's #1 Gifting Concierge",
    template: "%s | Doxora – Luxury Gifting",
  },
  description:
    "Doxora crafts bespoke luxury gifting experiences for corporates, healthcare, weddings, and celebrations. Premium hampers, personalized gifts & nationwide delivery.",
  keywords: [
    "luxury gifting India",
    "corporate gifting Bangalore",
    "premium gift hampers",
    "IVF gift hampers",
    "healthcare gifting",
    "employee welcome kits",
    "festival hampers",
    "wedding hampers",
    "personalized gifts India",
    "doxora",
  ],
  openGraph: {
    title: "Doxora – Thoughtfully Curated. Beautifully Delivered.",
    description:
      "India's premium gifting concierge. Luxury hampers, corporate gifts, healthcare gifting & celebration experiences.",
    url: "https://doxora.in",
    siteName: "Doxora",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Doxora Luxury Gifting" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Doxora – Luxury Gifting Concierge",
    description: "Thoughtfully Curated. Beautifully Delivered.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable} ${cinzel.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Doxora",
              url: "https://doxora.in",
              logo: "https://doxora.in/logo.png",
              description: "India's premium gifting concierge",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-9999999999",
                contactType: "customer service",
                areaServed: "IN",
              },
            }),
          }}
        />
      </head>
      <body className="font-sans bg-white text-charcoal antialiased">
        <CartProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <WhatsAppButton />
          <AIChatbot />
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: "#4A235A",
                color: "#fff",
                fontFamily: "var(--font-jost)",
              },
            }}
          />
        </CartProvider>
      </body>
    </html>
  );
}
