export const metadata = { title: 'Terms of Service | Doxora' };

export default function TermsPage() {
  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: 'By accessing and using the Doxora website and services, you accept and agree to be bound by these Terms of Service. If you do not agree, please do not use our services.',
    },
    {
      title: '2. Products and Services',
      content: 'Doxora provides premium gifting, hamper curation, and event gifting services. All product descriptions, images, and prices are subject to change without notice. We reserve the right to limit quantities of any product.',
    },
    {
      title: '3. Ordering and Payment',
      content: 'All orders are subject to availability and confirmation. Payment must be made in full at the time of ordering. We accept UPI, credit/debit cards, net banking, and digital wallets through our secure Razorpay gateway.',
    },
    {
      title: '4. Customisation and Corporate Orders',
      content: 'Custom and corporate orders require advance payment or a confirmed purchase order. Lead times will be communicated at the time of order confirmation. Any artwork or branding provided for custom orders must not infringe on third-party intellectual property.',
    },
    {
      title: '5. Delivery',
      content: 'We deliver pan-India through our logistics partners. Delivery timelines are estimates and may vary due to factors beyond our control. Doxora is not liable for delays caused by courier partners or natural events.',
    },
    {
      title: '6. Refunds and Returns',
      content: 'Due to the perishable and personalised nature of our products, we do not accept returns. In the event of damaged or incorrect products, please contact us within 24 hours of delivery with photographic evidence.',
    },
    {
      title: '7. Intellectual Property',
      content: 'All content on this website — including images, text, logos, and designs — is the property of Doxora and may not be reproduced without written permission.',
    },
    {
      title: '8. Limitation of Liability',
      content: 'Doxora\'s liability is limited to the amount paid for the specific order in question. We are not liable for indirect, incidental, or consequential damages.',
    },
  ];

  return (
    <main className="pt-24 pb-20 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="font-display text-4xl font-bold text-charcoal mb-2">Terms of Service</h1>
        <p className="text-gray-500 mb-10">Last updated: January 2024</p>
        <div className="space-y-8">
          {sections.map((s) => (
            <section key={s.title}>
              <h2 className="text-xl font-bold text-charcoal mb-3">{s.title}</h2>
              <p className="text-gray-600 leading-relaxed">{s.content}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
