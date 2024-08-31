import React, { useRef, useState, useEffect } from "react";
import { SingleImageModalProps } from "../types";
import "../styles/SingleImageModal.css";

const SingleImageModal = (props: SingleImageModalProps) => {
  const { images, currentIndex, onPrev, onNext, onThumbnailClick } = props;
  const [startX, setStartX] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev" | null>(null);
  const [activeIndex, setActiveIndex] = useState(currentIndex);
  const imageRefs = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    setActiveIndex(currentIndex);
  }, [currentIndex]);

  useEffect(() => {
    if (imageRefs.current[activeIndex]) {
      imageRefs.current[activeIndex].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [activeIndex]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const moveX = e.touches[0].clientX;
    const diffX = startX - moveX;

    if (Math.abs(diffX) > 50) {
      if (diffX > 0) {
        onNext();
        setDirection("next");
      } else {
        onPrev();
        setDirection("prev");
      }
      setStartX(moveX);
    }
  };

  return (
    <div className="oig-modal single-image-oig-modal">
      <div
        className="oig-main-image-container"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <img
          src={images[activeIndex]}
          alt={`Image ${activeIndex + 1}`}
          className={`oig-main-image ${direction}`}
          ref={(el) => (imageRefs.current[activeIndex] = el!)}
          onAnimationEnd={() => setDirection(null)}
        />
        <div className="oig-image-counter">
          {activeIndex + 1}/{images.length}
        </div>
      </div>
      <button className="oig-nav-btn oig-prev-btn" onClick={onPrev}>
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
      <button className="oig-nav-btn oig-next-btn" onClick={onNext}>
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
      {window.innerWidth > 468 && (
        <div className="oig-thumbnail-strip">
          {images.map((image, index) => (
            <div className="album-image-box" key={index}>
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className={`oig-thumbnail ${
                  index === activeIndex ? "active" : ""
                }`}
                onClick={() => onThumbnailClick && onThumbnailClick(index)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SingleImageModal;
