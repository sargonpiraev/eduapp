import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import signin from './../../../action/signin';
import onFormFieldChange from './../../../action/on-form-field-change';

class LandingPage extends React.Component {

	static propTypes = {
		signin: PropTypes.func.isRequired,
		form: PropTypes.object.isRequired
	};

	render () {
		return (
			<div className='landing-page'>
				<div className='top-navbar navbar navbar-default'>
					<div className='container'>
						<a href="#" className='navbar-brand'>
							<img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/twitter-128.png"/>
						</a>
						<Link to='/signup' className='btn btn-default navbar-btn pull-right'>Sign up</Link>
					</div>
				</div>
				<div className='container'>
					<div className='row'>
						<div className='col-md-4 col-md-offset-8'>
							<div className="well">
								<h3>Sign in to your account</h3>
								<br />
								<form className='form' onSubmit={ this.props.signin }>
									<div className='form-group'>
										<label className='control-label'>Email</label>
										<input
											className='form-control'
											value={ this.props.form.signin.email }
											onChange={ this.getFormFieldChangeHandler('signin', 'email') } />
									</div>
									<div className='form-group'>
										<label className='control-label'>Password</label>
										<input
											className='form-control'
											type='password'
											value={ this.props.form.signin.password }
											onChange={ this.getFormFieldChangeHandler('signin', 'password') }  />
									</div>
									<div className="form-group">
										<div className="checkbox">
											<label>
												<input type="checkbox" />
												Remember me
											</label>

										</div>
									</div>
									<button type='submit' className='btn btn-default btn-lg btn-block'>Sign in</button>
								</form>
							</div>
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
			signin: state.form.signin
		}
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		onFormFieldChange: (form, field, value) => {
			dispatch(onFormFieldChange(form, field, value));
		},
		signin: () => {
			dispatch(signin());
		}
	};
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LandingPage);