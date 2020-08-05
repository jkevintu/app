import React from "react";
import ProjectLayout from "../components/ProjectLayout"
import Hero from "../components/Hero"
import Section from "../components/Section"
import SectionProjectDesc from "../components/SectionProjectDesc"
import SectionProfileCard from "../components/SectionProfileCard"
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
      <Section className="video noPaddingTop noPaddingMobile">
        <iframe title="video" width="100%" height="630px" src="https://www.youtube.com/embed/Y8-Q4h_LGSM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </Section>
      <div className="section-wrapper dark">
        <Section className="dark flex">
          <SectionProfileCard>
            <div className="section-profile-title">Problem</div>
            <div className="section-profile-subtitle">Lorem ipsum dolor sit amet</div>
            <div className="section-profile-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
          </SectionProfileCard>
          <SectionProfileCard>
            <div className="section-profile-title">Thinking</div>
            <div className="section-profile-subtitle">Lorem ipsum dolor sit amet</div>
            <div className="section-profile-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
          </SectionProfileCard>
          <SectionProfileCard>
            <div className="section-profile-title">Result</div>
            <div className="section-profile-subtitle">Lorem ipsum dolor sit amet</div>
            <div className="section-profile-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
          </SectionProfileCard>
        </Section>
      </div>

    </ProjectLayout>
  )
}