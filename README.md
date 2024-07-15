# Overlay Image Gallery

[![npm version](https://badge.fury.io/js/react-image-gallery.svg)](https://badge.fury.io/js/react-image-gallery)
[![Download Count](http://img.shields.io/npm/dm/react-image-gallery.svg?style=flat)](https://www.npmjs.com/package/react-image-gallery)
[![Bundle size](https://badgen.net/bundlephobia/minzip/react-image-gallery)](https://bundlephobia.com/package/react-image-gallery)



### Here is a preview of the project

<div style="display: flex; justify-content: center; align-items: center; height: auto;">
<video width="600" autoplay loop>
  <source src="https://raw.githubusercontent.com/b-owl/overlay-image-gallery/main/public/preview.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
</div>

<br/>

[`Live Demo`](http://)

Overlay image gallery is a React multi step component for building image galleries and carousels

## Getting started

Install the package using npm:

```bash
npm install overlay-image-gallery
```

Or using yarn:

```bash
yarn add overlay-image-gallery
```

### Usage :


```js
import { ImageGallery } from 'overlay-image-gallery';
const App = () => {
const images = [
'https://example.com/image1.jpg',
'https://example.com/image2.jpg',
'https://example.com/image3.jpg',
];

return (
   <ImageGallery
      images={images}
      width={800}
      height={600}
      grid="v1"
    />
);
};

export default App;
```

### Props

- `images`: (required) Array of images url,
- `width`: Number, (px)
  - for example: `width(600)`
- `height`: Number, (px)
  - for example: `width(600)`
- `grid`: String, default `v1`
  - it accept `v1` and `v2` 
- `fullScreen`: Boolean, its not require, when is true, the width and height will equal to 100%

### License
This project is licensed under the MIT License.
<br/>
Contributions are welcome! Please feel free to submit a Pull Request.
Support
If you have any questions or need help integrating the package, please open an issue in the GitHub repository.
