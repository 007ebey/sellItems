import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock, User } from 'lucide-react';

const posts = [
  {
    slug: 'corporate-gifting-guide-2024',
    title: 'The Ultimate Corporate Gifting Guide for 2024',
    excerpt: 'Discover how smart companies are using premium gifting to strengthen client relationships, boost employee morale, and create lasting brand impressions.',
    image: 'https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=800&q=80',
    category: 'Corporate Gifting',
    author: 'Doxora Team',
    date: 'January 15, 2024',
    readTime: '8 min read',
    featured: true,
  },
  {
    slug: 'ivf-gifting-compassion',
    title: 'How IVF Clinics Are Using Gifting to Show Compassion',
    excerpt: 'A curated hamper can transform a clinical experience into an emotional one. See how leading fertility clinics are using Doxora to care for their patients.',
    image: 'https://images.unsplash.com/photo-1559181567-c3190ca9be46?w=800&q=80',
    category: 'Healthcare Gifting',
    author: 'Doxora Team',
    date: 'February 2, 2024',
    readTime: '6 min read',
  },
  {
    slug: 'luxury-packaging-power',
    title: 'Why Packaging Is the Most Powerful Part of Your Gift',
    excerpt: 'The unboxing moment is everything. Explore how premium packaging design elevates your brand and creates unforgettable gifting experiences.',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&q=80',
    category: 'Gifting Trends',
    author: 'Doxora Team',
    date: 'February 20, 2024',
    readTime: '5 min read',
  },
  {
    slug: 'diwali-corporate-gifting',
    title: 'Diwali Corporate Gifting: Move Beyond the Dry Fruit Box',
    excerpt: 'Your clients and employees deserve better than the standard mithai box. Here\'s how to make your Diwali gifting truly memorable this year.',
    image: 'https://images.unsplash.com/photo-1605543667606-52b0f037d2b7?w=800&q=80',
    category: 'Festival Gifting',
    author: 'Doxora Team',
    date: 'March 5, 2024',
    readTime: '7 min read',
  },
  {
    slug: 'employee-onboarding-welcome-kits',
    title: 'Why Your Employee Welcome Kit Makes or Breaks the First Impression',
    excerpt: 'The first day matters. Companies using Doxora\'s premium welcome kits report higher engagement and faster ramp-up time among new hires.',
    image: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=800&q=80',
    category: 'Corporate Gifting',
    author: 'Doxora Team',
    date: 'March 18, 2024',
    readTime: '6 min read',
  },
  {
    slug: 'wellness-hampers-trend',
    title: 'Wellness Hampers Are the New Corporate Gift',
    excerpt: 'Mental health, self-care, and wellness are taking centre stage. Here\'s why gifting wellness products signals that your company truly cares.',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80',
    category: 'Gifting Trends',
    author: 'Doxora Team',
    date: 'April 3, 2024',
    readTime: '5 min read',
  },
];

export const metadata = {
  title: 'Gifting Insights Blog | Doxora',
  description: 'Explore gifting trends, corporate gifting guides, healthcare gifting insights, and luxury hamper inspiration from the Doxora team.',
};

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-[#4A235A] text-center text-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <span className="text-gold tracking-widest text-sm uppercase font-medium">Gifting Insights</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold mt-3 mb-5">
            The Doxora <span className="text-shimmer">Journal</span>
          </h1>
          <p className="text-white/70 text-lg">
            Trends, guides, and ideas for thoughtful gifting — from our concierge team to you.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-6 max-w-6xl">
          <Link href={`/blog/${featured.slug}`} className="group block">
            <div className="grid md:grid-cols-2 gap-8 luxury-card rounded-3xl overflow-hidden bg-white">
              <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="badge-gold mb-4">Featured</span>
                <span className="text-gold text-xs uppercase tracking-widest font-medium">{featured.category}</span>
                <h2 className="font-display text-3xl font-bold text-charcoal mt-2 mb-4 group-hover:text-purple-800 transition-colors">
                  {featured.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">{featured.excerpt}</p>
                <div className="flex items-center gap-4 mt-6 text-gray-500 text-sm">
                  <span className="flex items-center gap-1"><User className="w-4 h-4" /> {featured.author}</span>
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {featured.readTime}</span>
                </div>
                <span className="inline-flex items-center gap-2 text-purple-700 font-semibold mt-6 group-hover:gap-3 transition-all">
                  Read Article <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Post Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="section-heading mb-12">More Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group luxury-card rounded-2xl overflow-hidden bg-white block">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="text-gold text-xs uppercase tracking-widest font-medium">{post.category}</span>
                  <h3 className="font-display text-xl font-bold text-charcoal mt-2 mb-3 group-hover:text-purple-800 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between mt-5 text-gray-400 text-xs">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
