import React, { useRef, useEffect } from "react";
import { AlbumModalProps } from "../types";
import "../styles/AlbumModal.css";

const getRandomHeight = () => {
  const min = 6;
  const max = 20;
  const height = Math.random() * (max - min) + min;
  return `${height}rem`;
};

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
    <div className="modal album-modal">
      <button className="close-btn" onClick={onClose}>
        ×
      </button>
      <div className="album-grid">
        {images.map((image, index) => (
          <div key={index} className="img-box">
            <img
              src={image}
              alt={image}
              onClick={() => onImageClick(index)}
              style={{ height: getRandomHeight() }}
              ref={index === selectedImageIndex ? selectedImageRef : null}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumModal;
