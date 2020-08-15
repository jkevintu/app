import React, {useState, useCallback} from "react";
import ProjectLayout from "../components/ProjectLayout"
import Hero from "../components/Hero"
import Section from "../components/Section"
import SectionProjectDesc from "../components/SectionProjectDesc"
import ScrollToTopOnMount from "../utils/ScrollToTopOnMount"

import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import MitcccsImg from '../img/design-mitcccs.png';
import { photos } from "./Mitcccs.photos.js";

export default function Mitcccs(props) {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setViewerIsOpen(false);
    setCurrentImage(0);
  };

  return (
    <ProjectLayout>
      <ScrollToTopOnMount />
      <Hero isHomePage={false} heroImgUrl={MitcccsImg}>
        <h1>MIT CCCS</h1>
        <sub>Concert posters design // 2011 - 2019</sub>
      </Hero>
      <Section className="flex">
        <SectionProjectDesc className="large" linkText="Website" linkUrl="https://mitcccs.org/">
          <p className="project-major-desc">
            MIT Cambridge Chinese Choral Society is a well-respected Boston local community amateur choir
          </p>
        </SectionProjectDesc>
        <SectionProjectDesc className="small">
          <div className="desc-wrapper">
            <div className="desc-title">Role</div>
            <div className="desc-content">
              President (2017-2019)<br/>
              Webmaster / Marketing (2011-2019)<br/>
            </div>
            <br/>
            <div className="desc-title">Technologies</div>
            <div className="desc-content">
              Photoshop / InDesign / Canva
            </div>
          </div>
        </SectionProjectDesc>
      </Section>
      <div className="section-wrapper dark">
        <Section>
          <Gallery photos={photos} onClick={openLightbox} />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={photos.map(x => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </Section>
      </div>

    </ProjectLayout>
  )
}