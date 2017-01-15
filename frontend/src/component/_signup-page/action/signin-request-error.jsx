import { SIGNUP_PAGE_SIGNIN_REQUEST_ERROR } from './../constant';

export default (response) => {
	return { type: SIGNUP_PAGE_SIGNIN_REQUEST_ERROR, response };
};