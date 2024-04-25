// #todo add alias in tsconfig
import { VehicleCard } from "../../types/vehicle-props";
import "./styles.scss";

export const Card = ({
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
    <div className="card">
      {name} {plate} {make} {model}
    </div>
  );
};
