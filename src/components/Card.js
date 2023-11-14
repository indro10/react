import React from "react";
import styled from "styled-components";
import { ImageUrl } from "../config/API_CONF";
import { Link } from "react-router-dom";

export default function Card({ data }) {
  return (
    <Link to={`/restaurant/{data.id}`}>
      <Container>
        <Image src={ImageUrl(data.cloudinaryImageId)}></Image>
        <Info>{data.name}</Info>
      </Container>
    </Link>
  );
}

export function withIsOpened(Component) {
  return (props) => {
    return (
      <>
        <label>is Open</label>
        <Component {...props} />
      </>
    );
  };
}

const Container = styled.div`
  height: 300px;
  width: 150px;
  border: 1px solid lightgray;
  margin: 5px;
  &:hover {
    border: 1px solid red;
    cursor: pointer;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 80%;
`;
const Info = styled.div``;
