# Overlay Image Gallery

[![npm version](https://badge.fury.io/js/overlay-image-gallery.svg)](https://badge.fury.io/js/overlay-image-gallery)
[![Download Count](http://img.shields.io/npm/dm/overlay-image-gallery.svg?style=flat)](https://www.npmjs.com/package/overlay-image-gallery)
[![Bundle size](https://badgen.net/bundlephobia/minzip/overlay-image-gallery)](https://bundlephobia.com/package/overlay-image-gallery)

###### Overlay Image Gallery is a versatile React component designed for creating stunning image galleries and carousels effortlessly.

## Preview

![Preview](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnhyODN6YWYwMTNxeGF6aXB3enJ0YW1xZjI5aTF2djg2cDV0OWw4YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/z2O8LoBk5LZqLuSI5j/giphy.gif)

[`Live Demo`](https://b-owl.github.io/overlay-image-gallery/)

## Installation

To get started, install the package using npm or yarn:

```bash
npm install overlay-image-gallery
```

###### Or

```bash
yarn add overlay-image-gallery
```

## Usage

Here's a quick example of how to use the ImageGallery component in your React application:

```js
import { ImageGallery } from "overlay-image-gallery";
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
git clone https://github.com/b-owl/overlay-image-gallery.git
cd overlay-image-gallery
npm install
npm run dev
```

Then open [`localhost:3000`](http://localhost:3000) in a browser.

## License

This project is licensed under the MIT License.
