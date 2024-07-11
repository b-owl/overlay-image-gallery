import React from "react";
import { ImageGalleryProps } from "../types";

import { useEffect, useState } from "react";

import AlbumModal from "./AlbumModal";
import SingleImageModal from "./SingleImageModal";

import "../styles/ImageGallery.css";

const ImageGallery = (props: ImageGalleryProps) => {
  const { images, width, height, grid } = props;

  const [showAlbumModal, setShowAlbumModal] = useState(false);
  const [showSingleImageModal, setShowSingleImageModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 468);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const openAlbumModal = () => setShowAlbumModal(true);
  const closeAlbumModal = () => setShowAlbumModal(false);
  const openSingleImageModal = (index: number) => {
    setSelectedImageIndex(index);
    setShowSingleImageModal(true);
  };
  const closeSingleImageModal = () => setShowSingleImageModal(false);

  const handleThumbnailClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  if (isMobile) {
    return (
      <SingleImageModal
        images={images}
        currentIndex={currentImageIndex}
        onClose={() => {}}
        onPrev={handlePrevImage}
        onNext={handleNextImage}
        onThumbnailClick={setCurrentImageIndex}
      />
    );
  }

  const gridClassName = grid === "v2" ? "grid-version2" : "grid-version1";

  return (
    <section
      style={{
        width: `${width}%`,
        height: `${height}%`,
      }}
      className={`image-gallery`}
    >
      <div className={`image-grid ${gridClassName}`}>
        {images.slice(0, 10).map((image, index) => (
          <div key={index} onClick={openAlbumModal} className="img-box">
            <img key={index} src={image} alt={image} />

            {images.length > 10 && index === 9 && (
              <div className="last-image">+{images.length - 10} Photos</div>
            )}
          </div>
        ))}
      </div>

      {showAlbumModal && (
        <AlbumModal
          images={images}
          onClose={closeAlbumModal}
          onImageClick={openSingleImageModal}
        />
      )}

      {showSingleImageModal && (
        <SingleImageModal
          images={images}
          currentIndex={selectedImageIndex}
          onClose={closeSingleImageModal}
          onPrev={() =>
            setSelectedImageIndex(
              (prev) => (prev - 1 + images.length) % images.length
            )
          }
          onNext={() =>
            setSelectedImageIndex((prev) => (prev + 1) % images.length)
          }
          onThumbnailClick={handleThumbnailClick}
        />
      )}
    </section>
  );
};

export default ImageGallery;
