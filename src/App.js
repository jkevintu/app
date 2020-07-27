import React from 'react';
import Layout from "./components/Layout"
import Hero from "./components/Hero"
import Section from "./components/Section"
import ImageItem from "./components/ImageItem"
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <Hero></Hero>
        <Section sectionId="projects">
          <h2>Projects</h2>
          <div className="section-items">
            <ImageItem name="Gamer Sensei"></ImageItem>
            <ImageItem name="AAA"></ImageItem>
            <ImageItem name="BBB"></ImageItem>
          </div>
        </Section>
        <Section><hr/></Section>
        <Section sectionId="about">
          <h2>About</h2>  
        </Section>
      </Layout>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
