const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
require('dotenv').config();

const errorHandler = (res, error) => {
  console.error(error);
  res.status(500).json({ error: 'Internal Server Error' });
};

router.post('/register', async (req, res) => {
  try {
    const { name, password } = req.body;
    
    if (!name || !password) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const existingUser = await User.findOne({ name });
    if (existingUser) {
      return res.status(409).json({ error: 'Username is already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ name, password: hashedPassword });
    await user.save();

    const token = jwt.sign({ user: user.name }, process.env.JWT_SECRET_KEY);

    res.json({ success: true, token, user: name });
  } catch (error) {
    errorHandler(res, error);
  }
});

router.post('/signin', async (req, res) => {
  try {
    const { name, password } = req.body;
    
    if (!name || !password) {
      return res.status(400).json({ error: 'Username and password are required' });
    }

    const user = await User.findOne({ name });
    if (!user) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY);

    res.json({ success: true, token, user: name });
  } catch (error) {
    errorHandler(res, error);
  }
});

module.exports = router;
