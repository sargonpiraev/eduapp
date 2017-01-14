import React from 'react';
import { Link } from 'react-router';

export default class IndexPage extends React.Component {

	render () {
		return (
			<div id='index-page'>
				<div className='navbar navbar-default'>
					<div className='container'>
						<a href='/' className='navbar-brand'>BRAND</a>
						<Link to='/signup' className='btn btn-default navbar-btn pull-right'>Sign up</Link>
					</div>
				</div>
				<div className='container'>
					<div className='row'>
						<div className='col-md-4 col-md-offset-8'>
							<form className='form'>
								<div className='form-group'>
									<label className='control-label'>Email</label>
									<input className='form-control' />
								</div>
								<div className='form-group'>
									<label className='control-label'>Password</label>
									<input className='form-control' type='password' />
								</div>
								<button type='submit' className='btn btn-default'>Log in</button>
							</form>
						</div>
					</div>
				</div>

			</div>
		);
	}

}