import React from 'react';
import { Link } from 'react-router-dom';

import './navigationbar.css';

function NavigationBar(props) {
    return (
			<nav className="top-nav-bar">
				<Link to="/dashboard">Dashboard</Link>
				<Link to="/profile">Profile</Link>
				<Link to="/logout">Logout</Link>
			</nav>
		);
}

export default NavigationBar;