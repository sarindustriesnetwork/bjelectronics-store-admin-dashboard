export default function CheckoutPage() {
  return (
    <main style={{ padding: 32, fontFamily: 'Arial, sans-serif', background: '#f8fafc', minHeight: '100vh' }}>
      <section style={{ maxWidth: 720, margin: '0 auto', background: 'white', border: '1px solid #ddd', borderRadius: 18, padding: 28 }}>
        <h1>Checkout</h1>
        <p>Review your order and continue with the available payment flow.</p>
        <a href="/api/health" style={{ display: 'inline-block', background: '#111827', color: 'white', padding: '12px 18px', borderRadius: 12, textDecoration: 'none' }}>Check API Status</a>
      </section>
    </main>
  );
}
