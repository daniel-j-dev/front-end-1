import React, { useContext } from 'react';

import useForm from '../../hooks/inputForm';

import UserContext from '../../contexts/UserContext';

import './volprofile.css';

function VolProfile(props) {
	//State

	const userData = useContext(UserContext);

	let [formState, setFormState, clearFormState] = useForm({
		username: '',
		volunteerName: '',
		phoneNumber: ''
	});

	return (
		<div>
			<h1>Volunteer Profile</h1>

			<div id="vol-profile-display">
				<p>Username: </p>
				<p>Volunteer Name: </p>
				<p>Phone Number: </p>
			</div>

			<form className="vol-profile-form">
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
					Volunteer Name
					<input
						type="text"
						name="volunteerName"
						onChange={setFormState}
						value={formState.volunteerName}
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

export default VolProfile;
