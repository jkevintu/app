import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProjectTemplate from "./pages/ProjectTemplate";
import GamerSensei from "./pages/GamerSensei";
import Quikforce from "./pages/Quikforce";
import Liaison from "./pages/Liaison";
import Websites from "./pages/Websites";
import Brand from "./pages/Brand";
import Mitcccs from "./pages/Mitcccs";
import CafePhiloBoston from "./pages/CafePhiloBoston";
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/app/gamer-sensei-ecommerce" element={GamerSensei()} />
        <Route path="/app/quikforce" element={Quikforce()} />
        <Route path="/app/Websites" element={Websites()} />
        <Route path="/app/Brand" element={Brand()} />
        <Route path="/app/mit-cccs" element={Mitcccs()} />
        <Route path="/app/cafe-philo-boston" element={CafePhiloBoston()} />
        <Route path="/app/project-template" element={ProjectTemplate()} />
        <Route path="/app/508-compliance" element={Liaison()} />
        <Route path="/app" element={Home()} />
      </Routes>
    </Router>
  );
}

export default App;
