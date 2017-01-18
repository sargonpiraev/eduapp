var supertest = require('supertest');

var ERROR_CODE = require('./../../constant/error-code');
var postgresql = require('./../../postgresql');

var USER = { email: 'sargonpiraev@gmail.com', password: '123123' };

describe('POST /signup', () => {
	beforeEach(() => { return postgresql.models.User.destroy({ where: {}, force: true }); });
	it('return 200 if all right', (done) => {
		supertest('http://localhost:8080')
		.post('/signup')
		.send(USER)
		.set('Accept', 'application/json')
		.expect(200)
		.end((err, res) => {
			if (err) { return done(err); }
			done();
		});
	});
	it('return 400 if validation failed', (done) => {
		supertest('http://localhost:8080')
		.post('/signup')
		.send()
		.set('Accept', 'application/json')
		.expect(400)
		.end((err, res) => {
			if (err) { return done(err); }
			done();
		});
	});
	it('return 400 and res.code=SIGNUP_EMAIL_ALREADY_TAKEN if user already signed up', (done) => {
		postgresql.models.User.create(USER).then(() => {
			supertest('http://localhost:8080')
			.post('/signup')
			.send(USER)
			.set('Accept', 'application/json')
			.expect(400)
			.end((err, res) => {
				if (err && res.code !== ERROR_CODE.SIGNUP_EMAIL_ALREADY_TAKEN) { return done(err); }
				done();
			});
		});
	});
});