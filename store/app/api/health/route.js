export async function GET() {
  return Response.json({
    status: 'ok',
    service: 'BJ Electronics API',
    route: '/api/health'
  });
}
