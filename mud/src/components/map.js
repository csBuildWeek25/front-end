import React, { useState, useEffect } from "react";
import axios from 'axios';
import { client } from "../utils/api";
import "./map.scss";

import { Room } from "./Room";
import Axios from "axios";

const Map = ({ map }) => {

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
