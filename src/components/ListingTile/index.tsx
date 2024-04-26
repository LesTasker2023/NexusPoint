// #todo add alias in tsconfig
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
  derivative,
  advert_classification,
  fuel_type,
  transmission,
  media_urls,
  price,
  original_price,
  finance,
  monthly_payment,
  slug,
  seats,
}: VehicleCard) => {
  const images = media_urls.map((item) => item.thumb);
  return (
    <div className="listing-tile">
      {images.length > 0 && <Gallery make={make} images={images} />}
      <div className="listing-tile__details-container">
        <h3 className="listing-tile__title">{plate}</h3>
        <div className="listing-tile__condition-tag">
          <ListingTag label={advert_classification} isCondition />
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
            monthly_payment={monthly_payment}
            slug={slug}
          />
        </div>
      </div>
    </div>
  );
};
