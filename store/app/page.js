import Header from '../components/Header';
import { products, stats } from '../lib/products';

export default function StoreHome() {
  return (
    <main className="app-shell">
      <Header />
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Premium electronics • Fast checkout • Same-domain API</span>
            <h1>Modern gadgets for a smarter everyday life.</h1>
            <p>BJ Electronics is a polished production storefront with responsive design, dark and light theme mode, admin dashboard, product routes, and API routes ready for Hostinger deployment.</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#products">Shop products</a>
              <a className="btn btn-soft" href="/admin">Open admin</a>
            </div>
          </div>
          <div className="hero-card">
            <div className="metric-grid">
              <div className="metric"><strong>{stats.products}</strong><span>Live products</span></div>
              <div className="metric"><strong>{stats.stock}</strong><span>Items in stock</span></div>
              <div className="metric"><strong>${stats.value}</strong><span>Inventory value</span></div>
              <div className="metric"><strong>24/7</strong><span>API readiness</span></div>
            </div>
          </div>
        </div>
      </section>
      <section className="section" id="products">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Curated catalog</span>
              <h2>Featured products</h2>
              <p>Clean product cards with stock, rating, category, and fast navigation.</p>
            </div>
            <a className="btn" href="/checkout">Go to checkout</a>
          </div>
          <div className="grid">
            {products.map((p) => (
              <article className="card product-card" key={p.id}>
                <div className="product-image">{p.icon}</div>
                <span className="badge">{p.category}</span>
                <div>
                  <h3>{p.title}</h3>
                  <p className="muted">{p.description}</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
                  <span className="price">${p.price}</span>
                  <span className="muted">★ {p.rating} • {p.stock} left</span>
                </div>
                <a className="btn btn-primary" href={`/product/${p.id}`}>View product</a>
              </article>
            ))}
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="container footer-inner">
          <span>© BJ Electronics</span>
          <span>Store / Admin / API running from one production deployment</span>
        </div>
      </footer>
    </main>
  );
}
