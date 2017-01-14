import React from 'react';

export default class SignupPage extends React.Component {

	render () {
		return (
			<div id='signup-page'>
				<div className='navbar navbar-default'>
					<div className='container'>
						<a href='/' className='navbar-brand'>BRAND</a>
					</div>
				</div>
				<div className='container'>
					<div className='row'>
						<div className='col-md-4 col-md-offset-4'>
							<form className='form'>
								<div className='form-group'>
									<label className='control-label'>Full name</label>
									<input className='form-control' />
								</div>
								<div className='form-group'>
									<label className='control-label'>Email</label>
									<input className='form-control' />
								</div>
								<div className='form-group'>
									<label className='control-label'>Password</label>
									<input className='form-control' type='password' />
								</div>
								<button type='submit' className='btn btn-default'>Sign up</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}

}