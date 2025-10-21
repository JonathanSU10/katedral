const User = require('../models/User');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// User login
const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if user exists
    let user = await User.findByUsername(username);
    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Compare password
    const isMatch = await User.comparePassword(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Create JWT token
    const payload = {
      user: {
        id: user.id,
        username: user.username,
        role: user.role
      }
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET || 'katedral_secret_key_2025',
      { expiresIn: '7d' },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Get authenticated user
const getAuthUser = async (req, res) => {
  try {
    const user = await User.findByUsername(req.user.username);
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

module.exports = {
  login,
  getAuthUser
};