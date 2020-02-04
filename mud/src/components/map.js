import React, { useState, useEffect } from "react";
import { client } from "../utils/api";
import "./map.scss";

const Map = () => {
	const [map, setmap] = useState([]);

	useEffect(() => {
		client.get("/api/move/");
	}, []);
	return (
		<div className="map">
			<div className="content">display</div>
		</div>
	);
};

export default Map;
