import { Price } from "../../types/vehicle-props";
import "./styles.scss";

export const VehiclePrice = ({
  price,
  original_price,
  finance,
  monthly_payment,
  slug,
}: Price) => {
  return (
    <div className="vehicle-price">
      {finance && (
        <div className="vehicle-price__finance-details">
          <p className="vehicle-price__monthly-payment">{monthly_payment}</p>
          <p className="vehicle-price__finance-type">{finance}</p>
        </div>
      )}
      <div className="vehicle-price__price-tag">
        <p className="vehicle-price__value">{price}</p>
        <p className="vehicle-price__original-value">{original_price}</p>
        {finance && (
          <a
            href={`/finance-calulator?vehicle=${slug}`}
            className="vehicle-price__calculate-finance"
          >
            Calculate finance
          </a>
        )}
      </div>
    </div>
  );
};
