import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import BizProfile from './components/BizProfile';
import volProfile from './components/VolProfile';

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
          {/* Change to private route later (component={}) - add turnary to show volProfile or bizProfile depending on account type that's signed in?*/}
          {/* <BizProfile /> */}
          {/* <VolProfile /> */}
					<PrivateRoute exact path="/profile" component={BizProfile} />
				</div>
			</UserContext.Provider>
		</BrowserRouter>
	);
}

export default App;
