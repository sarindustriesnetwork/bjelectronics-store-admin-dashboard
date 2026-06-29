const express = require('express');
const router = express.Router();
const { auth, adminOnly } = require('../middleware/auth');

let orders = [];

// GET ALL ORDERS (admin)
router.get('/', auth, adminOnly, (req, res) => {
  res.json(orders);
});

// CREATE ORDER (customer)
router.post('/', auth, (req, res) => {
  const order = {
    id: Date.now().toString(),
    user: req.user.email,
    items: req.body.items,
    total: req.body.total,
    status: 'PENDING'
  };

  orders.push(order);
  res.json(order);
});

module.exports = router;