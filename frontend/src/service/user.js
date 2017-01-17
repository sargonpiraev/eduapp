import $ from 'jquery';

export default {

	getPersisted () {
		try {
			let serializedStore = localStage.getItem('store');
			if (serializedStore ==  null) { return void 0; }
			return JSON.parse(serializedStore);
		} catch (err) {
			return null;
		}
	},

	signin (user) {
		let { email, password } = user;
		return $.post('http://localhost:8080/signin', { email, password });
	},

	signup (user) {
		let { fullName, email, password } = user;
		return $.post('http://localhost:8080/signup', { fullName, email, password });
	}

};