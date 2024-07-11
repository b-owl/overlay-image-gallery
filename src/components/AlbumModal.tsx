import React from "react";

import { AlbumModalProps } from "../types";
import "../styles/AlbumModal.css";

const getRandomHeight = () => {
  const min = 6;
  const max = 20;
  const height = Math.random() * (max - min) + min;
  return `${height}rem`;
};

const AlbumModal = (props: AlbumModalProps) => {
  const { images, onClose, onImageClick } = props;
  return (
    <div className="modal album-modal">
      <button className="close-btn" onClick={onClose}>
        ×
      </button>
      <div className="album-grid">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={image}
            onClick={() => onImageClick(index)}
            style={{ height: getRandomHeight() }}
          />
        ))}
      </div>
    </div>
  );
};

export default AlbumModal;
