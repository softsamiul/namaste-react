import React from "react";
import { CLODINARY_URL_PREFIX } from "../../utils/utils";

const RestaurantCard = (props) => {
  const { name, areaName, cuisines, cloudinaryImageId } = props.cardInfo.info;
  return (
    <div className="single_res_container">
      <div className="card_img_container">
        <img
          className="single_card_img"
          src={CLODINARY_URL_PREFIX + cloudinaryImageId}
          width={300}
          height={220}
        />
      </div>
      <div className="card_info_container">
        <h1>{name}</h1>
        <p>{areaName}</p>
        <p>{cuisines.join(", ")}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
