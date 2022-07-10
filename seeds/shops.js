const Shop = require('../models/shop');

module.exports = async function seedShops(shopNames) {
	await Shop.deleteMany({});
	for (let name of shopNames) {
		const shop = new Shop({ name });
		await shop.save();
	}
};
