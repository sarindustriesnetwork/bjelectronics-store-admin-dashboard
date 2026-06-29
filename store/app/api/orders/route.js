export async function GET() {
  return Response.json({
    ok: true,
    orders: [
      { id: 'ORD-1001', status: 'Paid', total: 128, paymentMethod: 'Card' },
      { id: 'ORD-1002', status: 'Processing', total: 49, paymentMethod: 'COD' }
    ]
  });
}

export async function POST(request) {
  const body = await request.json().catch(() => ({}));
  const total = Number(body.total || 0);
  const order = {
    id: 'order-' + Date.now(),
    items: Array.isArray(body.items) ? body.items : [],
    total,
    paymentMethod: body.paymentMethod || 'COD',
    status: 'PENDING',
    createdAt: new Date().toISOString()
  };

  return Response.json({ ok: true, order }, { status: 201 });
}
