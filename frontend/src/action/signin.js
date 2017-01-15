import { SIGNIN_REQUEST, SIGNIN_SUCCESS, SIGNIN_FAILURE } from './../constant';
import UserService from './../service/user';

export const signinRequest = () => {
	return { type: SIGNIN_REQUEST };
};
export const signinSuccess = (response) => {
	return { type: SIGNIN_SUCCESS, response };
};
export const signinFailure = (response) => {
	return { type: SIGNIN_FAILURE, response };
};
export default (email ,password) => {
	return (dispatch) => {
		dispatch(signinRequest());
		UserService.signin({ email, password }).then((response) => {
			dispatch(signinSuccess(response));
		}).catch(() => {
			dispatch(signinFailure(response));
		});
	};
};