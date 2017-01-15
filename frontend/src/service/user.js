import $ from 'jquery';

export default {
	signin: (user) => {
		let { email, password } = user;
		return $.post('http://localhost:8080/signin', { email, password });
	},
	signup: (user) => {
		let { fullName, email, password } = user;
		return $.post('http://localhost:8080/signup', { fullName, email, password });
	}
};