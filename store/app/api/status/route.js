export async function GET() {
  return Response.json({
    ok: true,
    app: 'BJ Electronics',
    store: '/',
    admin: '/admin',
    api: '/api'
  });
}
