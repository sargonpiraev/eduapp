var express = require('express');
var bodyParser = require('body-parser');
// import passport from 'passport';
// import passportHttpBearer from 'passport-http-bearer';

var postgresql = require('./postgresql');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// passport.use(
// 	new passportHttpBearer.Strategy((token, done) => {
// 		db.models.User.findOne({
// 			where: { token }
// 		}).then((user) => {
// 			if (!user) { done(null, false); }
// 			done(null, user);
// 		}).catch((error) => { done(error); });
// 	})
// );

app.post('/signup', require('./controller/signup').validate, require('./controller/signup').default);

app.use((err, req, res, next) => {
	console.error(err);
	res.status(500).json(err);
});

postgresql.authenticate().then(() => {
	app.listen(8080);
});
