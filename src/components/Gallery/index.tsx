import { useEffect, useState } from "react";
import "./styles.scss";

interface GalleryProps {
  images: string[];
  make: string;
  stockId: string;
}

const GalleryImage = (
  image: string,
  make: string,
  id: number,
  stockId: string
) => {
  const imageId = `image-${stockId}-${id}`;
  if (image) {
    return (
      <img
        id={imageId}
        title={`Image ${id} of ${make}`}
        aria-label={`Image ${id} of ${make}`}
        className="gallery__image"
        loading="lazy"
        src={image}
        alt={make}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src =
            "https://t4.ftcdn.net/jpg/02/51/95/53/360_F_251955356_FAQH0U1y1TZw3ZcdPGybwUkH90a3VAhb.jpg";
        }}
      />
    );
  }
  return null;
};

const Gallery = ({ images, make, stockId }: GalleryProps) => {
  const [activeImage, setActiveImage] = useState<number>(1);
  const totalImages = images.length;

  const handleClick = (offset: string) => {
    if (offset === "next" && activeImage < totalImages) {
      setActiveImage(activeImage + 1);
    } else if (offset === "previous" && activeImage > 1) {
      setActiveImage(activeImage - 1);
    }
  };

  useEffect(() => {
    const targetActiveImage = document.getElementById(
      `image-${stockId}-${activeImage}`
    );
    if (targetActiveImage !== null) {
      targetActiveImage.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  }, [activeImage]);

  if (images) {
    return (
      <div
        id="gallery"
        title="gallery"
        aria-label="gallery"
        className="gallery"
      >
        <div className="gallery__controls">
          <span className="gallery__progress">
            {activeImage} of {totalImages}
          </span>
          <button
            className="gallery__button gallery__button--previous"
            onClick={() => handleClick("previous")}
          ></button>
          <button
            className="gallery__button gallery__button--next"
            onClick={() => handleClick("next")}
          ></button>
        </div>

        {images.map((image, index) =>
          GalleryImage(image, make, index + 1, stockId)
        )}
      </div>
    );
  }
  return null;
};
export default Gallery;
