import React, { useEffect, useState } from "react";
import UserClass from "./UserClass";
import styled from "styled-components";
import Card, { withIsOpened } from "./Card";
import { getMockData } from "../utils/mock.api";
import useGetCards from "../hooks/useGetCards";
import useGetRestaurants from "../hooks/useGetRestaurants";
export default function Body() {
  const restaurants = useGetRestaurants();
  console.log(restaurants);

  const OpenedCard = withIsOpened(Card);
  return (
    <Container>
      {restaurants.map((card) => {
        if (card.info.isOpen) {
          return <OpenedCard key={card.info.id} data={card.info} />;
        }
        <Card key={card.info.id} data={card.info} />;
      })}
      {/* <Card /> */}
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  border: 1px solid black;
  flex-wrap: wrap;
`;
