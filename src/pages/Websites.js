import React from "react";
import ProjectLayout from "../components/ProjectLayout";
import Hero from "../components/Hero";
import Section from "../components/Section";
import SectionProjectDesc from "../components/SectionProjectDesc";
import SectionProfileImage from "../components/SectionProfileImage";
import SectionProfileWrapper from "../components/SectionProfileWrapper";
import SectionProfileDetail from "../components/SectionProfileDetail";
import ScrollToTopOnMount from "../utils/ScrollToTopOnMount";

import BrandImg from "../img/design-brand.png";
import moebosImg from "../img/website-moebos.png";
import apitchDayImg from "../img/website-apitchday.png";

const websites = [
  {
    id: 0,
    imageURL: moebosImg,
    name: "Education Division, Taipei economic and cultural office in Boston",
    url: "http://www.moebos.org/",
    timeframe: "2014",
    content: [
      "The Education Division promotes educational cooperation and exchange between academic institutions in the ROC on Taiwan and their counterparts in the United States. The Division also provides educational information about Taiwan, especially as it relates to opportunities of studying in Taiwan.",
    ],
  },
  {
    id: 2,
    timeframe: "2018",
    imageURL: apitchDayImg,
    name: "APitch Day",
    url: "https://www.apitchday.com/",
    content: [
      "APitch Day is an event organized by non-profit organizations, Taiwan Chamber of Commerce of New England (TCCNE) and Taiwan Youth Chamber of Commerce of New England (TYCCNE).",
      "Boston is known for its rich entrepreneurial culture and diverse international population. About 14% of all residents in Massachusetts are foreign-born, and a large number of them come here to study and work with the top science and tech innovations in the world. Other science and tech-focused cities in the world, such as Taipei, often look to Boston as a model to build their own innovation ecosystems.",
      "Seeing this opportunity, TCCNE and TYCCNE came together to create APitch Day, a platform for early-stage entrepreneurs to connect with both the local startup ecosystem and an international community of immigrants from Taiwan and Asia. We seek not only to provide the usual feedback and contacts as a regular pitch event, but also to foster exchange about entrepreneurship between countries.",
    ],
  },
  {
    hidden: true,
    id: 999,
    imageURL: BrandImg,
    name: "Lorem ipsum dolor sit amet",
    url: "https://google.com",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ],
  },
];

export default function Websites(props) {
  return (
    <ProjectLayout>
      <ScrollToTopOnMount />
      <Hero isHomePage={false} heroImgUrl={BrandImg}>
        <h1>Websites</h1>
        {/* <sub>Collection of works</sub> */}
      </Hero>
      <Section className="flex">
        <SectionProjectDesc className="large">
          <p className="project-major-desc">
            Collection of websites built for companies, government or non-profit
            organizations.
          </p>
        </SectionProjectDesc>
        <SectionProjectDesc className="small">
          <div className="desc-wrapper">
            <div className="desc-title">Services</div>
            <div className="desc-content">
              Design
              <br />
              Development
              <br />
              Hosting
              <br />
              Marketing
            </div>
          </div>
        </SectionProjectDesc>
      </Section>
      {websites.length &&
        websites.map((website, index) => {
          if (website.hidden === true) return null;
          return (
            <Section key={`website-${index}`}>
              <SectionProfileImage
                name={website.name}
                imgURL={website.imageURL}
              />
              <SectionProfileWrapper>
                <SectionProfileDetail className="title">
                  {website.timeframe && (
                    <div className="timeframe">{website.timeframe}</div>
                  )}
                  {website.name}
                  <hr />
                  {website.url && (
                    <span className="website">
                      <a href={website.url}>>> website</a>
                    </span>
                  )}
                </SectionProfileDetail>
                <SectionProfileDetail className="content">
                  {website.content &&
                    website.content.map((p, i) => {
                      return <p key={`website-content-${i}`}>{p}</p>;
                    })}
                </SectionProfileDetail>
              </SectionProfileWrapper>
            </Section>
          );
        })}
    </ProjectLayout>
  );
}
