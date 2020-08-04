import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import GamerSensei from "./pages/GamerSensei";
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/gamer-sensei" component={GamerSensei} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>

  );
}

export default App;
