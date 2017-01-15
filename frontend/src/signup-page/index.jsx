import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { signup, signupFormFieldChange } from './action';

class SignupPage extends React.Component {

	static propTypes = {
		page: PropTypes.object.isRequired,
		onSignupFormFieldChange: PropTypes.func.isRequired,
		onSignupFormSubmit: PropTypes.func.isRequired
	};

	constructor () {
		super();
		this.onSignupFormFieldChangeHandlerFactory.bind(this);
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
						<div className='col-md-4 col-md-offset-4'>
							<form className='form' onSubmit={ this.props.onSignupFormSubmit }>
								<div className='form-group'>
									<label className='control-label'>Full name</label>
									<input
										className='form-control'
										value={ this.props.page.signupForm.field.fullName }
										onChange={ this.onSignupFormFieldChangeHandlerFactory('fullName') } />
								</div>
								<div className='form-group'>
									<label className='control-label'>Email</label>
									<input
										className='form-control'
										value={ this.props.page.signupForm.field.email }
										onChange={ this.onSignupFormFieldChangeHandlerFactory('email') } />
								</div>
								<div className='form-group'>
									<label className='control-label'>Password</label>
									<input
										className='form-control'
										type='password'
										value={ this.props.page.signupForm.field.password }
										onChange={ this.onSignupFormFieldChangeHandlerFactory('password') } />
								</div>
								<button type='submit' className='btn btn-default'>Sign up</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}

	onSignupFormFieldChangeHandlerFactory (field) {
		return ((e) => {
			this.props.onSignupFormFieldChange(field, e.target.value);
		}).bind(this);
	}

};

const mapStateToProps = (state) => {
	return {
		page: state.signupPage
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		onSignupFormFieldChange: (field, value) => {
			dispatch(signupFormFieldChange(field, value));
		},
		onSignupFormSubmit: (e) => {
			dispatch(signup());
		}
	};
};


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SignupPage);


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
