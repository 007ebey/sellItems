export const metadata = { title: 'Shipping Policy | Doxora' };

export default function ShippingPage() {
  return (
    <main className="pt-24 pb-20 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="font-display text-4xl font-bold text-charcoal mb-2">Shipping Policy</h1>
        <p className="text-gray-500 mb-10">Last updated: January 2024</p>
        <div className="space-y-8 text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-charcoal mb-3">Shipping Coverage</h2>
            <p>Doxora ships pan-India across 50+ cities through our logistics partners including Shiprocket, Delhivery, and BlueDart. We strive to cover every pin code in India.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-charcoal mb-3">Shipping Charges</h2>
            <p>Orders above ₹1,499 receive complimentary shipping. For orders below ₹1,499, a flat shipping fee of ₹199 applies. Expedited delivery options may be available at additional cost.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-charcoal mb-3">Delivery Timeline</h2>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Metro cities (Bangalore, Mumbai, Delhi, etc.): 2–4 business days</li>
              <li>Tier 2 cities: 3–5 business days</li>
              <li>Remote areas: 5–7 business days</li>
              <li>Corporate bulk orders: As per agreed timeline</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-bold text-charcoal mb-3">Order Tracking</h2>
            <p>Once your order is dispatched, you will receive a tracking number via email and WhatsApp. Track your shipment directly on our courier partner's website.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-charcoal mb-3">Packaging</h2>
            <p>All Doxora hampers are packaged in premium gift-ready boxes with eco-friendly materials. No additional packaging is required.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
