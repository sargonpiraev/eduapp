import {
	SIGNUP_PAGE_SIGNIN_FORM_EMAIL_CHANGE,
	SIGNUP_PAGE_SIGNIN_FORM_PASSWORD_CHANGE
} from './../constant';

export const emailChange = (value) => {
	return { type: SIGNUP_PAGE_SIGNIN_FORM_EMAIL_CHANGE, value };
};
export const passwordChange = (value) => {
	return { type: SIGNUP_PAGE_SIGNIN_FORM_PASSWORD_CHANGE, value };
};