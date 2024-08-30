import React, { useRef, useEffect, useState } from "react";
import { AlbumModalProps } from "../types";
import "../styles/AlbumModal.css";

const AlbumModal = (props: AlbumModalProps) => {
  const { images, onClose, onImageClick, selectedImageIndex } = props;
  const selectedImageRef = useRef<HTMLImageElement | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (selectedImageRef.current) {
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
  }, [selectedImageIndex]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300); // Match this with the animation duration
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
          <button className="album-modal-close-btn" onClick={handleClose}>
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
        <div className="album-modal-grid">
          {images.map((image, index) => (
            <div key={index} className="album-modal-img-box">
              <img
                src={image}
                alt={`Image ${index + 1}`}
                onClick={() => onImageClick(index)}
                ref={index === selectedImageIndex ? selectedImageRef : null}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlbumModal;
