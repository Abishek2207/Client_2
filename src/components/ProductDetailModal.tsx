import React from 'react';
import { 
  X, 
  MessageCircle, 
  Cpu, 
  Camera, 
  Battery, 
  HardDrive, 
  Smartphone as PhoneIcon, 
  CheckCircle2, 
  Package
} from 'lucide-react';
import { Smartphone } from '../types';
import { getProductEnquiryLink } from '../utils/whatsapp';

interface ProductDetailModalProps {
  product: Smartphone | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ 
  product, 
  onClose 
}) => {
  if (!product) return null;

  const retailWhatsApp = getProductEnquiryLink(product.name, 'Retail');
  const wholesaleWhatsApp = getProductEnquiryLink(product.name, 'Wholesale');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in">
      
      {/* Modal Dialog */}
      <div 
        className="relative w-full max-w-3xl rounded-3xl bg-midnight-950 border border-white/15 shadow-2xl shadow-black overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-midnight-900/80 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
          
          {/* Left Column: Image & Brand Badge */}
          <div className="md:col-span-5 bg-gradient-to-b from-midnight-900 to-midnight-950 p-8 flex flex-col items-center justify-center relative border-b md:border-b-0 md:border-r border-white/10">
            
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="px-2.5 py-1 rounded-lg text-xs font-bold text-electric-400 bg-electric-500/10 border border-electric-500/30">
                {product.brand}
              </span>
              <span className="px-2.5 py-1 rounded-lg text-xs font-medium text-slate-300 bg-white/5 border border-white/10">
                {product.category}
              </span>
            </div>

            <div className="relative w-full aspect-square flex items-center justify-center py-6">
              <div className="absolute w-44 h-44 rounded-full bg-electric-600/10 blur-2xl" />
              <img
                src={product.image}
                alt={product.name}
                className="relative z-10 max-h-64 max-w-full object-contain"
              />
            </div>

            <div className="w-full text-center pt-2">
              <span className="text-[11px] text-slate-400 bg-white/[0.04] px-3 py-1 rounded-full border border-white/5">
                Editable Demo Model Specification
              </span>
            </div>
          </div>

          {/* Right Column: Title, Specs Breakdown, Price and Dual Enquiry CTAs */}
          <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            
            <div>
              {/* Product Title */}
              <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                {product.name}
              </h2>

              {/* Price Banner */}
              <div className="mt-3 p-3 rounded-xl bg-midnight-900 border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-slate-400">Price Structure:</div>
                  <div className="text-base font-bold text-emerald-400">
                    {product.priceDisplay}
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[11px] text-slate-300 bg-white/5 px-2 py-1 rounded border border-white/5">
                    Retail & Wholesale
                  </span>
                </div>
              </div>

              {/* Technical Specifications */}
              <div className="mt-5 space-y-3">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Technical Specifications
                </h4>

                <div className="space-y-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.05] flex items-start gap-2.5">
                    <PhoneIcon className="w-4 h-4 text-electric-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-400 block text-[10px]">Display</span>
                      <span className="text-white font-medium">{product.specs.display}</span>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.05] flex items-start gap-2.5">
                    <Cpu className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-400 block text-[10px]">Processor</span>
                      <span className="text-white font-medium">{product.specs.processor}</span>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.05] flex items-start gap-2.5">
                    <HardDrive className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-400 block text-[10px]">RAM & Internal Storage</span>
                      <span className="text-white font-medium">{product.specs.ramStorage}</span>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.05] flex items-start gap-2.5">
                    <Camera className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-400 block text-[10px]">Camera System</span>
                      <span className="text-white font-medium">{product.specs.camera}</span>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.05] flex items-start gap-2.5">
                    <Battery className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-400 block text-[10px]">Battery & Charging</span>
                      <span className="text-white font-medium">{product.specs.battery}</span>
                    </div>
                  </div>
                </div>

                {/* Key features bullet points */}
                <div className="pt-2">
                  <div className="text-[11px] font-semibold text-slate-400 mb-1.5">Highlights:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {product.features.map((feat, idx) => (
                      <span key={idx} className="text-[11px] text-slate-300 bg-white/[0.04] px-2.5 py-1 rounded-md border border-white/5 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                        <span>{feat}</span>
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 border-t border-white/10 space-y-2.5">
              <a
                href={retailWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/60 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>Enquire Price & Availability on WhatsApp</span>
              </a>

              <a
                href={wholesaleWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white border border-white/10 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <Package className="w-3.5 h-3.5 text-electric-400" />
                <span>Request Wholesale Bulk Quotation</span>
              </a>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
