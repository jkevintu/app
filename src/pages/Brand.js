import React, {useState, useCallback} from "react";
import ProjectLayout from "../components/ProjectLayout"
import Hero from "../components/Hero"
import Section from "../components/Section"
import ScrollToTopOnMount from "../utils/ScrollToTopOnMount"

import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import BrandImg from '../img/design-brand.png';
import { photos } from "./Brand.photo.js";

export default function Brand(props) {
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
      <Hero isHomePage={false} heroImgUrl={BrandImg}>
        <h1>Brand</h1>
        <sub>Logo / marketing content</sub>
      </Hero>
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