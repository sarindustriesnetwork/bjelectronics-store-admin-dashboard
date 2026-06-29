export async function POST(request) {
  const body = await request.json().catch(() => ({}));
  const order = {
    id: 'order-' + Date.now(),
    items: Array.isArray(body.items) ? body.items : [],
    total: Number(body.total || 0),
    paymentMethod: body.paymentMethod || 'COD',
    status: 'PENDING'
  };

  return Response.json(order, { status: 201 });
}
