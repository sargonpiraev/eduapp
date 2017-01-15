import { SIGNUP_PAGE_SIGNUP_REQUEST_ERROR } from './../constant';

export default (response) => {
	return { type: SIGNUP_PAGE_SIGNUP_REQUEST_ERROR, response };
};