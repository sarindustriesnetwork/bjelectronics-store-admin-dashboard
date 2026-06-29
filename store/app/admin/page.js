import Header from '../../components/Header';
import { products, stats } from '../../lib/products';

export default function AdminPage() {
  return (
    <main className="app-shell">
      <Header />
      <div className="container admin-layout">
        <aside className="panel sidebar">
          <strong>Admin Console</strong>
          <a href="/admin">Dashboard</a>
          <a href="/api/products">Products API</a>
          <a href="/api/health">Health Check</a>
          <a href="/api/status">System Status</a>
          <a href="/">Back to store</a>
        </aside>
        <section>
          <div className="section-head">
            <div>
              <span className="eyebrow">Production dashboard</span>
              <h1>BJ Electronics Admin</h1>
              <p>Responsive admin view for inventory, revenue, API status monitoring, and operational health.</p>
            </div>
            <a className="btn btn-primary" href="/api/status">API status</a>
          </div>
          <div className="dashboard-grid">
            <div className="card"><span className="muted">Products</span><h2>{stats.products}</h2><p className="muted">Active catalog items</p></div>
            <div className="card"><span className="muted">Stock</span><h2>{stats.stock}</h2><p className="muted">Available inventory</p></div>
            <div className="card"><span className="muted">Inventory value</span><h2>${stats.value}</h2><p className="muted">Projected stock value</p></div>
          </div>
          <section className="section">
            <div className="grid">
              <div className="card"><span className="badge">Uptime</span><h3>API Online</h3><p className="muted">Health, products, orders, and payment routes are available from the same domain.</p></div>
              <div className="card"><span className="badge">Security</span><h3>Protected headers</h3><p className="muted">The app ships with security headers and patched dependency overrides.</p></div>
              <div className="card"><span className="badge">Theme</span><h3>Dark + light mode</h3><p className="muted">Admin and storefront support persistent theme switching.</p></div>
            </div>
          </section>
          <section className="section">
            <div className="section-head">
              <div><h2>Inventory</h2><p>Current product catalog synced with same-domain API.</p></div>
            </div>
            <div className="table">
              <div className="table-row" style={{ fontWeight: 900 }}><span>Product</span><span>Price</span><span>Stock</span></div>
              {products.map((product) => (
                <div className="table-row" key={product.id}>
                  <span>{product.icon} {product.title}</span>
                  <span>${product.price}</span>
                  <span>{product.stock} available</span>
                </div>
              ))}
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}
