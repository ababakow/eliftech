const Shop = require('../models/shop');
const Product = require('../models/product');

module.exports.index = async (req, res, next) => {
	const { shop } = req.query;
	const shops = await Shop.find({});
	if (shop) {
		const goods = await Product.find({ shop });
		return res.render('shop', { shops, goods, currentPage: 'Shop' });
	}

	res.render('shop', { shops, goods: [] });
};

module.exports.getProduct = async (req, res) => {
	const { id } = req.query;
	const product = await Product.findById(id);
	res.json(product);
};
