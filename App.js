var App = (function (React) {
  'use strict';

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

  var css_248z$2 = ".modal {\r\n    z-index: 20;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100vw;\r\n    height: 100vh;\r\n}\r\n\r\n.modal.album-modal {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    align-items: flex-start;\r\n    background-color: rgba(0, 0, 0, 0.8);\r\n    overflow-y: auto;\r\n}\r\n\r\n.close-btn {\r\n    position: fixed;\r\n    top: 3%;\r\n    right: 5%;\r\n    font-size: 30px;\r\n    color: white;\r\n    background: none;\r\n    border: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.album-grid {\r\n    animation: scaleUp 0.3s ease-in-out;\r\n    transition: 0.5;\r\n    padding: 2rem 0;\r\n    column-count: 3;\r\n    gap: 0.8rem;\r\n    width: 70%;\r\n    overflow-y: auto;\r\n}\r\n\r\n@keyframes scaleUp {\r\n    from {\r\n        transform: scale(0.4);\r\n    }\r\n    to {\r\n        transform: scale(1);\r\n    }\r\n}\r\n\r\n.album-grid .img-box {\r\n    overflow: hidden;\r\n    display: inline-block;\r\n    width: 100%;\r\n    cursor: pointer;\r\n    margin-top: 0.5rem;\r\n    border-radius: 0.3rem;\r\n}\r\n.album-grid img {\r\n    transition: all 0.3s ease-in-out;\r\n    border-radius: 0.3rem;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.album-grid .img-box:hover img {\r\n    transform: scale(1.3);\r\n}\r\n\r\n@keyframes winking {\r\n    0% {\r\n        opacity: 1;\r\n        border: 2px solid #007bff;\r\n    }\r\n    40% {\r\n        opacity: 0.5;\r\n        border: 2px solid transparent;\r\n    }\r\n    70% {\r\n        opacity: 1;\r\n        border: 2px solid #007bff;\r\n    }\r\n    100% {\r\n        opacity: 1;\r\n        border: 2px solid transparent;\r\n    }\r\n}\r\n\r\n.winking-effect {\r\n    animation: winking 2.2s ease-in-out;\r\n}\r\n";
  styleInject(css_248z$2);

  var getRandomHeight = function () {
      var min = 6;
      var max = 20;
      var height = Math.random() * (max - min) + min;
      return "".concat(height, "rem");
  };
  var AlbumModal = function (props) {
      var images = props.images, onClose = props.onClose, onImageClick = props.onImageClick, selectedImageIndex = props.selectedImageIndex;
      var selectedImageRef = React.useRef(null);
      React.useEffect(function () {
          if (selectedImageRef.current) {
              setTimeout(function () {
                  var _a;
                  (_a = selectedImageRef.current) === null || _a === void 0 ? void 0 : _a.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                  });
              }, 150);
              selectedImageRef.current.classList.add("winking-effect");
              setTimeout(function () {
                  if (selectedImageRef.current) {
                      selectedImageRef.current.classList.remove("winking-effect");
                  }
              }, 2200);
          }
      }, [selectedImageIndex]);
      return (React.createElement("div", { className: "modal album-modal" },
          React.createElement("button", { className: "close-btn", onClick: onClose }, "\u00D7"),
          React.createElement("div", { className: "album-grid" }, images.map(function (image, index) { return (React.createElement("div", { key: index, className: "img-box" },
              React.createElement("img", { src: image, alt: image, onClick: function () { return onImageClick(index); }, style: { height: getRandomHeight() }, ref: index === selectedImageIndex ? selectedImageRef : null }))); }))));
  };

  var css_248z$1 = ".modal {\r\n    z-index: 20;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.modal.single-image-modal {\r\n    background-color: rgb(0, 0, 0);\r\n}\r\n\r\n.single-page-close-btn {\r\n    position: fixed;\r\n    top: 5%;\r\n    right: 4%;\r\n    font-size: 14px;\r\n    color: white;\r\n    background: none;\r\n    border: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.single-image-modal .album-image > img {\r\n    max-width: 90%;\r\n    max-height: 90%;\r\n    object-fit: contain;\r\n    position: relative;\r\n}\r\n\r\n.image-counter {\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    color: white;\r\n    padding: 5px 10px;\r\n    border-radius: 15px;\r\n    font-size: 14px;\r\n    z-index: 10;\r\n}\r\n\r\n.nav-btn {\r\n    position: absolute;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    font-size: 40px;\r\n    color: white;\r\n    background: rgba(0, 0, 0, 0.5);\r\n    border: none;\r\n    cursor: pointer;\r\n    z-index: 10;\r\n    padding: 10px;\r\n}\r\n\r\n.single-image-modal {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.main-image-container {\r\n    height: 64vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.5rem;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.main-image {\r\n    max-width: 100%;\r\n    max-height: 100%;\r\n    object-fit: contain;\r\n    transition: transform 0.3s ease-out;\r\n}\r\n\r\n.main-image.next {\r\n    animation: slideLeft 0.3s forwards;\r\n}\r\n\r\n.main-image.prev {\r\n    animation: slideRight 0.3s forwards;\r\n}\r\n\r\n@keyframes slideLeft {\r\n    from {\r\n        transform: translateX(100%);\r\n    }\r\n    to {\r\n        transform: translateX(0);\r\n    }\r\n}\r\n\r\n@keyframes slideRight {\r\n    from {\r\n        transform: translateX(-100%);\r\n    }\r\n    to {\r\n        transform: translateX(0);\r\n    }\r\n}\r\n\r\n.thumbnail-strip {\r\n    margin: 0 auto;\r\n    position: absolute;\r\n    bottom: 20px;\r\n    left: 0;\r\n    right: 0;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    gap: 10px;\r\n    padding: 10px;\r\n    max-width: 60%;\r\n    overflow-x: auto;\r\n}\r\n.thumbnail-strip::-webkit-scrollbar {\r\n    display: none;\r\n}\r\n\r\n.album-image-box {\r\n    position: relative;\r\n    width: 60px;\r\n    height: 60px;\r\n}\r\n\r\n.album-image-box .thumbnail {\r\n    width: inherit;\r\n    height: inherit;\r\n    cursor: pointer;\r\n    transition: border-color 0.3s ease;\r\n    border-radius: 0.3rem;\r\n    opacity: 0.5;\r\n}\r\n\r\n.album-image-box .thumbnail.active {\r\n    opacity: 1;\r\n    transform: scale(1.2);\r\n}\r\n\r\n.prev-btn {\r\n    left: 20px;\r\n}\r\n\r\n.next-btn {\r\n    right: 20px;\r\n}\r\n\r\n@media (max-width: 468px) {\r\n    .modal {\r\n        width: 100%;\r\n        position: relative;\r\n    }\r\n    .modal.single-image-modal {\r\n        background-color: transparent;\r\n        height: auto;\r\n    }\r\n\r\n    .image-counter {\r\n        bottom: 17%;\r\n        right: 1rem;\r\n        position: absolute;\r\n    }\r\n\r\n    .prev-btn {\r\n        left: 0;\r\n    }\r\n\r\n    .next-btn {\r\n        right: 0;\r\n    }\r\n\r\n    .thumbnail-strip {\r\n        display: none;\r\n    }\r\n\r\n    .single-page-close-btn {\r\n        display: none;\r\n    }\r\n}\r\n";
  styleInject(css_248z$1);

  var SingleImageModal = function (props) {
      var images = props.images, currentIndex = props.currentIndex, onClose = props.onClose, onPrev = props.onPrev, onNext = props.onNext, onThumbnailClick = props.onThumbnailClick;
      var currentImage = images[currentIndex];
      var thumbnailStripRef = React.useRef(null);
      var _a = React.useState(null), direction = _a[0], setDirection = _a[1];
      React.useEffect(function () {
          if (thumbnailStripRef.current) {
              var activeThumb = thumbnailStripRef.current.querySelector(".active");
              if (activeThumb) {
                  activeThumb.scrollIntoView({
                      behavior: "smooth",
                      inline: "center",
                      block: "nearest",
                  });
              }
          }
      }, [currentIndex]);
      var handleNext = function () {
          setDirection("next");
          onNext();
      };
      var handlePrev = function () {
          setDirection("prev");
          onPrev();
      };
      return (React.createElement("div", { className: "modal single-image-modal" },
          React.createElement("button", { className: "single-page-close-btn", onClick: onClose }, "Back"),
          React.createElement("div", { className: "main-image-container" },
              React.createElement("img", { src: currentImage, alt: currentImage, className: "main-image ".concat(direction), onAnimationEnd: function () { return setDirection(null); } }),
              React.createElement("div", { className: "image-counter" },
                  currentIndex + 1,
                  "/",
                  images.length)),
          React.createElement("button", { className: "nav-btn prev-btn", onClick: handlePrev }, "\u2039"),
          React.createElement("button", { className: "nav-btn next-btn", onClick: handleNext }, "\u203A"),
          React.createElement("div", { className: "thumbnail-strip", ref: thumbnailStripRef }, images.map(function (image, index) { return (React.createElement("div", { className: "album-image-box", key: index },
              React.createElement("img", { src: image, alt: image, className: "thumbnail ".concat(index === currentIndex ? "active" : ""), onClick: function () { return onThumbnailClick(index); } }))); }))));
  };

  var css_248z = ".image-gallery {\r\n    max-width: 1000px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.image-grid.grid-version1 {\r\n    display: grid;\r\n    grid-template-columns: repeat(3, 1fr);\r\n    gap: 0.5rem;\r\n}\r\n\r\n.image-grid .img-box {\r\n    width: 100%;\r\n    height: 6rem;\r\n    border-radius: 0.3rem;\r\n    cursor: pointer;\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n\r\n.image-grid .img-box > img {\r\n    width: inherit;\r\n    height: inherit;\r\n}\r\n\r\n.image-grid.grid-version1 .img-box:first-child {\r\n    grid-column: 1 / -1;\r\n    height: 13rem;\r\n}\r\n.image-grid.grid-version2 {\r\n    display: grid;\r\n    grid-template-columns: repeat(7, 1fr);\r\n    grid-template-areas:\r\n        \"myArea1 myArea1 myArea1 myArea1 myArea1 myArea2 myArea2\"\r\n        \"myArea1 myArea1 myArea1 myArea1 myArea1 myArea3 myArea3\";\r\n    gap: 0.5rem;\r\n}\r\n\r\n.image-grid.grid-version2 .img-box:first-child {\r\n    height: 13rem;\r\n    grid-area: myArea1;\r\n}\r\n\r\n.image-grid.grid-version2 .img-box:nth-child(2) {\r\n    grid-area: myArea2;\r\n}\r\n\r\n.image-grid.grid-version2 .img-box:nth-child(3) {\r\n    grid-area: myArea3;\r\n    height: 6.5rem;\r\n}\r\n\r\n.image-grid.grid-version2 .img-box:last-child {\r\n    width: 8rem;\r\n}\r\n\r\n.image-grid.grid-version2 .img-box:nth-child(5) {\r\n    width: 8rem;\r\n}\r\n\r\n.image-grid .img-box:first-child > img {\r\n    width: inherit;\r\n    height: inherit;\r\n}\r\n\r\n.image-grid .last-image {\r\n    color: white;\r\n    font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\r\n    font-size: 0.8rem;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background-color: rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.image-grid .img-box::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0, 0, 0, 0.3);\r\n    z-index: 1;\r\n    opacity: 0;\r\n    transition: opacity 0.3s ease;\r\n}\r\n\r\n.image-grid .img-box:hover::after {\r\n    opacity: 1;\r\n}\r\n";
  styleInject(css_248z);

  var ImageGallery = function (props) {
      var images = props.images, width = props.width, height = props.height, grid = props.grid, fullScreen = props.fullScreen;
      var _a = React.useState(false), showAlbumModal = _a[0], setShowAlbumModal = _a[1];
      var _b = React.useState(false), showSingleImageModal = _b[0], setShowSingleImageModal = _b[1];
      var _c = React.useState(0), currentImageIndex = _c[0], setCurrentImageIndex = _c[1];
      var _d = React.useState(0), selectedImageIndex = _d[0], setSelectedImageIndex = _d[1];
      var _e = React.useState(false), isMobile = _e[0], setIsMobile = _e[1];
      React.useEffect(function () {
          var checkMobile = function () {
              setIsMobile(window.innerWidth <= 468);
          };
          checkMobile();
          window.addEventListener("resize", checkMobile);
          return function () { return window.removeEventListener("resize", checkMobile); };
      }, []);
      var openAlbumModal = function (index) {
          setSelectedImageIndex(index);
          setShowAlbumModal(true);
      };
      var closeAlbumModal = function () { return setShowAlbumModal(false); };
      var openSingleImageModal = function (index) {
          setSelectedImageIndex(index);
          setShowSingleImageModal(true);
      };
      var closeSingleImageModal = function () { return setShowSingleImageModal(false); };
      var handleThumbnailClick = function (index) {
          setSelectedImageIndex(index);
      };
      var handleNextImage = function () {
          setCurrentImageIndex(function (prevIndex) { return (prevIndex + 1) % images.length; });
      };
      var handlePrevImage = function () {
          setCurrentImageIndex(function (prevIndex) { return (prevIndex - 1 + images.length) % images.length; });
      };
      if (isMobile) {
          return (React.createElement(SingleImageModal, { images: images, currentIndex: currentImageIndex, onClose: function () { }, onPrev: handlePrevImage, onNext: handleNextImage, onThumbnailClick: setCurrentImageIndex }));
      }
      var gridClassName = grid === "v2" ? "grid-version2" : "grid-version1";
      return (React.createElement("section", { style: {
              width: "".concat(fullScreen ? "100%" : width, "px"),
              height: "".concat(fullScreen ? "100%" : height, "px"),
          }, className: "image-gallery" },
          React.createElement("div", { className: "image-grid ".concat(gridClassName) }, images.slice(0, 10).map(function (image, index) { return (React.createElement("div", { key: index, onClick: function () { return openAlbumModal(index); }, className: "img-box" },
              React.createElement("img", { key: index, src: image, alt: image }),
              images.length > 10 && index === 9 && (React.createElement("div", { className: "last-image" },
                  "+",
                  images.length - 10,
                  " Photos")))); })),
          showAlbumModal && (React.createElement(AlbumModal, { images: images, onClose: closeAlbumModal, onImageClick: openSingleImageModal, selectedImageIndex: selectedImageIndex })),
          showSingleImageModal && (React.createElement(SingleImageModal, { images: images, currentIndex: selectedImageIndex, onClose: closeSingleImageModal, onPrev: function () {
                  return setSelectedImageIndex(function (prev) { return (prev - 1 + images.length) % images.length; });
              }, onNext: function () {
                  return setSelectedImageIndex(function (prev) { return (prev + 1) % images.length; });
              }, onThumbnailClick: handleThumbnailClick }))));
  };

  function App() {
      var imagesList = [
          "https://images.pexels.com/photos/22807107/pexels-photo-22807107/free-photo-of-a-dog-in-a-car.jpeg?auto=compress&cs=tinysrgb&w=600",
          "data:image/jpeg;base64,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",
          "https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/699739/pexels-photo-699739.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/13130413/pexels-photo-13130413.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/15447232/pexels-photo-15447232/free-photo-of-building-with-a-blue-door.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/160729/wall-fox-lasiommata-megera-butterfly-hand-160729.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/209415/pexels-photo-209415.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/5709945/pexels-photo-5709945.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/3155894/pexels-photo-3155894.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/160846/french-bulldog-summer-smile-joy-160846.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/58997/pexels-photo-58997.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/1458916/pexels-photo-1458916.jpeg?auto=compress&cs=tinysrgb&w=600",
      ];
      return (React.createElement("div", { style: {
              width: "100%",
              minHeight: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "cneter",
          } },
          React.createElement(ImageGallery, { width: 650, height: 400, grid: "v2", images: imagesList })));
  }

  return App;

})(React);
//# sourceMappingURL=App.js.map
