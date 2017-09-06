import axios from 'axios';
import {AUTH_USER} from './types';

const ROOT_URL = 'http://ashernetz.com/dentstapi/index.php';

export function signinUser({email,password}){
	console.log(email);
	console.log(password);
}