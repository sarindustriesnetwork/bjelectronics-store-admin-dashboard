import Header from '../../components/Header';
import { products, stats } from '../../lib/products';

export default function CheckoutPage() {
  const featured = products[0];

  return (
    <main className="app-shell">
      <Header />
      <section className="container section">
        <div className="checkout-card card">
          <span className="eyebrow">Secure checkout</span>
          <h1 style={{ fontSize: 'clamp(32px,5vw,52px)', letterSpacing: '-.05em' }}>Complete your order</h1>
          <p className="muted">A polished checkout preview with production-ready layout, responsive panels, and same-domain API checks.</p>
          <div className="checkout-grid" style={{ marginTop: 22 }}>
            <div>
              <label className="muted">Full name</label>
              <input className="input" placeholder="Customer name" />
              <label className="muted">Phone number</label>
              <input className="input" placeholder="01XXXXXXXXX" />
              <label className="muted">Delivery address</label>
              <textarea className="input" rows="4" placeholder="House, road, area, city" />
            </div>
            <aside className="panel" style={{ padding: 20 }}>
              <h3>Order summary</h3>
              <p>{featured.icon} {featured.title}</p>
              <p className="muted">Inventory value available: ${stats.value}</p>
              <div className="price">${featured.price}</div>
              <div className="hero-actions">
                <a className="btn btn-primary" href="/api/payments/cod">COD status</a>
                <a className="btn btn-soft" href="/api/health">API health</a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
