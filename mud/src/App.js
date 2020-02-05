import React from "react";
import Map from "./components/map";
import { Room } from "./components/Room";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Welcome to The Adventure game
      </header>
      <Map />
    </div>
  );
}

export default App;
