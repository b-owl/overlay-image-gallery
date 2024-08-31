import React, { useRef, useEffect, useState } from "react";
import { AlbumModalProps } from "../types";
import "../styles/AlbumModal.css";
import SingleImageModal from "./SingleImageModal";

const AlbumModal = (props: AlbumModalProps) => {
  const { images, onClose, selectedImageIndex } = props;
  const [showSingleImage, setShowSingleImage] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] =
    useState(selectedImageIndex);
  const selectedImageRef = useRef<HTMLImageElement | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (!showSingleImage && selectedImageRef.current) {
      setTimeout(() => {
        selectedImageRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 150);
      selectedImageRef.current.classList.add("album-modal-winking-effect");
      setTimeout(() => {
        if (selectedImageRef.current) {
          selectedImageRef.current.classList.remove(
            "album-modal-winking-effect"
          );
        }
      }, 2200);
    }
  }, [selectedImageIndex, showSingleImage]);

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
    setShowSingleImage(true);
  };

  const handleBackToGallery = () => {
    setShowSingleImage(false);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  return (
    <div
      className={`album-modal-container ${
        isClosing ? "album-modal-closing" : ""
      }`}
    >
      <div className="album-modal-overlay" onClick={handleClose} />
      <div className="album-modal-content">
        <header className="album-modal-header">
          {showSingleImage && (
            <button
              className="album-modal-back-to-gallery-btn"
              onClick={handleBackToGallery}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="M224 128a8 8 0 0 1-8 8H59.31l58.35 58.34a8 8 0 0 1-11.32 11.32l-72-72a8 8 0 0 1 0-11.32l72-72a8 8 0 0 1 11.32 11.32L59.31 120H216a8 8 0 0 1 8 8"
                />
              </svg>
              Gallery
            </button>
          )}
          <button className="album-modal-close-btn" onClick={handleClose}>
            Close
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </header>

        {showSingleImage ? (
          <SingleImageModal
            images={images}
            currentIndex={currentImageIndex}
            onClose={() => setShowSingleImage(false)}
            onPrev={handlePrevImage}
            onNext={handleNextImage}
            onThumbnailClick={setCurrentImageIndex}
          />
        ) : (
          <div className="album-modal-grid">
            {images.map((image, index) => (
              <div key={index} className="album-modal-img-box">
                <img
                  src={image}
                  alt={`Image ${index + 1}`}
                  onClick={() => handleImageClick(index)}
                  ref={index === selectedImageIndex ? selectedImageRef : null}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AlbumModal;
