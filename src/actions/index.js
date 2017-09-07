import axios from 'axios';
import {AUTH_USER} from './types';

const ROOT_URL = 'http://ashernetz.com/dentstapi/index.php';

export function signinUser({user,password}){
	return function(dispatch)
	{
		axios.get(`${ROOT_URL}/users/${user}/${password}`)
		.then(response=>{
			//dispatch({type:AUTH_USER});
			console.log(response.data);
		})
	}
}