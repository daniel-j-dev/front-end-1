import React from 'react';
import useForm from '../../hooks/useForm';

import './createpickuprequest.css';


function CreatePickupRequest(props) {

    let [formState, setFormState, clearFormState] = useForm({
            foodType: '',
            foodWeight: '',
            preferredPickupTime: '',
        });
            
    return (
			<div className="create-pickup-request">
				<form className="create-pickup-request-form">
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

					<button>Submit</button>
				</form>
			</div>
		);
}

export default CreatePickupRequest;

