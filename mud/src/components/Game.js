import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';

// Components
import Movement from './Movement';
import Navigation from './nav/Navigation';
import Map from './map';

import { MapContext } from '../contexts/MapContext';

const Game = () => {
	const [currentRoomId, setCurrentRoomId] = useState()
	const { map, setMap } = useContext(MapContext)

	useEffect(() => {
		axios
			.get("https://cs25mudbuildweek.herokuapp.com/api/adv/map")
			.then(res => {
				console.log(res.data.map);
				const rooms = res.data.map;
				setMap(rooms);
			})
			.catch(err => console.log(err));
	}, []);

	// const move = direction => {
	// 	return 
	// }

	return (
		<div className="game">
			<Navigation />
			<Map />
			<Movement />
		</div>
	)
}

export default Game;