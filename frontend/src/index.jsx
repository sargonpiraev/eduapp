import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { hashHistory, Router, Route } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';

import signupPageReducer from './signup-page/reducer';
import IndexPage from './index-page';
import SignupPage from './signup-page';

const store = createStore(
	combineReducers({
		routing: routerReducer,
		signupPage: signupPageReducer
	}),
	applyMiddleware(thunkMiddleware)
);
const history = syncHistoryWithStore(hashHistory, store);

render(
	<Provider store={ store }>
		<Router history={ history }>
			<Route path='/' component={ IndexPage } />
			<Route path='/signup' component={ SignupPage } />
		</Router>
	</Provider>,
	document.getElementById('root')
);