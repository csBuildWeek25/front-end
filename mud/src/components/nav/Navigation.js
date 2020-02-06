import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
	return (
		<div className="nav">
			<NavLink to="/logout" >Logout</NavLink>
		</div>
	)
}

export default Navigation;