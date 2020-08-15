import React from "react";
import ProjectLayout from "../components/ProjectLayout"
import Hero from "../components/Hero"
import Section from "../components/Section"
import SectionProjectDesc from "../components/SectionProjectDesc"
import SectionProfileCard from "../components/SectionProfileCard"
import SectionProfileImage from "../components/SectionProfileImage"
import SectionProfileWrapper from "../components/SectionProfileWrapper"
import SectionProfileDetail from "../components/SectionProfileDetail"
import ScrollToTopOnMount from "../utils/ScrollToTopOnMount"

import QuikforceImg from '../img/project-quikforce.png';
import QuikforceImg1 from '../img/project-quikforce-booking-desktop.jpg';
import QuikforceImg2 from '../img/project-quikforce-booking-mobile.jpg';
import QuikforceImg3 from '../img/project-quikforce-3.jpg';


export default function Quikforce(props) {
  return (
    <ProjectLayout>
      <ScrollToTopOnMount />
      <Hero isHomePage={false} heroImgUrl={QuikforceImg}>
        <h1>Quikforce</h1>
        <sub>On-Demand moving service</sub>
      </Hero>
      <Section className="flex">
        <SectionProjectDesc className="large" linkText="Open Website" linkUrl="https://bluepanda007.herokuapp.com/">
          <p className="project-major-desc">
            Our goal was to build an O2O platform that makes moving no longer stressful and painful
          </p>
        </SectionProjectDesc>
        <SectionProjectDesc className="small">
          <div className="desc-wrapper">
            <div className="desc-title">Role</div>
            <div className="desc-content">
            Co-founder, CTO
            </div>
            <br/>
            <div className="desc-title">Time Frame</div>
            <div className="desc-content">
            Sep 2015 - Sep 2016
            </div>
            <br/>
            <div className="desc-title">Technologies</div>
            <div className="desc-content">
            AngularJS, Python, Firebase, Stripe
            </div>
          </div>
        </SectionProjectDesc>
      </Section>
      <Section className="flex">
        <SectionProfileImage name="Structure" imgURL={QuikforceImg1}/>
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
      <Section>
        <SectionProfileImage name="Structure" imgURL={QuikforceImg2}/>
        <SectionProfileWrapper>
          <SectionProfileDetail className="title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </SectionProfileDetail>
          <SectionProfileDetail className="content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
          </SectionProfileDetail>
        </SectionProfileWrapper>
        <SectionProfileWrapper>
          <iframe title="video" width="100%" height="630px" src="https://www.youtube.com/embed/TzWd8Vgsabw" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </SectionProfileWrapper>
        <SectionProfileWrapper>
          <SectionProfileImage name="Structure" imgURL={QuikforceImg3}/>
        </SectionProfileWrapper>
      </Section>


    </ProjectLayout>
  )
}