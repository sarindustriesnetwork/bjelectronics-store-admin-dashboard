import Header from '../../../components/Header';
import { products } from '../../../lib/products';

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export default function ProductPage({ params }) {
  const product = products.find((item) => item.id === params.id);

  if (!product) {
    return <main className="app-shell"><Header /><section className="container section"><h1>Product not found</h1><a className="btn" href="/">Back to store</a></section></main>;
  }

  return (
    <main className="app-shell">
      <Header />
      <section className="container section">
        <a className="nav-link" href="/">Back to store</a>
        <div className="hero-grid" style={{ marginTop: 24 }}>
          <div className="hero-card" style={{ display: 'grid', placeItems: 'center', minHeight: 360 }}>
            <div style={{ fontSize: 120 }}>{product.icon}</div>
          </div>
          <div className="card" style={{ padding: 30 }}>
            <span className="badge">{product.category}</span>
            <h1 style={{ fontSize: 'clamp(34px,5vw,56px)', letterSpacing: '-.05em' }}>{product.title}</h1>
            <p className="muted" style={{ lineHeight: 1.7 }}>{product.description}</p>
            <p className="muted">Rating {product.rating} • {product.stock} units available</p>
            <div className="price" style={{ margin: '18px 0' }}>${product.price}</div>
            <div className="hero-actions">
              <a className="btn btn-primary" href="/checkout">Buy now</a>
              <a className="btn btn-soft" href="/api/products">View API</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
