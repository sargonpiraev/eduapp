import { combineReducers } from 'redux';

import signupForm from './signup-form';
import signinForm from './signin-form';

export default combineReducers({
	signupForm,
	signinForm
});

