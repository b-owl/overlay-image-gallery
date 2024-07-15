import React, { useRef, useEffect, useState } from 'react';

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
    var selectedImageRef = useRef(null);
    useEffect(function () {
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
    var thumbnailStripRef = useRef(null);
    var _a = useState(null), direction = _a[0], setDirection = _a[1];
    useEffect(function () {
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
    var _a = useState(false), showAlbumModal = _a[0], setShowAlbumModal = _a[1];
    var _b = useState(false), showSingleImageModal = _b[0], setShowSingleImageModal = _b[1];
    var _c = useState(0), currentImageIndex = _c[0], setCurrentImageIndex = _c[1];
    var _d = useState(0), selectedImageIndex = _d[0], setSelectedImageIndex = _d[1];
    var _e = useState(false), isMobile = _e[0], setIsMobile = _e[1];
    useEffect(function () {
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

export { ImageGallery };
//# sourceMappingURL=index.esm.js.map
