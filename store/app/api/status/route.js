import { stats } from '../../../lib/products';

export async function GET() {
  return Response.json({
    ok: true,
    app: 'BJ Electronics',
    version: '1.0.0',
    environment: 'production-ready',
    routes: {
      store: '/',
      admin: '/admin',
      api: '/api',
      health: '/api/health',
      products: '/api/products',
      orders: '/api/orders'
    },
    catalog: stats,
    timestamp: new Date().toISOString()
  });
}
