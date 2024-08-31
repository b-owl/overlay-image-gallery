import React, { useState } from "react";
import { ImageGalleryProps } from "../types";

import AlbumModal from "./AlbumModal";

import "../styles/ImageGallery.css";

const ImageGallery = (props: ImageGalleryProps) => {
  const { images, width, height, grid, fullScreen } = props;

  const [showAlbumModal, setShowAlbumModal] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   const checkMobile = () => {
  //     setIsMobile(window.innerWidth <= 468);
  //   };

  //   checkMobile();
  //   window.addEventListener("resize", checkMobile);
  //   return () => window.removeEventListener("resize", checkMobile);
  // }, []);

  const openAlbumModal = (index: number) => {
    setSelectedImageIndex(index);
    setShowAlbumModal(true);
  };

  const closeAlbumModal = () => setShowAlbumModal(false);

  const gridClassName = grid === "v2" ? "grid-version2" : "grid-version1";

  return (
    <section
      style={{
        width: `${fullScreen ? "100%" : width}px`,
        height: `${fullScreen ? "100%" : height}px`,
      }}
      className={`oig-image-gallery`}
    >
      <div className={`oig-image-grid ${gridClassName}`}>
        {images.slice(0, 10).map((image, index) => (
          <div
            key={index}
            onClick={() => openAlbumModal(index)}
            className="oig-img-box"
          >
            <img key={index} src={image} alt={image} />

            {images.length > 10 && index === 9 && (
              <div className="oig-last-image">+{images.length - 10} Photos</div>
            )}
          </div>
        ))}
      </div>

      {showAlbumModal && (
        <AlbumModal
          images={images}
          onClose={closeAlbumModal}
          selectedImageIndex={selectedImageIndex}
        />
      )}
    </section>
  );
};

export default ImageGallery;
