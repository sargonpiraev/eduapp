import { SIGNUP_PAGE_SIGNIN_REQUEST_SUCCESS } from './../constant';

export default (response) => {
	return { type: SIGNUP_PAGE_SIGNIN_REQUEST_SUCCESS, response };
};