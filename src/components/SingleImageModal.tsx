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
        ‹
      </button>
      <button className="oig-nav-btn oig-next-btn" onClick={handleNext}>
        ›
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
