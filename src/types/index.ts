// ─── Products & Hampers ───────────────────────────────────────────────────────

export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  comparePrice?: number;
  category: ProductCategory;
  images: string[];
  contents: string[];
  personalizationOptions: PersonalizationOption[];
  deliveryTimeline: string;
  badge?: string;
  inStock: boolean;
  rating: number;
  reviewCount: number;
  weight?: string;
  dimensions?: string;
  tags: string[];
}

export type ProductCategory =
  | "corporate"
  | "healthcare"
  | "luxury"
  | "wedding"
  | "festival"
  | "executive"
  | "baby"
  | "wellness"
  | "gourmet"
  | "personal";

export interface PersonalizationOption {
  id: string;
  label: string;
  type: "text" | "select" | "checkbox";
  options?: string[];
  required: boolean;
}

// ─── Cart ────────────────────────────────────────────────────────────────────

export interface CartItem {
  product: Product;
  quantity: number;
  personalization?: Record<string, string>;
}

export interface Cart {
  items: CartItem[];
  subtotal: number;
  shipping: number;
  total: number;
}

// ─── Orders ──────────────────────────────────────────────────────────────────

export interface Order {
  id: string;
  razorpayOrderId: string;
  razorpayPaymentId?: string;
  customer: Customer;
  items: CartItem[];
  subtotal: number;
  shipping: number;
  total: number;
  status: OrderStatus;
  shippingAddress: Address;
  trackingNumber?: string;
  courierName?: string;
  createdAt: string;
  updatedAt: string;
}

export type OrderStatus =
  | "pending"
  | "confirmed"
  | "processing"
  | "shipped"
  | "delivered"
  | "cancelled";

// ─── Customer ────────────────────────────────────────────────────────────────

export interface Customer {
  id?: string;
  name: string;
  email: string;
  phone: string;
}

export interface Address {
  name: string;
  line1: string;
  line2?: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
}

// ─── Forms ───────────────────────────────────────────────────────────────────

export interface QuoteRequest {
  name: string;
  email: string;
  phone: string;
  company?: string;
  occasion: string;
  budget: string;
  quantity: string;
  message: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface ConciergeRequest {
  occasion: string;
  recipient: string;
  budget: string;
  quantity: string;
}

// ─── Build Hamper ────────────────────────────────────────────────────────────

export interface HamperBuilder {
  occasion: string;
  recipient: string;
  budget: string;
  selectedProducts: string[];
  personalization: {
    message?: string;
    packaging?: string;
    ribbonColor?: string;
  };
  deliveryDate?: string;
}

// ─── Blog ────────────────────────────────────────────────────────────────────

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  publishedAt: string;
  readTime: number;
  author: string;
}

// ─── Testimonials ────────────────────────────────────────────────────────────

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

// ─── Gallery ─────────────────────────────────────────────────────────────────

export interface GalleryItem {
  id: string;
  image: string;
  category: string;
  title: string;
}
