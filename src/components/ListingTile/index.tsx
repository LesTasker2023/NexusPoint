// #todo add alias in tsconfig
import { VehicleCard } from "../../types/vehicle-props";
import { Tag } from "../Tag";
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
}: VehicleCard) => {
  return (
    <div className="listing-tile">
      {name} {plate} {make} {model}
      <Tag label={"40K"} />
    </div>
  );
};
