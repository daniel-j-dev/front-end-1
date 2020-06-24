import React from 'react';

import './publicpickuprequest.css';

function PublicPickupRequest(props) {
    return (
			<div className="public-pickup-request">
				<p>Food type: </p>
				<p>Weight: </p>
				<p>Pickup date: </p>
				<button>Accept Request</button>
			</div>
		);
}

export default PublicPickupRequest;