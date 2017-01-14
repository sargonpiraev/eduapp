var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'noreply.twitter.com@gmail.com',
		pass: process.env.EMAIL_SENDER_PASSWORD
	}
});

module.exports = {
	transporter,
	sendEmailConfirm: require('./send-email-confirm')(transporter)
};