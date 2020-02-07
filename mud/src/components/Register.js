import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Register = props => {
	const [creds, setCreds] = useState({ username: "", password: "" });

	const handleChange = event => {
		setCreds({ ...creds, [event.target.name]: event.target.value });
	};

	const handleSubmit = event => {
		event.preventDefault();
		console.log(creds);
		axiosWithAuth.post("/register", creds).then(res => {
			localStorage.setItem("token", res.data.payload);
		});
	};

	return (
		<>
			<h2>Register</h2>
			<form className="form" onSubmit={handleSubmit}>
				<input
					type="text"
					name="username"
					value={creds.username}
					onChange={handleChange}
				/>
				<input
					type="password"
					name="password"
					value={creds.password}
					onChange={handleChange}
				/>
				<button onClick={handleSubmit}>Submit</button>
			</form>
		</>
	);
};

export default Register;
