import $ from 'jquery';

import signupRequest from './signup-request';
import signupRequestSuccess from './signup-request-success';
import signupRequestError from './signup-request-error';

export default () => {
	return function (dispatch, getState) {
		dispatch(signupRequest());
		return $.post('http://localhost:8080/signup', getState().signupPage.signupForm.field).then((response) => {
			dispatch(signupRequestSuccess(response));
		}).catch((response) => {
			dispatch(signupRequestError(response));
		});
	};
}