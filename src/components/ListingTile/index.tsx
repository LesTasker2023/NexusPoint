// #todo add alias in tsconfig
import { useState } from "react";
import { VehicleCard } from "../../types/vehicle-props";
import Gallery from "../Gallery";
import { ListingTag } from "../ListingTag";
import { VehiclePrice } from "../VehiclePrice";
import "./styles.scss";

export const ListingTile = ({
  name,
  plate,
  make,
  model,
  advert_classification,
  fuel_type,
  transmission,
  media_urls,
  price,
  original_price,
  finance,
  slug,
  seats,
  stockId,
}: VehicleCard) => {
  const images = media_urls.map((item) => item.thumb);
  const [isFavourite, setIsFavourite] = useState<boolean>(false);

  const handleClick = () => {
    setIsFavourite(!isFavourite);
    // set context / update redux here for a persistant favourites list
  };
  return (
    <div className="listing-tile">
      {images.length > 0 && (
        <Gallery make={make} images={images} stockId={stockId} />
      )}
      <div className="listing-tile__details-container">
        <div className="listing-tile__details-header">
          <h3 className="listing-tile__title">
            <span>{plate}</span>
            <span>{make}</span>
            <span>{model}</span>
          </h3>
          <p className="listing-tile__sub-title">
            <span>{make}</span>
            <span>{model}</span>
            <span>{fuel_type}</span>
            <span>{transmission}</span>
          </p>
          <div className="listing-tile__condition-tag">
            <ListingTag label={advert_classification} isCondition />
          </div>
        </div>

        <div className="listing-tile__details">
          <div className="listing-tile__tags">
            {/* Assuming there would be an array of tags to be used in prod. */}
            {/* A ListingTags component would be built. */}
            {/* Chose to display a few predetermined props for visibility. */}
            <ListingTag label={fuel_type} />
            <ListingTag label={transmission} />
            <ListingTag label={`${seats} seats`} />
          </div>
          <VehiclePrice
            price={price}
            original_price={original_price ? original_price : ""}
            finance={finance}
            monthly_payment={(parseInt(price) / 48).toFixed(2).toString()}
            slug={slug}
          />
          <img
            src={
              !isFavourite
                ? "/assets/icons/favourite-star.png"
                : "/assets/icons/favourite-star-filled.png"
            }
            onClick={handleClick}
            alt="Set Favourite"
            title="Set Favourite"
            aria-label="Set Favourite"
            className="listing-tile__favourite"
          />
        </div>
      </div>
    </div>
  );
};
