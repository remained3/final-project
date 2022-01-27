import React, { useState, useNavigate, useLocation } from 'react';
import Button from './Button.js';
import { useAuth, AuthContext } from './Authprovider';

import './Login.scss';

const Login = (props) => {
	// let navigate = useNavigate();
	// let location = useLocation();
	// let auth = useAuth();
 
  // let from = location.state?.from?.pathname || "/";
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');
	const [error, setError] = useState('');

	const buttonColor = { backgroundColor: '#748FFF' };

	return (
		<>
			<section className="login">
				<h2 className="title">Login here</h2>
				<form autoComplete="off" onSubmit={(event) => event.preventDefault()}>
					<div className="email">
						<label>Email</label>
						<input
							placeholder="Please enter your email"
							value={email}
							onChange={(event) => setEmail(event.target.value)}
							type="text"
						/>
					</div>

					<div className="password">
						<label>Password</label>
						<input
							placeholder="Enter your password here"
							value={password}
							onChange={(evt) => setPassword(evt.target.value)}
							type="text"
						/>
					</div>

					<Button name="login" bgColor={buttonColor}></Button>
				</form>
			</section>
		</>
	);
};

export default Login;
