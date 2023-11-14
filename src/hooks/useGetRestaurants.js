import React from "react";
import { SwIGGY_API_URL } from "../config/API_CONF";
export default function useGetRestaurants() {
  const [restaurants, setRestaurants] = React.useState([]);
  const fetchRestaurants = async () => {
    const data = await fetch(SwIGGY_API_URL);
    const json = await data.json();
    setRestaurants(
      json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  React.useEffect(() => {
    fetchRestaurants();
  }, []);

  return restaurants;
}
