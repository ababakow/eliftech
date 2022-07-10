const Product = require('../models/product');
const Shop = require('../models/shop');

const { faker } = require('@faker-js/faker');

module.exports = async function seedGoods(num) {
	await Product.deleteMany({});
	const shops = await Shop.find(null, { _id: 1 });

	for (let i = 0; i < num; i++) {
		const randShop = Math.floor(Math.random() * shops.length);
		const product = new Product({
			title: faker.commerce.productName(),
			image: faker.image.food(640, 480, true),
			price: faker.commerce.price(10, 200),
			shop: shops[randShop]
		});
		await product.save();
	}
};
