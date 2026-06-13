import Link from 'next/link';
import { CheckCircle, Package, MessageCircle, ArrowRight } from 'lucide-react';

export default function OrderSuccessPage() {
  return (
    <main className="pt-32 pb-20 bg-cream min-h-screen">
      <div className="container mx-auto px-6 max-w-2xl text-center">
        <div className="bg-white rounded-3xl p-12 shadow-lg">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-500" />
          </div>

          <h1 className="font-display text-4xl font-bold text-charcoal mb-4">
            Order Confirmed! 🎉
          </h1>
          <p className="text-gray-600 text-lg mb-2">
            Thank you for choosing Doxora.
          </p>
          <p className="text-gray-500 mb-8">
            Your premium hamper is being lovingly prepared and will be dispatched within 1–2 business days. You'll receive a tracking link via email and WhatsApp.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-cream rounded-2xl p-5 text-center">
              <Package className="w-8 h-8 text-[#4A235A] mx-auto mb-2" />
              <p className="font-semibold text-charcoal text-sm">Order Processing</p>
              <p className="text-gray-500 text-xs mt-1">We're handcrafting your hamper</p>
            </div>
            <div className="bg-cream rounded-2xl p-5 text-center">
              <MessageCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <p className="font-semibold text-charcoal text-sm">Updates on WhatsApp</p>
              <p className="text-gray-500 text-xs mt-1">Tracking sent within 24 hrs</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/shop" className="btn-gold px-8 py-3 inline-flex items-center gap-2">
              Continue Shopping <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/" className="btn-outline-gold px-8 py-3">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
