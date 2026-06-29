export async function POST(request) {
  const body = await request.json().catch(() => ({}));

  if (!process.env.STRIPE_SECRET_KEY) {
    return Response.json({
      status: 'CONFIG_REQUIRED',
      message: 'Stripe secret key is not configured',
      amount: Number(body.amount || 0)
    });
  }

  return Response.json({
    status: 'READY_FOR_STRIPE',
    amount: Number(body.amount || 0)
  });
}
