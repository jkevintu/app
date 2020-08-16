import React from "react";
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Section from "../components/Section"
import ImageItem from "../components/ImageItem"

import ScrollToTopOnMount from "../utils/ScrollToTopOnMount"

// Merge to project.js
import GamerSenseiImg from '../img/project-gamersensei.png';
import QuikforceImg from '../img/project-quikforce.png';
import MitcccsImg from '../img/design-mitcccs.png';
import CafePhiloImg from '../img/design-cafephilo.png';

const projects = [
  {
    id: 0,
    name: "Sensei Search 2.0",
    subName: "GamerSensei",
    url: "/app/gamer-sensei-ecommerce",
    imgSrc: GamerSenseiImg
  },
  {
    id: 1,
    name: "Quikforce",
    subName: "On-Demand moving service",
    url: "/app/quikforce",
    imgSrc: QuikforceImg
  },
  {
    id: 2,
    hidden: true,
    name: "508 Compliance",
    subName: "Liaison",
    url: "/app/508-compliance"
  },
  {
    id: 3,
    hidden: true,
    name: "Pothole Sonar",
    subName: "",
    url: "/app/gamer-sensei-ecommerce"
  },
];

const design = [
  {
    id: 1,
    name: "Brand",
    subName: "Logo / marketing content",
    url: "/app/brand",
  },
  {
    // hidden: true,
    id: 2,
    name: "MIT CCCS",
    subName: "Concert posters",
    url: "/app/mit-cccs",
    imgSrc: MitcccsImg
  },
  {
    id: 3,
    name: "Café Philo ＠ Boston",
    subName: "Event banners",
    url: "/app/cafe-philo-boston",
    imgSrc: CafePhiloImg
  },
]



export default function Home() {
  return (
    <Layout>
      <ScrollToTopOnMount />
      <Hero isHomePage={true}>
        <code style={{padding: '0 40px'}}>
          Be not afraid of greatness:
          some are born great,
          some achieve greatness,
          and some have greatness thrust upon them.
        </code>
      </Hero>
      <Section sectionId="about">
        <h2>About</h2>
        <code>
          <strong>J.Kevin Tu</strong><br/>
          Frontend Developer / Consultant<br/>
          -----------------------------------<br/>
          HTML/CSS<br/>
          Javascript (Vue, React, AngularJS)<br/>
          UI/UX/Brand (Sktech / Photoshop / InDesign)<br/>
          SEO, SEM, Google Analytics<br/>
          508 Compliance<br/>
        </code>
        <p className="about-links">
          <a href="mailto:ktu@jkevintu.com">ktu@jkevintu.com</a><br/><br/>
          <a href="https://www.linkedin.com/in/jkevintu">>> linkedin</a><br/>
          <a href="https://github.com/jkevintu">>> Github</a><br/>
          <a href="https://stackoverflow.com/users/527376/ktu">>> Stackoverflow</a>
        </p>
      </Section>
      <Section><hr/></Section>
      <Section sectionId="work">
        <h2>Work</h2>
        <div className="section-items">
          {
            projects.map(project => {
              if (project.hidden) return null;
              return (
                <ImageItem
                 key={project.id}
                 name={project.name}
                 subName={project.subName}
                 url={project.url}
                 imgSrc={project.imgSrc}></ImageItem>
               )
            })
          }
        </div>
      </Section>
      <Section><hr/></Section>
      <Section sectionId="design">
        <h2>Design</h2>
        <div className="section-items">
        {
            design.map(design => {
              if (design.hidden) return null;
              return (
                <ImageItem
                 key={design.id}
                 name={design.name}
                 subName={design.subName}
                 url={design.url}
                 imgSrc={design.imgSrc}></ImageItem>
               )
            })
          }
        </div>
      </Section>
    </Layout>
  )
}