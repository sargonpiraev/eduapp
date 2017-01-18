import $ from 'jquery';

export default {

	getPersisted () {
		let user = localStorage.getItem('user');
		return user ? JSON.parse(user) : null;
	},

	setPersisted (user) {
		localStorage.setItem('user', JSON.stringify(user));
	},

	signin (user) {
		let { email, password } = user;
		return new Promise((resolve, reject) => {
			$.post('http://localhost:8080/signin', { email, password }).then((response) => {
				this.setPersisted(response);
				resolve(response);
			}).catch(reject);
		});
	},

	signup (user) {
		let { fullName, email, password, screenName } = user;
		return $.post('http://localhost:8080/signup', { fullName, email, password, screenName });
	}

};