import React from 'react';

import './assignedpickuprequest.css';

function AssignedPickupRequest(props) {
    return (
        <div className="assigned-pickup-request">
            <p>Food type: </p>
            <p>Weight: </p>
            <p>Pickup date: </p>
            <button>Complete</button>
            <button>Cancel</button>
        </div>
	);
}

export default AssignedPickupRequest;