import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SmartphoneCatalogue } from './components/SmartphoneCatalogue';
import { AccessoriesCatalogue } from './components/AccessoriesCatalogue';
import { LatestOffers } from './components/LatestOffers';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AboutUs } from './components/AboutUs';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileBottomNav } from './components/MobileBottomNav';
import { ProductDetailModal } from './components/ProductDetailModal';
import { StoreOwnerModal } from './components/StoreOwnerModal';

import { INITIAL_SMARTPHONES } from './data/products';
import { INITIAL_ACCESSORIES } from './data/accessories';
import { Smartphone, Accessory } from './types';

export function App() {
  const [smartphones, setSmartphones] = useState<Smartphone[]>(INITIAL_SMARTPHONES);
  const [accessories] = useState<Accessory[]>(INITIAL_ACCESSORIES);
  const [selectedProduct, setSelectedProduct] = useState<Smartphone | null>(null);
  const [isStoreModalOpen, setIsStoreModalOpen] = useState(false);

  // Handlers for store owner customization
  const handleAddProduct = (newProduct: Smartphone) => {
    setSmartphones(prev => [newProduct, ...prev]);
  };

  const handleUpdateProduct = (updatedProduct: Smartphone) => {
    setSmartphones(prev => 
      prev.map(p => p.id === updatedProduct.id ? updatedProduct : p)
    );
  };

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 flex flex-col font-sans selection:bg-electric-500 selection:text-white">
      
      {/* Sticky Header & Navbar */}
      <Navbar onOpenStoreModal={() => setIsStoreModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1 pb-16 sm:pb-0">
        {/* Hero Section */}
        <Hero 
          onExploreClick={() => {
            const el = document.getElementById('smartphones');
            el?.scrollIntoView({ behavior: 'smooth' });
          }} 
        />

        {/* Smartphone Catalogue */}
        <SmartphoneCatalogue 
          products={smartphones} 
          onSelectProduct={(p) => setSelectedProduct(p)} 
        />

        {/* Accessories Catalogue */}
        <AccessoriesCatalogue 
          accessories={accessories} 
        />

        {/* Latest Offers Banner */}
        <LatestOffers />

        {/* Why Choose Kayal Mobiles */}
        <WhyChooseUs />

        {/* About Us */}
        <AboutUs />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp Quick-Action CTA */}
      <FloatingWhatsApp />

      {/* Mobile Sticky Quick Action Dock */}
      <MobileBottomNav />

      {/* Technical Specifications Modal */}
      <ProductDetailModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />

      {/* Store Owner Demo Inventory Manager */}
      <StoreOwnerModal 
        isOpen={isStoreModalOpen}
        onClose={() => setIsStoreModalOpen(false)}
        products={smartphones}
        onAddProduct={handleAddProduct}
        onUpdateProduct={handleUpdateProduct}
      />

    </div>
  );
}

export default App;
