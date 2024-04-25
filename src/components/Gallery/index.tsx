import "./styles.scss";

import React from "react";

interface GalleryProps {
  images: string[];
}

export const Gallery = ({ images }: GalleryProps) => {
  if (images) {
    return (
      <div className="gallery">
        {images.map((image) => (
          <img src={image} alt="" />
        ))}
      </div>
    );
  } else {
    return null;
  }
};
