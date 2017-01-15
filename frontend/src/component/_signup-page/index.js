import React, { PropTypes } from 'react';
import UserService from './../../service/user';

export default class SignupPage extends React.Component {

	state = {
		signup: {
			fullName: '',
			email: '',
			password: '',
			loading: false
		},
		signin: {
			email: '',
			password: '',
			loading: false
		}
	};

	constructor () {
		super();
		this.onSigninSubmit.bind(this);
		this.onSignupSubmit.bind(this);
		this.onSigninEmailChange.bind(this);
		this.onSigninPasswordChange.bind(this);
		this.onSignupFullNameChange.bind(this);
		this.onSignupEmailChange.bind(this);
		this.onSignupPasswordChange.bind(this);
	}

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
							<form className='form' onSubmit={ this.onSigninSubmit }>
								<div className='form-group'>
									<label className='control-label'>Email</label>
									<input
										className='form-control'
										value={ this.state.signin.email }
										onChange={ this.onSigninEmailChange } />
								</div>
								<div className='form-group'>
									<label className='control-label'>Password</label>
									<input
										className='form-control'
										type='password'
										value={ this.state.signin.password }
										onChange={ this.onSigninPasswordChange } />
								</div>
								<button type='submit' className='btn btn-default'>Sign in</button>
							</form>
						</div>
						<div className='col-md-4 col-md-offset-4'>
							<form className='form' onSubmit={ this.onSignupSubmit }>
								<div className='form-group'>
									<label className='control-label'>Full name</label>
									<input
										className='form-control'
										value={ this.state.signup.fullName }
										onChange={ this.onSignupFullNameChange } />
								</div>
								<div className='form-group'>
									<label className='control-label'>Email</label>
									<input
										className='form-control'
										value={ this.state.signup.email }
										onChange={ this.onSignupEmailChange } />
								</div>
								<div className='form-group'>
									<label className='control-label'>Password</label>
									<input
										className='form-control'
										type='password'
										value={ this.state.signup.password }
										onChange={ this.onSignupPasswordChange } />
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
		this.setState({ signin: { ...this.state.signin, loading: true } });
		let { email, password } = this.state.signin;
		UserService.signin({ email, password }).then((user) => {
			this.props.dispatch(user);
			this.routeToApp();
		}).catch((response) => {

		});
	}

	onSignupSubmit (e) {
		e.preventDefault();
		this.setState({ signup: { ...this.state.signup, loading: true } });
		let { fullName, email, password } = this.state.signup;
		UserService.signup({ fullName, email, password }).then((response) => {

		}).catch((response) => {

		});
	}
	
	onSigninEmailChange (e) {}
	onSigninPasswordChange (e) {}
	onSignupFullNameChange (e) {}
	onSignupEmailChange (e) {}
	onSignupPasswordChange (e) {}

};





// const mapStateToProps = (state) => {
// 	return {
// 		page: state.signupPage
// 	};
// };
// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		onSignupFormFieldChange: (field, value) => {
// 			dispatch(signupFormFieldChange(field, value));
// 		},
// 		onSignupFormSubmit: (e) => {
// 			dispatch(signup());
// 		}
// 	};
// };
// export default connect(
// 	mapStateToProps,
// 	mapDispatchToProps
// )(SignupPage);


// export default connect((state) => {
// 	return { signupPage: state.signupPage };
// })(SignupPage);



// const mapStateToProps = (state) => {
// 	return {
// 		todos: getVisibleTodos(state.todos, state.visibilityFilter)
// 	};
// }
//
// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		onTodoClick: (id) => {
// 			dispatch(toggleTodo(id))
// 		}
// 	}
// }

// export default connect((state) => {
// 	return { signupPage: state.signupPage };
// })(SignupPage);

// onFormFieldChange () {
//
// }
//
// onSubmit (e) {
// 	e.preventDefault();
// 	let { fullName, email, password } = this.state;
// 	this.props.dispatch(request());
// 	$.post('http://localhost:8080/signup', user).then(() => {})
// }
//
// onFullNameChange (e) {
// 	this.setState({ fullName: e.target.value });
// }
//
// onEmailChange (e) {
// 	this.setState({ email: e.target.value });
// }
//
// onPasswordChange (e) {
// 	this.setState({ password: e.target.value });
// }
//
// sendSignupRequest (user) {
// 	// debugger;
// 	this.props.dispatch();
// 	$.post('http://localhost:8080/signup', user).then(() => {})
// }



// let signupFormFormGroupFullNameClassName = classNames({
// 	'form-group': true,
// 	// 'has-error': this.state.isPressed,
// 	// 'has-success': !this.state.isPressed && this.state.isHovered
// });
