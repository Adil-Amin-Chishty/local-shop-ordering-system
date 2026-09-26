import type { Metadata } from 'next';
import './globals.css';
import { business } from '@/data/business';
export const metadata: Metadata = {
  title: 'Barkat Dairy & Snacks | Fresh Daily, Ready for Pickup',
  description: 'Fresh milk, creamy dahi, desi ghee and traditional Pakistani snacks. Prepare your order on WhatsApp and pick it up at Barkat in Lahore.',
  openGraph: { title: 'Barkat Dairy & Snacks', description: 'Your neighborhood’s fresh dairy & traditional snacks. Made daily, ready for pickup.', locale: 'en_PK', type: 'website' },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = { '@context': 'https://schema.org', '@type': 'GroceryStore', name: business.name, description: 'Fresh dairy and traditional Pakistani snacks, available for pickup only.', telephone: business.phone, address: { '@type': 'PostalAddress', streetAddress: 'Shop 12, Main Market, Gulberg', addressLocality: 'Lahore', addressCountry: 'PK' }, openingHours: 'Mo-Su 06:00-22:00', priceRange: 'Rs. 50–2,800', currenciesAccepted: 'PKR' };
  // Browser extensions can inject crxlauncher attributes before React hydrates.
  // Limit suppression to the root attributes; child hydration checks stay enabled.
  return <html lang="en" suppressHydrationWarning><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} /></body></html>;
}
