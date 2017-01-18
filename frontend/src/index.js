import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { hashHistory, Router, Route } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import store from './store';

import HomePage from './component/page/home';
import LandingPage from './component/page/landing'
import SignupPage from './component/page/signup';
import ProfilePage from './component/page/profile';
import SettingsPage from './component/page/settings';

const history = syncHistoryWithStore(hashHistory, store);

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
			<Route path='/settings' component={ SettingsPage } />
			<Route path='/profile' component={ ProfilePage } />
		</Router>
	</Provider>,
	document.getElementById('root')
);