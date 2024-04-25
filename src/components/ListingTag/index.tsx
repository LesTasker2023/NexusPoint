import "./styles.scss";

import type Props from "./types";

export const Tag = ({ label }: Props) => {
  return (
    <div aria-label={label} title={label} className="listing-tag">
      {label}
    </div>
  );
};
