import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import user from './user';
import signupPage from './signup-page';

export default combineReducers({
	routing,
	user,
	signupPage
});