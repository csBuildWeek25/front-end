import React from "react";
import Map from "./components/map";
import { Room } from "./components/Room";
import "./App.css";
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Redirect } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';

const ProtectedRoute = ({component: Component, ...rest}) => {
  return <Route {...rest} render={props => 
    localStorage.getItem('token') ? (
      <Component {...props} />
    ) : (
      <Redirect to="/login" />
    )
  } />
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Welcome To The Adventure Game
      </header>
      <Map />
      <Route path="/login" component={Login} />
      <ProtectedRoute path="/register" component={Register} />
    </div>
  );
}

export default App;
