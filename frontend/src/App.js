import React, { Component } from 'react';
import { Router } from 'react-router-dom';
// import { useHistory } from "react-router-dom";
// import Routes from './Routes';
import './App.css';
import Apps from './components/layouts/default'

function App() {
  return (
    <div className="App">
     <Apps></Apps>
      <Router>
        {/* <Routes /> */}
      </Router>
    </div>
  );
}

export default App;
