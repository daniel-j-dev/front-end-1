//This is just PublicPickupRequest... but with a delete button and edit functionality. Displayed on Business dashboard.

import React, { useContext } from 'react';

import MainContext from '../../contexts/MainContext';
import useForm from '../../hooks/useForm';

import './IssuedPickupRequest.css';

function IssuedPickupRequest(props) {

	let {item, index} = props;

	const { data, setData } = useContext(MainContext);

	let [formState, setFormState, clearFormState] = useForm({
		foodType: '',
		weight: '',
		pickupDate: '',
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
	
	let updatePickupRequest = event => {

		event.preventDefault();

		let newData = {
			...data
		}

		newData.pickupRequests[index] = {
			foodType: formState.foodType,
			weight: formState.weight,
			pickupDate: formState.pickupDate,
			issuedBy: data.currAccount.username, //Biz acc username that issued it
			requestStatus: 'Available', //Available, In Progress or Complete
			assignedVolunteer: data.pickupRequests[index].assignedVolunteer,
		}; 

		setData(newData);

	}

	let delPickupRequest = event => {

		event.preventDefault();

		let newData = {
			...data
		}

		newData.pickupRequests.splice(index,1);

		setData(newData);

	}

	return (
		<div className="issued-pickup-request">
			<div>
				<p>Food type: {item.foodType}</p>
				<p>Weight: {item.weight}</p>
				<p>Pickup date: {item.pickupDate}</p>
				<div className='pickup-request-controls'>
					<button onClick={editRequest}>Edit</button>
					<button className='delBtn' onClick={delPickupRequest}>Delete</button>
				</div>
			</div>
			<form className="edit-pickup-request-form" onSubmit={updatePickupRequest}>
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
						name="weight"
						onChange={setFormState}
						value={formState.weight}
					/>
				</label>
				<label>
					<p>Pickup Date</p>
					<input
						type="datetime-local"
						name="pickupDate"
						onChange={setFormState}
						value={formState.pickupDate}
					/>
				</label>
				<button>Save Changes</button>
			</form>
		</div>
	);
}

export default IssuedPickupRequest;
