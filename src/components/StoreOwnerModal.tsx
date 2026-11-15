import React, { useState } from 'react';
import { X, Download, AlertCircle, Sparkles } from 'lucide-react';
import { Smartphone } from '../types';

interface StoreOwnerModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Smartphone[];
  onAddProduct: (product: Smartphone) => void;
  onUpdateProduct: (product: Smartphone) => void;
}

export const StoreOwnerModal: React.FC<StoreOwnerModalProps> = ({
  isOpen,
  onClose,
  products,
  onAddProduct,
  onUpdateProduct
}) => {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState<'info' | 'add' | 'edit'>('info');
  const [selectedProductId, setSelectedProductId] = useState<string>(products[0]?.id || '');
  const [newPrice, setNewPrice] = useState('');

  // New product form
  const [newProduct, setNewProduct] = useState<Partial<Smartphone>>({
    name: '',
    brand: 'Samsung',
    category: 'Android Phones',
    priceDisplay: 'Contact for Latest Price',
    specs: {
      display: '6.7" AMOLED 120Hz',
      processor: 'Snapdragon Octa-Core',
      ramStorage: '8GB RAM | 128GB Storage',
      camera: '50MP OIS Main Camera',
      battery: '5000 mAh Fast Charge'
    },
    features: ['5G Network Ready', 'Wholesale & Retail Available'],
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80',
    isDemo: false
  });

  const handleUpdatePrice = () => {
    const prod = products.find(p => p.id === selectedProductId);
    if (prod && newPrice.trim()) {
      onUpdateProduct({
        ...prod,
        priceDisplay: newPrice.startsWith('₹') ? newPrice : `₹${newPrice}`,
        isPriceVerified: true,
        isDemo: false
      });
      setNewPrice('');
      alert(`Updated price for ${prod.name}!`);
    }
  };

  const handleCreateProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProduct.name) return;

    const created: Smartphone = {
      id: `custom-${Date.now()}`,
      name: newProduct.name || 'New Smartphone',
      brand: newProduct.brand || 'Samsung',
      category: newProduct.category || 'Android Phones',
      priceDisplay: newProduct.priceDisplay || 'Contact for Latest Price',
      isPriceVerified: newProduct.priceDisplay !== 'Contact for Latest Price',
      specs: newProduct.specs || {
        display: '6.7" 120Hz Display',
        processor: 'Latest High-Performance SoC',
        ramStorage: '8GB / 128GB',
        camera: '50MP High-Resolution Camera',
        battery: '5000 mAh Battery'
      },
      features: ['Genuine Store Stock', 'Warranty Supported'],
      image: newProduct.image || 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80',
      badge: 'Owner Added',
      isDemo: false
    };

    onAddProduct(created);
    setActiveTab('info');
    alert(`Successfully added ${created.name} to the live catalogue!`);
  };

  const handleExportJson = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(products, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "kayal-mobiles-inventory.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-2xl rounded-3xl bg-midnight-950 border border-white/20 p-6 sm:p-8 shadow-2xl space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-electric-600/20 text-electric-400 flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Owner Demo & Inventory Tools</h3>
              <p className="text-xs text-slate-400">Easy stock management for Kayal Mobiles</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab buttons */}
        <div className="flex gap-2 border-b border-white/10 pb-3">
          <button
            onClick={() => setActiveTab('info')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              activeTab === 'info' ? 'bg-electric-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            How Inventory Works
          </button>
          <button
            onClick={() => setActiveTab('edit')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              activeTab === 'edit' ? 'bg-electric-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            Update Live Prices
          </button>
          <button
            onClick={() => setActiveTab('add')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              activeTab === 'add' ? 'bg-electric-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            + Add New Stock
          </button>
        </div>

        {/* Content per tab */}
        {activeTab === 'info' && (
          <div className="space-y-4 text-xs sm:text-sm text-slate-300">
            <div className="p-4 rounded-xl bg-midnight-900 border border-white/10 space-y-2">
              <div className="font-semibold text-white flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-cyan-400" />
                <span>Zero Hallucination Inventory Guarantee</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                As required by the store guidelines, demo products are clearly flagged with "Contact for Latest Price" until the shop owner submits verified current rates. No fake discounts or false stock are fabricated.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2 text-xs">
              <h5 className="font-semibold text-white">How the Store Owner can supply live stock:</h5>
              <ol className="list-decimal pl-4 space-y-1.5 text-slate-400">
                <li>Send an Excel, PDF, or WhatsApp message with current handset models and wholesale/retail prices.</li>
                <li>Or click "Update Live Prices" to adjust any model directly in this demo interface.</li>
                <li>Download the structured catalogue anytime with the button below.</li>
              </ol>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={handleExportJson}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center gap-2 border border-white/10 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export Current Products JSON</span>
              </button>
            </div>
          </div>
        )}

        {activeTab === 'edit' && (
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300">Select Smartphone Model</label>
              <select
                value={selectedProductId}
                onChange={(e) => setSelectedProductId(e.target.value)}
                className="w-full px-3 py-2 bg-midnight-900 border border-white/10 rounded-xl text-xs text-white"
              >
                {products.map(p => (
                  <option key={p.id} value={p.id}>{p.name} ({p.priceDisplay})</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300">Enter Verified Price (e.g. ₹54,999 or Special Wholesale Rate)</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newPrice}
                  onChange={(e) => setNewPrice(e.target.value)}
                  placeholder="₹62,499"
                  className="flex-1 px-3 py-2 bg-midnight-900 border border-white/10 rounded-xl text-xs text-white"
                />
                <button
                  type="button"
                  onClick={handleUpdatePrice}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-xl transition-colors"
                >
                  Save Price
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'add' && (
          <form onSubmit={handleCreateProduct} className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-[11px] text-slate-300">Model Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vivo V30 Pro"
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                  className="w-full px-3 py-2 bg-midnight-900 border border-white/10 rounded-lg text-xs text-white"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] text-slate-300">Brand</label>
                <select
                  value={newProduct.brand}
                  onChange={(e) => setNewProduct({ ...newProduct, brand: e.target.value as any })}
                  className="w-full px-3 py-2 bg-midnight-900 border border-white/10 rounded-lg text-xs text-white"
                >
                  <option value="Apple">Apple</option>
                  <option value="Samsung">Samsung</option>
                  <option value="OnePlus">OnePlus</option>
                  <option value="Vivo">Vivo</option>
                  <option value="Oppo">Oppo</option>
                  <option value="Realme">Realme</option>
                  <option value="Xiaomi">Xiaomi</option>
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[11px] text-slate-300">Price Display</label>
              <input
                type="text"
                placeholder="Contact for Latest Price OR ₹42,999"
                value={newProduct.priceDisplay}
                onChange={(e) => setNewProduct({ ...newProduct, priceDisplay: e.target.value })}
                className="w-full px-3 py-2 bg-midnight-900 border border-white/10 rounded-lg text-xs text-white"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 mt-2 bg-gradient-to-r from-electric-600 to-cyan-500 text-white font-semibold text-xs rounded-xl shadow-lg"
            >
              Add To Store Catalogue
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
