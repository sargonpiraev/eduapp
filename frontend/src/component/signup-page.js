import React, { PropTypes } from 'react';

export default class SignupPage extends React.Component {

	static propTypes = {
		page: PropTypes.object,
		signin: PropTypes.func.isRequired,
		signup: PropTypes.func.isRequired,
		onSigninEmailChange: PropTypes.func.isRequired,
		onSigninPasswordChange: PropTypes.func.isRequired,
		onSignupFullNameChange: PropTypes.func.isRequired,
		onSignupEmailChange: PropTypes.func.isRequired,
		onSignupPasswordChange: PropTypes.func.isRequired,
	};

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
						<div className='col-md-4'>
							<form className='form' onSubmit={ this.onSigninSubmit.bind(this) }>
								<div className='form-group'>
									<label className='control-label'>Email</label>
									<input
										className='form-control'
										value={ this.props.page.signinForm.email }
										onChange={ this.props.onSigninEmailChange } />
								</div>
								<div className='form-group'>
									<label className='control-label'>Password</label>
									<input
										className='form-control'
										type='password'
										value={ this.props.page.signinForm.password }
										onChange={ this.props.onSigninPasswordChange } />
								</div>
								<button type='submit' className='btn btn-default'>Sign in</button>
							</form>
						</div>
						<div className='col-md-4 col-md-offset-4'>
							<form className='form' onSubmit={ this.onSignupSubmit.bind(this) }>
								<div className='form-group'>
									<label className='control-label'>Full name</label>
									<input
										className='form-control'
										value={ this.props.page.signupForm.fullName }
										onChange={ this.props.onSignupFullNameChange } />
								</div>
								<div className='form-group'>
									<label className='control-label'>Email</label>
									<input
										className='form-control'
										value={ this.props.page.signupForm.email }
										onChange={ this.props.onSignupEmailChange } />
								</div>
								<div className='form-group'>
									<label className='control-label'>Password</label>
									<input
										className='form-control'
										type='password'
										value={ this.props.page.signupForm.password }
										onChange={ this.props.onSignupPasswordChange } />
								</div>
								<button type='submit' className='btn btn-default'>Sign up</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}

	onSigninSubmit (e) {
		e.preventDefault();
		let { email, password } = this.props.page.signinForm;
		this.props.signin({ email, password });
	}

	onSignupSubmit (e) {
		e.preventDefault();
		let { fullName, email, password } = this.props.page.signupForm;
		this.props.signup({ fullName, email, password });
	}

};