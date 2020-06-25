import React, { useState } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';


//Components

import Signup from './components/Signup';
import Signin from './components/Signin';
import PrivateRoute from './utils/PrivateRoute';
import NavigationBar from './components/NavigationBar';
import BizProfile from './components/Profiles/BizProfile';
import VolProfile from './components/Profiles/VolProfile';
import CreateBizProfile from './components/Profiles/CreateBizProfile';
import CreateVolProfile from './components/Profiles/CreateVolProfile';
import Dashboard from './components/Dashboard';

//Context

import MainContext from './contexts/MainContext';

//Other

import './App.css';


function App() {

	//Mock API Data

	let [data, setData] = useState({
		accounts: [
			{
				username: 'biz',
				password: 'biz',
				businessName: '',
				businessAddress: '',
				phoneNumber: '1234567890',
				accountType: 'business',
			},
			{
				username: 'vol',
				password: 'vol',
				volunteerName: '',
				phoneNumber: '1234567890',
				accountType: 'volunteer',
			},
		],

		currAccount: {
			username: '',
			businessName: '',
			businessAddress: '',
			volunteerName: '',
			phoneNumber: '',
			accountType: '',
			arrID: 999999,
		},

		pickupRequests: [
			{
				foodType: 'fruit',
				weight: '1lb',
				pickupDate: '2020-06-27T13:41',
				issuedBy: 'biz', //Biz acc username that issued it
				requestStatus: 'In Progress', //Available, In Progress or Complete
				assignedVolunteer: 'vol',
			},
			{
				foodType: 'idk',
				weight: '1,000lb',
				pickupDate: '2020-06-27T13:41',
				issuedBy: 'biz', //Biz acc username that issued it
				requestStatus: 'Available', //Available, In Progress or Complete
				assignedVolunteer: '',
			},
		],
	});

	let profileLogic = () => {

		switch(data.currAccount.accountType){

			case 'business':
				return <BizProfile />

		}

	}

	return (
		<BrowserRouter>
			<MainContext.Provider value={{ data, setData }}>
				<NavigationBar />

				<div className="App">
					<Route exact path="/">
						<Redirect to="/signin" />
					</Route>
					<PrivateRoute exact path="/signup" component={Signup} />
					<PrivateRoute exact path="/signin" component={Signin} />
					<PrivateRoute
						exact
						path="/create-profile"
						component={CreateBizProfile}
					/>
					
					{data.currAccount.accountType === 'business' ? (
						<PrivateRoute exact path="/profile" component={BizProfile} />
					) : (
						<PrivateRoute exact path="/profile" component={VolProfile} />
					)}

					<PrivateRoute exact path="/dashboard" component={Dashboard} />
				</div>
			</MainContext.Provider>
		</BrowserRouter>
	);
}

export default App;
