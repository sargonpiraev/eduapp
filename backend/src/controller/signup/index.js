var tv4 = require('tv4');

var postgresql = require('./../../postgresql');
var schema = require('./index.json');
var ERROR_CODE = require('./../../constant/error-code');
var emailSender = require('./../../email-sender');

module.exports.default = (req, res, next) => {
	let { email, password, fullName } = req.body;
	postgresql.models.User.create({ fullName, email, password }).then((user) => {
		let { email, emailConfirmToken } = user.toJSON();
		emailSender.sendEmailConfirm({ email, token: emailConfirmToken }).then((sendEmailConfirmRes) => {
			res.sendStatus(200);
			console.log(sendEmailConfirmRes);
		}).catch((err) => {
			res.sendStatus(200);
			console.error(err);
		});
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