import { products } from '../../../lib/products';

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export default function ProductPage({ params }) {
  const product = products.find((item) => item.id === params.id);

  if (!product) {
    return <main style={{ padding: 32, fontFamily: 'Arial, sans-serif' }}><h1>Product not found</h1><a href="/">Back to store</a></main>;
  }

  return (
    <main style={{ padding: 32, fontFamily: 'Arial, sans-serif', background: '#f8fafc', minHeight: '100vh' }}>
      <a href="/">← Back to store</a>
      <section style={{ maxWidth: 760, margin: '32px auto', background: 'white', border: '1px solid #ddd', borderRadius: 18, padding: 28 }}>
        <h1>{product.title}</h1>
        <p>Stock: {product.stock}</p>
        <h2>${product.price}</h2>
        <a href="/checkout" style={{ display: 'inline-block', background: '#111827', color: 'white', padding: '12px 18px', borderRadius: 12, textDecoration: 'none' }}>Checkout</a>
      </section>
    </main>
  );
}
