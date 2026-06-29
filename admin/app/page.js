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

export default async function AdminHome() {
  const products = await loadProducts();
  return (
    <main style={{ padding: 32, fontFamily: 'Arial, sans-serif' }}>
      <h1>BJ Electronics Admin</h1>
      <p>Production admin dashboard connected to the API.</p>
      <section style={{ display: 'grid', gap: 12 }}>
        {(products.length ? products : [{ id: 'demo', title: 'No live products yet', price: 0 }]).map((p) => (
          <div key={p.id} style={{ border: '1px solid #ddd', borderRadius: 12, padding: 16 }}>
            <strong>{p.title}</strong>
            <div>Price: {p.price}</div>
          </div>
        ))}
      </section>
    </main>
  );
}
