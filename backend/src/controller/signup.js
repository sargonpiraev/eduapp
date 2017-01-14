var tv4 = require('tv4');

var postgresql = require('./../postgresql');
var schema = require('./signup.schema.json');
var ERROR_CODE = require('./../constant/error-code');

module.exports.default = (req, res, next) => {
	let { email, password, fullName } = req.body;
	postgresql.models.User.create({ fullName, email, password }).then((user) => {
		res.json(user);
	}).catch((err) => {
		err.name === 'SequelizeUniqueConstraintError' && ~Object.keys(err.fields).indexOf('email')
			? res.status(400).json({ code: ERROR_CODE.SIGNUP_EMAIL_ALREADY_TAKEN })
			: next(err);
	});
};

module.exports.validate = (req, res, next) => {
	tv4.validate(req.body, schema)
		? next()
		: res.status(400).json(tv4.error);
};