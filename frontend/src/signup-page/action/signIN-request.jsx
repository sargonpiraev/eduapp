import { SIGNUP_PAGE_SIGNIN_REQUEST } from './../constant';

export default (promise) => {
	return { type: SIGNUP_PAGE_SIGNIN_REQUEST, promise };
};