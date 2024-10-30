import React, { useEffect, useState } from "react";
import { API_URI, MOCK_DATA } from "../utils/utils";
import Search from "./Search";
import RestaurantList from "./RestaurantList";



const Body = () => {
  const [resList, setSetList] = useState([]);
  const [filteredList, setFiteredList] = useState(resList);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = MOCK_DATA
    setSetList(
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFiteredList(
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
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
