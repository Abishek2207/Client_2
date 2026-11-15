import React, { useState } from 'react';
import { MessageCircle, X, Sparkles, Package } from 'lucide-react';
import { 
  buildWhatsAppLink, 
  getFormattedPhone, 
  getOffersEnquiryLink, 
  getWholesaleEnquiryLink 
} from '../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const mainChatUrl = buildWhatsAppLink(
    "Hello Kayal Mobiles! I am browsing your website and would like to ask about smartphone availability and current pricing."
  );

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end">
      
      {/* Popover Menu */}
      {isOpen && (
        <div className="mb-3 w-[calc(100vw-2rem)] max-w-sm sm:w-80 rounded-3xl bg-midnight-950/98 backdrop-blur-2xl border border-white/20 p-5 shadow-2xl shadow-black/90 animate-in fade-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <MessageCircle className="w-4 h-4 fill-emerald-500/20" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">Kayal Mobiles Support</h4>
                <div className="flex items-center gap-1.5 text-[10px] text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Wholesale & Retail Counter</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-300 py-3 leading-relaxed">
            Need current smartphone prices, stock availability or wholesale deals? Choose a topic to chat directly on WhatsApp:
          </p>

          {/* Quick Action Links */}
          <div className="space-y-2">
            <a
              href={mainChatUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.04] hover:bg-emerald-500/15 border border-white/5 hover:border-emerald-500/30 text-xs text-slate-200 hover:text-white transition-all group"
            >
              <span className="font-medium">Direct Chat / Price Check</span>
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400 group-hover:scale-110 transition-transform" />
            </a>

            <a
              href={getWholesaleEnquiryLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.04] hover:bg-electric-500/15 border border-white/5 hover:border-electric-500/30 text-xs text-slate-200 hover:text-white transition-all group"
            >
              <span className="font-medium">Wholesale & Bulk Orders</span>
              <Package className="w-3.5 h-3.5 text-electric-400 group-hover:scale-110 transition-transform" />
            </a>

            <a
              href={getOffersEnquiryLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.04] hover:bg-cyan-500/15 border border-white/5 hover:border-cyan-500/30 text-xs text-slate-200 hover:text-white transition-all group"
            >
              <span className="font-medium">Ask for Today's Offers</span>
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform" />
            </a>
          </div>

          <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
            <span>Direct Call:</span>
            <a href="tel:+919787246433" className="font-semibold text-white hover:text-emerald-400">
              {getFormattedPhone()}
            </a>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <div className="flex items-center gap-2">
        {!isOpen && (
          <span className="hidden sm:inline-block px-3 py-1.5 rounded-full bg-midnight-900/90 text-xs font-semibold text-slate-200 border border-white/10 shadow-lg shadow-black/50 backdrop-blur-md animate-in fade-in">
            Enquire on WhatsApp
          </span>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative group p-4 rounded-full bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white shadow-xl shadow-emerald-950/60 hover:shadow-emerald-600/40 transition-all duration-300 transform hover:scale-110 active:scale-95 focus:outline-none"
          aria-label="Open WhatsApp Quick Actions"
        >
          {/* Subtle pulse ring */}
          <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-30 group-hover:opacity-60 blur-sm animate-pulse -z-10" />

          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <MessageCircle className="w-6 h-6 text-white fill-white/20" />
          )}
        </button>
      </div>

    </div>
  );
};
