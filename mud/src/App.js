import React from "react";
import "./App.css";
import { Route, Redirect } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Map from "./components/map";

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
	return (
		<div className="App">
			<Route path="/login" component={Login} />
			<ProtectedRoute path="/register" component={Register} />
			<Route path="/game" component={Map} />
		</div>
	);
}

export default App;
