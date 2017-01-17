import { combineReducers } from 'redux';

import { ON_FORM_FIELD_CHANGE } from './../constant';

export const signup = (state = {
	fullName: '',
	email: '',
	password: '',
	screenName: ''
}, action) => {
	switch (action.type) {
		case ON_FORM_FIELD_CHANGE:
			return action.form === 'signup'
				? { ...state, [ action.field ]: action.value }
				: state;
			break;
		default:
			return state;
	}
};

export const signin = (state = {
	email: '',
	password: ''
}, action) => {
	switch (action.type) {
		case ON_FORM_FIELD_CHANGE:
			return action.form === 'signin'
				? { ...state, [ action.field ]: action.value }
				: state;
			break;
		default:
			return state;
	}
};


export default combineReducers({
	signup,
	signin
});