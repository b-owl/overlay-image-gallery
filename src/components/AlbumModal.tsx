import React, { useRef, useEffect } from "react";
import { AlbumModalProps } from "../types";
import "../styles/AlbumModal.css";

// const getRandomHeight = () => {
//   const min = 12;
//   const max = 20;
//   const height = Math.random() * (max - min) + min;
//   return `${height}rem`;
// };

const AlbumModal = (props: AlbumModalProps) => {
  const { images, onClose, onImageClick, selectedImageIndex } = props;
  const selectedImageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (selectedImageRef.current) {
      setTimeout(() => {
        selectedImageRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 150);
      selectedImageRef.current.classList.add("winking-effect");
      setTimeout(() => {
        if (selectedImageRef.current) {
          selectedImageRef.current.classList.remove("winking-effect");
        }
      }, 2200);
    }
  }, [selectedImageIndex]);

  return (
    <div className="oig-modal album-oig-modal">
      <button className="oig-close-btn" onClick={onClose}>
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
            <path d="M165.66 101.66L139.31 128l26.35 26.34a8 8 0 0 1-11.32 11.32L128 139.31l-26.34 26.35a8 8 0 0 1-11.32-11.32L116.69 128l-26.35-26.34a8 8 0 0 1 11.32-11.32L128 116.69l26.34-26.35a8 8 0 0 1 11.32 11.32M232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88" />
          </g>
        </svg>
      </button>
      <div className="oig-album-grid">
        {images.map((image, index) => (
          <div key={index} className="oig-img-box">
            <img
              src={image}
              alt={image}
              onClick={() => onImageClick(index)}
              // style={{ height: getRandomHeight() }}
              ref={index === selectedImageIndex ? selectedImageRef : null}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumModal;
