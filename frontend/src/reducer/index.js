import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import user from './user';
import form from './form';

export default combineReducers({
	routing,
	user,
	form
});