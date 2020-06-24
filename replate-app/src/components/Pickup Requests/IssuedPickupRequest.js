//This is just PublicPickupRequest... but with a delete button and edit functionality. Displayed on Business dashboard.

import React from 'react';
import useForm from '../../hooks/useForm';

import './IssuedPickupRequest.css';

function IssuedPickupRequest(props) {
	let [formState, setFormState, clearFormState] = useForm({
		foodType: '',
		foodWeight: '',
		preferredPickupTime: '',
	});

	let editRequest = (event) => {

        let editForm = event.target.parentElement.parentElement.parentElement.querySelector('form');

        if(editForm.style.display !== 'flex') {

            editForm.style.display = 'flex';

            event.target.textContent = "Cancel Edit"

        } else {

            editForm.style.display = 'none';

            event.target.textContent = 'Edit'

        }

    };

	return (
		<div className="issued-pickup-request">
			<div>
				<p>Food type: </p>
				<p>Weight: </p>
				<p>Pickup date: </p>
				<div className='pickup-request-controls'>
					<button onClick={editRequest}>Edit</button>
					<button className='delBtn'>Delete</button>
				</div>
			</div>
			<form className="edit-pickup-request-form">
				Edit issued pickup request
				<label>
					<p>Type of food</p>
					<input
						type="text"
						name="foodType"
						onChange={setFormState}
						value={formState.foodType}
					/>
				</label>
				<label>
					<p>Amount in pounds</p>
					<input
						type="text"
						name="foodWeight"
						onChange={setFormState}
						value={formState.foodWeight}
					/>
				</label>
				<label>
					<p>Pickup Date</p>
					<input
						type="datetime-local"
						name="preferredPickupTime"
						onChange={setFormState}
						value={formState.preferredPickupTime}
					/>
				</label>
				<button>Save Changes</button>
			</form>
		</div>
	);
}

export default IssuedPickupRequest;
