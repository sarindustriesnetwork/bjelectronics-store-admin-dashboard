import Header from '../../components/Header';
import { products, stats } from '../../lib/products';

const orders = [
  { id: 'ORD-1001', customer: 'Walk-in Customer', amount: 128, status: 'Paid', method: 'Card' },
  { id: 'ORD-1002', customer: 'Online Buyer', amount: 49, status: 'Processing', method: 'COD' },
  { id: 'ORD-1003', customer: 'Corporate Desk', amount: 217, status: 'Ready', method: 'Bank' }
];

const activity = [
  'Product catalog synced successfully',
  'Same-domain API health check passed',
  'Admin dashboard rendered in production mode',
  'PostCSS override patched and audit clean'
];

export default function AdminPage() {
  const paidOrders = orders.filter((order) => order.status === 'Paid').length;
  const orderRevenue = orders.reduce((sum, order) => sum + order.amount, 0);

  return (
    <main className="app-shell">
      <Header />
      <div className="container admin-layout">
        <aside className="panel sidebar">
          <strong>Admin Console</strong>
          <a href="/admin">Overview</a>
          <a href="#orders">Orders</a>
          <a href="#inventory">Inventory</a>
          <a href="/api/products">Products API</a>
          <a href="/api/health">Health Check</a>
          <a href="/api/status">System Status</a>
          <a href="/">Back to store</a>
        </aside>
        <section>
          <div className="admin-hero panel">
            <div>
              <span className="eyebrow">Production dashboard</span>
              <h1>BJ Electronics Admin</h1>
              <p>Professional command center for inventory, orders, revenue, API health, and operational monitoring.</p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="/api/status">API status</a>
                <a className="btn btn-soft" href="/api/products">Export catalog</a>
              </div>
            </div>
            <div className="admin-status-card">
              <span className="badge">System health</span>
              <strong>Online</strong>
              <p className="muted">Store, admin, and API routes are served from the same production deployment.</p>
            </div>
          </div>

          <div className="dashboard-grid admin-kpis">
            <div className="card kpi-card"><span className="muted">Products</span><h2>{stats.products}</h2><p className="muted">Active catalog items</p></div>
            <div className="card kpi-card"><span className="muted">Stock</span><h2>{stats.stock}</h2><p className="muted">Available inventory</p></div>
            <div className="card kpi-card"><span className="muted">Inventory value</span><h2>${stats.value}</h2><p className="muted">Projected stock value</p></div>
            <div className="card kpi-card"><span className="muted">Orders</span><h2>{orders.length}</h2><p className="muted">{paidOrders} paid orders</p></div>
            <div className="card kpi-card"><span className="muted">Order revenue</span><h2>${orderRevenue}</h2><p className="muted">Demo sales pipeline</p></div>
            <div className="card kpi-card"><span className="muted">API routes</span><h2>6</h2><p className="muted">Health, status, products, orders, payments</p></div>
          </div>

          <section className="section">
            <div className="grid">
              <div className="card"><span className="badge">Uptime</span><h3>API Online</h3><p className="muted">Health, products, orders, and payment routes are available from the same domain.</p></div>
              <div className="card"><span className="badge">Security</span><h3>Protected headers</h3><p className="muted">The app ships with security headers, patched PostCSS overrides, and safe server routes.</p></div>
              <div className="card"><span className="badge">Theme</span><h3>Dark + light mode</h3><p className="muted">Admin and storefront support persistent theme switching across sessions.</p></div>
            </div>
          </section>

          <section className="section" id="orders">
            <div className="section-head">
              <div><h2>Recent orders</h2><p>Track payment method, fulfillment status, and order value.</p></div>
              <a className="btn" href="/checkout">Create test order</a>
            </div>
            <div className="table admin-table">
              <div className="table-row order-row table-head"><span>Order</span><span>Customer</span><span>Amount</span><span>Status</span></div>
              {orders.map((order) => (
                <div className="table-row order-row" key={order.id}>
                  <strong>{order.id}</strong>
                  <span>{order.customer}</span>
                  <span>${order.amount} • {order.method}</span>
                  <span className="status-pill">{order.status}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="section" id="inventory">
            <div className="section-head">
              <div><h2>Inventory</h2><p>Current product catalog synced with same-domain API.</p></div>
              <a className="btn" href="/api/products">Open API</a>
            </div>
            <div className="table admin-table">
              <div className="table-row inventory-row table-head"><span>Product</span><span>Category</span><span>Price</span><span>Stock</span></div>
              {products.map((product) => (
                <div className="table-row inventory-row" key={product.id}>
                  <span>{product.icon} {product.title}</span>
                  <span>{product.category}</span>
                  <span>${product.price}</span>
                  <span>{product.stock} available</span>
                </div>
              ))}
            </div>
          </section>

          <section className="section">
            <div className="section-head">
              <div><h2>Activity log</h2><p>Deployment and operations checklist.</p></div>
            </div>
            <div className="grid">
              {activity.map((item) => (
                <div className="card activity-card" key={item}><span className="status-dot" />{item}</div>
              ))}
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}
