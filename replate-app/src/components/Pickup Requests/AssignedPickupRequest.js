import React from 'react';

import './assignedpickuprequest.css';

function AssignedPickupRequest(props) {
    return (
			<div className="assigned-pickup-request">
				<p>Food type: </p>
				<p>Weight: </p>
				<p>Pickup date: </p>
				<div className='assigned-pickup-request-controls'>
					<button>Complete</button>
					<button className='cancelBtn'>Cancel</button>
				</div>
			</div>
		);
}

export default AssignedPickupRequest;