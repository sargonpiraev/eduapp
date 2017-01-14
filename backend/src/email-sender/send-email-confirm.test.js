var assert = require('assert');

var emailSender = require('./');

describe('emailSender.sendEmailConfirm({ email, token })', () => {
	it('should reject if validation failed', (done) => {
		emailSender.sendEmailConfirm().then(() => {
			done(new Error());
		}).catch(() => {
			done();
		});
	});
	it('should resolve if all right', (done) => {
		emailSender.sendEmailConfirm({
			email: 'sargonpiraev@gmail.com',
			token: '123123'
		}).then(() => {
			done();
		}).catch((err) => {
			done(err);
		});
	});
});