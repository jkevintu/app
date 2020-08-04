import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import GamerSensei from "./pages/GamerSensei";
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/gamer-sensei" component={GamerSensei} />
    </Router>
  );
}

export default App;
