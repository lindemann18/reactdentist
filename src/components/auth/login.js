import React,{Component} from 'react';
import {reduxForm,Field} from 'redux-form';
import * as actions from '../../actions';
import {connect} from 'react-redux';

const ReactToastr = require("react-toastr");
const {ToastContainer} = ReactToastr; // This is a React Element.
// For Non ES6...
// var ToastContainer = ReactToastr.ToastContainer;
const ToastMessageFactory = React.createFactory(ReactToastr.ToastMessage.animation);

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
	  <fieldset className="form-group">
	    <label htmlFor={input.name}>{label}</label>
	    <input className="form-control" {...input} type={type}/>
	    { touched && error && <span className="text-danger">{error}</span> }
	  </fieldset>
	)

class Login extends Component{
	handleformSubmit({user,password})
	{
		this.props.signinUser({user,password});
	}

	componentDidUpdate()
	{
		if(this.props.errorMessage)
		{
			this.refs.container.error(this.props.errorMessage);
		}
	}


	render()
	{
		const {handleSubmit} = this.props;

		return(
			<div>
				<ToastContainer ref="container"
	                        toastMessageFactory={ToastMessageFactory}
	                        className="toast-top-right" />
				<form className="col-md-6 col-md-offset-3" onSubmit={handleSubmit(this.handleformSubmit.bind(this))}>	
					<Field name="user" component={renderField} type="text" label="Email"/>
	       			 <Field name="password" component={renderField} type="password" label="Password"/>
	       			<button action="submit" className="btn btn-primary">Login</button>
	       			
				</form>
			</div>
		);
	}

}

function validate(formProps)
{
	const errors = {};

	if(!formProps.user)
	{
		errors.user = "Please write an user";
	}

	if(!formProps.password)
	{
		errors.password = "Please write a password";
	}

	return errors;
}

const mapStateToProps = state=>{
	return {errorMessage:state.auth.error};
}

Login = connect(mapStateToProps, actions)(Login)
 
export default reduxForm({
  form: 'login',
  validate
})(Login)