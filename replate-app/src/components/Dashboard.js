import React from 'react';
import CreatePickupRequest from './Pickup Requests/CreatePickupRequest';
import IssuedPickupRequest from './Pickup Requests/IssuedPickupRequest';
import PublicPickupRequest from './Pickup Requests/PublicPickupRequest';

function Dashboard(props) {
	//Turnary to render pickup requests on the dashboard if this the user signed in is a Volunteer or a form to make requests and a list of issued requests made by you if you're a business
	//Map through data displaying as many IssuedPickupRequest or PublicPickupRequest components as needed
	return (
		<div>
			<h1>Dashboard</h1>

			<CreatePickupRequest />

            <h2>Issued pick request(s)</h2>

			<IssuedPickupRequest />

		</div>
	);
}

export default Dashboard;
