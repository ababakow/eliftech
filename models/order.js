const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
	name: {
		type: String
	},
	email: {
		type: String
	},
	phone: {
		type: String
	},
	adress: {
		type: String
	},
	goods: [
		{
			product: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Prodict',
				required: true
			},
			count: {
				type: Number,
				required: true
			}
		}
	]
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
