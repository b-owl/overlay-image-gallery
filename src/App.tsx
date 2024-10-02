import React from "react";

import OverlayGallery from "./components/ImageGallery";

function App() {
  const imagesList = [
    "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg",
    "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1472491235688-bdc81a63246e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0JTVDfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D",
    "https://media.istockphoto.com/id/2065767195/photo/in-the-low-angle-view-a-grey-cat-is-seen-with-her-owner-at-the-park.webp?a=1&b=1&s=612x612&w=0&k=20&c=GOURvUUc2RNdhvCsRasJp5JIZ2DJ084f7CYya7SIOMM=",
    "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2F0JTVDfGVufDB8fDB8fHww",
    "https://images.pexels.com/photos/981062/pexels-photo-981062.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2F0JTVDfGVufDB8fDB8fHww",
    "https://media.istockphoto.com/id/2025325214/photo/cat-taking-a-selfie-with-dog.webp?a=1&b=1&s=612x612&w=0&k=20&c=i7r2ZXyG4KEgRtS_bI5co0c026nxdVciyhLV0CGu8TA=",
    "https://images.unsplash.com/photo-1494256997604-768d1f608cac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGV0fGVufDB8fDB8fHww",
    "https://images.pexels.com/photos/59523/pexels-photo-59523.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2558605/pexels-photo-2558605.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "cneter",
      }}
    >
      <OverlayGallery
        width={650}
        height={400}
        grid="v1"
        fitMode="cover"
        images={imagesList}
      />
    </div>
  );
}

export default App;
