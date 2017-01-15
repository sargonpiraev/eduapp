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
export default (user) => {
	let { fullName, email, password } = user;
	return (dispatch) => {
		dispatch(signupRequest());
		UserService.signup({ fullName, email, password }).then((response) => {
			dispatch(signupSuccess(response));
			dispatch(push('/'));
		}).catch(() => {
			dispatch(signupFailure(response));
		});
	};
};