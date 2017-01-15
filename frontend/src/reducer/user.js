import { SIGNIN_SUCCESS } from './../constant';

export default (state = null, action) => {
	switch (action.type) {
		case SIGNIN_SUCCESS:
			return { ...action.response };
			break;
		default:
			return state;
	}
};