import { useState, useMemo } from 'react';
import { 
  Search, 
  MessageCircle, 
  Smartphone as PhoneIcon, 
  Cpu, 
  Camera, 
  HardDrive, 
  SlidersHorizontal, 
  Info, 
  ChevronRight
} from 'lucide-react';
import { Smartphone } from '../types';
import { getProductEnquiryLink } from '../utils/whatsapp';

interface SmartphoneCatalogueProps {
  products: Smartphone[];
  onSelectProduct: (product: Smartphone) => void;
}

type CategoryType = 'All Smartphones' | 'Android Phones' | 'Apple iPhones' | 'Budget Smartphones' | 'Premium Smartphones';

export const SmartphoneCatalogue: React.FC<SmartphoneCatalogueProps> = ({ 
  products, 
  onSelectProduct 
}) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('All Smartphones');
  const [selectedBrand, setSelectedBrand] = useState<string>('All Brands');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories: CategoryType[] = [
    'All Smartphones',
    'Android Phones',
    'Apple iPhones',
    'Budget Smartphones',
    'Premium Smartphones',
  ];

  const brands = useMemo(() => {
    const list = Array.from(new Set(products.map(p => p.brand)));
    return ['All Brands', ...list];
  }, [products]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Category match
      const matchesCategory = 
        selectedCategory === 'All Smartphones' || 
        product.category === selectedCategory;

      // Brand match
      const matchesBrand = 
        selectedBrand === 'All Brands' || 
        product.brand === selectedBrand;

      // Search match
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !q ||
        product.name.toLowerCase().includes(q) ||
        product.brand.toLowerCase().includes(q) ||
        product.specs.processor.toLowerCase().includes(q) ||
        product.specs.camera.toLowerCase().includes(q);

      return matchesCategory && matchesBrand && matchesSearch;
    });
  }, [products, selectedCategory, selectedBrand, searchQuery]);

  return (
    <section id="smartphones" className="py-20 bg-midnight-950 relative border-t border-white/[0.06]">
      {/* Subtle backdrop glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-electric-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-500/10 border border-electric-500/20 text-electric-400 text-xs font-semibold uppercase tracking-wider">
              <PhoneIcon className="w-3.5 h-3.5" />
              <span>Smartphone Collection</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Explore Our <span className="bg-gradient-to-r from-electric-400 to-cyan-300 bg-clip-text text-transparent">Smartphones</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
              From flagship Apple iPhones to reliable Android workhorses. Available for both retail purchase and wholesale store inquiries.
            </p>
          </div>

          {/* Editable demo notice badge */}
          <div className="p-3.5 rounded-2xl bg-midnight-900/90 border border-white/10 flex items-start gap-3 max-w-md shadow-lg">
            <Info className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
            <div className="text-xs text-slate-300 leading-relaxed">
              <span className="font-semibold text-white">Live Store Inventory Notice: </span>
              Items displayed below represent verified popular models. Daily stock availability & tailored wholesale quantities are confirmed directly with our counter team.
            </div>
          </div>
        </div>

        {/* Filter and Search Bar Controls */}
        <div className="bg-midnight-900/60 backdrop-blur-xl border border-white/[0.08] p-4 sm:p-5 rounded-2xl mb-8 space-y-4 shadow-xl">
          
          {/* Top row: Search input + Brand pills */}
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search phone model, brand, processor..."
                className="w-full pl-11 pr-4 py-3 sm:py-2.5 bg-midnight-950/90 border border-white/10 rounded-xl text-base sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-electric-500 focus:ring-1 focus:ring-electric-500 transition-colors"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white bg-white/10 px-2 py-1 rounded"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Brand Dropdown / Quick filter */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
              <span className="text-xs font-semibold text-slate-400 whitespace-nowrap flex items-center gap-1">
                <SlidersHorizontal className="w-3.5 h-3.5" /> Brand:
              </span>
              <div className="flex items-center gap-1.5 flex-nowrap">
                {brands.map((brand) => (
                  <button
                    key={brand}
                    onClick={() => setSelectedBrand(brand)}
                    className={`px-3.5 py-2 sm:py-1.5 rounded-xl sm:rounded-lg text-xs font-semibold whitespace-nowrap active:scale-95 transition-all ${
                      selectedBrand === brand
                        ? 'bg-electric-600 text-white shadow-md shadow-electric-600/30'
                        : 'bg-white/[0.05] text-slate-300 hover:bg-white/[0.08] hover:text-white border border-white/5'
                    }`}
                  >
                    {brand}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Bottom row: Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pt-2 border-t border-white/[0.06] scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap active:scale-95 transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-electric-600 to-blue-600 text-white shadow-lg shadow-electric-600/25'
                    : 'bg-white/[0.03] text-slate-300 hover:bg-white/[0.06] hover:text-white border border-white/[0.06]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-slate-400 mb-6 px-1">
          <span>
            Showing <strong className="text-white">{filteredProducts.length}</strong> smartphone models
            {selectedCategory !== 'All Smartphones' && ` in ${selectedCategory}`}
            {selectedBrand !== 'All Brands' && ` by ${selectedBrand}`}
          </span>
          <span className="text-slate-500">
            Click any model to view full specifications & send WhatsApp enquiry
          </span>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {filteredProducts.map((product) => {
              const whatsappUrl = getProductEnquiryLink(product.name);

              return (
                <div
                  key={product.id}
                  className="group relative flex flex-col bg-midnight-900/80 hover:bg-midnight-900 rounded-2xl border border-white/[0.08] hover:border-electric-500/50 shadow-xl shadow-black/40 hover:shadow-electric-600/10 transition-all duration-300 overflow-hidden"
                >
                  {/* Top Image Banner & Badges */}
                  <div className="relative aspect-[16/11] w-full overflow-hidden bg-gradient-to-b from-midnight-850 to-midnight-950 p-6 flex items-center justify-center">
                    
                    {/* Glow behind image on hover */}
                    <div className="absolute inset-0 bg-radial-gradient from-electric-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <img
                      src={product.image}
                      alt={product.name}
                      className="relative z-10 max-h-48 w-auto object-contain transform group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 z-20 flex flex-wrap gap-1.5">
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-midnight-950/80 backdrop-blur-md text-electric-400 border border-electric-500/30">
                        {product.brand}
                      </span>
                      {product.badge && (
                        <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-white/[0.08] backdrop-blur-md text-slate-200 border border-white/10">
                          {product.badge}
                        </span>
                      )}
                    </div>

                    {/* Category tag right */}
                    <div className="absolute top-3 right-3 z-20">
                      <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-black/60 text-slate-300 backdrop-blur-md border border-white/10">
                        {product.category}
                      </span>
                    </div>

                    {/* Demo inventory watermark badge */}
                    {product.isDemo && (
                      <div className="absolute bottom-2 left-3 z-20">
                        <span className="text-[10px] text-slate-400 bg-midnight-950/90 px-2 py-0.5 rounded border border-white/10">
                          Editable Demo Model
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="flex-1 p-5 flex flex-col justify-between space-y-4">
                    
                    <div>
                      {/* Product Name */}
                      <h3 
                        onClick={() => onSelectProduct(product)}
                        className="text-lg font-bold text-white group-hover:text-electric-400 transition-colors cursor-pointer leading-tight mb-2"
                      >
                        {product.name}
                      </h3>

                      {/* Key Specs Grid */}
                      <div className="grid grid-cols-2 gap-2 text-xs text-slate-300 py-2 border-y border-white/[0.06]">
                        <div className="flex items-center gap-1.5" title="Display">
                          <PhoneIcon className="w-3.5 h-3.5 text-electric-400 shrink-0" />
                          <span className="truncate">{product.specs.display.split(',')[0]}</span>
                        </div>
                        <div className="flex items-center gap-1.5" title="Processor">
                          <Cpu className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span className="truncate">{product.specs.processor}</span>
                        </div>
                        <div className="flex items-center gap-1.5" title="Memory & Storage">
                          <HardDrive className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                          <span className="truncate">{product.specs.ramStorage}</span>
                        </div>
                        <div className="flex items-center gap-1.5" title="Camera">
                          <Camera className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                          <span className="truncate">{product.specs.camera.split('+')[0]}</span>
                        </div>
                      </div>

                      {/* Price section - Requirement: If not verified, display "Contact for Latest Price" */}
                      <div className="mt-3.5 flex items-center justify-between">
                        <div>
                          <div className="text-[11px] text-slate-400 font-medium">Price Guarantee:</div>
                          <div className="text-sm font-bold text-emerald-400 flex items-center gap-1">
                            <span>{product.priceDisplay}</span>
                          </div>
                        </div>

                        <span className="text-[11px] text-slate-400 bg-white/[0.04] px-2 py-1 rounded border border-white/5">
                          Wholesale & Retail
                        </span>
                      </div>
                    </div>

                    {/* Actions: Quick View + WhatsApp Enquiry */}
                    <div className="pt-2 flex items-center gap-2">
                      <button
                        onClick={() => onSelectProduct(product)}
                        className="px-3.5 py-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] active:bg-white/20 text-slate-200 hover:text-white border border-white/10 text-xs font-semibold transition-all flex items-center justify-center gap-1 active:scale-95"
                        title="View Full Specifications"
                      >
                        <span>Specs</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>

                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-3 px-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 active:scale-[0.98] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-md shadow-emerald-950/40 hover:shadow-emerald-600/30 transition-all"
                      >
                        <MessageCircle className="w-4 h-4 fill-white/20" />
                        <span>Enquire on WhatsApp</span>
                      </a>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty Search State */
          <div className="bg-midnight-900/50 border border-white/10 rounded-2xl p-12 text-center max-w-md mx-auto">
            <PhoneIcon className="w-12 h-12 text-slate-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white mb-1">No Smartphones Found</h3>
            <p className="text-sm text-slate-400 mb-6">
              We couldn't find matches for "{searchQuery}". Try selecting another category or brand.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All Smartphones');
                setSelectedBrand('All Brands');
              }}
              className="px-5 py-2.5 rounded-xl bg-electric-600 text-white text-xs font-semibold hover:bg-electric-500 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
