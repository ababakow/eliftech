const express = require('express');
const router = express.Router();

const shop = require('../controllers/shop');
const catchAsync = require('../utils/catchAsync');

router.route('/').get(catchAsync(shop.index));
router.route('/get-product').get(shop.getProduct);

module.exports = router;
