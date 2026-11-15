import React from 'react';
import { 
  Sparkles, 
  MessageCircle, 
  ArrowRight, 
  Gift, 
  Tag, 
  HelpCircle
} from 'lucide-react';
import { getOffersEnquiryLink, getWholesaleEnquiryLink } from '../utils/whatsapp';

export const LatestOffers: React.FC = () => {
  return (
    <section id="offers" className="py-20 bg-midnight-950 relative overflow-hidden border-t border-white/[0.06]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-electric-600/15 via-blue-600/10 to-cyan-500/15 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Banner Card */}
        <div className="relative rounded-3xl p-8 sm:p-12 md:p-14 bg-gradient-to-br from-midnight-900 via-midnight-850 to-midnight-950 border border-white/10 shadow-2xl shadow-black/80 overflow-hidden">
          
          {/* Subtle decorative grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            
            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-500/15 border border-electric-500/30 text-electric-400 text-xs font-semibold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Special Store Inquiries</span>
            </div>

            {/* Headline per specification */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              Explore the <span className="bg-gradient-to-r from-electric-400 via-cyan-300 to-white bg-clip-text text-transparent">Latest Deals</span>
            </h2>

            {/* Subheading per specification */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed">
              Looking for your next smartphone? Contact our team for current prices and available offers.
            </p>

            {/* Offer highlight pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-left">
              
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm">
                <div className="w-8 h-8 rounded-lg bg-electric-500/20 text-electric-400 flex items-center justify-center mb-3">
                  <Tag className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1">Direct Counter Pricing</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Real-time market rates for smartphones without fabricated markups.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center mb-3">
                  <Gift className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1">Accessory Combo Enquiries</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Ask our team for tempered glass and protective case bundles with phone purchases.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1">Wholesale Volume Tiers</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Competitive quotation structures for retailers and bulk electronics orders.
                </p>
              </div>

            </div>

            {/* CTAs */}
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={getOffersEnquiryLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 shadow-xl shadow-emerald-950/60 hover:shadow-emerald-600/30 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 fill-white/20" />
                <span>Enquire for Today's Offers on WhatsApp</span>
              </a>

              <a
                href={getWholesaleEnquiryLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-sm sm:text-base text-slate-300 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 transition-colors"
              >
                <span>Wholesale Quantity Pricing</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Transparent Note */}
            <div className="text-xs text-slate-500 pt-2 flex items-center justify-center gap-2">
              <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
              <span>Prices and offers are communicated transparently based on current daily stock.</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
