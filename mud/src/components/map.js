import React, { useState, useEffect, useContext } from "react";
import { client } from "../utils/api";
import "./map.scss";

import { Room } from "./Room";

import { MapContext } from '../contexts/MapContext';

const Map = () => {
	const { map, setMap } = useContext(MapContext);

//   useEffect(() => {
//     async function fetchMapLayout() {
//       const getDirections = client.get("/api/adv/move");
//       setmap(getDirections);
//     }
// 	fetchMapLayout();

//   }, []);

  
  return (
    <div className="map">
      <div className="content">
        {map.map(room => (
			<Room key={room.id} room={room} />
		))}
      </div>
      <div className="content">
        {map.map(room => (
			<Room key={room.id} room={room} />
		))}
      </div>
      <div className="content">
        {map.map(room => (
			<Room key={room.id} room={room} />
		))}
      </div>
      <div className="content">
        {map.map(room => (
			<Room key={room.id} room={room} />
		))}
      </div>
      <div className="content">
        {map.map(room => (
			<Room key={room.id} room={room} />
		))}
      </div>
      <div className="content">
        {map.map(room => (
			<Room key={room.id} room={room} />
		))}
      </div>
      <div className="content">
        {map.map(room => (
			<Room key={room.id} room={room} />
		))}
      </div>
      <div className="content">
        {map.map(room => (
			<Room key={room.id} room={room} />
		))}
      </div>
      <div className="content">
        {map.map(room => (
			<Room key={room.id} room={room} />
		))}
      </div>
      <div className="content">
        {map.map(room => (
			<Room key={room.id} room={room} />
		))}
      </div>
    </div>
  );
};

export default Map;
