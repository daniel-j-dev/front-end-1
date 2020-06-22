import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import BizProfile from './components/BizProfile';
import volProfile from './components/VolProfile';

import './App.css';
import VolProfile from './components/VolProfile';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Route path="/profile"> {/* Change to private route later (component={}) - add turnary to show volProfile or bizProfile depending on account type that's signed in?*/}
					<BizProfile />
          {/* <VolProfile /> */}
				</Route>
			</div>
		</BrowserRouter>
	);
}

export default App;
