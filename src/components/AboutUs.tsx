import React from 'react';
import { 
  Building2, 
  Smartphone, 
  Users, 
  ArrowRight
} from 'lucide-react';
import { getFormattedPhone, buildWhatsAppLink } from '../utils/whatsapp';

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-midnight-950 relative border-t border-white/[0.06] overflow-hidden">
      {/* Background accents */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Brand Story & Authentic Copy */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-semibold uppercase tracking-wider text-slate-300">
              <Building2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>About Our Store</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Kayal Mobiles <br />
              <span className="bg-gradient-to-r from-electric-400 via-cyan-300 to-white bg-clip-text text-transparent">
                Wholesale & Retail
              </span>
            </h2>

            {/* Exact required copy from user specification */}
            <div className="p-5 rounded-2xl bg-midnight-900/80 border border-white/[0.08] shadow-lg">
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-medium">
                "Welcome to Kayal Mobiles Wholesale & Retail. Explore smartphones and mobile accessories, and connect with our team for product enquiries and current availability."
              </p>
            </div>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              We operate as a committed mobile phones and electronics hub in India, connecting individual customers with quality personal technology and supporting business retailers with bulk wholesale supplies.
            </p>

            {/* Core Operation Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-electric-500/10 text-electric-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Smartphone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Multi-Brand Portfolio</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Continuously updating options across iOS, Android, 5G handsets, and daily mobile accessories.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Direct Communication</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    No automated call barriers. Speak directly with store representatives on WhatsApp or phone.
                  </p>
                </div>
              </div>
            </div>

            {/* Action link */}
            <div className="pt-2 flex items-center gap-4">
              <a
                href={buildWhatsAppLink("Hello Kayal Mobiles! I would like to learn more about your store inventory.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 text-sm font-semibold text-white transition-colors"
              >
                <span>Connect With Counter Team</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Visual Brand Card */}
          <div className="lg:col-span-5">
            <div className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-midnight-900 to-midnight-950 border border-white/10 shadow-2xl shadow-black/80 space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-electric-600/20 text-electric-400 flex items-center justify-center font-black text-lg border border-electric-500/30">
                    K
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Kayal Mobiles</div>
                    <div className="text-[11px] text-electric-400 uppercase tracking-wider font-semibold">Wholesale & Retail</div>
                  </div>
                </div>
                <span className="text-[11px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full font-medium">
                  Verified Inquiries
                </span>
              </div>

              {/* Direct Store Facts */}
              <div className="space-y-3.5">
                <div className="flex items-center justify-between text-xs py-2 border-b border-white/[0.04]">
                  <span className="text-slate-400">Primary Channel:</span>
                  <span className="font-semibold text-white">Wholesale & Retail Distribution</span>
                </div>
                <div className="flex items-center justify-between text-xs py-2 border-b border-white/[0.04]">
                  <span className="text-slate-400">Direct Helpline:</span>
                  <a href="tel:+919787246433" className="font-bold text-electric-400 hover:underline">
                    {getFormattedPhone()}
                  </a>
                </div>
                <div className="flex items-center justify-between text-xs py-2 border-b border-white/[0.04]">
                  <span className="text-slate-400">Currency & Billing:</span>
                  <span className="font-semibold text-white">Indian Rupee (INR ₹)</span>
                </div>
                <div className="flex items-center justify-between text-xs py-2 border-b border-white/[0.04]">
                  <span className="text-slate-400">Product Scope:</span>
                  <span className="font-semibold text-white">Smartphones & Genuine Accessories</span>
                </div>
              </div>

              {/* Customer commitment quote box */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs text-slate-300">
                <p className="leading-relaxed">
                  We believe in authentic business relations where customers and vendors receive accurate product information and direct pricing without misleading promotions.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
