const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

// TEMP IN-MEMORY ADMIN (DO NOT USE IN PRODUCTION)
const ADMIN = {
  email: process.env.ADMIN_EMAIL,
  username: process.env.ADMIN_USERNAME,
  password: process.env.ADMIN_PASSWORD
};

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (email !== ADMIN.email || password !== ADMIN.password) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign(
    { email, role: 'ADMIN' },
    process.env.JWT_SECRET || 'secret',
    { expiresIn: '7d' }
  );

  res.json({ token });
});

module.exports = router;