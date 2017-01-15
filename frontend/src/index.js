import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { hashHistory, Router, Route } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import store from './store';

import IndexPage from './component/index-page';
import SignupPage from './container/signup-page';

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