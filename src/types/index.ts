export interface Smartphone {
  id: string;
  name: string;
  brand: 'Apple' | 'Samsung' | 'OnePlus' | 'Vivo' | 'Oppo' | 'Realme' | 'Xiaomi' | 'Google';
  category: 'Android Phones' | 'Apple iPhones' | 'Budget Smartphones' | 'Premium Smartphones';
  priceDisplay: string; // e.g. "Contact for Latest Price" or "₹64,999*"
  isPriceVerified: boolean;
  specs: {
    display: string;
    processor: string;
    ramStorage: string;
    camera: string;
    battery: string;
  };
  features: string[];
  image: string;
  badge?: string;
  isDemo: boolean;
}

export interface Accessory {
  id: string;
  name: string;
  category: 'Mobile Covers' | 'Chargers & Adapters' | 'Earphones & Headphones' | 'Screen Protectors' | 'Power Banks' | 'Other Accessories';
  brandCompatibility: string;
  keyFeatures: string[];
  priceDisplay: string;
  isPriceVerified: boolean;
  image: string;
  badge?: string;
  isDemo: boolean;
}

export interface ContactFormData {
  name: string;
  phone: string;
  enquiryType: 'Retail' | 'Wholesale';
  productInterest: string;
  message: string;
}
