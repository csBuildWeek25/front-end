import React, { useState, useEffect } from "react";
import { client } from "../utils/api";
import "./map.scss";

import { Room } from "./Room";

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
      <div className="content">
        <Room />
      </div>
    </div>
  );
};

export default Map;
