import React from "react";
import ProjectLayout from "../components/ProjectLayout"
import Hero from "../components/Hero"
import Section from "../components/Section"
import SectionProjectDesc from "../components/SectionProjectDesc"
import SectionProfileCard from "../components/SectionProfileCard"
import SectionProfileImage from "../components/SectionProfileImage"
import ScrollToTopOnMount from "../utils/ScrollToTopOnMount"


// import DEFAULT_IMG from '../img/default-project-pic.png';
import GamerSenseiImg from '../img/project-gamersensei.png';
import GamerSenseiImg0 from '../img/project-gamersensei-0.png';


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
            Our task was to deliver new ecommerce shopping experience to students when shopping for senseis (coaches)
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
      <Section>
        <SectionProfileImage name="Gamesensei website on a Mac monitor" imgURL={GamerSenseiImg0}/>
      </Section>
      <div className="section-wrapper dark">
        <Section className="dark flex">
          <SectionProfileCard>
            <div className="section-profile-title">Problem</div>
            <div className="section-profile-subtitle">How to build ecommerce service from scrath?</div>
            <div className="section-profile-content">
              In order to deliver the full experience we are comparing ourselves with mature product like Amazon or Walmart, there was a huge gap between the final product and mockup
            </div>
          </SectionProfileCard>
          <SectionProfileCard>
            <div className="section-profile-title">Thinking</div>
            <div className="section-profile-subtitle">Resources and Milestone</div>
            <div className="section-profile-content">
              Thought we know what the end product look like, there are things need to clarify: <i>"How can we break down the problem? How do we define clear timelines?"</i>  ... The goal is the business side knows when to jump in and make suggestion and improvement without false expectations
            </div>
          </SectionProfileCard>
          <SectionProfileCard>
            <div className="section-profile-title">Result</div>
            <div className="section-profile-subtitle">Cheery-pick features for Minimum Viable Product</div>
            <div className="section-profile-content">
              After the analysis we trim the mockup and come up with a proposal that only core functions were left, also we create stories and prioritize them with business so we know at what stage that our MVP is testable or releasable
            </div>
          </SectionProfileCard>
        </Section>
      </div>
      {/* <!-- it's easy to identify low hanging fruits, however  --> */}
    </ProjectLayout>
  )
}