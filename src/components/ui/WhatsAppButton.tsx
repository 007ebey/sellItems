"use client";

import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

export function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-gold-pulse">
        <MessageCircle size={28} className="text-white fill-white" />
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      </div>
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-3 hidden group-hover:block">
        <div className="bg-charcoal text-white text-xs font-sans px-3 py-2 rounded whitespace-nowrap shadow-lg">
          Chat with us on WhatsApp
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-charcoal" />
        </div>
      </div>
    </a>
  );
}
