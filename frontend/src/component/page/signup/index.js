import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import onFormFieldChange from './../../../action/on-form-field-change';
import signup from './../../../action/signup';

class SignupPage extends React.Component {

	static propTypes = {
		form: PropTypes.object,
		onFormFieldChange: PropTypes.func.isRequired,
		signup: PropTypes.func.isRequired,
	};

	render () {
		return (
			<div id='signup-page'>
				<div className='top-navbar navbar navbar-default'>
					<div className='container'>
						<a href="#" className='navbar-brand'>
							<img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/twitter-128.png" />
						</a>
					</div>
				</div>
				<div className='container'>
					<div className='row'>
						<div className='col-md-4 col-md-offset-4'>
							<form className='form' onSubmit={ this.props.signup }>
								<div className='form-group'>
									<label className='control-label'>Full Name</label>
									<input
										className='form-control'
										value={ this.props.form.signup.fullName }
										onChange={ this.getFormFieldChangeHandler('signup', 'fullName') } />
								</div>
								<div className='form-group'>
									<label className='control-label'>Email</label>
									<input
										className='form-control'
										value={ this.props.form.signup.email }
										onChange={ this.getFormFieldChangeHandler('signup', 'email') } />
								</div>
								<div className='form-group'>
									<label className='control-label'>Password</label>
									<input
										className='form-control'
										type='password'
										value={ this.props.form.signup.password }
										onChange={ this.getFormFieldChangeHandler('signup', 'password') } />
								</div>
								<div className='form-group'>
									<label className='control-label'>Screen Name</label>
									<input
										className='form-control'
										value={ this.props.form.signup.screenName }
										onChange={ this.getFormFieldChangeHandler('signup', 'screenName') } />
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
		form: {
			signup: state.form.signup,
		}
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		onFormFieldChange: (form, field, value) => {
			dispatch(onFormFieldChange(form, field, value));
		},
		signup: () => { 
			dispatch(signup());
		}
	};
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SignupPage);