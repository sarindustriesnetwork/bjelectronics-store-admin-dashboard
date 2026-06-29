import './globals.css';

export const metadata = {
  title: 'BJ Electronics Store',
  description: 'Production ecommerce storefront for BJ Electronics'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
