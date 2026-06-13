export const metadata = { title: 'Refund Policy | Doxora' };

export default function RefundPage() {
  return (
    <main className="pt-24 pb-20 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="font-display text-4xl font-bold text-charcoal mb-2">Refund & Cancellation Policy</h1>
        <p className="text-gray-500 mb-10">Last updated: January 2024</p>
        <div className="space-y-8 text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-charcoal mb-3">Our Commitment to Quality</h2>
            <p>Every Doxora hamper is crafted with care and undergoes quality checks before dispatch. If your order arrives damaged or incorrect, we will make it right.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-charcoal mb-3">Damaged or Incorrect Orders</h2>
            <p>If you receive a damaged or incorrect item, please contact us within 24 hours of delivery at <a href="mailto:hello@doxora.in" className="text-purple-700">hello@doxora.in</a> or WhatsApp us with photographs. We will arrange a replacement or full refund at our discretion.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-charcoal mb-3">Order Cancellations</h2>
            <p>Standard orders may be cancelled within 2 hours of placement for a full refund. Custom, personalised, or bulk orders cannot be cancelled once production has commenced. Corporate orders follow the terms of the individual agreement.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-charcoal mb-3">Refund Processing</h2>
            <p>Approved refunds are processed within 5–7 business days back to the original payment method. UPI refunds may reflect within 1–3 business days.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-charcoal mb-3">Contact for Refunds</h2>
            <p>Email: <a href="mailto:hello@doxora.in" className="text-purple-700">hello@doxora.in</a><br />WhatsApp: +91 99999 99999</p>
          </section>
        </div>
      </div>
    </main>
  );
}
