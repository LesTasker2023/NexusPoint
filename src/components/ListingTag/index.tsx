import "./styles.scss";

import type Props from "./types";

export const ListingTag = ({ label, isCondition }: Props) => {
  return (
    <div
      aria-label={label}
      title={label}
      className={`listing-tag ${isCondition && "listing-tag--featured"}`}
    >
      {label}
    </div>
  );
};
