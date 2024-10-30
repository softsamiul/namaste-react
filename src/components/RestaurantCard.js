import React from "react";
import { CLODINARY_URL_PREFIX } from "../utils/utils";

const RestaurantCard = (props) => {
  const { name, areaName, cuisines, cloudinaryImageId, avgRating, costForTwo, isOpen, sla, totalRatingsString } = props.cardInfo.info;
  return (
    <div className="single_res_container">
      <div className="card_img_container">
        <img
          className="single_card_img"
          src={CLODINARY_URL_PREFIX + cloudinaryImageId}
          width={200}
          height={120}
        />
      </div>
      <div className="card_info_container">
        <h1>{name}</h1>
        <p>{areaName}</p>
        <p>{cuisines.join(", ")}</p>
        <p>Avg rating: {avgRating}, Total rating:{totalRatingsString} <br></br> <strong>{costForTwo}</strong></p>
        <p>{isOpen ? "Available" : "Shoutdown"}</p>
        <p>Delivey in {sla?.slaString}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
