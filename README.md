# Overlay Image Gallery

[![npm version](https://badge.fury.io/js/overlay-oig-image-gallery.svg)](https://badge.fury.io/js/overlay-oig-image-gallery)
[![Download Count](http://img.shields.io/npm/dm/overlay-oig-image-gallery.svg?style=flat)](https://www.npmjs.com/package/overlay-oig-image-gallery)
[![Bundle size](https://badgen.net/bundlephobia/minzip/overlay-oig-image-gallery)](https://bundlephobia.com/package/overlay-oig-image-gallery)

###### Overlay Image Gallery is a versatile React component designed for creating stunning image galleries and carousels effortlessly.

## Preview

![Preview](https://camo.githubusercontent.com/f3a6d89d038ff0abb80bae4493227ea6f00687843692cf3a2344246294b5e2da/68747470733a2f2f64726976652e676f6f676c652e636f6d2f75633f6578706f72743d766965772669643d316e554a597659737158484c683844784652323367763464467549564f36337654)

<br/>

[`Live Demo`](https://b-owl.github.io/overlay-oig-image-gallery/)

## Installation

To get started, install the package using npm or yarn:

```bash
npm install overlay-oig-image-gallery
```

###### Or

```bash
yarn add overlay-oig-image-gallery
```

## Usage

Here's a quick example of how to use the ImageGallery component in your React application:

```js
import { ImageGallery } from "overlay-oig-image-gallery";
const App = () => {
  const images = [
    "https://example.com/image1.jpg",
    "https://example.com/image2.jpg",
    "https://example.com/image3.jpg",
  ];

  return <ImageGallery images={images} width={800} height={600} grid="v1" />;
};

export default App;
```

## Props

| **Prop**     | **Type**    | **Description**                                                               |
| ------------ | ----------- | ----------------------------------------------------------------------------- |
| `images`     | Array       | **(Required)** Array of image URLs.                                           |
| `width`      | Number (px) | Width of the gallery, e.g., width={600}.                                      |
| `height`     | Number (px) | Height of the gallery, e.g., height={600}.                                    |
| `grid`       | String      | Layout style, default is `v1`. Options are `v1` and `v2`.                     |
| `fullScreen` | Boolean     | **(Optional)** If true, the gallery will occupy full screen width and height. |

## Contributing

We welcome contributions! When making a pull request, please focus on a specific issue. Avoid combining multiple changes in one PR. Describe your feature or implementation clearly. For major changes or if you're unsure about the usefulness of a change, please open an issue first to discuss it.

- Follow eslint provided
- Write [clean](https://github.com/ryanmcdermott/clean-code-javascript) code

## Running Locally

```
git clone https://github.com/b-owl/overlay-oig-image-gallery.git
cd overlay-oig-image-gallery
npm install
npm run dev
```

Then open [`localhost:3000`](http://localhost:3000) in a browser.

## License

This project is licensed under the MIT License.
