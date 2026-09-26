export type Category = 'Dairy' | 'Fresh Snacks' | 'Traditional Snacks';
export type Product = { id: string; name: string; description: string; price: number; unit: string; category: Category; image: string; available: boolean; tag?: string };
const photo = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=85`;
export const products: Product[] = [
  { id: 'milk', name: 'Fresh Milk', description: 'Pure, wholesome milk. A fresh start to every day.', price: 220, unit: '1 litre', category: 'Dairy', image: photo('photo-1563636619-e9143da7973b'), available: true, tag: 'DAILY ESSENTIAL' },
  { id: 'dahi', name: 'Yogurt / Dahi', description: 'Thick, creamy and naturally set with care.', price: 260, unit: '1 kg', category: 'Dairy', image: photo('photo-1488477181946-6428a0291777'), available: true },
  { id: 'ghee', name: 'Desi Ghee', description: 'Rich aroma. Traditional goodness in every spoon.', price: 2800, unit: '1 kg', category: 'Dairy', image: photo('photo-1474979266404-7eaacbcd87c5'), available: true },
  { id: 'eggs', name: 'Fresh Eggs', description: 'Everyday goodness for your family breakfast.', price: 320, unit: '1 dozen', category: 'Dairy', image: photo('photo-1506976785307-8732e854ad03'), available: true },
  { id: 'jalebi', name: 'Fresh Jalebi', description: 'Golden spirals, crisp outside and sweet within.', price: 300, unit: '500 g', category: 'Fresh Snacks', image: photo('photo-1666190094762-6a6e0ac7fbbd'), available: true, tag: 'LOCAL FAVORITE' },
  { id: 'pakoray', name: 'Crispy Pakoray', description: 'Perfectly spiced. Made for your evening chai.', price: 240, unit: '500 g', category: 'Fresh Snacks', image: photo('photo-1601050690597-df0568f70950'), available: true },
  { id: 'samosay', name: 'Samosay', description: 'Crispy pastry with a delicious savory filling.', price: 60, unit: '1 piece', category: 'Fresh Snacks', image: photo('photo-1601050690597-df0568f70950'), available: true },
  { id: 'aloo', name: 'Aloo Samosay', description: 'Our classic potato filling, warmly spiced.', price: 50, unit: '1 piece', category: 'Fresh Snacks', image: photo('photo-1601050690597-df0568f70950'), available: true },
  { id: 'namak', name: 'Namak Paray', description: 'Little savory bites with a satisfying crunch.', price: 220, unit: '500 g', category: 'Traditional Snacks', image: photo('photo-1599490659213-e2b9527bd087'), available: true },
  { id: 'shakar', name: 'Shakar Paray', description: 'Sweet, golden bites of childhood nostalgia.', price: 260, unit: '500 g', category: 'Traditional Snacks', image: photo('photo-1499636136210-6f4ee915583e'), available: true },
];
