const mongoose = require('mongoose');

const seedShops = require('./shops');
const seedGoods = require('./goods');

const dbUrl = 'mongodb://localhost:27017/delivery';
mongoose
	.connect(dbUrl)
	.then(() => {
		console.log('DB connected!');
	})
	.catch((err) => {
		console.log(err);
	});

const seedData = async () => {
	await seedShops([ 'Mc Donny', 'CFK', 'SomeShop-1', 'SomeShop-2', 'SomeShop-3' ]);
	await seedGoods(30);
};

seedData()
	.then(() => {
		mongoose.connection.close();
	})
	.catch((err) => {
		console.log(err);
	});
