import React from 'react';

//Biz components

import CreatePickupRequest from './Pickup Requests/CreatePickupRequest';
import IssuedPickupRequest from './Pickup Requests/IssuedPickupRequest';

//Vol components

import PublicPickupRequest from './Pickup Requests/PublicPickupRequest';
import AssignedPickupRequests from './Pickup Requests/AssignedPickupRequest';


function Dashboard(props) {
	//Turnary to render pickup requests on the dashboard if this the user signed in is a Volunteer or a form to make requests and a list of issued requests made by you if you're a business
	//Map through data displaying as many IssuedPickupRequest or PublicPickupRequest components as needed
	return (
		<div>
			<h1>Business Dashboard</h1>

			<CreatePickupRequest />

			<h2>Issued pick request(s)</h2>

			<IssuedPickupRequest />

			{/* <h1>Volunteer Dashboard</h1>

			<h3>Assigned Pickup Requests</h3>

				<AssignedPickupRequests />

			<h3>Available Pickup Requests</h3>

				<PublicPickupRequest /> */}

		</div>
	);
}

export default Dashboard;
