import Header from '../components/Header';

export default function NotFound() {
  return (
    <main className="app-shell">
      <Header />
      <section className="container section">
        <div className="hero-card" style={{ textAlign: 'center', padding: 48 }}>
          <span className="eyebrow">404</span>
          <h1 style={{ fontSize: 'clamp(38px,7vw,86px)', letterSpacing: '-.07em', margin: '16px 0' }}>Page not found</h1>
          <p className="muted">The page you requested is unavailable or may have moved.</p>
          <div className="hero-actions" style={{ justifyContent: 'center' }}>
            <a className="btn btn-primary" href="/">Back to store</a>
            <a className="btn btn-soft" href="/admin">Open admin</a>
          </div>
        </div>
      </section>
    </main>
  );
}
