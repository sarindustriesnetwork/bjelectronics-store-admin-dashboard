const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.bjelectronics.shop';

async function loadProducts() {
  try {
    const res = await fetch(API_URL + '/api/products', { cache: 'no-store' });
    if (!res.ok) return [];
    return await res.json();
  } catch {
    return [];
  }
}

export default async function StoreHome() {
  const products = await loadProducts();
  return (
    <main style={{ fontFamily: 'Arial, sans-serif', background: '#f8fafc', minHeight: '100vh' }}>
      <nav style={{ padding: 24, background: '#111827', color: 'white' }}>
        <strong>BJ Electronics</strong>
      </nav>
      <section style={{ padding: 48, background: '#1f2937', color: 'white' }}>
        <h1>Modern Electronics Store</h1>
        <p>Production storefront connected to the API.</p>
      </section>
      <section style={{ padding: 24 }}>
        <h2>Featured Products</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 20 }}>
          {(products.length ? products : [{ id: 'demo', title: 'Demo Product', price: 100, stock: 10 }]).map((p) => (
            <article key={p.id} style={{ background: 'white', border: '1px solid #ddd', borderRadius: 16, padding: 20 }}>
              <h3>{p.title}</h3>
              <p>Stock: {p.stock || 'Available'}</p>
              <strong>{p.price}</strong>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
