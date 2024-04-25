import "./styles.scss";

interface GalleryProps {
  images: string[];
  make: string;
}

const GalleryImage = (image: string, make: string) => {
  if (image) {
    return (
      <img
        title={`Image of ${make}`}
        aria-label={`Image of ${make}`}
        className="gallery__image"
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
  if (images) {
    return (
      <div title="gallery" aria-label="gallery" className="gallery">
        {images.map((image) => GalleryImage(image, make))}
      </div>
    );
  }
  return null;
};
export default Gallery;
