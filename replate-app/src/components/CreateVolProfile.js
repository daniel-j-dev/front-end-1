import React, { useContext } from 'react';

import useForm from '../hooks/inputForm';

import UserContext from '../contexts/UserContext';

function CreateVolProfile(props) {
	//State

	const userData = useContext(UserContext);

	let [formState, setFormState, clearFormState] = useForm({
		username: '',
		volunteerName: '',
		phoneNumber: '',
	});

	return (
		<div>
			<h1>Create a Volunteer Profile</h1>

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

				<button>Create</button>
			</form>
		</div>
	);
}

export default CreateVolProfile;
