import React, { Component } from 'react';
import { Router, BrowserRouter, Switch } from 'react-router-dom';
// import { useHistory } from "react-router-dom";
// import Routes from './Routes';
import './App.css';
import Apps from './components/layouts/default'
// import Login from './Login';
// import Dashboard from './Dashboard';
// import Settings from './Settings';


function App() {
  return (
    <div className="App">
     <Apps></Apps>
      {/* <Router>
        <Routes />
      </Router> */}
    </div>
  );
}

export default App;
