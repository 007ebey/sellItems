'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl } from '@/lib/utils';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

const QUICK_REPLIES = [
  'Corporate gifting options',
  'Healthcare gifting',
  'Pricing for bulk orders',
  'Build a custom hamper',
  'Diwali hampers',
];

const SYSTEM_PROMPT = `You are a concierge for Doxora, India's premium gifting company. Be elegant, helpful and warm.

Key info:
- Corporate gifting: welcome kits, leadership gifts, festival hampers, conference kits, bulk orders
- Healthcare gifting: IVF journey hampers, maternity hampers, baby arrival, hospital gift programs
- Luxury hampers: gourmet, wellness, wedding, baby, executive gifts starting from ₹2,499
- Custom hampers: fully personalised, any budget, any occasion
- Delivery: pan-India, 2–5 business days, free above ₹1,499
- Payment: Razorpay (UPI, cards, net banking)

For detailed quotes, bulk orders (10+), or special customisations, suggest WhatsApp or the contact form.
Keep responses concise (2–3 sentences max). Be luxurious and professional.`;

export default function AIChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Welcome to Doxora! I\'m your gifting concierge. How can I help you create something memorable today?' },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || loading) return;
    const userMsg: Message = { role: 'user', content: text };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 300,
          system: SYSTEM_PROMPT,
          messages: [...messages, userMsg].map(m => ({ role: m.role, content: m.content })),
        }),
      });
      const data = await res.json();
      const reply = data.content?.[0]?.text || 'I\'d love to help! Please WhatsApp us for immediate assistance.';
      setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
    } catch {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'I\'m having a moment! Please WhatsApp us directly for immediate help.',
      }]);
    } finally {
      setLoading(false);
    }
  };

  const needsEscalation = messages.length > 6;

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 left-6 z-40 w-14 h-14 rounded-full bg-[#4A235A] text-white shadow-lg hover:shadow-xl transition-all flex items-center justify-center hover:scale-105"
        aria-label="Open chat"
      >
        {open ? <X className="w-6 h-6" /> : <Bot className="w-6 h-6" />}
        {!open && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-gold rounded-full animate-pulse" />
        )}
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 left-6 z-40 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col" style={{ height: '480px' }}>
          {/* Header */}
          <div className="bg-[#4A235A] px-4 py-3 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gold/30 flex items-center justify-center">
              <Bot className="w-5 h-5 text-gold" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Doxora Concierge</p>
              <p className="text-white/60 text-xs">Typically replies in seconds</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] px-3 py-2 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-[#4A235A] text-white rounded-br-sm'
                      : 'bg-white text-charcoal shadow-sm rounded-bl-sm'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-white rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
                  <div className="flex gap-1">
                    {[0, 1, 2].map(i => (
                      <span key={i} className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: `${i * 0.1}s` }} />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Escalation Prompt */}
            {needsEscalation && (
              <div className="bg-green-50 rounded-xl p-3 border border-green-100">
                <p className="text-xs text-green-800 mb-2 font-medium">Want a personalised quote?</p>
                <a
                  href={getWhatsAppUrl('Hello Doxora, I\'d like to discuss gifting options.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-green-700 text-xs font-semibold hover:text-green-900"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  Chat on WhatsApp <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Quick Replies */}
          {messages.length <= 2 && (
            <div className="px-4 py-2 bg-white border-t border-gray-100">
              <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                {QUICK_REPLIES.map((q) => (
                  <button
                    key={q}
                    onClick={() => sendMessage(q)}
                    className="whitespace-nowrap text-xs px-3 py-1.5 rounded-full bg-purple-50 text-purple-700 hover:bg-purple-100 transition-colors border border-purple-100"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-3 bg-white border-t border-gray-100 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && sendMessage(input)}
              placeholder="Ask about gifting..."
              className="flex-1 text-sm border border-gray-200 rounded-full px-4 py-2 focus:outline-none focus:border-purple-400"
            />
            <button
              onClick={() => sendMessage(input)}
              disabled={loading || !input.trim()}
              className="w-9 h-9 rounded-full bg-[#4A235A] text-white flex items-center justify-center hover:bg-purple-800 transition-colors disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
