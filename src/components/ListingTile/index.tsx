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
      {name} {plate} {make} {model}
      {images.length > 0 && <Gallery make={make} images={images} />}
      <ListingTag label={advert_classification} isCondition />
      <ListingTag label={advert_classification} />
      <ListingTag label={advert_classification} />
      <ListingTag label={advert_classification} />
      <ListingTag label={advert_classification} />
      <ListingTag label={advert_classification} />
      <VehiclePrice
        price={price}
        original_price={original_price ? original_price : ""}
        finance={finance}
        monthly_payment={monthly_payment}
      />
    </div>
  );
};
