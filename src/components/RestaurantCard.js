import React from "react";
import { CLODINARY_URL_PREFIX } from "../utils/utils";

const RestaurantCard = (props) => {
  const { name, areaName, cuisines, cloudinaryImageId, avgRating, costForTwo, isOpen, sla, totalRatingsString } = props.cardInfo.info;
  return (
    <div className="w-[250px] bg-gray-100 min-h-[400px] hover:bg-gray-200">
      <div className="card_img_container">
        <img
          className="w-[100%] h-[150px]"
          src={CLODINARY_URL_PREFIX + cloudinaryImageId}
         
        />
      </div>
      <div className="px-1">
        <h1 className="text-xl font-bold py-3">{name}</h1>
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
