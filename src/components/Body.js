import React, { useEffect, useState } from "react";
import Search from "./search/Search";
import RestaurantList from "./resturant/RestaurantList";
import { API_URI } from "../utils/utils";

const Body = () => {
  const [resList, setSetList] = useState([]);
  const [filteredList, setFiteredList] = useState(resList);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(API_URI);
    const data = await res.json();
    console.log(
      data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setSetList(
      data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setFiteredList(
      data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  return (
    <main>
      <Search />
      <RestaurantList resList={filteredList} />
    </main>
  );
};

export default Body;
