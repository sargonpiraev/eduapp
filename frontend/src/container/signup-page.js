import { connect } from 'react-redux';

import signin from './../action/signin';
import signup from './../action/signup';
import * as signinFormAction from './../action/signup-page-signin-form';
import * as signupFormAction from './../action/signup-page-signup-form';

import SignupPage from './../component/signup-page';

const mapStateToProps = (state) => {
	return { page: state.signupPage };
};
const mapDispatchToProps = (dispatch) => {
	return {
		signin: (user) => {
			let { email, password } = user;
			dispatch(signin({ email, password }));
		},
		signup: (user) => {
			let { fullName, email, password } = user;
			dispatch(signup({ fullName, email, password }));
		},
		onSigninEmailChange (e) {
			dispatch(signinFormAction.emailChange(e.target.value));
		},
		onSigninPasswordChange (e) {
			dispatch(signinFormAction.passwordChange(e.target.value));
		},
		onSignupFullNameChange (e) {
			dispatch(signupFormAction.fullNameChange(e.target.value));
		},
		onSignupEmailChange (e) {
			dispatch(signupFormAction.emailChange(e.target.value));
		},
		onSignupPasswordChange (e) {
			dispatch(signupFormAction.passwordChange(e.target.value));
		}
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
