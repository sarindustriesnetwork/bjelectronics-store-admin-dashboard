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
          <a href="/">Back to store</a>
        </aside>
        <section>
          <div className="section-head">
            <div>
              <span className="eyebrow">Production dashboard</span>
              <h1>BJ Electronics Admin</h1>
              <p>Responsive admin view for inventory, revenue, and API status monitoring.</p>
            </div>
            <a className="btn btn-primary" href="/api/status">API status</a>
          </div>
          <div className="dashboard-grid">
            <div className="card"><span className="muted">Products</span><h2>{stats.products}</h2></div>
            <div className="card"><span className="muted">Stock</span><h2>{stats.stock}</h2></div>
            <div className="card"><span className="muted">Inventory value</span><h2>${stats.value}</h2></div>
          </div>
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
