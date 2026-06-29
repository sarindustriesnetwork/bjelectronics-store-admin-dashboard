import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a className="brand" href="/">
          <span className="brand-mark">BJ</span>
          <span>BJ Electronics</span>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a className="nav-link" href="/">Store</a>
          <a className="nav-link" href="/checkout">Checkout</a>
          <a className="nav-link" href="/admin">Admin</a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
