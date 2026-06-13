import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-cream">
      <div className="text-center px-6 max-w-xl">
        <p className="font-display text-9xl font-bold text-[#4A235A]/10">404</p>
        <h1 className="font-display text-4xl font-bold text-charcoal -mt-4 mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-500 text-lg mb-8">
          The page you're looking for seems to have wandered off. Let us guide you back to something beautiful.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/" className="btn-gold px-8 py-3 inline-flex items-center gap-2">
            Go Home <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/shop" className="btn-outline-gold px-8 py-3">
            Browse Hampers
          </Link>
        </div>
      </div>
    </main>
  );
}
