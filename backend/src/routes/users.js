const express = require('express');
const router = express.Router();
const { login, getAuthUser } = require('../controllers/userController');
const auth = require('../middleware/auth');

// @route   POST /api/users/login
// @desc    Authenticate user & get token
// @access  Public
router.post('/login', login);

// @route   GET /api/users/auth
// @desc    Get authenticated user
// @access  Private
router.get('/auth', auth, getAuthUser);

module.exports = router;