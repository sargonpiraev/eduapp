import {
	SIGNUP_PAGE_SIGNUP_REQUEST,
	SIGNUP_PAGE_SIGNUP_REQUEST_ERROR,
	SIGNUP_PAGE_SIGNUP_REQUEST_SUCCESS,
	SIGNUP_PAGE_SIGNUP_FORM_FIELD_CHANGE
} from './../constant';

const initialState = {
	loading: false,
	field: {
		fullName: '',
		email: '',
		password: ''
	},
	response: null
	// missing: [ 'fullName', 'email', 'password' ],
	// touched: []
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SIGNUP_PAGE_SIGNUP_FORM_FIELD_CHANGE:
			return {
				...state,
				field: {
					...state.field,
					[ action.field ]: action.value
				}
			};
		case SIGNUP_PAGE_SIGNUP_REQUEST:
			return { ...state, loading: true };
			break;
		case SIGNUP_PAGE_SIGNUP_REQUEST_SUCCESS:
			return { ...state, loading: false, response: action.response };
			break;
		case SIGNUP_PAGE_SIGNUP_REQUEST_ERROR:
			return { ...state, loading: false, response: action.response };
			break;
		default:
			return state;
	}
};