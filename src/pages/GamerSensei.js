import React from "react";
import ProjectLayout from "../components/ProjectLayout"
import Hero from "../components/Hero"
import Section from "../components/Section"

import SectionProjectDesc from "../components/SectionProjectDesc"
// import DEFAULT_IMG from '../img/default-project-pic.png';


export default function GamerSensei(props) {
  return (
    <ProjectLayout>
      {/* <Hero isHomepage={false} heroImgUrl={DEFAULT_IMG}> */}
      <Hero isHomepage={false}>
        <h1>Gamer Sensei</h1>
        <sub>ecommerce platform redesign</sub>
      </Hero>
      <Section className="flex">
        <SectionProjectDesc linkText="Launch Website" linkUrl="https://gamersensei.com/senseis/searches">
          <p className="project-major-desc">
            Next generation eSports coaching: design and reimagine ecommerce experience
          </p>
        </SectionProjectDesc>
        <SectionProjectDesc>
          <p>
            <div className="desc-title">Role</div>
            <div className="desc-content">
              Web consultant / Sr.Frontend Engineer<br/>
            </div>
            <br/>
            <div className="desc-title">Time Frame</div>
            <div className="desc-content">
              Sep 2016 - Oct 2017
            </div>
            <br/>
            <div className="desc-title">Languages</div>
            <div className="desc-content">
              AngularJS / Ruby on Rails
            </div>
          </p>
        </SectionProjectDesc>
      </Section>
    </ProjectLayout>
  )
}