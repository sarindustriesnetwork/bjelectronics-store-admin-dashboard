export const products = [
  { id: 'p1', title: 'Wireless Headphones', price: 49, stock: 20, category: 'Audio', icon: '🎧', rating: 4.8, description: 'Noise-balanced wireless headphones with long battery life and clean sound for daily work, travel, and entertainment.' },
  { id: 'p2', title: 'Smart Watch', price: 79, stock: 15, category: 'Wearable', icon: '⌚', rating: 4.7, description: 'Responsive smart watch with health tracking, notifications, and a polished everyday design.' },
  { id: 'p3', title: 'Bluetooth Speaker', price: 39, stock: 30, category: 'Audio', icon: '🔊', rating: 4.6, description: 'Portable speaker with punchy sound, stable Bluetooth connection, and compact travel-friendly build.' },
  { id: 'p4', title: 'USB-C Fast Charger', price: 19, stock: 50, category: 'Accessories', icon: '⚡', rating: 4.9, description: 'Compact USB-C fast charger for phones, tablets, accessories, and everyday desk setups.' }
];

export const stats = {
  products: products.length,
  stock: products.reduce((sum, item) => sum + item.stock, 0),
  value: products.reduce((sum, item) => sum + item.price * item.stock, 0)
};
