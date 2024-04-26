import "./styles.scss";

import React from "react";

interface Props {
  label: string;
  theme?: "primary" | "secondary";
}
export const Button = ({ theme = "primary", label }: Props) => {
  return (
    <button
      type="button"
      title={`${label} button`}
      className={`button button--${theme}`}
    >
      {label}
    </button>
  );
};
