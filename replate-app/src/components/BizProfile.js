import React, { useContext } from 'react';

import useForm from '../hooks/inputForm';

import UserContext from '../contexts/UserContext';

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

			<form className="biz-profile-form">
				<label>
					Username
					<input
						type="text"
						name="username"
						onChange={setFormState}
						value={formState.username}
					/>
				</label>

				<label>
					Business Name
					<input
						type="text"
						name="businessName"
						onChange={setFormState}
						value={formState.businessName}
					/>
				</label>

				<label>
					Business Address
					<input
						type="text"
						name="businessAddress"
						onChange={setFormState}
						value={formState.businessAddress}
					/>
				</label>

				<label>
					Phone Number
					<input
						type="text"
						name="phoneNumber"
						onChange={setFormState}
						value={formState.phoneNumber}
					/>
				</label>

				<button>Update</button>
				<button>Delete Profile</button>
			</form>
		</div>
	);
}

export default BizProfile;
