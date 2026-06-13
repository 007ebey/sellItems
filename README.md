# Doxora — India's Premium Gifting Concierge
**doxora.in** | Next.js 14 + TypeScript + Tailwind CSS

> "Thoughtfully Curated. Beautifully Delivered."

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + Custom CSS |
| State | Zustand (persisted cart) |
| Animations | Framer Motion |
| Payments | Razorpay |
| Shipping | Shiprocket |
| Notifications | react-hot-toast |
| AI Chatbot | Anthropic Claude API |
| Fonts | Cormorant Garamond, Jost, Cinzel |

---

## Project Structure

```
src/
├── app/
│   ├── page.tsx                  # Home
│   ├── about/                    # About Doxora
│   ├── corporate-gifting/        # Corporate page
│   ├── healthcare-gifting/       # Healthcare flagship
│   ├── luxury-hampers/           # Hamper showcase
│   ├── shop/                     # E-commerce grid + [slug]
│   ├── build-hamper/             # 7-step guided builder
│   ├── events/                   # Events & Experiences
│   ├── festivals/                # Festival Collections
│   ├── gallery/                  # Photo gallery + lightbox
│   ├── blog/                     # Blog listing + [slug]
│   ├── cart/                     # Shopping cart
│   ├── checkout/                 # Address + Razorpay
│   ├── order-success/            # Post-payment
│   ├── contact/                  # Contact + Map
│   ├── admin/                    # Admin dashboard
│   ├── privacy/                  # Privacy Policy
│   ├── terms/                    # Terms of Service
│   ├── refund-policy/            # Refund Policy
│   ├── shipping-policy/          # Shipping Policy
│   ├── not-found.tsx             # 404
│   ├── sitemap.ts                # Dynamic sitemap
│   ├── robots.ts                 # robots.txt
│   └── api/
│       ├── create-order/         # Razorpay order
│       ├── verify-payment/       # Payment verification
│       ├── create-shipment/      # Shiprocket
│       ├── contact/              # Contact form
│       └── quote/                # Quote requests
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── CartProvider.tsx
│   ├── sections/                 # Home page sections
│   ├── shop/                     # ShopGrid, ProductDetail, HamperBuilder
│   └── ui/
│       ├── WhatsAppButton.tsx    # Floating WhatsApp
│       ├── AIChatbot.tsx         # AI Concierge chatbot
│       └── QuoteForm.tsx
├── lib/
│   ├── products.ts               # Product catalogue
│   ├── cart-store.ts             # Zustand cart
│   └── utils.ts
└── types/
    └── index.ts
```

---

## Quick Start

### 1. Install Dependencies
```bash
cd doxora
npm install
```

### 2. Configure Environment Variables
Copy `.env.local` and fill in your real values:

```env
# Razorpay
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_live_XXXXXXXXXXXXXXXX
RAZORPAY_KEY_SECRET=your_razorpay_secret

# Shiprocket
SHIPROCKET_EMAIL=your@email.com
SHIPROCKET_PASSWORD=your_password

# WhatsApp
NEXT_PUBLIC_WHATSAPP_NUMBER=919999999999

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### 4. Build for Production
```bash
npm run build
npm start
```

---

## Deployment (Vercel — Recommended)

1. Push to GitHub
2. Import repo on [vercel.com](https://vercel.com)
3. Add all environment variables in Vercel dashboard
4. Deploy — auto-deploys on every push to `main`

### Custom Domain
- Add `doxora.in` in Vercel Project Settings → Domains
- Update DNS: CNAME `@` → `cname.vercel-dns.com`

---

## Razorpay Setup

1. Create account at [razorpay.com](https://razorpay.com)
2. Go to Settings → API Keys → Generate Key
3. Add Key ID and Secret to `.env.local`
4. Enable UPI, Cards, Net Banking in Dashboard → Payment Methods
5. For live payments, complete KYC verification

---

## Shiprocket Setup

1. Create account at [shiprocket.in](https://shiprocket.in)
2. Add credentials to `.env.local`
3. Configure pickup address in Shiprocket dashboard
4. Token auto-refreshes every 9 days (handled in code)

---

## Adding Products

Edit `src/lib/products.ts`:

```typescript
{
  id: 'prod-xxx',
  name: 'Product Name',
  slug: 'product-url-slug',
  category: 'corporate' | 'healthcare' | 'luxury' | 'wedding' | 'baby' | 'wellness' | 'gourmet',
  price: 2999,
  originalPrice: 3999,       // optional, shows discount
  description: 'Short description',
  longDescription: 'Full description for product page',
  images: ['https://...'],
  contents: ['Item 1', 'Item 2'],
  badge: 'Best Seller',       // optional
  featured: true,             // shows in featured section
  inStock: true,
  weight: 1000,               // grams, for shipping
  dimensions: { l: 30, w: 20, h: 15 }
}
```

---

## Brand Colors

| Token | Value | Use |
|-------|-------|-----|
| `#4A235A` | Royal Purple | Primary brand, CTAs |
| `#D4AF37` | Luxury Gold | Accents, badges |
| `#FAF8F5` | Soft Cream | Page backgrounds |
| `#1A1A1A` | Charcoal | Body text |

---

## SEO Optimised For

- "Corporate Gifting Bangalore"
- "Corporate Gifting India"
- "Luxury Hampers Bangalore"
- "Premium Gift Hampers India"
- "IVF Gift Hampers"
- "Healthcare Gifting Solutions"
- "Employee Welcome Kits"
- "Festival Hampers India"
- "Luxury Gift Boxes"
- "Wedding Hampers"

---

## Pages Summary

| Route | Purpose |
|-------|---------|
| `/` | Home — hero, categories, features |
| `/about` | Brand story & values |
| `/corporate-gifting` | Corporate services + quote form |
| `/healthcare-gifting` | IVF, maternity, hospital gifting |
| `/luxury-hampers` | Hamper categories showcase |
| `/shop` | E-commerce with filters |
| `/shop/[slug]` | Individual product page |
| `/build-hamper` | 7-step guided builder |
| `/events` | Events & experiences |
| `/festivals` | Festival collections |
| `/gallery` | Photo gallery + lightbox |
| `/blog` | Blog listing |
| `/blog/[slug]` | Blog post detail |
| `/cart` | Shopping cart |
| `/checkout` | Address + payment |
| `/order-success` | Post-payment confirmation |
| `/contact` | Contact + WhatsApp + map |
| `/admin` | Internal dashboard |

---

Built with ❤️ for Doxora — India's Premium Gifting Concierge
