import React, { useContext } from 'react';

import MainContext from '../../contexts/MainContext';

import './publicpickuprequest.css';

function PublicPickupRequest(props) {

	let {item, index} = props;

	let {data, setData} = useContext(MainContext);

	let acceptRequest = event => {

		let newData = {
			...data
		}

		newData.pickupRequests[index].assignedVolunteer = data.currAccount.username;
		newData.pickupRequests[index].requestStatus = 'In Progress';

		setData(newData);

	}

    return (
			<div className="public-pickup-request">
				<p>Food type: {item.foodType}</p>
				<p>Weight: {item.weight}</p>
				<p>Pickup date: {item.pickupDate}</p>
				<button onClick={acceptRequest}>Accept Request</button>
			</div>
		);
}

export default PublicPickupRequest;