import React from "react";
import Map from "./components/map";
import { Room } from "./components/Room";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Map />
        Welcome to The Adventure game
      </header>
      <div>
        <Room />
      </div>
    </div>
  );
}

export default App;
