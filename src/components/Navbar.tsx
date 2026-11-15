import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageCircle, 
  Menu, 
  X, 
  Smartphone as PhoneIcon, 
  Headphones, 
  Sparkles, 
  ArrowUpRight 
} from 'lucide-react';
import { getFormattedPhone, buildWhatsAppLink } from '../utils/whatsapp';

interface NavbarProps {
  onOpenStoreModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenStoreModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Smartphones', href: '#smartphones', icon: PhoneIcon },
    { name: 'Accessories', href: '#accessories', icon: Headphones },
    { name: 'Latest Offers', href: '#offers', icon: Sparkles },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top micro announcement bar */}
      <div className="bg-midnight-950/90 border-b border-white/[0.06] text-xs text-slate-300 py-1.5 px-4 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-medium text-slate-200">Wholesale & Retail Enquiries Open</span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="hidden sm:inline text-slate-400">Direct Counter Support & Same-Day Dispatch Consultation</span>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="tel:+919787246433" 
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-electric-400" />
              <span className="font-semibold tracking-wide">{getFormattedPhone()}</span>
            </a>
            {onOpenStoreModal && (
              <button 
                onClick={onOpenStoreModal}
                className="hidden md:inline-flex text-[11px] font-medium bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 px-2.5 py-0.5 rounded-full border border-white/10 transition-colors"
              >
                Owner Demo Controls
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Sticky Glass Navigation Bar */}
      <header 
        className={`sticky top-[31px] z-40 w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-midnight-900/90 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl shadow-black/50 py-3' 
            : 'bg-midnight-950/70 backdrop-blur-md border-b border-white/[0.04] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Brand Logo & Tagline */}
            <a href="#hero" className="flex items-center gap-3 group focus:outline-none">
              <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-electric-600 via-blue-600 to-cyan-500 p-[1px] shadow-lg shadow-electric-600/20 group-hover:shadow-electric-500/40 transition-shadow">
                <div className="w-full h-full bg-midnight-900 rounded-[11px] flex items-center justify-center">
                  <span className="text-xl font-black bg-gradient-to-tr from-white via-slate-100 to-cyan-400 bg-clip-text text-transparent">
                    K
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-lg sm:text-xl font-extrabold tracking-tight text-white group-hover:text-electric-400 transition-colors">
                    KAYAL MOBILES
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] sm:text-[11px] font-bold tracking-widest text-electric-400 uppercase bg-electric-500/10 px-1.5 py-0.5 rounded border border-electric-500/20">
                    Wholesale & Retail
                  </span>
                </div>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] p-1.5 rounded-full border border-white/[0.06]">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.07] rounded-full transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Action: WhatsApp CTA button */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={buildWhatsAppLink("Hello Kayal Mobiles! I am browsing your website and would like to enquire about smartphones and accessories.")}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-full font-semibold text-sm text-white bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 transition-all duration-300 shadow-lg shadow-emerald-900/30 hover:shadow-emerald-600/40 hover:-translate-y-0.5 active:translate-y-0"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-200 animate-ping" />
                <MessageCircle className="w-4 h-4 text-white fill-white/20" />
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href={buildWhatsAppLink("Hello Kayal Mobiles! I would like to make an enquiry.")}
                target="_blank"
                rel="noopener noreferrer"
                className="sm:hidden p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 fill-emerald-500/20" />
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-slate-200 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-midnight-950/98 backdrop-blur-2xl border-b border-white/10 px-4 pt-4 pb-6 transition-all duration-300 animate-in fade-in slide-in-from-top-4">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium text-slate-200 hover:text-white hover:bg-white/[0.08] transition-colors border border-transparent hover:border-white/5"
                  >
                    {Icon && <Icon className="w-5 h-5 text-electric-400" />}
                    <span>{link.name}</span>
                  </a>
                );
              })}

              <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
                <a
                  href={buildWhatsAppLink("Hello Kayal Mobiles! I would like to enquire about product prices and availability.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2.5 w-full py-3.5 px-4 rounded-xl font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-500 shadow-lg shadow-emerald-950/50"
                >
                  <MessageCircle className="w-5 h-5 fill-white/20" />
                  <span>Enquire on WhatsApp</span>
                </a>

                <a
                  href="tel:+919787246433"
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl font-medium text-slate-200 bg-white/[0.05] border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <Phone className="w-4 h-4 text-electric-400" />
                  <span>Call +91 97872 46433</span>
                </a>

                {onOpenStoreModal && (
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onOpenStoreModal();
                    }}
                    className="text-xs text-center text-slate-400 hover:text-slate-200 py-1"
                  >
                    Manage / Edit Demo Inventory
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
