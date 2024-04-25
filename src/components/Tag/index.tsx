import "./styles.scss";

import React from "react";

import type Props from "./types";

export const Tag = ({ label }: Props) => {
  return <div className="tag">{label}</div>;
};
