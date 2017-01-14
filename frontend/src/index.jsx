import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route } from 'react-router';

import IndexPage from './component/index-page';
import SignupPage from './component/signup-page';

ReactDOM.render(
	<Router history={ browserHistory }>
		<Route path='/' component={ IndexPage } />
		<Route path='/signup' component={ SignupPage } />
	</Router>,
	document.getElementById('root')
);