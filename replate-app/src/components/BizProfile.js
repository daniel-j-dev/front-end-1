import React from 'react';

import useForm from '../hooks/inputForm';

import './bizprofile.css';

function BizProfile(props) {
	//State

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
					<input type="text" name="username" onChange={setFormState} />
				</label>

				<label>
					Business Name
					<input type="text" name="businessName" onChange={setFormState} />
				</label>

				<label>
					Business Address
					<input type="text" name="businessAddress" onChange={setFormState} />
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

export default BizProfile;
