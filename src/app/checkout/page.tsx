'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCartStore } from '@/lib/cart-store';
import { formatPrice } from '@/lib/utils';
import { Shield, Truck, Lock } from 'lucide-react';
import Image from 'next/image';
import { toast } from 'sonner';

declare global {
  interface Window {
    Razorpay: any;
  }
}

type Address = {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
};

export default function CheckoutPage() {
  const router = useRouter();
  const { items, subtotal, total, clearCart } = useCartStore();
  const sub = subtotal();
  const tot = total();
  const [step, setStep] = useState<'address' | 'payment'>('address');
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState<Address>({
    name: '', email: '', phone: '', address: '', city: '', state: '', pincode: '',
  });

  const handleAddressSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const loadRazorpay = (): Promise<boolean> => {
    return new Promise((resolve) => {
      if (window.Razorpay) return resolve(true);
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    setLoading(true);
    const loaded = await loadRazorpay();
    if (!loaded) {
      toast.error('Payment gateway failed to load. Please try again.');
      setLoading(false);
      return;
    }

    try {
      const res = await fetch('/api/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: tot }),
      });
      const order = await res.json();

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: 'INR',
        name: 'Doxora',
        description: 'Premium Gifting',
        order_id: order.id,
        prefill: {
          name: address.name,
          email: address.email,
          contact: address.phone,
        },
        theme: { color: '#4A235A' },
        handler: async (response: any) => {
          try {
            await fetch('/api/verify-payment', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                address,
                items,
              }),
            });
            clearCart();
            toast.success('Order placed successfully!');
            router.push('/order-success');
          } catch {
            toast.error('Payment verification failed. Contact support.');
          }
        },
        modal: { ondismiss: () => setLoading(false) },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch {
      toast.error('Failed to initiate payment. Please try again.');
      setLoading(false);
    }
  };

  if (items.length === 0) {
    return (
      <main className="pt-32 pb-20 text-center">
        <h2 className="font-display text-3xl font-bold text-charcoal mb-4">Your cart is empty</h2>
        <a href="/shop" className="btn-gold px-8 py-3 inline-block mt-4">Browse Hampers</a>
      </main>
    );
  }

  return (
    <main className="pt-24 pb-20 bg-cream min-h-screen">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Steps */}
        <div className="flex items-center gap-4 mb-10">
          {['Address', 'Payment'].map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  (s === 'Address' && step === 'address') || (s === 'Payment' && step === 'payment')
                    ? 'bg-[#4A235A] text-white'
                    : step === 'payment' && s === 'Address'
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200 text-gray-500'
                }`}
              >
                {step === 'payment' && s === 'Address' ? '✓' : i + 1}
              </div>
              <span className={`text-sm font-medium ${step === s.toLowerCase() ? 'text-charcoal' : 'text-gray-400'}`}>
                {s}
              </span>
              {i < 1 && <div className="w-12 h-px bg-gray-300" />}
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            {step === 'address' ? (
              <div className="bg-white rounded-3xl p-8 shadow-sm">
                <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Delivery Address</h2>
                <form onSubmit={handleAddressSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <input required value={address.name} onChange={e => setAddress({ ...address, name: e.target.value })} className="luxury-input w-full" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                      <input required type="tel" value={address.phone} onChange={e => setAddress({ ...address, phone: e.target.value })} className="luxury-input w-full" placeholder="+91 99999 99999" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input required type="email" value={address.email} onChange={e => setAddress({ ...address, email: e.target.value })} className="luxury-input w-full" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Address *</label>
                    <textarea required rows={3} value={address.address} onChange={e => setAddress({ ...address, address: e.target.value })} className="luxury-input w-full resize-none" placeholder="House/Flat no, Street, Area" />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
                      <input required value={address.city} onChange={e => setAddress({ ...address, city: e.target.value })} className="luxury-input w-full" placeholder="City" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">State *</label>
                      <input required value={address.state} onChange={e => setAddress({ ...address, state: e.target.value })} className="luxury-input w-full" placeholder="State" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Pincode *</label>
                      <input required value={address.pincode} onChange={e => setAddress({ ...address, pincode: e.target.value })} className="luxury-input w-full" placeholder="560001" />
                    </div>
                  </div>
                  <button type="submit" className="btn-gold w-full py-4 text-base">
                    Continue to Payment →
                  </button>
                </form>
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-8 shadow-sm">
                <h2 className="font-display text-2xl font-bold text-charcoal mb-2">Review & Pay</h2>
                <p className="text-gray-500 mb-6">Delivering to: <strong>{address.name}</strong>, {address.city}, {address.pincode}</p>

                <div className="space-y-4 mb-8">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex gap-4">
                      <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                        <Image src={item.product.images[0]} alt={item.product.name} fill className="object-cover" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-charcoal text-sm">{item.product.name}</p>
                        <p className="text-gray-400 text-xs">Qty: {item.quantity}</p>
                      </div>
                      <p className="font-bold text-charcoal">{formatPrice(item.product.price * item.quantity)}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 py-5 border-t border-b border-gray-100 mb-6">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Subtotal</span><span>{formatPrice(sub)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Shipping</span>
                    <span className={sub >= 1499 ? 'text-green-600 font-medium' : ''}>{sub >= 1499 ? 'FREE' : formatPrice(199)}</span>
                  </div>
                  <div className="flex justify-between font-bold text-charcoal text-lg pt-2">
                    <span>Total</span><span className="price-tag">{formatPrice(tot)}</span>
                  </div>
                </div>

                <div className="flex gap-3 mb-6">
                  <Shield className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <p className="text-xs text-gray-500">100% secure payment powered by Razorpay. Your data is encrypted end-to-end.</p>
                </div>

                <button
                  onClick={handlePayment}
                  disabled={loading}
                  className="btn-gold w-full py-4 text-base flex items-center justify-center gap-2"
                >
                  <Lock className="w-4 h-4" />
                  {loading ? 'Processing...' : `Pay ${formatPrice(tot)} Securely`}
                </button>

                <button onClick={() => setStep('address')} className="w-full text-center text-gray-500 text-sm mt-4 hover:text-gray-700">
                  ← Edit Address
                </button>
              </div>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-6 shadow-sm sticky top-28">
              <h3 className="font-display text-lg font-bold text-charcoal mb-4">Order Summary</h3>
              <div className="space-y-3 mb-5">
                {items.map((item) => (
                  <div key={item.product.id} className="flex justify-between text-sm">
                    <span className="text-gray-600 truncate max-w-[60%]">{item.product.name} ×{item.quantity}</span>
                    <span className="font-medium">{formatPrice(item.product.price * item.quantity)}</span>
                  </div>
                ))}
              </div>
              <div className="border-t pt-4 space-y-2 text-sm">
                <div className="flex justify-between text-gray-500">
                  <span>Subtotal</span><span>{formatPrice(sub)}</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Shipping</span>
                  <span>{sub >= 1499 ? 'FREE' : formatPrice(199)}</span>
                </div>
                <div className="flex justify-between font-bold text-charcoal text-base pt-1 border-t">
                  <span>Total</span><span>{formatPrice(tot)}</span>
                </div>
              </div>
              <div className="mt-5 flex items-center gap-2 text-xs text-gray-400">
                <Truck className="w-4 h-4" />
                Estimated delivery: 3–5 business days
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
