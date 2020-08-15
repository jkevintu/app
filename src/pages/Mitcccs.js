import React, {useState, useCallback} from "react";
import ProjectLayout from "../components/ProjectLayout"
import Hero from "../components/Hero"
import Section from "../components/Section"
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


    </ProjectLayout>
  )
}