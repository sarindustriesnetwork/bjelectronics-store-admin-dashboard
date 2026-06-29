import './globals.css';

export const metadata = {
  title: 'BJ Electronics Store',
  description: 'Professional ecommerce storefront, admin dashboard, and same-domain API for BJ Electronics',
  viewport: 'width=device-width, initial-scale=1'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
