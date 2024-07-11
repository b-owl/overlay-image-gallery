import React from "react";

import OverlayGallery from "./components/ImageGallery";

function App() {
  const imagesList = [
    "https://picsum.photos/600/600?random=1",
    "https://picsum.photos/600/600?random=2",
    "https://picsum.photos/600/600?random=3",
    "https://picsum.photos/600/600?random=4",
    "https://picsum.photos/600/600?random=5",
    "https://picsum.photos/600/600?random=6",
    "https://picsum.photos/600/600?random=7",
    "https://picsum.photos/600/600?random=8",
    "https://picsum.photos/600/600?random=9",
    "https://picsum.photos/600/600?random=10",
    "https://picsum.photos/600/600?random=11",
    "https://picsum.photos/600/600?random=12",
    "https://picsum.photos/600/600?random=13",
    "https://picsum.photos/600/600?random=14",
  ];

  return (
    <OverlayGallery grid="v2" width={60} height={100} images={imagesList} />
  );
}

export default App;
