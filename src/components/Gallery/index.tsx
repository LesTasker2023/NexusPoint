import "./styles.scss";

import React from "react";

export const Gallery = (images: [""]) => {
  return (
    <div className="gallery">
      {images.map((image) => (
        <img src={image} alt="" />
      ))}
    </div>
  );
};
