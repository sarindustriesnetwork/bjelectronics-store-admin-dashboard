const express = require('express');
const router = express.Router();
const { auth, adminOnly } = require('../middleware/auth');

// MOCK DB (replace with Prisma later)
let products = [];

// GET ALL PRODUCTS
router.get('/', (req, res) => {
  res.json(products);
});

// CREATE PRODUCT
router.post('/', auth, adminOnly, (req, res) => {
  const product = {
    id: Date.now().toString(),
    ...req.body
  };
  products.push(product);
  res.json(product);
});

// DELETE PRODUCT
router.delete('/:id', auth, adminOnly, (req, res) => {
  products = products.filter(p => p.id !== req.params.id);
  res.json({ message: 'Deleted' });
});

module.exports = router;