const STORE_PHONE = "919787246433";
const FORMATTED_PHONE = "+91 97872 46433";

export const getStorePhone = () => STORE_PHONE;
export const getFormattedPhone = () => FORMATTED_PHONE;

/**
 * Builds standard WhatsApp link with prefilled message
 */
export function buildWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${STORE_PHONE}?text=${encoded}`;
}

/**
 * Product-specific enquiry WhatsApp link (Requirement 8)
 * "Hello Kayal Mobiles! I'm interested in [Product Name]. Please share the latest price and availability."
 */
export function getProductEnquiryLink(productName: string, enquiryType: 'Retail' | 'Wholesale' = 'Retail'): string {
  const typeTag = enquiryType === 'Wholesale' ? " (Wholesale Quantity Enquiry)" : "";
  const text = `Hello Kayal Mobiles! I'm interested in ${productName}${typeTag}. Please share the latest price and availability.`;
  return buildWhatsAppLink(text);
}

/**
 * Accessory-specific enquiry WhatsApp link
 */
export function getAccessoryEnquiryLink(accessoryName: string, category: string): string {
  const text = `Hello Kayal Mobiles! I'm enquiring about ${accessoryName} (${category}). Please let me know the available models and pricing.`;
  return buildWhatsAppLink(text);
}

/**
 * Offers / Deals enquiry WhatsApp link
 */
export function getOffersEnquiryLink(): string {
  const text = `Hello Kayal Mobiles! I'm interested in your current smartphone and accessory offers. Please share the latest deals and pricing.`;
  return buildWhatsAppLink(text);
}

/**
 * Wholesale enquiry WhatsApp link
 */
export function getWholesaleEnquiryLink(): string {
  const text = `Hello Kayal Mobiles! I am looking for wholesale rates and bulk availability for smartphones and accessories. Please share details.`;
  return buildWhatsAppLink(text);
}

/**
 * Contact form enquiry
 */
export function getContactFormEnquiryLink(data: {
  name: string;
  phone: string;
  enquiryType: string;
  productInterest: string;
  message: string;
}): string {
  const lines = [
    `*Kayal Mobiles Website Enquiry*`,
    `--------------------------------`,
    `*Name:* ${data.name || 'Not provided'}`,
    `*Phone:* ${data.phone || 'Not provided'}`,
    `*Enquiry Type:* ${data.enquiryType || 'Retail'}`,
    `*Interested In:* ${data.productInterest || 'General Enquiry'}`,
    data.message ? `*Message:* ${data.message}` : null,
    `--------------------------------`,
    `Please share the latest price and stock details.`
  ].filter(Boolean);

  return buildWhatsAppLink(lines.join('\n'));
}
