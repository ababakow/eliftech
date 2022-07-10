const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	image: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	shop: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Shop',
		required: true
	}
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
