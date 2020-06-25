import React, { useContext } from 'react';

import MainContext from '../../contexts/MainContext';

import './assignedpickuprequest.css';

function AssignedPickupRequest(props) {

	let {item, index} = props;

	let {data, setData} = useContext(MainContext);

	let completeRequest = event => {

		event.preventDefault();

		let newData = {
			...data
		}

		newData.pickupRequests[index].requestStatus = 'Complete'

		setData(newData);

	}

		let cancelRequest = (event) => {
			event.preventDefault();

			let newData = {
				...data,
			};

			newData.pickupRequests[index].requestStatus = 'Available';
			newData.pickupRequests[index].assignedVolunteer = '';

			setData(newData);
		};

    return (
			<div className="assigned-pickup-request">
				<p>Food type: {item.foodType}</p>
				<p>Weight: {item.weight}</p>
				<p>Pickup date: {item.pickupDate}</p>
				<div className='assigned-pickup-request-controls'>
					<button onClick={completeRequest}>Complete</button>
					<button className='cancelBtn' onClick={cancelRequest}>Cancel</button>
				</div>
			</div>
		);
}

export default AssignedPickupRequest;