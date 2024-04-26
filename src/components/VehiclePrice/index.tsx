import { Price } from "../../types/vehicle-props";
import { Button } from "../Button";
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
          <p className="vehicle-price__monthly-payment">
            £{monthly_payment}
            <span>/mo</span>
          </p>
          <p className="vehicle-price__finance-type">{finance}</p>
        </div>
      )}
      <div className="vehicle-price__price-tag">
        <p
          className={`vehicle-price__value ${
            price === original_price ? "vehicle-price__value--discount" : ""
          }`}
        >
          £{price}
        </p>
        {price === original_price && (
          <p className="vehicle-price__original-value">£{original_price}</p>
        )}
        {finance && (
          <a
            href={`/finance-calulator?vehicle=${slug}`}
            className="vehicle-price__calculate-finance"
          >
            Calculate finance
          </a>
        )}
        <div
          onClick={() => alert(`Redirect to:  /${slug}`)}
          className="vehicle-price__view-button"
        >
          <Button label={"View"} theme="secondary" />
        </div>
      </div>
    </div>
  );
};
