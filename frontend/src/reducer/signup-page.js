import { combineReducers } from 'redux';

export const signinForm = (state = {
	email: '',
	password: '',
	loading: false
}, action) => {
	switch (action.type) {
		case 'SIGNUP_PAGE_SIGNIN_FORM_EMAIL_CHANGE':
			return { ...state, email: action.value };
			break;
		case 'SIGNUP_PAGE_SIGNIN_FORM_PASSWORD_CHANGE':
			return { ...state, password: action.value };
			break;
		case 'SIGNIN_REQUEST':
			return { ...state, loading: true };
		default:
			return state;
	}
};


export const signupForm = (state = {
	fullName: '',
	email: '',
	password: '',
	loading: false
}, action) => {
	switch (action.type) {
		case 'SIGNUP_PAGE_SIGNUP_FORM_FULL_NAME_CHANGE':
			return { ...state, fullName: action.value };
			break;
		case 'SIGNUP_PAGE_SIGNUP_FORM_EMAIL_CHANGE':
			return { ...state, email: action.value };
			break;
		case 'SIGNUP_PAGE_SIGNUP_FORM_PASSWORD_CHANGE':
			return { ...state, password: action.value };
			break;
		case 'SIGNUP_REQUEST':
			return { ...state, loading: true };
		default:
			return state;
	}
};

export default combineReducers({
	signinForm,
	signupForm
});