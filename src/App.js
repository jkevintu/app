import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import ProjectTemplate from "./pages/ProjectTemplate"
import GamerSensei from "./pages/GamerSensei"
import Quikforce from "./pages/Quikforce"
import Liaison from "./pages/Liaison"
import Brand from "./pages/Brand"
import Mitcccs from "./pages/Mitcccs"
import CafePhiloBoston from "./pages/CafePhiloBoston"
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/app/gamer-sensei-ecommerce" component={GamerSensei} />
          <Route path="/app/quikforce" component={Quikforce} />
          <Route path="/app/Brand" component={Brand} />
          <Route path="/app/mit-cccs" component={Mitcccs} />
          <Route path="/app/cafe-philo-boston" component={CafePhiloBoston} />
          <Route path="/app/project-template" component={ProjectTemplate} />
          <Route path="/app/508-compliance" component={Liaison} />
          <Route path="/app" component={Home} />
        </Switch>
      </Router>

  );
}

export default App;
