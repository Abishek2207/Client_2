import React from 'react';
import { 
  ArrowRight, 
  MessageCircle, 
  ShieldCheck, 
  Layers, 
  Zap, 
  CheckCircle2, 
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { buildWhatsAppLink } from '../utils/whatsapp';

interface HeroProps {
  onExploreClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  const whatsappHeroUrl = buildWhatsAppLink(
    "Hello Kayal Mobiles! I am exploring your store and would like to ask about smartphone availability and wholesale/retail rates."
  );

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-8 pb-16 lg:py-24">
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Radial top center electric spotlight */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] sm:w-[900px] h-[500px] bg-gradient-to-b from-electric-600/20 via-cyan-500/10 to-transparent blur-[120px] -z-10" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293d0d_1px,transparent_1px),linear-gradient(to_bottom,#1f293d0d_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />
        
        {/* Subtle side ambient glow */}
        <div className="absolute -left-48 top-1/3 w-96 h-96 bg-blue-700/10 rounded-full blur-[100px] -z-10" />
        <div className="absolute -right-48 bottom-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] -z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Brand, Headline, Supporting Copy, Action CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 sm:space-y-8">
            
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs sm:text-sm font-medium text-slate-200 backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]"></span>
              <span className="text-white font-semibold">Kayal Mobiles</span>
              <span className="text-slate-500">|</span>
              <span className="text-electric-400 font-semibold tracking-wide uppercase text-[11px] sm:text-xs">Wholesale & Retail Destination</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Your Next Smartphone.{' '}
              <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-electric-400 via-cyan-300 to-white bg-clip-text text-transparent">
                Your Next Experience.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed">
              Explore smartphones, accessories and exciting deals at <span className="text-white font-medium">Kayal Mobiles Wholesale & Retail</span>. Connecting retail buyers and wholesale partners with genuine mobile technology and responsive counter assistance.
            </p>

            {/* Value Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-xl text-left pt-1">
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <Layers className="w-4 h-4 text-electric-400 shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-200">Wholesale & Retail</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <Zap className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-200">Curated Brands</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06] col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-200">Direct Store Enquiries</span>
              </div>
            </div>

            {/* CTAs: Primary & Secondary */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-2">
              <a
                href="#smartphones"
                onClick={onExploreClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-electric-600 via-blue-600 to-cyan-500 hover:from-electric-500 hover:to-cyan-400 shadow-xl shadow-electric-600/30 hover:shadow-electric-500/50 hover:-translate-y-0.5 transition-all duration-300 active:translate-y-0 group"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={whatsappHeroUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-semibold text-sm sm:text-base text-slate-200 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-emerald-500/40 shadow-lg shadow-black/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 text-emerald-400 fill-emerald-500/20" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Quick Contact & Verification reassurance */}
            <div className="flex items-center gap-3 pt-2 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <PhoneCall className="w-3.5 h-3.5 text-electric-400" />
                <span>Call/WhatsApp: <strong className="text-slate-200">+91 97872 46433</strong></span>
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-400">Instant Enquiry Responses</span>
            </div>

          </div>

          {/* Right Column: Premium Visual Composition featuring modern smartphones & floating cards */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Center phone visual glass container */}
            <div className="relative w-full max-w-md mx-auto aspect-[4/5] rounded-3xl p-1 bg-gradient-to-b from-white/20 via-white/5 to-white/0 shadow-2xl shadow-black/80">
              <div className="w-full h-full rounded-[22px] bg-gradient-to-b from-midnight-900 via-midnight-950 to-black overflow-hidden relative border border-white/10 p-5 flex flex-col justify-between">
                
                {/* Visual Header */}
                <div className="flex items-center justify-between z-10">
                  <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span className="text-[11px] font-semibold tracking-wider text-slate-200 uppercase">Live Flagship Showcase</span>
                  </div>
                  <span className="text-[11px] text-cyan-400 font-mono font-medium">5G Series</span>
                </div>

                {/* Hero Showcase Image */}
                <div className="relative my-auto flex items-center justify-center py-4">
                  {/* Glowing Backing Disc */}
                  <div className="absolute w-56 h-56 rounded-full bg-gradient-to-tr from-electric-600/30 to-cyan-500/20 blur-2xl" />
                  
                  <img 
                    src="https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=700&q=80" 
                    alt="Premium Flagship Smartphone" 
                    className="relative z-10 w-64 h-64 object-cover rounded-2xl shadow-2xl border border-white/10 transform hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Bottom Spec Summary on Phone card */}
                <div className="z-10 bg-midnight-900/80 backdrop-blur-md p-3.5 rounded-xl border border-white/10">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-white">Apple & Android Flagships</span>
                      <span className="text-[10px] bg-electric-500/20 text-electric-300 font-semibold px-1.5 py-0.2 rounded border border-electric-500/30">
                        In-Store
                      </span>
                    </div>
                    <span className="text-[11px] font-medium text-emerald-400">Wholesale & Retail</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-snug">
                    Genuine models, fast processors & camera flagships. Enquire for instant counter availability.
                  </p>
                </div>

              </div>

              {/* Floating Glass Pill 1: Top Right */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-midnight-900/90 backdrop-blur-xl border border-white/15 px-3.5 py-2.5 rounded-2xl shadow-xl shadow-black/60 hidden sm:flex items-center gap-3 animate-float-slow">
                <div className="w-8 h-8 rounded-xl bg-electric-500/20 border border-electric-500/40 flex items-center justify-center text-electric-400">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 font-medium">Accessories Hub</div>
                  <div className="text-xs font-bold text-white">Cases, GaN & Sound</div>
                </div>
              </div>

              {/* Floating Glass Pill 2: Bottom Left */}
              <div className="absolute -bottom-4 -left-4 sm:-left-6 bg-midnight-900/90 backdrop-blur-xl border border-white/15 px-3.5 py-2.5 rounded-2xl shadow-xl shadow-black/60 flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 font-medium">Direct Verification</div>
                  <div className="text-xs font-bold text-emerald-400">Instant WhatsApp Quote</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
