import { useEffect, useState } from "react";
import { getMockData } from "../utils/mock.api";

export default function useGetCards() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    const data = await getMockData();
    setCards(data);
  };
  return cards;
}
