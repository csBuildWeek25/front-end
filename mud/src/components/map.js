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
			const getMap = await axios.get("http://localhost:8000/api/adv/map");
			setmap({ getMap });
		}
		fetchMapLayout();
	}, []);
	console.log(map.getMap);
	return (
		<div className="game">
			<div className="map">
				<div className="content">
					<Card.Group>
						{map.getMap &&
							map.getMap.data.map.map(data => (
								<div
									key={data.id}
									style={{
										display: "flex",
										flexWrap: "wrap",
										height: "100px",
										width: "100px",
										margin: "30px 30px",
									}}
								>
									<Card>
										<Card.Header>{data.title}</Card.Header>
										<Card.Description>
											{data.description}
										</Card.Description>
									</Card>
								</div>
							))}
					</Card.Group>
				</div>
			</div>
			<div className="buttons">
				<Button className="btn">North</Button>
				<Button className="btn">South</Button>
				<Button className="btn">East</Button>
				<Button className="btn">West</Button>
			</div>
		</div>
	);
};

export default Map;
