import React from "react";
import ProjectLayout from "../components/ProjectLayout"
import Hero from "../components/Hero"
import Section from "../components/Section"
import SectionProjectDesc from "../components/SectionProjectDesc"
import SectionProfileCard from "../components/SectionProfileCard"
import SectionProfileImage from "../components/SectionProfileImage"
import SectionProfileWrapper from "../components/SectionProfileWrapper"
import SectionProfileDetail from "../components/SectionProfileDetail"
// util
import ScrollToTopOnMount from "../utils/ScrollToTopOnMount"

// import DEFAULT_IMG from '../img/default-project-pic.png';
import GamerSenseiImg from '../img/project-gamersensei.png';
import GamerSenseiImg0 from '../img/project-gamersensei-0.png';
import GamerSenseiImg1 from '../img/project-gamersensei-1.png';
import GamerSenseiImg2 from '../img/project-gamersensei-2.png';


export default function GamerSensei(props) {
  return (
    <ProjectLayout>
      <ScrollToTopOnMount />
      <Hero isHomePage={false} heroImgUrl={GamerSenseiImg}>
        <h1>Sensei Search 2.0</h1>
        <sub>GamerSensei // 2016 - 2017</sub>
      </Hero>
      <Section className="flex">
        <SectionProjectDesc className="large" linkText="Launch Website" linkUrl="https://gamersensei.com/senseis/searches">
          <p className="project-major-desc">
            Our goal was to deliver new ecommerce shopping experience to students when shopping for coaches
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
            <div className="desc-title">Technologies</div>
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
            <div className="section-profile-title">Solution</div>
            <div className="section-profile-subtitle">Built from working prototype to Minimum Viable Product</div>
            <div className="section-profile-content">
              After the analysis we trim the mockup and come up with a proposal that only core functions were left, also we create stories and prioritize them with business so we know at what stage that our MVP is testable or releasable
            </div>
          </SectionProfileCard>
        </Section>
      </div>
      <Section>
        <SectionProfileImage name="Before and after the mockup change" imgURL={GamerSenseiImg1}/>
        <SectionProfileWrapper>
          <SectionProfileDetail className="title">
            Define the scope of a usable prototype with existing and upcoming features
          </SectionProfileDetail>
          <SectionProfileDetail className="content">
            <p>When business side and designers are building something brand new, it's common to throw-in too many features at the same time. It's reasonable that product person having the end goal of the product in mind, however it will become a giant monster if try to break up stories from it.</p>
            <p>For teams that used to work in a bigger size of company, it's easy to have the mindset: 'Things only releasable when every features are done'. This often makes the project size too big, hard to develop and very hard to test.</p>
            <p>To break down the features into smaller and digestible chunks, a very important principle to ask ourselves : "What doe users want?" and "What service can we provide them at the moment?"</p>
            <p>For example, at the very beginning the API was only capable of return list of coaches using only by name of the game, that gave us a good foundation of: "What are the best tower we can build base on the tecnologies we have?"</p>
          </SectionProfileDetail>
        </SectionProfileWrapper>
        <SectionProfileWrapper>
          <SectionProfileImage name="Feature analysis" captionShow={true} imgURL={GamerSenseiImg2}/>
        </SectionProfileWrapper>
        <SectionProfileWrapper>
          <SectionProfileDetail className="title">
            Identify "Core features" or "Good to have"
          </SectionProfileDetail>
          <SectionProfileDetail className="content">
            <p>However we have to keep in mind that identify what are the low haning fruits might be simple, but that doesn't mean we have to implemet all of them.</p>
            <p>When doing prototyping it's easy to fall in the pitfall when business think this is <i>"Easy to to"</i>. Not only the development time has cost, it also can impact if the product make sense in the middle of development.</p>
          </SectionProfileDetail>
        </SectionProfileWrapper>
      </Section>
    </ProjectLayout>
  )
}