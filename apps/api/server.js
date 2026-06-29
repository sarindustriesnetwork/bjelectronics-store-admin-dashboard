const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// ROUTES
const authRoutes = require('./src/routes/auth');
const productRoutes = require('./src/routes/products');
const orderRoutes = require('./src/routes/orders');
const cartRoutes = require('./src/routes/cart');

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/cart', cartRoutes);

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'api', version: 'v1' });
});

app.listen(4000, () => {
  console.log('API running on port 4000');
});
