const express = require('express');
const router = express.Router();

const { registerUser, loginUser, getDashboard } = require('../controllers/authController');
const { requireAuth } = require('../middleware/requireAuth');


router.post('/student/signup', registerUser);
router.post('/student/login', loginUser);
router.get('/dashboard', requireAuth, getDashboard);

module.exports = router;