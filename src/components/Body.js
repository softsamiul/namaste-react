import React, { useEffect, useState } from "react";
import { API_URI, MOCK_DATA } from "../utils/utils";
import Search from "./Search";
import RestaurantList from "./RestaurantList";
import useOnlineStatus from "../hooks/useOnlineStatus";

const Body = () => {
  const [resList, setSetList] = useState([]);
  const [filteredList, setFiteredList] = useState(resList);
  const status = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = MOCK_DATA;
    setSetList(
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFiteredList(
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return (
    <main className="">
      <div className="mb-5">
        <Search />
      </div>
      <div className="flex">
        {status ? (
          <RestaurantList resList={filteredList} />
        ) : (
          <h1>Dear user, please check internet connection!!!</h1>
        )}
      </div>
    </main>
  );
};

export default Body;
