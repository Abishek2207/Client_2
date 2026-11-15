import React, { useState } from 'react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  ExternalLink
} from 'lucide-react';
import { ContactFormData } from '../types';
import { getFormattedPhone, getContactFormEnquiryLink, buildWhatsAppLink } from '../utils/whatsapp';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    enquiryType: 'Retail',
    productInterest: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Generate WhatsApp link and trigger or show success
    const waUrl = getContactFormEnquiryLink(formData);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setIsSubmitted(true);
  };

  const handleDirectWhatsApp = () => {
    const waUrl = getContactFormEnquiryLink(formData);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-20 bg-midnight-950 relative border-t border-white/[0.06]">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-electric-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-500/10 border border-electric-500/20 text-xs font-semibold uppercase tracking-wider text-electric-400">
            <Phone className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Contact <span className="bg-gradient-to-r from-electric-400 via-cyan-300 to-white bg-clip-text text-transparent">Kayal Mobiles</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Have a question about smartphone availability, accessory stock, or wholesale distribution? Reach out directly to our counter team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info, WhatsApp Card, Map & Verification Notices */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Phone & WhatsApp Highlight Card */}
            <div className="p-6 rounded-2xl bg-midnight-900/90 border border-white/10 shadow-xl space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-electric-600/20 text-electric-400 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Direct Call & Enquiries</div>
                  <a 
                    href="tel:+919787246433" 
                    className="text-xl font-bold text-white hover:text-electric-400 transition-colors"
                  >
                    {getFormattedPhone()}
                  </a>
                </div>
              </div>

              {/* Instant WhatsApp Action */}
              <div className="pt-2">
                <a
                  href={buildWhatsAppLink("Hello Kayal Mobiles! I would like to get in touch regarding a product enquiry.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-semibold text-sm shadow-lg shadow-emerald-950/50 transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white/20" />
                  <span>Start Live WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Verified Address & Map Placeholders (per prompt requirement) */}
            <div className="p-6 rounded-2xl bg-midnight-900/60 border border-white/[0.08] space-y-5">
              
              {/* Address item */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-white/[0.04] text-slate-300 flex items-center justify-center shrink-0 mt-0.5 border border-white/5">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-semibold text-white">Store Address & Directions</div>
                  <div className="text-xs text-slate-400 leading-relaxed">
                    <span className="text-slate-300 font-medium">Kayal Mobiles Wholesale & Retail</span>
                    <p className="mt-1 text-slate-400">
                      Exact physical shop address will be displayed once confirmed with store management. For immediate physical visit directions, please message us on WhatsApp.
                    </p>
                  </div>
                  <a
                    href={buildWhatsAppLink("Hello Kayal Mobiles! Could you please share the exact shop address and Google Map location for visiting your store?")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-medium mt-1"
                  >
                    <span>Request Store Location on WhatsApp</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Business Hours item */}
              <div className="flex items-start gap-3 pt-3 border-t border-white/[0.06]">
                <div className="w-9 h-9 rounded-lg bg-white/[0.04] text-slate-300 flex items-center justify-center shrink-0 mt-0.5 border border-white/5">
                  <Clock className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-semibold text-white">Business Hours & Visiting Times</div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Official counter timings will be displayed upon owner verification. WhatsApp and phone enquiries are active daily for price quotes and reservations.
                  </p>
                </div>
              </div>

            </div>

            {/* Map Preview Box (Styled Placeholder) */}
            <div className="rounded-2xl overflow-hidden border border-white/[0.08] bg-midnight-900/80 p-5 relative">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-white">
                  <MapPin className="w-3.5 h-3.5 text-electric-400" />
                  <span>Google Maps Location</span>
                </div>
                <span className="text-[10px] text-slate-400 bg-white/[0.04] px-2 py-0.5 rounded border border-white/5">
                  Pending Owner Pin
                </span>
              </div>

              {/* Map Illustration / Visual Placeholder */}
              <div className="w-full h-36 rounded-xl bg-midnight-950 border border-white/5 flex flex-col items-center justify-center p-4 text-center space-y-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />
                <div className="w-8 h-8 rounded-full bg-electric-500/20 text-electric-400 flex items-center justify-center relative z-10">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="text-xs text-slate-300 font-medium relative z-10">
                  Interactive Google Map Integration Ready
                </div>
                <p className="text-[11px] text-slate-500 max-w-xs relative z-10">
                  Coordinates will load dynamically as soon as the store owner links their verified Google Business profile.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Clean Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-3xl bg-midnight-900/90 border border-white/10 shadow-2xl space-y-6">
              
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Send an Enquiry
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Fill in your details below. You can send this enquiry directly to our WhatsApp or submit it for team response.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4 animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Enquiry Prepared!</h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Your details have been formatted for our WhatsApp counter desk. If the WhatsApp window did not open automatically, click the button below.
                  </p>
                  <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
                    <button
                      onClick={handleDirectWhatsApp}
                      className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-semibold text-sm flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4 fill-white/20" />
                      <span>Open WhatsApp Now</span>
                    </button>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/10 text-slate-300 text-sm font-medium border border-white/10"
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Enquiry Type Selector: Retail vs Wholesale */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                      Enquiry Purpose
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, enquiryType: 'Retail' })}
                        className={`py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold border transition-all ${
                          formData.enquiryType === 'Retail'
                            ? 'bg-electric-600 border-electric-500 text-white shadow-md shadow-electric-600/30'
                            : 'bg-midnight-950/80 border-white/10 text-slate-400 hover:text-white'
                        }`}
                      >
                        Personal / Retail Customer
                      </button>

                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, enquiryType: 'Wholesale' })}
                        className={`py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold border transition-all ${
                          formData.enquiryType === 'Wholesale'
                            ? 'bg-electric-600 border-electric-500 text-white shadow-md shadow-electric-600/30'
                            : 'bg-midnight-950/80 border-white/10 text-slate-400 hover:text-white'
                        }`}
                      >
                        Wholesale / Bulk Dealer
                      </button>
                    </div>
                  </div>

                  {/* Name and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ramesh Kumar"
                        className="w-full px-4 py-3 bg-midnight-950/90 border border-white/10 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-electric-500 focus:ring-1 focus:ring-electric-500"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        Phone Number (WhatsApp) *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full px-4 py-3 bg-midnight-950/90 border border-white/10 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-electric-500 focus:ring-1 focus:ring-electric-500"
                      />
                    </div>
                  </div>

                  {/* Product Interest */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Product or Accessory of Interest
                    </label>
                    <input
                      type="text"
                      value={formData.productInterest}
                      onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                      placeholder="e.g. iPhone 16 Pro, GaN 65W Charger, Bulk Tempered Glass..."
                      className="w-full px-4 py-3 bg-midnight-950/90 border border-white/10 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-electric-500 focus:ring-1 focus:ring-electric-500"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Enquiry Details / Quantities
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please mention specific colors, storage variants, or bulk quantity requirements..."
                      className="w-full px-4 py-3 bg-midnight-950/90 border border-white/10 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-electric-500 focus:ring-1 focus:ring-electric-500 resize-none"
                    />
                  </div>

                  {/* Submit actions */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      className="w-full sm:flex-1 py-3.5 px-5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 shadow-xl shadow-emerald-950/50 hover:shadow-emerald-600/30 transition-all flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4 fill-white/20" />
                      <span>Send via WhatsApp (+91 97872 46433)</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-500 text-center">
                    Clicking send will open WhatsApp with your enquiry prefilled for Kayal Mobiles.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
