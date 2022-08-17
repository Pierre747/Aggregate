import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './login.css';
import axios from 'axios';
import { UserContext } from '../UserProvider/UserProvider';
import userData from '../assets/data/myprofile';

export default function Login() {
	const [email, setEmail] = useState('');

	const [password, setPassword] = useState('');

	const { setUser } = useContext(UserContext);

	const handleSubmitGet = (event) => {
		event.preventDefault();
		console.log({ email, password });

		setUser({ email, password });

		axios({
			method: 'get',
			url: `https://jsonplaceholder.typicode.com/users/`, //TODO: Remplacer cette adresse par celle du Back
			params: { email, password },
		})
			.then((response) => {
				// Todo: quand la route /login sera OK
				// 		 il faudra plutot utiliser ce qui se trouve dans response
				setUser(userData);
			})
			.catch((error) => {
				console.log('error :', error);
				setUser(false);
			});
	};

	return (
		<>
			<section className='section'>
				<form onSubmit={handleSubmitGet} className='section_from'>
					<input
						className='section_input_email'
						type='email'
						placeholder='Email'
						value={email}
						onChange={(event) => {
							setEmail(event.target.value);
						}}
					></input>
					<input
						className='section_input_password'
						type='password'
						placeholder='Password'
						value={password}
						onChange={(event) => {
							setPassword(event.target.value);
						}}
					></input>
					<button className='login_button'>Login</button>
				</form>
			</section>
			<div className='redirect_user'>
				<span className='redirect_user_question'>Not a member yet ?</span>
				<NavLink to='/register' className='redirect_user_link'>
					Click here to register
				</NavLink>
			</div>
		</>
	);
}
