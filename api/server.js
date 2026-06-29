const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors({ origin: '*' }));
app.use(express.json());

const demoProducts = [
  { id: 'p1', title: 'Wireless Headphones', price: 49, stock: 20 },
  { id: 'p2', title: 'Smart Watch', price: 79, stock: 15 },
  { id: 'p3', title: 'Bluetooth Speaker', price: 39, stock: 30 }
];

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'BJ Electronics API' });
});

app.get('/api/products', (req, res) => {
  res.json(demoProducts);
});

app.post('/api/orders', (req, res) => {
  const order = {
    id: Date.now().toString(),
    items: req.body.items || [],
    total: req.body.total || 0,
    paymentMethod: req.body.paymentMethod || 'COD',
    status: req.body.paymentMethod === 'COD' ? 'PENDING' : 'PENDING_PAYMENT'
  };
  res.json(order);
});

app.post('/api/payments/cod', (req, res) => {
  res.json({ status: 'PENDING', paymentMethod: 'COD' });
});

app.post('/api/payments/stripe', async (req, res) => {
  if (!process.env.STRIPE_SECRET_KEY) {
    return res.json({ status: 'CONFIG_REQUIRED', message: 'Stripe key missing' });
  }
  const Stripe = require('stripe');
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const amount = Number(req.body.amount || 1);
  const payment = await stripe.paymentIntents.create({ amount: Math.round(amount * 100), currency: 'usd' });
  res.json({ clientSecret: payment.client_secret });
});

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log('API running on port ' + PORT);
});
