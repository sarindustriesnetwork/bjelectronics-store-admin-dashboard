import { products, stats } from '../../../lib/products';

export async function GET() {
  return Response.json({
    ok: true,
    total: products.length,
    stats,
    products
  });
}
