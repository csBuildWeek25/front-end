import React from "react";

import "./Room.scss";

export const Room = props => {
	console.log(props.room)
return <div className="room-container">{props.room.id}</div>;
};
