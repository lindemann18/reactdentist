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
	render()
	{
		return(
			<form >	
				<Field name="email" component={renderField} type="email" label="Email"/>
       			 <Field name="password" component={renderField} type="password" label="Password"/>
       			 <Field name="passwordConfirm" component={renderField} type="password" label="Password Confirmation"/>
				<button action="submit" className="btn btn-primary">Sign up</button>
			</form>
		);
	}

}

Login = connect(null, actions)(Login)
 
export default reduxForm({
  form: 'login'
})(Login)