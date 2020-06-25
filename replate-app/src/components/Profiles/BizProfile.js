import React, { useContext } from 'react';

import useForm from '../../hooks/useForm';

import MainContext from '../../contexts/MainContext';

import './bizprofile.css';

function BizProfile(props) {
	//State

	const {data, setData} = useContext(MainContext);

	let [formState, setFormState, clearFormState] = useForm({
		username: '',
		businessName: '',
		businessAddress: '',
		volunteerName: '',
		phoneNumber: '',
	});

	let updateProfile = event => {

		event.preventDefault();

		let newData = {
			...data
		}

		newData.currAccount = {
			...data.currAccount,
			...formState
		}

		setData(newData);

	}

	let delProfile = event => {

		event.preventDefault();

		let newData = {
			...data,
		};

		newData.currAccount = {
			...data.currAccount,
			username: '',
			businessName: '',
			businessAddress: '',
			phoneNumber: '',
		};

		setData(newData);

	}

	return (
		<div>
			<h1>Business Profile</h1>

			<div id="biz-profile-info">
				<p>Username: {data.currAccount.username}</p>
				<p>Business Name: {data.currAccount.businessName}</p>
				<p>Business Address: {data.currAccount.businessAddress}</p>
				<p>Phone Number: {data.currAccount.phoneNumber}</p>
			</div>

			<form className="biz-profile-form">
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
					<p>Business Name</p>
					<input
						type="text"
						name="businessName"
						onChange={setFormState}
						value={formState.businessName}
					/>
				</label>

				<label>
					<p>Business Address</p>
					<input
						type="text"
						name="businessAddress"
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
				<div className="profile-controls">
					<button onClick={updateProfile}>Update</button>
					<button className="delProfile" onClick={delProfile}>Delete Profile</button>
				</div>
			</form>
		</div>
	);
}

export default BizProfile;
