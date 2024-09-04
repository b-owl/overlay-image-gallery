'use strict';

var React = require('react');

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$3 = ".album-modal-container {\r\n  z-index: 1000;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  animation: album-modal-fadeIn 0.3s ease-out;\r\n}\r\n\r\n.album-modal-container.album-modal-closing {\r\n  animation: album-modal-fadeOut 0.3s ease-in;\r\n}\r\n\r\n.album-modal-overlay {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  backdrop-filter: blur(5px);\r\n}\r\n\r\n.album-modal-content {\r\n  position: relative;\r\n  background-color: white;\r\n  border-radius: 1rem;\r\n  overflow: hidden;\r\n  width: 90%;\r\n  max-width: 1200px;\r\n  height: 90%;\r\n  max-height: 800px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);\r\n  animation: album-modal-scaleUp 0.3s ease-out;\r\n}\r\n\r\n.album-modal-container.album-modal-closing .album-modal-content {\r\n  animation: album-modal-scaleDown 0.3s ease-in;\r\n}\r\n\r\n.album-modal-header {\r\n  padding: 1rem;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  background-color: #f8f9fa;\r\n  border-bottom: 1px solid #e9ecef;\r\n}\r\n\r\n.album-modal-close-btn {\r\n  border: none;\r\n  font-weight: bold;\r\n  font-size: 1rem;\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 0.5rem;\r\n  background-color: transparent;\r\n  transition: background-color 0.2s;\r\n}\r\n\r\n.album-modal-back-to-gallery-btn {\r\n  background: transparent;\r\n  border: none;\r\n  font-size: 1rem;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n  margin-right: auto;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 0.5rem;\r\n}\r\n\r\n.album-modal-back-to-gallery-btn:hover {\r\n  color: #007bff;\r\n}\r\n\r\n.album-modal-close-btn:hover {\r\n  color: #007bff;\r\n}\r\n\r\n.album-modal-grid {\r\n  flex-grow: 1;\r\n  overflow-y: auto;\r\n  padding: 2rem;\r\n  column-count: 4;\r\n  column-gap: 1rem;\r\n}\r\n\r\n.album-modal-img-box {\r\n  break-inside: avoid;\r\n  margin-bottom: 1rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.album-modal-img-box img {\r\n  width: 100%;\r\n  border-radius: 0.5rem;\r\n  transition: transform 0.3s ease;\r\n}\r\n\r\n.album-modal-img-box:hover img {\r\n  transform: scale(1.05);\r\n}\r\n\r\n.album-modal-single-image {\r\n  flex-grow: 1;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 2rem;\r\n  position: relative;\r\n}\r\n\r\n.oig-main-image {\r\n  max-width: 100%;\r\n  max-height: 100%;\r\n  border-radius: 0.5rem;\r\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.oig-nav-btn {\r\n  background: none;\r\n  border: none;\r\n  cursor: pointer;\r\n  position: absolute;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n  padding: 10px;\r\n  color: #495057;\r\n}\r\n\r\n.oig-prev-btn {\r\n  left: -50px;\r\n}\r\n\r\n.oig-next-btn {\r\n  right: -50px;\r\n}\r\n\r\n.oig-nav-btn svg {\r\n  width: 2rem;\r\n  height: 2rem;\r\n}\r\n\r\n.oig-nav-btn:hover {\r\n  color: #007bff;\r\n}\r\n\r\n@keyframes album-modal-fadeIn {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes album-modal-fadeOut {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n  to {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes album-modal-scaleUp {\r\n  from {\r\n    transform: translateY(10rem);\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    opacity: 1;\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\n@keyframes album-modal-scaleDown {\r\n  from {\r\n    transform: scale(1);\r\n    opacity: 1;\r\n  }\r\n  to {\r\n    transform: scale(0.9);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.album-modal-winking-effect {\r\n  animation: album-modal-winking 2.2s ease-in-out;\r\n}\r\n\r\n@keyframes album-modal-winking {\r\n  0%,\r\n  100% {\r\n    opacity: 1;\r\n    box-shadow: 0 0 0 2px #007bff;\r\n  }\r\n  50% {\r\n    opacity: 0.7;\r\n    box-shadow: 0 0 0 2px transparent;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 1080px) {\r\n  .album-modal-grid {\r\n    column-count: 3;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n  .album-modal-grid {\r\n    column-count: 2;\r\n  }\r\n}\r\n";
styleInject(css_248z$3);

var css_248z$2 = ".oig-modal {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.single-image-oig-modal {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.oig-main-image-container {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 700px;\r\n  height: auto;\r\n  max-height: 580px;\r\n}\r\n\r\n.oig-main-image {\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: contain;\r\n  transition: transform 0.3s ease-out;\r\n  box-shadow: none !important;\r\n}\r\n\r\n.oig-main-image.next {\r\n  animation: slideLeft 0.3s forwards;\r\n}\r\n\r\n.oig-main-image.prev {\r\n  animation: slideRight 0.3s forwards;\r\n}\r\n\r\n@keyframes slideLeft {\r\n  from {\r\n    transform: translateX(100%);\r\n  }\r\n  to {\r\n    transform: translateX(0);\r\n  }\r\n}\r\n\r\n@keyframes slideRight {\r\n  from {\r\n    transform: translateX(-100%);\r\n  }\r\n  to {\r\n    transform: translateX(0);\r\n  }\r\n}\r\n\r\n.oig-image-counter {\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  color: white;\r\n  padding: 5px 10px;\r\n  border-radius: 15px;\r\n  font-size: 14px;\r\n  margin-top: 10px;\r\n}\r\n\r\n.oig-nav-btn {\r\n  font-size: 40px;\r\n  border: none;\r\n  cursor: pointer;\r\n  padding: 10px;\r\n  z-index: 10;\r\n}\r\n\r\n.oig-prev-btn {\r\n  left: 50px;\r\n}\r\n\r\n.oig-next-btn {\r\n  right: 50px;\r\n}\r\n\r\n.oig-thumbnail-strip {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  gap: 10px;\r\n  padding: 10px;\r\n  max-width: 80%;\r\n  overflow-x: auto;\r\n  margin-top: 2rem;\r\n}\r\n\r\n.oig-thumbnail-strip::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n.album-image-box {\r\n  position: relative;\r\n}\r\n\r\n.oig-thumbnail {\r\n  width: 80px;\r\n  height: 55px;\r\n  object-fit: cover;\r\n  cursor: pointer;\r\n  transition: all 0.3s ease;\r\n  border-radius: 5px;\r\n  opacity: 0.7;\r\n}\r\n\r\n.oig-thumbnail.active {\r\n  opacity: 1;\r\n  transform: scale(1.2);\r\n  border: 1px solid #007bff;\r\n}\r\n\r\n@media (max-width: 968px) {\r\n  .oig-main-image-container {\r\n    width: 70vw;\r\n    height: 62vw;\r\n  }\r\n\r\n  .oig-prev-btn {\r\n    left: 20px;\r\n  }\r\n\r\n  .oig-next-btn {\r\n    right: 20px;\r\n  }\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  .oig-image-counter {\r\n    position: absolute;\r\n    bottom: 0;\r\n    right: 0;\r\n  }\r\n\r\n  .oig-nav-btn {\r\n    font-size: 30px;\r\n    padding: 5px;\r\n  }\r\n\r\n  .oig-prev-btn {\r\n    left: 5px;\r\n  }\r\n\r\n  .oig-next-btn {\r\n    right: 5px;\r\n  }\r\n}\r\n";
styleInject(css_248z$2);

var css_248z$1 = ".skeleton-loader {\r\n  background-color: #e0e0e0;\r\n  border-radius: 4px;\r\n  animation: pulse 1.5s ease-in-out infinite;\r\n}\r\n\r\n@keyframes pulse {\r\n  0% {\r\n    opacity: 0.6;\r\n  }\r\n  50% {\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    opacity: 0.6;\r\n  }\r\n}\r\n";
styleInject(css_248z$1);

const SkeletonLoader = ({ width, height }) => {
    return React.createElement("div", { className: "skeleton-loader", style: { width, height } });
};

const SingleImageModal = (props) => {
    const { images, currentIndex, onPrev, onNext, onThumbnailClick } = props;
    const [startX, setStartX] = React.useState(0);
    const [direction, setDirection] = React.useState(null);
    const [activeIndex, setActiveIndex] = React.useState(currentIndex);
    const [isLoading, setIsLoading] = React.useState(true);
    const [loadedImages, setLoadedImages] = React.useState(new Set());
    const imageRefs = React.useRef([]);
    const thumbnailStripRef = React.useRef(null);
    React.useEffect(() => {
        setActiveIndex(currentIndex);
        setIsLoading(!loadedImages.has(currentIndex));
    }, [currentIndex, loadedImages]);
    React.useEffect(() => {
        if (thumbnailStripRef.current) {
            const activeThumb = thumbnailStripRef.current.querySelector(".active");
            if (activeThumb) {
                activeThumb.scrollIntoView({
                    behavior: "smooth",
                    inline: "center",
                    block: "nearest",
                });
            }
        }
    }, [activeIndex]);
    const handleImageLoad = (index) => {
        setLoadedImages((prev) => new Set(prev).add(index));
        if (index === activeIndex) {
            setIsLoading(false);
        }
    };
    const handleTouchStart = (e) => {
        setStartX(e.touches[0].clientX);
    };
    const handleTouchMove = (e) => {
        if (isLoading)
            return;
        const moveX = e.touches[0].clientX;
        const diffX = startX - moveX;
        if (Math.abs(diffX) > 50) {
            if (diffX > 0) {
                handleNext();
            }
            else {
                handlePrev();
            }
            setStartX(moveX);
        }
    };
    const handlePrev = () => {
        const newIndex = (activeIndex - 1 + images.length) % images.length;
        setActiveIndex(newIndex);
        onPrev();
        setIsLoading(!loadedImages.has(newIndex));
    };
    const handleNext = () => {
        const newIndex = (activeIndex + 1) % images.length;
        setActiveIndex(newIndex);
        onNext();
        setIsLoading(!loadedImages.has(newIndex));
    };
    return (React.createElement("div", { className: "oig-modal single-image-oig-modal" },
        React.createElement("button", { className: "oig-nav-btn oig-prev-btn", onClick: handlePrev, disabled: isLoading },
            React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 256 256" },
                React.createElement("g", { fill: "currentColor" },
                    React.createElement("path", { d: "M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96", opacity: "0.2" }),
                    React.createElement("path", { d: "M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m48-88a8 8 0 0 1-8 8h-60.69l18.35 18.34a8 8 0 0 1-11.32 11.32l-32-32a8 8 0 0 1 0-11.32l32-32a8 8 0 0 1 11.32 11.32L107.31 120H168a8 8 0 0 1 8 8" })))),
        React.createElement("div", { className: "oig-main-image-container", onTouchStart: handleTouchStart, onTouchMove: handleTouchMove },
            isLoading && React.createElement(SkeletonLoader, { width: "100%", height: "100%" }),
            React.createElement("img", { src: images[activeIndex], alt: `Image ${activeIndex + 1}`, className: `oig-main-image ${direction}`, ref: (el) => (imageRefs.current[activeIndex] = el), onAnimationEnd: () => setDirection(null), onLoad: () => handleImageLoad(activeIndex), style: { display: isLoading ? "none" : "block" } }),
            React.createElement("div", { className: "oig-image-counter" },
                activeIndex + 1,
                "/",
                images.length)),
        React.createElement("button", { className: "oig-nav-btn oig-next-btn", onClick: handleNext, disabled: isLoading },
            React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 256 256" },
                React.createElement("g", { fill: "currentColor" },
                    React.createElement("path", { d: "M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96", opacity: "0.2" }),
                    React.createElement("path", { d: "M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m45.66-93.66a8 8 0 0 1 0 11.32l-32 32a8 8 0 0 1-11.32-11.32L148.69 136H88a8 8 0 0 1 0-16h60.69l-18.35-18.34a8 8 0 0 1 11.32-11.32Z" })))),
        window.innerWidth > 468 && (React.createElement("div", { className: "oig-thumbnail-strip", ref: thumbnailStripRef }, images.map((image, index) => (React.createElement("div", { className: "album-image-box", key: index },
            React.createElement("img", { src: image, alt: `Thumbnail ${index + 1}`, className: `oig-thumbnail ${index === activeIndex ? "active" : ""}`, onClick: () => onThumbnailClick && onThumbnailClick(index), onLoad: () => handleImageLoad(index) }))))))));
};

const AlbumModal = (props) => {
    const { images, onClose, selectedImageIndex } = props;
    const [showSingleImage, setShowSingleImage] = React.useState(false);
    const [currentImageIndex, setCurrentImageIndex] = React.useState(selectedImageIndex);
    const selectedImageRef = React.useRef(null);
    const [isClosing, setIsClosing] = React.useState(false);
    React.useEffect(() => {
        if (!showSingleImage && selectedImageRef.current) {
            setTimeout(() => {
                var _a;
                (_a = selectedImageRef.current) === null || _a === void 0 ? void 0 : _a.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                });
            }, 150);
            selectedImageRef.current.classList.add("album-modal-winking-effect");
            setTimeout(() => {
                if (selectedImageRef.current) {
                    selectedImageRef.current.classList.remove("album-modal-winking-effect");
                }
            }, 2200);
        }
    }, [selectedImageIndex, showSingleImage]);
    const handleImageClick = (index) => {
        setCurrentImageIndex(index);
        setShowSingleImage(true);
    };
    const handleBackToGallery = () => {
        setShowSingleImage(false);
    };
    const handleNextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };
    const handlePrevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };
    const handleClose = () => {
        setIsClosing(true);
        onClose();
        // setTimeout(() => {
        // }, 300);
    };
    return (React.createElement("div", { className: `album-modal-container ${isClosing ? "album-modal-closing" : ""}` },
        React.createElement("div", { className: "album-modal-overlay", onClick: handleClose }),
        React.createElement("div", { className: "album-modal-content" },
            React.createElement("header", { className: "album-modal-header" },
                showSingleImage && (React.createElement("button", { className: "album-modal-back-to-gallery-btn", onClick: handleBackToGallery },
                    React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 256 256" },
                        React.createElement("path", { fill: "currentColor", d: "M224 128a8 8 0 0 1-8 8H59.31l58.35 58.34a8 8 0 0 1-11.32 11.32l-72-72a8 8 0 0 1 0-11.32l72-72a8 8 0 0 1 11.32 11.32L59.31 120H216a8 8 0 0 1 8 8" })),
                    "Gallery")),
                React.createElement("button", { className: "album-modal-close-btn", onClick: handleClose },
                    "Close",
                    React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
                        React.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
                        React.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })))),
            showSingleImage ? (React.createElement(SingleImageModal, { images: images, currentIndex: currentImageIndex, onClose: () => setShowSingleImage(false), onPrev: handlePrevImage, onNext: handleNextImage, onThumbnailClick: setCurrentImageIndex })) : (React.createElement("div", { className: "album-modal-grid" }, images.map((image, index) => (React.createElement("div", { key: index, className: "album-modal-img-box" },
                React.createElement("img", { src: image, alt: `Image ${index + 1}`, onClick: () => handleImageClick(index), ref: index === selectedImageIndex ? selectedImageRef : null })))))))));
};

var css_248z = ".oig-image-gallery {\r\n  max-width: 1000px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.oig-image-grid.grid-version1 {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  gap: 0.5rem;\r\n}\r\n\r\n.oig-image-grid .oig-img-box {\r\n  width: 100%;\r\n  height: 6rem;\r\n  border-radius: 0.3rem;\r\n  cursor: pointer;\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n\r\n.oig-image-grid .oig-img-box > img {\r\n  width: inherit;\r\n  height: inherit;\r\n}\r\n\r\n.oig-image-grid.grid-version1 .oig-img-box:first-child {\r\n  grid-column: 1 / -1;\r\n  height: 13rem;\r\n}\r\n.oig-image-grid.grid-version2 {\r\n  display: grid;\r\n  grid-template-columns: repeat(7, 1fr);\r\n  grid-template-areas:\r\n    \"myArea1 myArea1 myArea1 myArea1 myArea1 myArea2 myArea2\"\r\n    \"myArea1 myArea1 myArea1 myArea1 myArea1 myArea3 myArea3\";\r\n  gap: 0.5rem;\r\n}\r\n\r\n.oig-image-grid.grid-version2 .oig-img-box:first-child {\r\n  height: 13rem;\r\n  grid-area: myArea1;\r\n}\r\n\r\n.oig-image-grid.grid-version2 .oig-img-box:nth-child(2) {\r\n  grid-area: myArea2;\r\n}\r\n\r\n.oig-image-grid.grid-version2 .oig-img-box:nth-child(3) {\r\n  grid-area: myArea3;\r\n  height: 6.5rem;\r\n}\r\n\r\n.oig-image-grid.grid-version2 .oig-img-box:last-child {\r\n  width: 8rem;\r\n}\r\n\r\n.oig-image-grid.grid-version2 .oig-img-box:nth-child(5) {\r\n  width: 8rem;\r\n}\r\n\r\n.oig-image-grid .oig-img-box:first-child > img {\r\n  width: inherit;\r\n  height: inherit;\r\n}\r\n\r\n.oig-image-grid .oig-last-image {\r\n  color: white;\r\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\r\n  font-size: 0.8rem;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.oig-image-grid .oig-img-box::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0, 0, 0, 0.3);\r\n  z-index: 1;\r\n  opacity: 0;\r\n  transition: opacity 0.3s ease;\r\n}\r\n\r\n.oig-image-grid .oig-img-box:hover::after {\r\n  opacity: 1;\r\n}\r\n";
styleInject(css_248z);

const ImageGallery = (props) => {
    const { images, width, height, grid, fullScreen } = props;
    const [showAlbumModal, setShowAlbumModal] = React.useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = React.useState(0);
    const [isMobile, setIsMobile] = React.useState(false);
    const [loadedImages, setLoadedImages] = React.useState([]);
    React.useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 468);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);
    const openAlbumModal = (index) => {
        setSelectedImageIndex(index);
        setShowAlbumModal(true);
    };
    const closeAlbumModal = () => setShowAlbumModal(false);
    const gridClassName = grid === "v2" ? "grid-version2" : "grid-version1";
    const cacheImage = React.useCallback((src) => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
                setLoadedImages((prev) => [...prev, src]);
                resolve(src);
            };
            img.onerror = reject;
        });
    }, []);
    React.useEffect(() => {
        images.forEach(cacheImage);
    }, [images, cacheImage]);
    const isImageLoaded = (src) => {
        return loadedImages.indexOf(src) !== -1;
    };
    if (isMobile) {
        return (React.createElement(SingleImageModal, { images: images, currentIndex: selectedImageIndex, onClose: () => setShowAlbumModal(false), onPrev: () => setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length), onNext: () => setSelectedImageIndex((prev) => (prev + 1) % images.length) }));
    }
    return (React.createElement("section", { style: {
            width: fullScreen ? "100%" : `${width}px`,
            height: fullScreen ? "100%" : `${height}px`,
        }, className: "oig-image-gallery" },
        React.createElement("div", { className: `oig-image-grid ${gridClassName}` }, images.slice(0, 10).map((image, index) => (React.createElement("div", { key: index, onClick: () => openAlbumModal(index), className: "oig-img-box" },
            isImageLoaded(image) ? (React.createElement("img", { src: image, alt: `Image ${index + 1}` })) : (React.createElement(SkeletonLoader, { width: "100%", height: "100%" })),
            images.length > 10 && index === 9 && (React.createElement("div", { className: "oig-last-image" },
                "+",
                images.length - 10,
                " Photos")))))),
        showAlbumModal && (React.createElement(AlbumModal, { images: images, onClose: closeAlbumModal, selectedImageIndex: selectedImageIndex }))));
};

exports.ImageGallery = ImageGallery;
//# sourceMappingURL=index.js.map
