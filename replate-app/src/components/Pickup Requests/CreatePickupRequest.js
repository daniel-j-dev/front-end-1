import React, { useContext } from 'react';

import MainContext from '../../contexts/MainContext';
import useForm from '../../hooks/useForm';

import './createpickuprequest.css';


function CreatePickupRequest(props) {

	const { data, setData } = useContext(MainContext);

    let [formState, setFormState, clearFormState] = useForm({
            foodType: '',
            weight: '',
            preferredPickupTime: '',
	});
		
	let submitNewPickupRequest = event => {

		event.preventDefault();

		let newData = {
			...data
		}

		newData.pickupRequests = [

			...data.pickupRequests,
			{
				foodType: formState.foodType,
				weight: formState.weight,
				pickupDate: formState.preferredPickupTime,
				issuedBy: data.currAccount.username, //Biz acc name that issued it
				requestStatus: 'Available', //Available, In Progress or Complete
				assignedVolunteer: '',
			}

		]

		setData(newData);

	}
            
    return (
			<div className="create-pickup-request">
				<form className="create-pickup-request-form" onSubmit={submitNewPickupRequest}>
					<h2>Create Pickup Request</h2>

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
							name="preferredPickupTime"
							onChange={setFormState}
							value={formState.preferredPickupTime}
						/>
					</label>

					<button>Submit</button>
				</form>
			</div>
		);
}

export default CreatePickupRequest;

