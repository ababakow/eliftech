const express = require('express');
const router = express.Router();

const user = require('../controllers/user');
const catchAsync = require('../utils/catchAsync');

router.route('/cart').get(user.renderCart).post(catchAsync(user.createOrder));

module.exports = router;
