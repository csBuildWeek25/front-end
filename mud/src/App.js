import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";

import "./App.css";

// Components
import Game from "./components/Game";
import Login from "./components/Login";
import Register from "./components/Register";

// Contexts
import { UserContext } from "./contexts/UserContext";
import { MapContext } from "./contexts/MapContext";

const ProtectedRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={props =>
				localStorage.getItem("token") ? (
					<Component {...props} />
				) : (
					<Redirect to="/login" />
				)
			}
		/>
	);
};

function App() {
	const [user, setUser] = useState();
	const [map, setMap] = useState([]);

	return (
		<UserContext.Provider value={{ user, setUser }}>
			<MapContext.Provider value={{ map, setMap }}>
				<div className="App">
					<header className="App-header">
						Welcome To The Adventure Game
					</header>
					<Route path="/login" component={Login} />
					<Route path="/" component={Game} />
					<ProtectedRoute path="/register" component={Register} />
				</div>
			</MapContext.Provider>
		</UserContext.Provider>
	);
}

export default App;
