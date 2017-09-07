import axios from 'axios';
import {AUTH_USER,AUTH_ERROR} from './types';
import {browserHistory} from 'react-router';

const ROOT_URL = 'http://ashernetz.com/dentistapi/index.php';

export function signinUser({user,password}){
	return function(dispatch)
	{
		axios.get(`${ROOT_URL}/users/${user}/${password}`)
		.then(response=>{
			console.log(response);
			if(response.data.error === false)
			{	
				console.log(response.data.token);
				localStorage.setItem('token',response.data.token);
				// - Redirect to the route '/feature'
				browserHistory.push('/');
			}else{
				dispatch(authError(response.data.message));
			}
		})
		.catch(()=>{
			// if request is bad...
			// - show an error to the user
			console.log("guat?");
			dispatch(authError("Bad Login INfo"));
		})
	}
}

export function authError(error){
	return{
		type:AUTH_ERROR,
		payload:error
	}
}