import React, { useState, useEffect } from "react";
// import { client } from "../utils/api";
import "./map.scss";
import axios from "axios";

const Map = () => {
	const [map, setmap] = useState([]);

	useEffect(() => {
		async function fetchMapLayout() {
			console.log("this here");
			const getDirections = await axios.get(
				"http://localhost:8000/api/adv/map"
			);
			setmap(getDirections);
		}
		fetchMapLayout();
	}, []);
	return (
		<div className="map">
			<div className="content">
				<div>
					<Card.Group>
						{map.data &&
							map.data.map(data => (
								<div key={data.id}>
									<Card></Card>
								</div>
							))}
					</Card.Group>
				</div>
			</div>
		</div>
	);
};

export default Map;
