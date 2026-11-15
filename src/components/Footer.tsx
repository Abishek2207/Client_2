import React from 'react';
import { 
  Phone, 
  MessageCircle, 
  ArrowUp, 
  ExternalLink
} from 'lucide-react';
import { buildWhatsAppLink, getWholesaleEnquiryLink } from '../utils/whatsapp';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-midnight-950 border-t border-white/10 relative overflow-hidden text-slate-400 text-xs">
      
      {/* Subtle top ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-electric-600/5 blur-[100px] pointer-events-none" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-electric-600 to-cyan-500 p-[1px] shadow-lg shadow-electric-600/20">
                <div className="w-full h-full bg-midnight-900 rounded-[11px] flex items-center justify-center">
                  <span className="text-xl font-black bg-gradient-to-tr from-white to-cyan-300 bg-clip-text text-transparent">
                    K
                  </span>
                </div>
              </div>
              <div>
                <span className="text-base font-extrabold tracking-tight text-white block">
                  KAYAL MOBILES
                </span>
                <span className="text-[10px] font-bold tracking-widest text-electric-400 uppercase">
                  Wholesale & Retail
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Your trusted Indian technology destination for smartphones and genuine mobile accessories. Committed to transparent pricing and direct counter assistance.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={buildWhatsAppLink("Hello Kayal Mobiles! I have a question about your products.")}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-white/[0.04] hover:bg-emerald-500/20 border border-white/10 text-emerald-400 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-500/20" />
              </a>
              <a
                href="tel:+919787246433"
                className="p-2 rounded-xl bg-white/[0.04] hover:bg-electric-500/20 border border-white/10 text-electric-400 transition-colors"
                aria-label="Call"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Smartphones Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Smartphones
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#smartphones" className="hover:text-white transition-colors">Apple iPhones</a>
              </li>
              <li>
                <a href="#smartphones" className="hover:text-white transition-colors">Samsung Galaxy Series</a>
              </li>
              <li>
                <a href="#smartphones" className="hover:text-white transition-colors">OnePlus 5G Handsets</a>
              </li>
              <li>
                <a href="#smartphones" className="hover:text-white transition-colors">Vivo & Oppo Flagships</a>
              </li>
              <li>
                <a href="#smartphones" className="hover:text-white transition-colors">Realme & Xiaomi</a>
              </li>
              <li>
                <a href="#smartphones" className="hover:text-white transition-colors">Budget 5G Mobiles</a>
              </li>
            </ul>
          </div>

          {/* Accessories Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Accessories
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#accessories" className="hover:text-white transition-colors">Mobile Covers & Cases</a>
              </li>
              <li>
                <a href="#accessories" className="hover:text-white transition-colors">Chargers & Adapters (GaN)</a>
              </li>
              <li>
                <a href="#accessories" className="hover:text-white transition-colors">Earphones & Headphones</a>
              </li>
              <li>
                <a href="#accessories" className="hover:text-white transition-colors">Screen Protectors & Privacy</a>
              </li>
              <li>
                <a href="#accessories" className="hover:text-white transition-colors">High Capacity Power Banks</a>
              </li>
              <li>
                <a href={getWholesaleEnquiryLink()} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1">
                  <span>Wholesale Accessory Lots</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Enquiries & Store Info */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Store Enquiries
            </h4>
            <div className="space-y-2 text-slate-400">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-electric-400" />
                <a href="tel:+919787246433" className="text-white hover:text-electric-400 font-semibold">
                  +91 97872 46433
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <a 
                  href={buildWhatsAppLink("Hello Kayal Mobiles! Please share current smartphone offers.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  WhatsApp Fast Support
                </a>
              </div>
              <div className="pt-2 text-[11px] text-slate-500">
                <p>Wholesale orders & retail inquiries welcomed daily across India.</p>
              </div>
            </div>
          </div>

        </div>

        {/* Disclaimer / Stock Policy Note */}
        <div className="mt-12 pt-8 border-t border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-slate-500 text-center md:text-left max-w-2xl leading-relaxed">
            * Note: Products displayed on this site represent verified popular models. Daily stock availability, dynamic brand offers and custom wholesale bulk rates are finalized at the store counter or via direct WhatsApp confirmation.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-colors shrink-0"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-[11px] text-slate-600">
          © {new Date().getFullYear()} Kayal Mobiles Wholesale & Retail. All Rights Reserved. Crafted for premium mobile commerce.
        </div>

      </div>
    </footer>
  );
};
