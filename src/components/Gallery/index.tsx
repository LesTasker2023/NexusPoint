import { useEffect, useState } from "react";
import "./styles.scss";

interface GalleryProps {
  images: string[];
  make: string;
}

const GalleryImage = (image: string, make: string, id: number) => {
  const imageId = `image-${id}`;
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

const Gallery = ({ images, make }: GalleryProps) => {
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
    const targetActiveImage = document.getElementById(`image-${activeImage}`);
    if (targetActiveImage !== null) {
      targetActiveImage.scrollIntoView();
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
          <button
            className="gallery__button gallery__button--previous"
            onClick={() => handleClick("previous")}
          ></button>
          <button
            className="gallery__button gallery__button--next"
            onClick={() => handleClick("next")}
          ></button>
        </div>

        {images.map((image, index) => GalleryImage(image, make, index + 1))}
      </div>
    );
  }
  return null;
};
export default Gallery;
