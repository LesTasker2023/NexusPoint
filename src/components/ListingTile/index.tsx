// #todo add alias in tsconfig
import { VehicleCard } from "../../types/vehicle-props";
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
  return (
    <div className="listing-tile">
      {name} {plate} {make} {model}
      <ListingTag label={"40K"} isFeature={true} />
      <VehiclePrice
        price={price}
        original_price={original_price ? original_price : ""}
        finance={finance}
        monthly_payment={monthly_payment}
      />
    </div>
  );
};
