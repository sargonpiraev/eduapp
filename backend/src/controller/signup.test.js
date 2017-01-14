var supertest = require('supertest');

var ERROR_CODE = require('./../constant/error-code');

describe('POST /signup', () => {
	it('return 200 if all right', (done) => {
		supertest('http://localhost:8080')
		.post('/signup')
		.send({ fullName: 'John Doe', email: Date.now() + 'test@test.ru', password: '123123' })
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
		.set('Accept', 'application/json')
		.expect(400)
		.end((err, res) => {
			if (err) { return done(err); }
			done();
		});
	});
	it('return 400 and res.code=SIGNUP_EMAIL_ALREADY_TAKEN if user already signed up', (done) => {
		supertest('http://localhost:8080')
		.post('/signup')
		.send({ fullName: 'John Doe', email: 'test@test.ru', password: '123123' })
		.set('Accept', 'application/json')
		.expect(400)
		.end((err, res) => {
			if (err && res.code !== ERROR_CODE.SIGNUP_EMAIL_ALREADY_TAKEN) { return done(err); }
			done();
		});
	});
});