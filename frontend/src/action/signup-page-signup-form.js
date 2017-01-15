import {
	SIGNUP_PAGE_SIGNUP_FORM_EMAIL_CHANGE,
	SIGNUP_PAGE_SIGNUP_FORM_PASSWORD_CHANGE,
	SIGNUP_PAGE_SIGNUP_FORM_FULL_NAME_CHANGE
} from './../constant';

export const fullNameChange = (value) => {
	return { type: SIGNUP_PAGE_SIGNUP_FORM_FULL_NAME_CHANGE, value };
};
export const emailChange = (value) => {
	return { type: SIGNUP_PAGE_SIGNUP_FORM_EMAIL_CHANGE, value };
};
export const passwordChange = (value) => {
	return { type: SIGNUP_PAGE_SIGNUP_FORM_PASSWORD_CHANGE, value };
};