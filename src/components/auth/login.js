import React,{Component} from 'react';
import {reduxForm,Field} from 'redux-form';
import * as actions from '../../actions';
import {connect} from 'react-redux';

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

	renderAlert()
	{
		if(this.props.errorMessage)
		{
			return(
				<div className="alert alert-danger">
					<strong>Oops! </strong>{this.props.errorMessage}
				</div>
			);
		}
	}

	render()
	{
		const {handleSubmit} = this.props;

		return(
			<form className="col-md-6 col-md-offset-3" onSubmit={handleSubmit(this.handleformSubmit.bind(this))}>	
				<Field name="user" component={renderField} type="text" label="Email"/>
       			 <Field name="password" component={renderField} type="password" label="Password"/>
       			<button action="submit" className="btn btn-primary">Login</button>
			</form>
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