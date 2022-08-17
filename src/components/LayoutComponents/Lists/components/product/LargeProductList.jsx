import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: azure;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 1rem;
  border-radius: 10px;
`;

const LargeProductList = ({ product }) => {
  const { name, price, description, rating } = product;

  return (
    <Container>
      <h3>{name}</h3>
      <p>{price}</p>
      <h3>Description</h3>
      <p>{description}</p>
      <p>Average Rating: {rating}</p>
    </Container>
  );
};

export default LargeProductList;
