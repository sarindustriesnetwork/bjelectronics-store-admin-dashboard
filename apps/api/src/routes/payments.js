const express = require('express');
const router = express.Router();

// PAYMENT METHODS:
// 1. Stripe (online card)
// 2. bKash (mobile banking)
// 3. Nagad (mobile banking)
// 4. Bank Transfer (manual)

// STRIPE (mock implementation placeholder)
router.post('/stripe/create-intent', async (req, res) => {
  const { amount } = req.body;

  res.json({
    message: 'Stripe payment intent created (mock)',
    amount,
    clientSecret: 'mock_client_secret'
  });
});

// BKASH PAYMENT INIT
router.post('/bkash/init', (req, res) => {
  const { amount, orderId } = req.body;

  res.json({
    message: 'bKash payment initiated',
    amount,
    orderId,
    redirectUrl: 'https://bkash.com/payment-gateway-mock'
  });
});

// NAGAD PAYMENT INIT
router.post('/nagad/init', (req, res) => {
  const { amount, orderId } = req.body;

  res.json({
    message: 'Nagad payment initiated',
    amount,
    orderId,
    redirectUrl: 'https://nagad.com/payment-gateway-mock'
  });
});

// BANK TRANSFER
router.post('/bank-transfer', (req, res) => {
  const { amount, orderId, bankInfo } = req.body;

  res.json({
    message: 'Bank transfer submitted',
    amount,
    orderId,
    status: 'PENDING_VERIFICATION'
  });
});

module.exports = router;