import React from "react";
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Section from "../components/Section"
import ImageItem from "../components/ImageItem"

import ScrollToTopOnMount from "../utils/ScrollToTopOnMount"

const projects = [
  {
    name: "Sensei Search 2.0",
    subName: "GamerSensei // Ecommerce platform",
    url: "/app/gamer-sensei-ecommerce"
  },
  {
    hidden: true,
    name: "508 Compliance",
    subName: "Liaison",
    url: "/app/508-compliance"
  },
  {
    hidden: true,
    name: "Pothole Sonar",
    subName: "",
    url: "/app/gamer-sensei-ecommerce"
  },
]

export default function Home() {
  return (
    <Layout>
      <ScrollToTopOnMount />
      <Hero isHomePage={true}>
        <code>
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
          Javascript (Vue, React, Angular)<br/>
          UI/UX/Branding (Photoshop, Sktech)<br/>
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
      <Section sectionId="projects">
        <h2>Projects</h2>
        <div className="section-items">
          {
            projects.map(project => {
              if (project.hidden) return null;
              return (
                <ImageItem
                 name={project.name}
                 subName={project.subName}
                 url={project.url}></ImageItem>
               )
            })
          }
        </div>
      </Section>
      <Section><hr/></Section>
      <Section sectionId="designs">
        <h2>Designs</h2>
        <div className="section-items">
          <ImageItem name="Posters" url="/app/posters"></ImageItem>
          <ImageItem name="Event Banner" url="/app/event-banner"></ImageItem>
        </div>
      </Section>
    </Layout>
  )
}