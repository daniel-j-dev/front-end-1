import React, { useContext } from 'react';

import useForm from '../../hooks/useForm';

import UserContext from '../../contexts/UserContext';

import './bizprofile.css';

function BizProfile(props) {
	//State

	const userData = useContext(UserContext);

	let [formState, setFormState, clearFormState] = useForm({
		username: '',
		businessName: '',
		businessAddress: '',
		phoneNumber: '',
	});

	return (
		<div>
			<h1>Business Profile</h1>

			<div id="biz-profile-info">
				<p>Username: </p>
				<p>Business Name: </p>
				<p>Business Address: </p>
				<p>Phone Number: </p>
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
					<button>Update</button>
					<button className='delProfile'>Delete Profile</button>
				</div>
			</form>
		</div>
	);
}

export default BizProfile;
