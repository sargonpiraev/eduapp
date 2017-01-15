import { SIGNUP_PAGE_SIGNUP_REQUEST } from './../constant';

export default (promise) => {
	return { type: SIGNUP_PAGE_SIGNUP_REQUEST, promise };
};