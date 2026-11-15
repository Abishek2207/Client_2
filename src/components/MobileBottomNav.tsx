import React from 'react';
import { 
  Home, 
  Smartphone, 
  Headphones, 
  Phone, 
  MessageCircle 
} from 'lucide-react';
import { buildWhatsAppLink, getFormattedPhone } from '../utils/whatsapp';

export const MobileBottomNav: React.FC = () => {
  const quickWhatsAppUrl = buildWhatsAppLink(
    "Hello Kayal Mobiles! I am browsing on my phone and would like to enquire about products."
  );

  return (
    <nav className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-midnight-950/95 backdrop-blur-2xl border-t border-white/10 px-2 py-2 safe-area-pb shadow-[0_-8px_30px_rgba(0,0,0,0.8)]">
      <div className="grid grid-cols-5 items-center gap-1">
        
        {/* Home */}
        <a 
          href="#hero" 
          className="flex flex-col items-center justify-center py-1 px-1 rounded-xl text-slate-400 hover:text-white active:scale-95 transition-all"
        >
          <Home className="w-5 h-5 text-slate-300" />
          <span className="text-[10px] font-medium mt-1">Home</span>
        </a>

        {/* Phones */}
        <a 
          href="#smartphones" 
          className="flex flex-col items-center justify-center py-1 px-1 rounded-xl text-slate-400 hover:text-white active:scale-95 transition-all"
        >
          <Smartphone className="w-5 h-5 text-electric-400" />
          <span className="text-[10px] font-medium mt-1">Phones</span>
        </a>

        {/* Center Prominent WhatsApp Button */}
        <div className="flex flex-col items-center justify-center -mt-5">
          <a
            href={quickWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-13 h-13 p-3.5 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-teal-400 text-white shadow-xl shadow-emerald-950/80 active:scale-90 transition-all flex items-center justify-center border-2 border-midnight-950"
            aria-label="Direct WhatsApp Enquiry"
          >
            <MessageCircle className="w-6 h-6 fill-white/20 text-white" />
          </a>
          <span className="text-[9px] font-bold text-emerald-400 mt-1 uppercase tracking-wider">Chat</span>
        </div>

        {/* Accessories */}
        <a 
          href="#accessories" 
          className="flex flex-col items-center justify-center py-1 px-1 rounded-xl text-slate-400 hover:text-white active:scale-95 transition-all"
        >
          <Headphones className="w-5 h-5 text-cyan-400" />
          <span className="text-[10px] font-medium mt-1">Accs</span>
        </a>

        {/* Direct Call */}
        <a 
          href="tel:+919787246433" 
          className="flex flex-col items-center justify-center py-1 px-1 rounded-xl text-slate-400 hover:text-white active:scale-95 transition-all"
        >
          <div className="relative">
            <Phone className="w-5 h-5 text-emerald-400" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          </div>
          <span className="text-[10px] font-medium mt-1">Call</span>
        </a>

      </div>
    </nav>
  );
};
