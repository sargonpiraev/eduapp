import { ON_FORM_FIELD_CHANGE } from './../constant';

export default (form, field, value) => {
	return {
		type: ON_FORM_FIELD_CHANGE,
		form,
		field,
		value
	};
};