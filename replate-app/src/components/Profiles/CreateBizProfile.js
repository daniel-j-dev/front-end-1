import React, { useContext } from 'react';

import useForm from '../../hooks/inputForm';

import UserContext from '../../contexts/UserContext';

function CreateBizProfile(props) {

    const userData = useContext(UserContext);

    	let [formState, setFormState, clearFormState] = useForm({
				username: '',
				businessName: '',
				businessAddress: '',
				phoneNumber: '',
			});

	return (
		<div>
			<h1>Create a Business Profile</h1>
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

				<button>Create</button>
			</form>
		</div>
	);
}

export default CreateBizProfile;
