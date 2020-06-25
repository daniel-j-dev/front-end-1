import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import MainContext from '../contexts/MainContext';

import useForm from '../hooks/useForm';

import './signup.css';

function Signup(props) {

	const mainData = useContext(MainContext);

	let {data, setData} = mainData;

    let [formState, setFormState, clearFormState] = useForm({
			username: '',
			password: '',
			phoneNumber: '',
			accountType: 'business'
	});

	let history = useHistory();

	let createAcc = event => {

		event.preventDefault();

		console.log('Form state:', formState);

		//pushing new acc to data then setting it globally

		let newData = {
			...data
		}

		if (formState.accountType === 'business') {

		newData.accounts.push({
			username: formState.username,
			password: formState.password,
			businessName: '',
			businessAddress: '',
			phoneNumber: formState.phoneNumber,
			accountType: 'busisness',
		});

		setData(newData);

		history.push('/signin');

		} else {

			newData.accounts.push({
				username: formState.username,
				password: formState.password,
				volunteerName: '',
				businessAddress: '',
				phoneNumber: formState.phoneNumber,
				accountType: 'busisness',
			});

			setData(newData);

			history.push('/signin');

		}


	}

    return (
			<div>
				<h1>Signup</h1>
				<form className="create-acc-form" onSubmit={createAcc}>
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

					<label>
						<p>Phone Number</p>
						<input
							type="text"
							name="phoneNumber"
							onChange={setFormState}
							value={formState.phoneNumber}
						/>
					</label>

					<label>
						<p>Account type</p>
						<select
							name="accountType"
							onChange={setFormState}
							value={formState.accountType}
						>
							<option value="business">Business</option>
							<option value="volunteer">Volunteer</option>
						</select>
					</label>

					<button>Create</button>
					<Link to="/signin">Already have an account?</Link>
				</form>
			</div>
		);
}

export default Signup;