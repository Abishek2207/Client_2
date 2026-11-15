import React, { useState, useMemo } from 'react';
import { 
  Headphones, 
  Search, 
  MessageCircle, 
  Check, 
  Package, 
  Info
} from 'lucide-react';
import { Accessory } from '../types';
import { getAccessoryEnquiryLink, getWholesaleEnquiryLink } from '../utils/whatsapp';

interface AccessoriesCatalogueProps {
  accessories: Accessory[];
}

type AccessoryCategory = 
  | 'All Accessories'
  | 'Mobile Covers'
  | 'Chargers & Adapters'
  | 'Earphones & Headphones'
  | 'Screen Protectors'
  | 'Power Banks'
  | 'Other Accessories';

export const AccessoriesCatalogue: React.FC<AccessoriesCatalogueProps> = ({ accessories }) => {
  const [selectedCategory, setSelectedCategory] = useState<AccessoryCategory>('All Accessories');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: AccessoryCategory[] = [
    'All Accessories',
    'Mobile Covers',
    'Chargers & Adapters',
    'Earphones & Headphones',
    'Screen Protectors',
    'Power Banks',
    'Other Accessories'
  ];

  const filteredAccessories = useMemo(() => {
    return accessories.filter(item => {
      const matchesCat = 
        selectedCategory === 'All Accessories' || 
        item.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.brandCompatibility.toLowerCase().includes(q) ||
        item.keyFeatures.some(f => f.toLowerCase().includes(q));

      return matchesCat && matchesSearch;
    });
  }, [accessories, selectedCategory, searchQuery]);

  return (
    <section id="accessories" className="py-20 bg-midnight-900/60 relative border-t border-white/[0.06]">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-electric-600/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
              <Headphones className="w-3.5 h-3.5" />
              <span>Genuine Mobile Essentials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Mobile <span className="bg-gradient-to-r from-cyan-400 to-electric-300 bg-clip-text text-transparent">Accessories</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
              High-quality protective cases, fast GaN chargers, audio gear, tempered glass, and power solutions available for single purchase and wholesale bulk orders.
            </p>
          </div>

          {/* Wholesale Box Quick Action */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <a
              href={getWholesaleEnquiryLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-xs font-semibold text-slate-200 hover:text-white transition-colors"
            >
              <Package className="w-4 h-4 text-electric-400" />
              <span>Request Wholesale Bundle Quote</span>
            </a>
          </div>
        </div>

        {/* Category Pill Filters & Search */}
        <div className="bg-midnight-950/70 border border-white/[0.08] p-4 rounded-2xl mb-8 space-y-4 shadow-xl">
          <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
            
            {/* Category tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-2.5 sm:py-2 rounded-xl text-xs font-semibold whitespace-nowrap active:scale-95 transition-all duration-200 ${
                    selectedCategory === cat
                      ? 'bg-gradient-to-r from-cyan-500 to-electric-600 text-white shadow-md shadow-cyan-500/20'
                      : 'bg-white/[0.03] text-slate-300 hover:bg-white/[0.07] hover:text-white border border-white/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Quick Search */}
            <div className="relative min-w-[240px]">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search accessories..."
                className="w-full pl-9 pr-3 py-2.5 sm:py-1.5 bg-midnight-900 border border-white/10 rounded-xl text-xs sm:text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>

          </div>
        </div>

        {/* Accessories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAccessories.map((item) => {
            const whatsappUrl = getAccessoryEnquiryLink(item.name, item.category);

            return (
              <div
                key={item.id}
                className="group flex flex-col bg-midnight-950/80 hover:bg-midnight-950 rounded-2xl border border-white/[0.08] hover:border-cyan-500/40 shadow-xl shadow-black/50 hover:shadow-cyan-500/10 transition-all duration-300 overflow-hidden"
              >
                {/* Image & Badge Container */}
                <div className="relative aspect-square w-full bg-midnight-900/90 p-5 flex items-center justify-center overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="relative z-10 max-h-44 w-auto object-contain transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Badge */}
                  <div className="absolute top-3 left-3 z-20">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-midnight-950/90 text-cyan-400 border border-cyan-500/30">
                      {item.category}
                    </span>
                  </div>

                  {item.badge && (
                    <div className="absolute top-3 right-3 z-20">
                      <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-white/10 text-slate-200 border border-white/10">
                        {item.badge}
                      </span>
                    </div>
                  )}

                  {/* Demo label */}
                  {item.isDemo && (
                    <div className="absolute bottom-2 left-3 z-20">
                      <span className="text-[10px] text-slate-500 bg-black/60 px-1.5 py-0.5 rounded">
                        Demo Showcase
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors line-clamp-2 leading-snug">
                      {item.name}
                    </h3>
                    
                    <p className="text-[11px] text-slate-400 mt-1 flex items-center gap-1">
                      <span className="text-slate-500 font-medium">Fits:</span> {item.brandCompatibility}
                    </p>

                    {/* Features list */}
                    <ul className="mt-2.5 space-y-1">
                      {item.keyFeatures.slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-300">
                          <Check className="w-3 h-3 text-cyan-400 shrink-0 mt-0.5" />
                          <span className="truncate">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price & CTA */}
                  <div className="pt-2 border-t border-white/[0.06] space-y-2.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400">Price:</span>
                      <span className="font-bold text-emerald-400">{item.priceDisplay}</span>
                    </div>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-semibold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-emerald-950/50 hover:shadow-emerald-600/30 transition-all"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-white/20" />
                      <span>Enquire on WhatsApp</span>
                    </a>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Notice on confirmed stock */}
        <div className="mt-10 p-4 rounded-xl bg-midnight-950/60 border border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Need tempered glass fitting or specific model cases? Our store stocks 100+ variants for all major brands.</span>
          </div>
          <a
            href={getWholesaleEnquiryLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 font-semibold underline underline-offset-4 whitespace-nowrap"
          >
            Ask Counter Team for Case Availability &rarr;
          </a>
        </div>

      </div>
    </section>
  );
};
