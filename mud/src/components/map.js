import React, { useState, useEffect } from "react";
// import { client } from "../utils/api";
import axios from "axios";
import { Card, Button } from "semantic-ui-react";

import "./map.scss";
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
	console.log(map);
	return (
		<div className="map">
			<div className="content">
				<div>
					<Card.Group>
						{/* {map.data &&
							map.data.map(data => (
								<div key={data.id}>
									<Card.Header>{data.title}</Card.Header>
									<Card.Description>
										{data.description}
									</Card.Description>
									<Button>North</Button>
									<Button>South</Button>
									<Button>East</Button>
									<Button>West</Button>
								</div>
							))} */}
					</Card.Group>
				</div>
			</div>
		</div>
	);
};

export default Map;
