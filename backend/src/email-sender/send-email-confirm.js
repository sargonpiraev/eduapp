var tv4 = require('tv4');
var pug = require('pug');

var schema = require('./send-email-confirm.schema.json');
var template = pug.compileFile(__dirname + '/template/email-confirm.pug');

module.exports = (transporter) => {
	return (params) => {
		return new Promise((resolve, reject) => {
			if (!tv4.validate(params, schema)) { return reject(tv4.error); }
			let { email, token } = params;
			transporter.sendMail({
				from: transporter.transporter.options.auth.user,
				to: email,
				subject: 'email confirm',
				html: template({ token })
			}, (err, res) => {
				err ? reject(err) : resolve(res);
			});
		});
	};
};