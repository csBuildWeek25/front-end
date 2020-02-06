import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Components
import Movement from './Movement';
import Map from './map';

const Game = props => {
	const [currentRoomId, setCurrentRoomId] = useState()
	onst [map, setMap] = useState([]);

	useEffect(() => {
		axios.get('https://swapi.co/api/starships')
		.then(res => {
			console.log(res.data.results)
			const rooms = res.data.results
			setMap(rooms)
		})
	}, [])

	const move = direction => {
		return 
	}

	return (
		<div>
			<Map map={map}/>
			<Movement />
		</div>
	)
}

export default Game;