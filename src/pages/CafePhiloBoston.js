import React, {useState, useCallback} from "react";
import ProjectLayout from "../components/ProjectLayout"
import Hero from "../components/Hero"
import Section from "../components/Section"
import SectionProjectDesc from "../components/SectionProjectDesc"
import ScrollToTopOnMount from "../utils/ScrollToTopOnMount"

import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import CafePhiloImg from '../img/design-cafephilo.png';
import { photos } from "./CafePhiloBoston.photo.js";

export default function CafePhiloBoston(props) {
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
      <Hero isHomePage={false} heroImgUrl={CafePhiloImg}>
        <h1>Café Philo ＠ Boston</h1>
        <sub>Event banner design // 2016 - Present</sub>
      </Hero>
      <Section className="flex">
        <SectionProjectDesc className="large" linkText="Facebook page" linkUrl="https://www.facebook.com/bostonphilo/">
          <p className="project-major-desc">
            Café Philo is one of the well-known salon started from Taiwan in 2010, Café Philo ＠ Boston is one of the largest branch
          </p>
        </SectionProjectDesc>
        <SectionProjectDesc className="small">
          <div className="desc-wrapper">
            <div className="desc-title">Role</div>
            <div className="desc-content">
              Volunteer
            </div>
            <br/>
            <div className="desc-title">Technologies</div>
            <div className="desc-content">
              Photoshop
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