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
import QuikforceImg4 from '../img/project-quikforce-4.png';
import QuikforceImg5 from '../img/project-quikforce-5.png';


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
        <SectionProfileImage name="Quikforce website on desktop" imgURL={QuikforceImg1}/>
      </Section>
      <div className="section-wrapper dark">
        <Section className="dark flex">
          <SectionProfileCard>
            <div className="section-profile-title">
              Problem
            </div>
            <div className="section-profile-subtitle">
              Moving is painful
            </div>
            <div className="section-profile-content">
              Prior the moving, movers will send a guy to estimate how long is the moving and send you a quote, however the quote is not final and can be changed due to many reasons. Also,  many movers still only accept cash payments
            </div>
          </SectionProfileCard>
          <SectionProfileCard>
            <div className="section-profile-title">Thinking</div>
            <div className="section-profile-subtitle">
              How to resolve user's pain points using technologies?
            </div>
            <div className="section-profile-content">
              For movers, the major factor that affect total moving cost is by<i>Time</i>, but a lot of the movers chose to not disclose this information. The lack of transparenncy and uncertainty often makes movees uncomfortable and unhappy about the total moving experience
            </div>
          </SectionProfileCard>
          <SectionProfileCard>
            <div className="section-profile-title">
              Solution
            </div>
            <div className="section-profile-subtitle">
              One-stop-shop for both movers and movees
            </div>
            <div className="section-profile-content">
              We built and provide an online quoting and scheduling software for people who want to move, also we created a portal for movers to accept / manage their moving schedules
            </div>
          </SectionProfileCard>
        </Section>
      </div>
      <Section>
        <SectionProfileImage name="Moving estimate and booking software" imgURL={QuikforceImg5}/>
        <SectionProfileWrapper>
          <SectionProfileDetail className="title">
            Adpatie and adjust from suggestions from real customers
          </SectionProfileDetail>
          <SectionProfileDetail className="content">
            <p>It is almost impossible to learn about moving industry if sitting at home, before the product launch we need to find the partners that are interested working with us and learn how does the current moving workflow looks like.</p>
            <p>After went on 100+ moves, we collect feedbacks and suggesiton from actual cusomters and movers, and improve our product from their feedback. </p>
            <p>We end have having 200+ moves, over 100k revenues within 3 months.</p>
          </SectionProfileDetail>
        </SectionProfileWrapper>
        <SectionProfileWrapper>
          <SectionProfileImage name="Mover's dashboard" imgURL={QuikforceImg4}/>
        </SectionProfileWrapper>
        <SectionProfileWrapper>
          <SectionProfileImage name="Quikforce website on mobile" imgURL={QuikforceImg2}/>
        </SectionProfileWrapper>
        <SectionProfileWrapper>
          <iframe title="video" width="100%" height="630px" src="https://www.youtube.com/embed/TzWd8Vgsabw" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </SectionProfileWrapper>
        <SectionProfileWrapper>
          <SectionProfileImage name="Quikforce moving" imgURL={QuikforceImg3}/>
        </SectionProfileWrapper>
      </Section>


    </ProjectLayout>
  )
}