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
}: VehicleCard) => {
  const images = media_urls.map((item) => item.thumb);
  return (
    <div className="listing-tile">
      {images.length > 0 && <Gallery make={make} images={images} />}
      <h3 className="listing-tile__title">{plate}</h3>
      <ListingTag label={advert_classification} isCondition />
      <div className="listing-tile__tags">
        {/*
         Assuming there would be an array of tags to be used in prod.
         A ListingTags component would be built.
         Chose to display a few predetermined props for visibility.
        */}
        <ListingTag label={advert_classification} />
        <ListingTag label={advert_classification} />
        <ListingTag label={advert_classification} />
        <ListingTag label={advert_classification} />
      </div>
      <VehiclePrice
        price={price}
        original_price={original_price ? original_price : ""}
        finance={finance}
        monthly_payment={monthly_payment}
      />
    </div>
  );
};
