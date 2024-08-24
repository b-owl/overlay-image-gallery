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
    <div className="oig-modal single-image-oig-modal">
      <button className="single-page-oig-close-btn" onClick={onClose}>
        Back
      </button>
      <div className="oig-main-image-container">
        <img
          src={currentImage}
          alt={currentImage}
          className={`oig-main-image ${direction}`}
          onAnimationEnd={() => setDirection(null)}
        />
        <div className="oig-image-counter">
          {currentIndex + 1}/{images.length}
        </div>
      </div>
      <button className="oig-nav-btn oig-prev-btn" onClick={handlePrev}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 256 256"
        >
          <g fill="currentColor">
            <path
              d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96"
              opacity="0.2"
            />
            <path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m48-88a8 8 0 0 1-8 8h-60.69l18.35 18.34a8 8 0 0 1-11.32 11.32l-32-32a8 8 0 0 1 0-11.32l32-32a8 8 0 0 1 11.32 11.32L107.31 120H168a8 8 0 0 1 8 8" />
          </g>
        </svg>
      </button>
      <button className="oig-nav-btn oig-next-btn" onClick={handleNext}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 256 256"
        >
          <g fill="currentColor">
            <path
              d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96"
              opacity="0.2"
            />
            <path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m45.66-93.66a8 8 0 0 1 0 11.32l-32 32a8 8 0 0 1-11.32-11.32L148.69 136H88a8 8 0 0 1 0-16h60.69l-18.35-18.34a8 8 0 0 1 11.32-11.32Z" />
          </g>
        </svg>
      </button>
      <div className="oig-thumbnail-strip" ref={thumbnailStripRef}>
        {images.map((image, index) => (
          <div className="album-image-box" key={index}>
            <img
              src={image}
              alt={image}
              className={`oig-thumbnail ${
                index === currentIndex ? "active" : ""
              }`}
              onClick={() => onThumbnailClick(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleImageModal;
