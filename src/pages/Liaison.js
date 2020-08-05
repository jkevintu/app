import React from "react";
import ProjectLayout from "../components/ProjectLayout"
import Hero from "../components/Hero"
import Section from "../components/Section"
import SectionProjectDesc from "../components/SectionProjectDesc"

import ScrollToTopOnMount from "../utils/ScrollToTopOnMount"


// import DEFAULT_IMG from '../img/default-project-pic.png';


export default function Liaison(props) {
  return (
    <ProjectLayout>
      <ScrollToTopOnMount />
      {/* <Hero isHomePage={false} heroImgUrl={DEFAULT_IMG}> */}
      <Hero isHomePage={false}>
        <h1>Liaison</h1>
        <sub>508 Compliance</sub>
      </Hero>
      <Section className="flex">
        <SectionProjectDesc>
          <p className="project-major-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </SectionProjectDesc>
        <SectionProjectDesc>
          <div className="desc-wrapper">
            <div className="desc-title">Role</div>
            <div className="desc-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit<br/>
            </div>
            <br/>
            <div className="desc-title">Time Frame</div>
            <div className="desc-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </div>
            <br/>
            <div className="desc-title">Languages</div>
            <div className="desc-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </div>
          </div>
        </SectionProjectDesc>
      </Section>
    </ProjectLayout>
  )
}