import { products } from '../../lib/products';

export default function AdminPage() {
  const totalStock = products.reduce((sum, item) => sum + item.stock, 0);
  const totalValue = products.reduce((sum, item) => sum + item.price * item.stock, 0);

  return (
    <main style={{ fontFamily: 'Arial, sans-serif', minHeight: '100vh', background: '#f8fafc', padding: 32 }}>
      <section style={{ maxWidth: 1100, margin: '0 auto' }}>
        <h1>BJ Electronics Admin</h1>
        <p>Production admin route running at /admin from the same Hostinger deployment.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 16, margin: '24px 0' }}>
          <div style={{ background: 'white', border: '1px solid #ddd', borderRadius: 16, padding: 20 }}>
            <strong>Total Products</strong>
            <h2>{products.length}</h2>
          </div>
          <div style={{ background: 'white', border: '1px solid #ddd', borderRadius: 16, padding: 20 }}>
            <strong>Total Stock</strong>
            <h2>{totalStock}</h2>
          </div>
          <div style={{ background: 'white', border: '1px solid #ddd', borderRadius: 16, padding: 20 }}>
            <strong>Inventory Value</strong>
            <h2>${totalValue}</h2>
          </div>
        </div>
        <div style={{ display: 'grid', gap: 12 }}>
          {products.map((product) => (
            <div key={product.id} style={{ background: 'white', border: '1px solid #ddd', borderRadius: 12, padding: 16, display: 'flex', justifyContent: 'space-between' }}>
              <span>{product.title}</span>
              <span>${product.price} • Stock {product.stock}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
