import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';

// Components
import Movement from './Movement';
import Map from './map';

import { MapContext } from '../contexts/MapContext';

const Game = () => {
	const [currentRoomId, setCurrentRoomId] = useState()
	const { map, setMap } = useContext(MapContext)

	useEffect(() => {
		axios
			.get("https://swapi.co/api/starships")
			.then(res => {
				console.log(res.data.results);
				const rooms = res.data.results;
				setMap(rooms);
			})
			.catch(err => console.log(err));
	}, []);

	// const move = direction => {
	// 	return 
	// }

	return (
		<div className="game">
			<Map />
			<Movement />
		</div>
	)
}

export default Game;