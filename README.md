# Overlay Image Gallery

[![npm version](https://badge.fury.io/js/overlay-image-gallery.svg)](https://badge.fury.io/js/overlay-image-gallery)
[![Download Count](http://img.shields.io/npm/dm/overlay-image-gallery.svg?style=flat)](https://www.npmjs.com/package/overlay-image-gallery)
[![Bundle size](https://badgen.net/bundlephobia/minzip/overlay-image-gallery)](https://bundlephobia.com/package/overlay-image-gallery)



### Here is a preview of the project

<div style="display: flex; justify-content: center; align-items: center; height: auto;">
<video width="600" autoplay loop>
  <source src="https://raw.githubusercontent.com/b-owl/overlay-image-gallery/main/public/preview.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
</div>

<br/>

[`Live Demo`](https://b-owl.github.io/overlay-image-gallery/)

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
- `fullScreen`: Boolean, it is optional. When set to true, the width and height will both be 100%.

## Contributing

Each pull request (PR) should focus on a specific issue. Avoid combining multiple features, chores, refactors, or enhancements in one PR. Clearly describe your feature or implementation. For major changes or uncertain usefulness, open an issue first and seek feedback.

- Follow eslint provided
- Write [clean](https://github.com/ryanmcdermott/clean-code-javascript) code

## Run it locally

```
git clone https://github.com/b-owl/overlay-image-gallery.git
cd overlay-image-gallery
npm install
npm run dev
```

Then open [`localhost:3000`](http://localhost:3000) in a browser.

## License

MIT


