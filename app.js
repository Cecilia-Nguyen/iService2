const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const mongoose = require('mongoose');
const url = 'mongodb+srv://admin-Cecilia:Cr020199@cluster0.nazzt.mongodb.net/iService?retryWrites=true&w=majority';
mongoose
	.connect(url, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.catch((p) => {
		console.log(p);
	});
app.use(express.static(path.join(__dirname, 'public')));
const router = require('./routes/Route');

app.set('view engine', 'ejs');

app.get('/register', async (req, res) => {
	res.render('index', { error: 'none' });
});

app.use('/', router);

app.use((req, res, next) => {
	res.redirect('/register');
});

app.listen(8080, () => {
	console.log('listening to port 8080');
});
