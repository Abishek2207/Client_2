import { Smartphone } from '../types';

export const INITIAL_SMARTPHONES: Smartphone[] = [
  {
    id: 'sp-1',
    name: 'Apple iPhone 16 Pro Max',
    brand: 'Apple',
    category: 'Apple iPhones',
    priceDisplay: 'Contact for Latest Price',
    isPriceVerified: false,
    specs: {
      display: '6.9" Super Retina XDR OLED 120Hz',
      processor: 'Apple A18 Pro Bionic (3nm)',
      ramStorage: '8GB RAM | 256GB / 512GB / 1TB',
      camera: '48MP Fusion + 48MP Ultra-Wide + 12MP 5x Telephoto',
      battery: 'All-Day Battery Life | 25W MagSafe Fast Charge'
    },
    features: ['Grade 5 Titanium Body', 'Action Button & Camera Control', 'Apple Intelligence Ready', 'Wholesale & Retail Available'],
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80',
    badge: 'Popular Flagship',
    isDemo: true
  },
  {
    id: 'sp-2',
    name: 'Apple iPhone 15',
    brand: 'Apple',
    category: 'Apple iPhones',
    priceDisplay: 'Contact for Latest Price',
    isPriceVerified: false,
    specs: {
      display: '6.1" Super Retina XDR OLED',
      processor: 'Apple A16 Bionic Hexa-Core',
      ramStorage: '6GB RAM | 128GB / 256GB',
      camera: '48MP Main + 12MP Ultra-Wide 2x Telephoto',
      battery: 'Up to 20 hrs video playback | USB-C'
    },
    features: ['Dynamic Island', 'Ceramic Shield Front', 'Color-Infused Glass Back', 'Retail & Bulk Enquiry'],
    image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80',
    badge: 'Best Seller',
    isDemo: true
  },
  {
    id: 'sp-3',
    name: 'Samsung Galaxy S24 Ultra 5G',
    brand: 'Samsung',
    category: 'Premium Smartphones',
    priceDisplay: 'Contact for Latest Price',
    isPriceVerified: false,
    specs: {
      display: '6.8" Dynamic AMOLED 2X, 120Hz, 2600 nits',
      processor: 'Snapdragon 8 Gen 3 for Galaxy',
      ramStorage: '12GB RAM | 256GB / 512GB',
      camera: '200MP Quad Cam with 50MP 5x Optical Periscope',
      battery: '5000 mAh | 45W Super Fast Charging 2.0'
    },
    features: ['Built-in S Pen Stylus', 'Galaxy AI Suite', 'Titanium Frame Armor', 'Wholesale Supply Options'],
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80',
    badge: 'Ultra Premium',
    isDemo: true
  },
  {
    id: 'sp-4',
    name: 'OnePlus 12 5G',
    brand: 'OnePlus',
    category: 'Premium Smartphones',
    priceDisplay: 'Contact for Latest Price',
    isPriceVerified: false,
    specs: {
      display: '6.82" ProXDR 2K 120Hz LTPO 4.0',
      processor: 'Qualcomm Snapdragon 8 Gen 3',
      ramStorage: '12GB / 16GB LPDDR5X | 256GB / 512GB',
      camera: '50MP Sony LYT-808 + 64MP 3x Periscope (Hasselblad)',
      battery: '5400 mAh | 100W SUPERVOOC Charging'
    },
    features: ['4th Gen Hasselblad Camera', '100W Wired + 50W Wireless', 'Dual Cryo-velocity VC Cooling', 'Ready for Store Enquiry'],
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80',
    badge: 'High Performance',
    isDemo: true
  },
  {
    id: 'sp-5',
    name: 'Vivo V40 Pro 5G',
    brand: 'Vivo',
    category: 'Android Phones',
    priceDisplay: 'Contact for Latest Price',
    isPriceVerified: false,
    specs: {
      display: '6.78" 1.5K 120Hz Curved AMOLED 4500 nits',
      processor: 'MediaTek Dimensity 9200+ (4nm)',
      ramStorage: '8GB / 12GB RAM | 256GB / 512GB',
      camera: '50MP ZEISS OIS + 50MP ZEISS Telephoto + 50MP Wide',
      battery: '5500 mAh BlueVolt | 80W FlashCharge'
    },
    features: ['ZEISS Multifocal Portrait', 'Studio-Quality Aura Light', 'IP68 & IP69 Water Resistance', 'Special Counter Pricing'],
    image: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&w=800&q=80',
    badge: 'Portrait Master',
    isDemo: true
  },
  {
    id: 'sp-6',
    name: 'Samsung Galaxy A55 5G',
    brand: 'Samsung',
    category: 'Android Phones',
    priceDisplay: 'Contact for Latest Price',
    isPriceVerified: false,
    specs: {
      display: '6.6" FHD+ Super AMOLED 120Hz Vision Booster',
      processor: 'Samsung Exynos 1480 Octa-Core',
      ramStorage: '8GB / 12GB RAM | 128GB / 256GB',
      camera: '50MP OIS + 12MP Ultra-Wide + 5MP Macro',
      battery: '5000 mAh | 25W Fast Charging'
    },
    features: ['Metal Frame & Gorilla Glass Victus+', 'Samsung Knox Vault', '4 OS Upgrades Guaranteed', 'Retail & Bulk Available'],
    image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80',
    badge: 'Top Mid-Ranger',
    isDemo: true
  },
  {
    id: 'sp-7',
    name: 'OnePlus Nord CE4 5G',
    brand: 'OnePlus',
    category: 'Budget Smartphones',
    priceDisplay: 'Contact for Latest Price',
    isPriceVerified: false,
    specs: {
      display: '6.7" FHD+ 120Hz Fluid AMOLED',
      processor: 'Snapdragon 7 Gen 3 Octa-Core',
      ramStorage: '8GB RAM (+8GB Virtual) | 128GB / 256GB',
      camera: '50MP Sony LYT-600 OIS + 8MP Ultra-Wide',
      battery: '5500 mAh | 100W SUPERVOOC Ultra Fast Charge'
    },
    features: ['100W Charging in Segment', 'Sony OIS Sensor', 'Expandable up to 1TB microSD', 'Affordable Value Pick'],
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80',
    badge: 'Best Value 5G',
    isDemo: true
  },
  {
    id: 'sp-8',
    name: 'Redmi Note 13 Pro 5G',
    brand: 'Xiaomi',
    category: 'Budget Smartphones',
    priceDisplay: 'Contact for Latest Price',
    isPriceVerified: false,
    specs: {
      display: '6.67" 1.5K Curved AMOLED, 120Hz, Dolby Vision',
      processor: 'Snapdragon 7s Gen 2 (4nm)',
      ramStorage: '8GB / 12GB RAM | 128GB / 256GB',
      camera: '200MP Ultra-Clear OIS Camera + 8MP Wide',
      battery: '5100 mAh | 67W Turbo Charge'
    },
    features: ['200MP Flagship Camera Sensor', 'Corning Gorilla Glass Victus', 'In-display Fingerprint Sensor', 'Counter Deals Available'],
    image: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?auto=format&fit=crop&w=800&q=80',
    badge: 'Budget Powerhouse',
    isDemo: true
  },
  {
    id: 'sp-9',
    name: 'Realme 13 Pro+ 5G',
    brand: 'Realme',
    category: 'Android Phones',
    priceDisplay: 'Contact for Latest Price',
    isPriceVerified: false,
    specs: {
      display: '6.7" 120Hz Curved Vision AMOLED Screen',
      processor: 'Snapdragon 7s Gen 2 5G',
      ramStorage: '8GB / 12GB RAM | 256GB / 512GB',
      camera: '50MP Sony LYT-701 OIS + 50MP Sony LYT-600 3X Periscope',
      battery: '5200 mAh | 80W Ultra Charge'
    },
    features: ['Monet Inspired Design', 'Dual Sony Flagship Sensors', 'AI Ultra Clarity Architecture', 'Wholesale Bulk Orders'],
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80',
    badge: 'Periscope Camera',
    isDemo: true
  },
  {
    id: 'sp-10',
    name: 'Google Pixel 8a',
    brand: 'Google',
    category: 'Android Phones',
    priceDisplay: 'Contact for Latest Price',
    isPriceVerified: false,
    specs: {
      display: '6.1" Actua OLED 120Hz 2000 nits',
      processor: 'Google Tensor G3 & Titan M2 Security',
      ramStorage: '8GB LPDDR5x | 128GB / 256GB',
      camera: '64MP Quad PD Main + 13MP Ultra-Wide',
      battery: '4492 mAh | 18W Fast & Wireless Charging'
    },
    features: ['7 Years of Android OS & Security Updates', 'Best Take & Magic Editor AI', 'Clean Stock Android', 'Direct Store Enquiry'],
    image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=800&q=80',
    badge: 'Pure Google AI',
    isDemo: true
  }
];
