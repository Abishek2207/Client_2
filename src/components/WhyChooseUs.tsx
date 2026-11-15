import React from 'react';
import { 
  Layers, 
  Smartphone, 
  Headphones, 
  UserCheck, 
  MessageSquare, 
  ShieldCheck
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      icon: Layers,
      title: 'Wholesale & Retail',
      description: 'Serving both individual retail buyers looking for personal smartphones and business partners requiring commercial wholesale stock.',
      badge: 'Dual Business Model'
    },
    {
      icon: Smartphone,
      title: 'Diverse Smartphone Selection',
      description: 'Access to leading global brands including Apple, Samsung, OnePlus, Vivo, Oppo, Realme, and Xiaomi across all budget and flagship tiers.',
      badge: 'Curated Catalog'
    },
    {
      icon: Headphones,
      title: 'Complete Mobile Accessories',
      description: 'Comprehensive stock of fast GaN chargers, durable covers, tempered protectors, earphones, and power banks under one roof.',
      badge: 'All Essentials'
    },
    {
      icon: UserCheck,
      title: 'Dedicated Customer Assistance',
      description: 'Straightforward advice and technical guidance from our store team to help you choose the right phone model for your exact requirements.',
      badge: 'Friendly Support'
    },
    {
      icon: MessageSquare,
      title: 'Direct Store Enquiries',
      description: 'Instant communication via WhatsApp or direct phone (+91 97872 46433). Speak directly with our counter staff without automated delays.',
      badge: 'Fast Response'
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-midnight-900/40 relative border-t border-white/[0.06]">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-electric-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-semibold uppercase tracking-wider text-slate-300">
            <ShieldCheck className="w-3.5 h-3.5 text-electric-400" />
            <span>Store Standards</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Why Choose <span className="bg-gradient-to-r from-electric-400 to-cyan-300 bg-clip-text text-transparent">Kayal Mobiles?</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Transparent communication, diverse smartphone selections, and genuine store service tailored for retail and wholesale customers.
          </p>
        </div>

        {/* 5 Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            const isLast = idx === points.length - 1;

            return (
              <div
                key={pt.title}
                className={`p-6 sm:p-7 rounded-2xl bg-midnight-950/80 border border-white/[0.08] hover:border-electric-500/40 transition-all duration-300 shadow-xl shadow-black/40 hover:-translate-y-1 flex flex-col justify-between ${
                  isLast ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-electric-600/10 border border-electric-500/20 text-electric-400 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-400 bg-white/[0.04] px-2.5 py-1 rounded-full border border-white/5">
                      {pt.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {pt.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    {pt.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.04] flex items-center gap-2 text-xs text-electric-400 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-electric-400" />
                  <span>Verified Service Core</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
