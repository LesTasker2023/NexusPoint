import { ListingTile } from "../../components";
import { MockResponse } from "../../types/vehicle-props";
import "./styles.scss";

import React from "react";

export const ListingFeed = ({ data }: MockResponse) => {
  const vehicleList = data;

  if (vehicleList.length > 0) {
    return (
      <>
        <div className="listing-feed">
          {vehicleList.map((vehicle) => {
            return <ListingTile {...vehicle} />;
          })}
        </div>
      </>
    );
  } else {
    return null;
  }
};
