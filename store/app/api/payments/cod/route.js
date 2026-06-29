export async function POST(request) {
  const body = await request.json().catch(() => ({}));
  return Response.json({
    status: 'PENDING',
    paymentMethod: 'COD',
    orderId: body.orderId || null
  });
}
