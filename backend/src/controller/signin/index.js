var tv4 = require('tv4');

var postgresql = require('./../../postgresql');
var schema = require('./index.json');
var ERROR_CODE = require('./../../constant/error-code');
var emailSender = require('./../../email-sender');
var uuid = require('node-uuid');

module.exports.default = (req, res, next) => {
	let { email, password } = req.body;
	postgresql.models.User.findOne({
		where: { email, password }
	}).then((user) => {
		user.set('token', uuid.v4());
		return user.save();
	}).then((user) => {
		res.json(user);
	}).catch(next);
};

module.exports.validate = (req, res, next) => {
	tv4.validate(req.body, schema)
		? next()
		: res.status(400).json(tv4.error);
};