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
        <Hero isHomepage="true"></Hero>
        <Section sectionId="about">
          <h2>About</h2>
          <code>
            <strong>J.Kevin Tu</strong><br/>
            Frontend Developer / Consultant<br/>
            -----------------------------------<br/>
            HTML/CSS<br/>
            Javascript (Vue, React, Angular)<br/>
            UI/UX/Branding (Photoshop, Sktech)<br/>
            SEO, SEM, Google Analytics<br/>
            508 Compliance<br/>
          </code>
          <p>
            <a href="https://www.linkedin.com/in/jkevintu">>> linkedin</a><br/>
            <a href="https://github.com/jkevintu">>> Github</a><br/>
            <a href="https://stackoverflow.com/users/527376/ktu">>> Stackoverflow</a>
          </p>
        </Section>
        <Section><hr/></Section>
        <Section sectionId="projects">
          <h2>Projects</h2>
          <div className="section-items">
            <ImageItem name="Gamer Sensei" subName="ecommerce"></ImageItem>
            <ImageItem name="Liaison"  subName="508 Compliance"></ImageItem>
            <ImageItem name="Pothole Sonar"></ImageItem>
          </div>
        </Section>
        <Section><hr/></Section>
        <Section sectionId="designs">
          <h2>Designs</h2>
          <div className="section-items">
            <ImageItem name="Poster"></ImageItem>
            <ImageItem name="Event Banner"></ImageItem>
          </div>
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
