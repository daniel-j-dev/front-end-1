import React from 'react';

import useForm from '../hooks/inputForm';

import './volprofile.css';

function VolProfile(props) {
	//State

	let [formState, setFormState, clearFormState] = useForm({
		username: '',
		volunteerName: '',
		phoneNumber: ''
	});

	return (
		<div>
			<h1>Volunteer Profile</h1>

			<form className="vol-profile-form">
				<label>
					Username
					<input type="text" name="username" onChange={setFormState} />
				</label>

				<label>
					Business Name
					<input type="text" name="volunteerName" onChange={setFormState} />
				</label>

				<label>
					Phone Number
					<input type="text" name="phoneNumber" onChange={setFormState} />
				</label>

				<button>Update</button>
				<button>Delete Profile</button>
			</form>
		</div>
	);
}

export default VolProfile;
