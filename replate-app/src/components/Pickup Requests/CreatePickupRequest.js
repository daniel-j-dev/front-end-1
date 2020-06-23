import React from 'react';
import useForm from '../../hooks/useForm';



function CreatePickupRequest(props) {

    let [formState, setFormState, clearFormState] = useForm({
            foodType: '',
            foodWeight: '',
            preferredPickupTime: '',
        });
            
    return (
			<div>
				<form>
					<h2>Create a pickup request</h2>

					<label>
						Type of food:
						<input type="text" name="foodType" onChange={setFormState} value={formState.foodType}/>
					</label>

					<label>
						Amount in pounds:
						<input type="text" name="foodWeight" onChange={setFormState} value={formState.foodWeight}/>
					</label>

					<label>
						Pickup Date:
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

