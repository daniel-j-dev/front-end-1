import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import MainContext from '../contexts/MainContext';
import useForm from '../hooks/useForm';

import './signin.css';

function Signin(props) {

	const mainData = useContext(MainContext);

	let { data, setData } = mainData;

    let [formState, setFormState, clearFormState] = useForm({
        username: '',
        password: '',
	});
	
	let history = useHistory();

	let signinTest = event => {

		event.preventDefault();

		//Finds username, checks pass and then sets the currAccount for the web app

		let foundAccsIndexes = [];

		let foundAccs = data.accounts.filter((item, index) => {

			foundAccsIndexes.push(index);
			
			return item.username === formState.username;
		
		});

		console.log(foundAccs[0]);

		if (foundAccs[0].password === formState.password) {

			let newData = {
				...data,
			};

			newData.currAccount = {
				username: foundAccs[0].username,
				phoneNumber: foundAccs[0].phoneNumber,
				accountType: foundAccs[0].accountType,
				arrID: foundAccsIndexes[0],
			};

			setData({

				...data,
				currAccount: {

					...data.currAccount,
					...newData.currAccount

				}

			});

			localStorage.setItem('token', 'placeholderToken');

			history.push('/dashboard');

		} else {

			console.log('Incorrect password');

		}

	}
                
    return (
			<div>
				<h1>Sign in</h1>
				<form className="login-form" onSubmit={signinTest}>
					<label>
						<p>Username</p>
						<input
							type="text"
							name="username"
							onChange={setFormState}
							value={formState.username}
						/>
					</label>

					<label>
						<p>Password</p>
						<input
							type="password"
							name="password"
							onChange={setFormState}
							value={formState.businessAddress}
						/>
					</label>

					{/* <label>
						<p>Account type</p>
						<select
							name="accountType"
							onChange={setFormState}
							value={formState.accountType}
						>
							<option value="business">Business</option>
							<option value="volunteer">Volunteer</option>
						</select>
					</label> */}

					<button>Sign in</button>

					<Link to="/signup">Need an account?</Link>
				</form>
			</div>
		);
}

export default Signin;