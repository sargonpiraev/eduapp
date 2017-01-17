import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import onFormFieldChange from './../../../action/on-form-field-change';

class SignupPage extends React.Component {

	static propTypes = {
		signup: PropTypes.object,
		signin: PropTypes.object,
		onFormFieldChange: PropTypes.func.isRequired
	};

	render () {
		let { signup, signin } = this.props;
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
							<form className='form'>
								<div className='form-group'>
									<label className='control-label'>Email</label>
									<input
										className='form-control'
										value={ signin.email }
										onChange={ this.getFormFieldChangeHandler('signin', 'email') } />
								</div>
								<div className='form-group'>
									<label className='control-label'>Password</label>
									<input
										className='form-control'
										type='password'
										value={ signin.password }
										onChange={ this.getFormFieldChangeHandler('signin', 'password') } />
								</div>
								<button type='submit' className='btn btn-default'>Sign in</button>
							</form>
						</div>
						<div className='col-md-4 col-md-offset-4'>
							<form className='form'>
								<div className='form-group'>
									<label className='control-label'>Full Name</label>
									<input
										className='form-control'
										value={ signup.fullName }
										onChange={ this.getFormFieldChangeHandler('signup', 'fullName') } />
								</div>
								<div className='form-group'>
									<label className='control-label'>Email</label>
									<input
										className='form-control'
										value={ signup.email }
										onChange={ this.getFormFieldChangeHandler('signup', 'email') } />
								</div>
								<div className='form-group'>
									<label className='control-label'>Password</label>
									<input
										className='form-control'
										type='password'
										value={ signup.password }
										onChange={ this.getFormFieldChangeHandler('signup', 'password') } />
								</div>
								<div className='form-group'>
									<label className='control-label'>Screen Name</label>
									<input
										className='form-control'
										type='password'
										value={ signup.screenName }
										onChange={ this.getFormFieldChangeHandler('signin', 'screenName') } />
								</div>
								<button type='submit' className='btn btn-default'>Sign up</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}

	getFormFieldChangeHandler (form, field) {
		return ((event) => {
			this.props.onFormFieldChange(form, field, event.target.value);
		}).bind(this);
	}

};

const mapStateToProps = (state) => {
	return {
		signup: state.form.signup,
		signin: state.form.signin
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		onFormFieldChange: (form, field, value) => {
			dispatch(onFormFieldChange(form, field, value));
		}
	};
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SignupPage);