var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var postgresql = require('./postgresql');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.post('/signup', require('./controller/signup').validate, require('./controller/signup').default);
app.post('/signin', require('./controller/signin').validate, require('./controller/signin').default);

app.use((err, req, res, next) => {
	console.error(err);
	res.status(500).json(err);
});

postgresql.authenticate().then(() => {
	app.listen(8080);
});
