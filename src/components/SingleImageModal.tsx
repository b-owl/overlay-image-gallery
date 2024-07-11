import React from "react";

import { useRef, useEffect, useState } from "react";
import { SingleImageModalProps } from "../types";
import "../styles/SingleImageModal.css";

const SingleImageModal = (props: SingleImageModalProps) => {
  const { images, currentIndex, onClose, onPrev, onNext, onThumbnailClick } =
    props;
  const currentImage = images[currentIndex];
  const thumbnailStripRef = useRef<HTMLDivElement>(null);
  const [direction, setDirection] = useState<"next" | "prev" | null>(null);

  useEffect(() => {
    if (thumbnailStripRef.current) {
      const activeThumb = thumbnailStripRef.current.querySelector(".active");
      if (activeThumb) {
        activeThumb.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        });
      }
    }
  }, [currentIndex]);

  const handleNext = () => {
    setDirection("next");
    onNext();
  };

  const handlePrev = () => {
    setDirection("prev");
    onPrev();
  };

  return (
    <div className="modal single-image-modal">
      <button className="single-page-close-btn" onClick={onClose}>
        Back
      </button>
      <div className="main-image-container">
        <img
          src={currentImage}
          alt={currentImage}
          className={`main-image ${direction}`}
          onAnimationEnd={() => setDirection(null)}
        />
        <div className="image-counter">
          {currentIndex + 1}/{images.length}
        </div>
      </div>
      <button className="nav-btn prev-btn" onClick={handlePrev}>
        ‹
      </button>
      <button className="nav-btn next-btn" onClick={handleNext}>
        ›
      </button>
      <div className="thumbnail-strip" ref={thumbnailStripRef}>
        {images.map((image, index) => (
          <div className="album-image-box" key={index}>
            <img
              src={image}
              alt={image}
              className={`thumbnail ${index === currentIndex ? "active" : ""}`}
              onClick={() => onThumbnailClick(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleImageModal;
