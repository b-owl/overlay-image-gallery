export type ImageGalleryProps = {
  images: string[];
  width: number;
  height: number;
  grid: "v1" | "v2";
};
export type AlbumModalProps = {
  images: string[];
  onClose: () => void;
  onImageClick: (index: number) => void;
};

export type SingleImageModalProps = {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onThumbnailClick: (index: number) => void;
};
