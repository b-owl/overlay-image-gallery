export type ImageGalleryProps = {
  images: string[];
  width: number;
  height: number;
  grid: "v1" | "v2";
};
export type AlbumModalProps = {
  images: string[];
  onClose: MouseEventHandler<HTMLButtonElement>;
  onImageClick: (index: number) => void;
};

export type SingleImageModalProps = {
  images: string[];
  currentIndex: number;
  onClose: MouseEventHandler<HTMLButtonElement>;
  onPrev: MouseEventHandler<HTMLButtonElement>;
  onNext: MouseEventHandler<HTMLButtonElement>;
  onThumbnailClick: (index: number) => void;
};
