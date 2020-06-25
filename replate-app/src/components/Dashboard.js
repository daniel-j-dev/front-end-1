import React, { useContext } from 'react';

import MainContext from '../contexts/MainContext';

//Biz components

import CreatePickupRequest from './Pickup Requests/CreatePickupRequest';
import IssuedPickupRequest from './Pickup Requests/IssuedPickupRequest';

//Vol components

import PublicPickupRequest from './Pickup Requests/PublicPickupRequest';
import AssignedPickupRequest from './Pickup Requests/AssignedPickupRequest';


function Dashboard(props) {
	//Turnary to render pickup requests on the dashboard if this the user signed in is a Volunteer or a form to make requests and a list of issued requests made by you if you're a business
	//Map through data displaying as many IssuedPickupRequest or PublicPickupRequest components as needed

	const { data, setData } = useContext(MainContext);

	//List of pickup requests issued by the user currently logged in - used for biz accounts only

	//let issued = data.pickupRequests.filter((item, index) => item.issuedBy === data.currAccount.username);

	let issued = [];
	
	data.pickupRequests.forEach((item, index) => {

		if (item.issuedBy === data.currAccount.username) {

			issued.push({
				...item,
				arrID: index
			});

		}
		
	});

	//List of pickup requests assigned to the current user - for vol accs only
	
	//let assigned = data.pickupRequests.filter((item, index) => (item.assignedVolunteer === data.currAccount.username && item.requestStatus === 'In Progress'));

	let assigned = [];

	data.pickupRequests.forEach((item, index) => {

		if (item.assignedVolunteer === data.currAccount.username && item.requestStatus === "In Progress") {
			
			assigned.push({
				...item,
				arrID: index,
			});

		}

	})

	//Lists available pickup requests - for vol
	
	//let available = data.pickupRequests.filter((item, index) => (item.requestStatus === 'Available'));

	let available = [];

	data.pickupRequests.forEach((item, index) => {

		if (item.requestStatus === 'Available') {

				available.push({
				...item,
				arrID: index,
			});

		}

	})

	return (
		<div>
			{data.currAccount.accountType === 'business' ? (
				<>
					<h1>Business Dashboard</h1>
					<CreatePickupRequest />
					<h2>Issued pick request(s)</h2>
					{issued.map((item, index) => {
						return (
							<IssuedPickupRequest item={item} index={item.arrID} key={index} />
						);
					})}
				</>
			) : (
				<>
					<h1>Volunteer Dashboard</h1>

					<h3>Assigned Pickup Requests</h3>

					{assigned.map((item, index) => {
						return (
							<AssignedPickupRequest item={item} index={item.arrID} key={index} />
						);
					})}

					<h3>Available Pickup Requests</h3>

					{available.map((item, index) => {
						return (
							<PublicPickupRequest item={item} index={item.arrID} key={index} />
						);
					})}

					{/* <PublicPickupRequest /> */}
				</>
			)}
		</div>
	);
}

export default Dashboard;
