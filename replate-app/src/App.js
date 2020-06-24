import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import NavigationBar from './components/NavigationBar';

import BizProfile from './components/Profiles/BizProfile';
import volProfile from './components/Profiles/VolProfile';
import CreateBizProfile from './components/Profiles/CreateBizProfile';
import CreateVolProfile from './components/Profiles/CreateVolProfile';
import Dashboard from './components/Dashboard';

import UserContext from './contexts/UserContext';

import PrivateRoute from './utils/PrivateRoute';

import './App.css';
import VolProfile from './components/Profiles/VolProfile';

function App() {
	let [userData, setUserData] = useState({
		placeholder: 'placeholder value',
	});

	return (
		<BrowserRouter>
			<UserContext.Provider value={userData}>
				<NavigationBar />

				<div className="App">
					{/* Add turnary to show correct component for /create-profile and /profile depending on account type that's signed in*/}
					<PrivateRoute
						exact
						path="/create-profile"
						component={CreateBizProfile}
					/>
					<PrivateRoute exact path="/profile" component={BizProfile} />
					{/* <PrivateRoute exact path="/profile" component={VolProfile} /> */}
					<PrivateRoute exact path="/dashboard" component={Dashboard} />
				</div>
			</UserContext.Provider>
		</BrowserRouter>
	);
}

export default App;
