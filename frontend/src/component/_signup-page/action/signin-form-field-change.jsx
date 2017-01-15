import { SIGNUP_PAGE_SIGNIN_FORM_FIELD_CHANGE } from './../constant';

export default (field, value) => {
	return { type: SIGNUP_PAGE_SIGNIN_FORM_FIELD_CHANGE, field, value };
};