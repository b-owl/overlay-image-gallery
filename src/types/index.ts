type BaseImageGalleryProps = {
  images: string[];
  grid: "v1" | "v2";
};

type FullScreenProps = {
  fullScreen: true;
  width?: never;
  height?: never;
};

type NonFullScreenProps = {
  fullScreen?: false;
  width: number;
  height: number;
};

export type ImageGalleryProps = BaseImageGalleryProps &
  (FullScreenProps | NonFullScreenProps);

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
