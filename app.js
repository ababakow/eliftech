if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

const express = require('express');
const app = express();
const ejsMate = require('ejs-mate');
const mongoose = require('mongoose');

const shopRoutes = require('./routes/shop');
const userRoutes = require('./routes/user');
const AppError = require('./utils/appError');

const path = require('path');
////////////////////////////////////////////////////
const dbUrl = 'mongodb://localhost:27017/delivery';
mongoose
	.connect(dbUrl)
	.then(() => {
		console.log('DB connected!');
	})
	.catch((err) => {
		console.log(err);
	});
// //-------------------------------------------------
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// //-------------------------------------------------

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
// //==============================================
app.get('/', (req, res) => {
	res.redirect('/shop');
});
app.use('/shop', shopRoutes);
app.use('/user', userRoutes);
// //==============================================

app.all('*', (req, res, next) => {
	next(new AppError('Page not found!', 404));
});

app.use((err, req, res, next) => {
	const { statusCode = 500 } = err;
	if (!err.message) err.message = 'Something went wrong!';
	res.status(statusCode).render('error', { err });
});
// ////////////////////////////////////////////////////
app.listen(3000, () => {
	console.log('listerning port 3000...');
});
