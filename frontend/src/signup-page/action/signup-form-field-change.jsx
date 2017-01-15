import { SIGNUP_PAGE_SIGNUP_FORM_FIELD_CHANGE } from './../constant';

export default (field, value) => {
	return { type: SIGNUP_PAGE_SIGNUP_FORM_FIELD_CHANGE, field, value };
};