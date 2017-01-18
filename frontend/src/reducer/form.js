import { combineReducers } from 'redux';

import { 
	ON_FORM_FIELD_CHANGE,
	SIGNIN_REQUEST,
	SIGNIN_SUCCESS,
	SIGNIN_FAILURE,
	SIGNUP_REQUEST,
	SIGNUP_SUCCESS,
	SIGNUP_FAILURE
} from './../constant';

const signupInitialState = {
	fullName: '',
	email: '',
	password: '',
	screenName: '',
	loading: false
};
export const signup = (state = signupInitialState, action) => {
	switch (action.type) {
		case ON_FORM_FIELD_CHANGE:
			return action.form === 'signup'
				? { ...state, [ action.field ]: action.value }
				: state;
			break;
		case SIGNUP_REQUEST:
			return { ...state, loading: true };
		case SIGNUP_SUCCESS:
		case SIGNUP_FAILURE:
			return signupInitialState;
		default:
			return state;
	}
};

const signinInitialState = {
	email: '',
	password: '',
	loading: false
};
export const signin = (state = signinInitialState, action) => {
	switch (action.type) {
		case ON_FORM_FIELD_CHANGE:
			return action.form === 'signin'
				? { ...state, [ action.field ]: action.value }
				: state;
			break;
		case SIGNIN_REQUEST:
			return { ...state, loading: true };
		case SIGNIN_SUCCESS:
		case SIGNIN_FAILURE:
			return signinInitialState;
		default:
			return state;
	}
};


export default combineReducers({
	signup,
	signin
});