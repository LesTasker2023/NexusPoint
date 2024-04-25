import "./styles.scss";

import type Props from "./types";

export const Tag = ({ label, isFeature }: Props) => {
  return (
    <div
      aria-label={label}
      title={label}
      className={`listing-tag ${isFeature && "listing-tag--featured"}`}
    >
      {label}
    </div>
  );
};
