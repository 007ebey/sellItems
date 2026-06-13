export const metadata = {
  title: 'Privacy Policy | Doxora',
};

export default function PrivacyPage() {
  return (
    <main className="pt-24 pb-20 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="font-display text-4xl font-bold text-charcoal mb-2">Privacy Policy</h1>
        <p className="text-gray-500 mb-10">Last updated: January 2024</p>

        <div className="prose prose-lg prose-headings:font-display prose-headings:text-charcoal max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-charcoal mb-3">1. Information We Collect</h2>
            <p className="text-gray-600 leading-relaxed">
              We collect information you provide directly to us, such as when you create an account, place an order, or contact us for support. This includes your name, email address, phone number, shipping address, and payment information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-charcoal mb-3">2. How We Use Your Information</h2>
            <p className="text-gray-600 leading-relaxed">
              We use the information we collect to process your orders, send you order confirmations and tracking updates, respond to your inquiries, personalise your experience, and improve our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-charcoal mb-3">3. Payment Information</h2>
            <p className="text-gray-600 leading-relaxed">
              All payment transactions are processed securely through Razorpay. We do not store your credit card or banking details on our servers. Razorpay's privacy policy governs the use of your payment information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-charcoal mb-3">4. Information Sharing</h2>
            <p className="text-gray-600 leading-relaxed">
              We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted partners (such as shipping providers) solely to fulfil your orders.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-charcoal mb-3">5. Data Security</h2>
            <p className="text-gray-600 leading-relaxed">
              We implement industry-standard security measures to protect your personal information. All data is transmitted using SSL encryption.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-charcoal mb-3">6. Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have questions about this Privacy Policy, contact us at{' '}
              <a href="mailto:hello@doxora.in" className="text-purple-700 hover:underline">hello@doxora.in</a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
