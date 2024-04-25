import { Price } from "../../types/vehicle-props";
import "./styles.scss";

export const VehiclePrice = ({
  price,
  original_price,
  finance,
  monthly_payment,
}: Price) => {
  return <div className="vehicle-price">{monthly_payment}</div>;
};
