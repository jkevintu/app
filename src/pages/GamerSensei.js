import React from "react";
import ProjectLayout from "../components/ProjectLayout"
import Hero from "../components/Hero"
import Section from "../components/Section"
import SectionProjectDesc from "../components/SectionProjectDesc"

import ScrollToTopOnMount from "../utils/ScrollToTopOnMount"


// import DEFAULT_IMG from '../img/default-project-pic.png';
import GamerSenseiImg from '../img/project-gamersensei.png';


export default function GamerSensei(props) {
  return (
    <ProjectLayout>
      <ScrollToTopOnMount />
      {/* <Hero isHomePage={false} heroImgUrl={DEFAULT_IMG}> */}
      <Hero isHomePage={false} heroImgUrl={GamerSenseiImg}>
        <h1>Sensei Search 2.0</h1>
        <sub>GamerSensei // 2016 - 2017</sub>
      </Hero>
      <Section className="flex">
        <SectionProjectDesc className="large" linkText="Launch Website" linkUrl="https://gamersensei.com/senseis/searches">
          <p className="project-major-desc">
            Next generation eSports coaching: design and reimagine ecommerce experience
          </p>
        </SectionProjectDesc>
        <SectionProjectDesc className="small">
          <div className="desc-wrapper">
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
          </div>
        </SectionProjectDesc>
      </Section>
    </ProjectLayout>
  )
}