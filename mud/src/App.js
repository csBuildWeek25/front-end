import React from 'react';
import logo from './logo.svg';
import './App.css';
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
      <Route path="/login" component={Login} />
      <ProtectedRoute path="/register" component={Register} />
    </div>
  );
}

export default App;
