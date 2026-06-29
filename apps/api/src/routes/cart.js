const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/auth');

let carts = {};

// GET CART
router.get('/', auth, (req, res) => {
  const user = req.user.email;
  res.json(carts[user] || []);
});

// ADD TO CART
router.post('/add', auth, (req, res) => {
  const user = req.user.email;
  if (!carts[user]) carts[user] = [];

  carts[user].push(req.body);
  res.json(carts[user]);
});

// CLEAR CART
router.delete('/', auth, (req, res) => {
  const user = req.user.email;
  carts[user] = [];
  res.json({ message: 'Cart cleared' });
});

module.exports = router;