import React, { useState, useEffect } from "react";
import { client } from "../utils/api";
import "./map.scss";

const Map = () => {
	const [map, setmap] = useState([]);

	useEffect(() => {
		async function fetchMapLayout() {
			const getDirections = client.get("/api/adv/move");
			setmap(getDirections);
		}
		fetchMapLayout();
	}, []);
	return (
		<div className="map">
			<div className="content">display</div>
		</div>
	);
};

export default Map;
