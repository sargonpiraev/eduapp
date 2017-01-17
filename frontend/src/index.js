import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory, Router, Route } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import store from './store';

import HomePage from './component/page/home';
import LandingPage from './component/page/landing'
import SignupPage from './component/page/signup';
// import Profile from './component/profile-page';
// import Settings from './component/settings';
// import Account from './component/account';

const history = syncHistoryWithStore(browserHistory, store);

const getIndexComponent = (nextState, callback) => {
	callback(
		null,
		store.getState().user.auth ? HomePage : LandingPage
	);
};


render(
	<Provider store={ store }>
		<Router history={ history }>
			<Route path='/' getComponent={ getIndexComponent } />
			<Route path='/signup' component={ SignupPage } />
		</Router>
	</Provider>,
	document.getElementById('root')
);