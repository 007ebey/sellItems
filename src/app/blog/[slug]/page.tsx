import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Clock, User, ArrowRight } from 'lucide-react';

const posts: Record<string, {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  content: string;
}> = {
  'corporate-gifting-guide-2024': {
    title: 'The Ultimate Corporate Gifting Guide for 2024',
    excerpt: 'Discover how smart companies are using premium gifting to strengthen client relationships, boost employee morale, and create lasting brand impressions.',
    image: 'https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=1200&q=80',
    category: 'Corporate Gifting',
    author: 'Doxora Team',
    date: 'January 15, 2024',
    readTime: '8 min read',
    content: `
Corporate gifting has evolved far beyond the standard calendar and pen set. In 2024, the most successful companies are using premium gifting as a strategic tool to deepen relationships, boost morale, and amplify their brand.

## Why Corporate Gifting Matters More Than Ever

In an increasingly digital world, a physical, thoughtful gift creates a tangible connection that emails and Slack messages simply cannot replicate. Studies show that companies with formal gifting programs report 47% higher client retention rates.

## The New Rules of Corporate Gifting

**1. Personalisation over generic**
The days of the one-size-fits-all gift basket are over. Today's recipients expect gifts that feel personally chosen. This means knowing your recipient's preferences, dietary requirements, and lifestyle.

**2. Sustainability signals values**
Premium sustainable gifting — organic products, recyclable packaging, locally sourced items — communicates that your company cares about more than just the bottom line.

**3. Experiences over things**
The best gifts create experiences. A wellness hamper, a gourmet food curation, or a premium book set creates a moment that the recipient will remember and associate with your brand.

## The Doxora Difference

At Doxora, we work with leading companies across India to design corporate gifting programs that are strategic, scalable, and stunning. From 50-piece welcome kits to 5,000-hamper Diwali campaigns, we handle every detail.

Ready to elevate your corporate gifting? [Contact our team](/contact) today.
    `,
  },
  'ivf-gifting-compassion': {
    title: 'How IVF Clinics Are Using Gifting to Show Compassion',
    excerpt: 'A curated hamper can transform a clinical experience into an emotional one. See how leading fertility clinics are using Doxora to care for their patients.',
    image: 'https://images.unsplash.com/photo-1559181567-c3190ca9be46?w=1200&q=80',
    category: 'Healthcare Gifting',
    author: 'Doxora Team',
    date: 'February 2, 2024',
    readTime: '6 min read',
    content: `
The IVF journey is one of the most emotionally and physically demanding experiences a patient can face. Forward-thinking fertility clinics are discovering that a carefully curated hamper can transform this clinical experience into one filled with warmth, hope, and human connection.

## The Emotional Dimension of Healthcare

Healthcare is fundamentally about care — not just clinical care, but emotional care. When a patient receives a beautifully packaged Doxora IVF Welcome Kit on the day of their first consultation, the message is clear: "We see you as a person, not just a patient."

## What Goes Into an IVF Hamper

Our fertility journey hampers are designed in consultation with healthcare professionals and patient advocates. They typically include:

- Calming wellness products (aromatherapy, herbal teas)
- Inspiring journals and affirmation cards
- Premium skincare for sensitive treatments
- Healthy snacks for the waiting room
- A personalised note from the clinical team

## The Clinical Impact

Clinics using Doxora's healthcare gifting program report significantly higher patient satisfaction scores and stronger word-of-mouth referrals. Patients feel cared for from day one.

Interested in a healthcare gifting program for your clinic? [Explore our healthcare solutions](/healthcare-gifting).
    `,
  },
};

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts[params.slug];

  if (!post) {
    return (
      <main className="pt-32 pb-20 text-center">
        <h1 className="font-display text-4xl font-bold text-charcoal">Article Not Found</h1>
        <Link href="/blog" className="btn-gold mt-8 inline-block px-8 py-3">Back to Blog</Link>
      </main>
    );
  }

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src={post.image} alt={post.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>
        <div className="relative z-10 container mx-auto px-6 max-w-4xl pb-12">
          <span className="badge-gold mb-4 inline-block">{post.category}</span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-5 mt-5 text-white/60 text-sm">
            <span className="flex items-center gap-1"><User className="w-4 h-4" /> {post.author}</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {post.readTime}</span>
            <span>{post.date}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-purple-700 mb-10 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Journal
          </Link>

          <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">{post.excerpt}</p>

          <div
            className="prose prose-lg prose-headings:font-display prose-headings:text-charcoal prose-a:text-purple-700 prose-strong:text-charcoal max-w-none"
            dangerouslySetInnerHTML={{
              __html: post.content
                .replace(/## (.*)/g, '<h2>$1</h2>')
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>')
                .replace(/\n\n/g, '</p><p>')
                .replace(/^/, '<p>')
                .replace(/$/, '</p>')
                .replace(/- (.*)/g, '<li>$1</li>')
            }}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#4A235A] text-center text-white">
        <div className="container mx-auto px-6 max-w-2xl">
          <h2 className="font-display text-4xl font-bold mb-4">Ready to Elevate Your Gifting?</h2>
          <p className="text-white/70 mb-8">Speak with our concierge team and discover what Doxora can create for you.</p>
          <Link href="/contact" className="btn-gold px-10 py-4 inline-flex items-center gap-2">
            Contact Us <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
