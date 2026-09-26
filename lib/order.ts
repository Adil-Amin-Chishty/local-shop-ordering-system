import { products } from '@/data/products';
export type Cart = Record<string, number>;
export const rupees = (amount: number) => `Rs. ${amount.toLocaleString('en-PK')}`;
export function orderTotal(cart: Cart) { return products.reduce((total, p) => total + p.price * (cart[p.id] || 0), 0); }
export function orderMessage(cart: Cart, name: string, time: string, notes: string) {
  if (!name.trim() || !time.trim()) {
    throw new Error('Your name and preferred pickup time are required.');
  }
  const items = products.filter(p => cart[p.id] > 0).map(p => `${cart[p.id]}x ${p.name} – ${p.unit} (${rupees(p.price * cart[p.id])})`);
  return `Hello, I would like to place a pickup order:\n\n${items.join('\n')}\n\nTotal: ${rupees(orderTotal(cart))}\n\nPickup Order\nName: ${name.trim()}\nPreferred Pickup Time: ${time.trim()}\nAdditional Notes: ${notes.trim() || 'None'}\n\nPlease confirm availability, final prices and pickup time. Thank you!`;
}
