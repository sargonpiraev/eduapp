import { SIGNIN_REQUEST, SIGNIN_SUCCESS, SIGNIN_FAILURE } from './../constant';
import UserService from './../service/user';
import { push, replace } from 'react-router-redux';

export const signinRequest = () => {
	return { type: SIGNIN_REQUEST };
};
export const signinSuccess = (response) => {
	return { type: SIGNIN_SUCCESS, response };
};
export const signinFailure = (response) => {
	return { type: SIGNIN_FAILURE, response };
};
export default () => {
	return (dispatch, getState) => {
		dispatch(signinRequest());
		let { email, password } = getState().form.signin;
		UserService.signin({ email, password }).then((response) => {
			dispatch(signinSuccess(response));
			dispatch(replace('/'))
		}).catch((response) => {
			dispatch(signinFailure(response));
		});
	};
};