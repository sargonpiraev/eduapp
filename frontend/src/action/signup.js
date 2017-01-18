import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from './../constant';
import UserService from './../service/user';
import { push } from 'react-router-redux';

export const signupRequest = () => {
	return { type: SIGNUP_REQUEST };
};
export const signupSuccess = (response) => {
	return { type: SIGNUP_SUCCESS, response };
};
export const signupFailure = (response) => {
	return { type: SIGNUP_FAILURE, response };
};
export default () => {
	return (dispatch, getState) => {
		dispatch(signupRequest());
		let { fullName, email, password, screenName } = getState().form.signup;
		UserService.signup({ fullName, email, password, screenName }).then((response) => {
			dispatch(signupSuccess(response));
			dispatch(push('/'));
		}).catch(() => {
			dispatch(signupFailure(response));
		});
	};
};