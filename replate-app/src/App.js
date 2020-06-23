import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import BizProfile from './components/BizProfile';
import volProfile from './components/VolProfile';
import CreateBizProfile from './components/CreateBizProfile';
import CreateVolProfile from './components/CreateVolProfile';

import UserContext from './contexts/UserContext';

import PrivateRoute from './utils/PrivateRoute';

import './App.css';

function App() {

  let [userData, setUserData] = useState({

    placeholder: 'placeholder value'

  });
  
	return (
		<BrowserRouter>
			<UserContext.Provider value={userData}>
				<div className="App">
					{' '}
					{/* Add turnary to show correct component for /create-profile and /profile depending on account type that's signed in*/}
					<PrivateRoute exact path="/create-profile" component={CreateBizProfile} />
					<PrivateRoute exact path="/profile" component={BizProfile} />
				</div>
			</UserContext.Provider>
		</BrowserRouter>
	);
}

export default App;
