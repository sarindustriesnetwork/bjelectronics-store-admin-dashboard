import { products } from '../lib/products';

export default function StoreHome() {
  return (
    <main style={{ fontFamily: 'Arial, sans-serif', background: '#f8fafc', minHeight: '100vh' }}>
      <nav style={{ padding: 24, background: '#111827', color: 'white', display: 'flex', justifyContent: 'space-between' }}>
        <strong>BJ Electronics</strong>
        <a href="/admin" style={{ color: 'white' }}>Admin</a>
      </nav>
      <section style={{ padding: 48, background: '#1f2937', color: 'white' }}>
        <h1>Modern Electronics Store</h1>
        <p>Store, admin, and API are served from one secure Hostinger deployment.</p>
      </section>
      <section style={{ padding: 24 }}>
        <h2>Featured Products</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 20 }}>
          {products.map((p) => (
            <article key={p.id} style={{ background: 'white', border: '1px solid #ddd', borderRadius: 16, padding: 20 }}>
              <h3>{p.title}</h3>
              <p>Stock: {p.stock}</p>
              <strong>${p.price}</strong>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
