const Order = require('../models/order');

module.exports.renderCart = (req, res) => {
	const mapKey = process.env.GOOGLE_API_KEY;
	res.render('user/cart', { mapKey });
};
module.exports.createOrder = async (req, res) => {
	const { name, email, phone, adress, goods } = req.body;
	const formatedGoogs = Object.keys(goods).map((item) => {
		return { product: item, count: goods[item] };
	});
	const order = new Order({
		name,
		email,
		phone,
		adress,
		goods: formatedGoogs
	});
	await order.save();
	res.redirect('/user/cart');
};
