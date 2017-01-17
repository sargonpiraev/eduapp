import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLoggerMiddleware from 'redux-logger';
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';

import reducer from './../reducer';

export default createStore(
	reducer,
	applyMiddleware(createRouterMiddleware(browserHistory), thunkMiddleware, createLoggerMiddleware())
);