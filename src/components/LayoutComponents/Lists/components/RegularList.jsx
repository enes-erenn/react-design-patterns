import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
`;

const RegularList = ({ items, resourceName, itemComponent: ItemComponent }) => {
  return (
    <Container>
      {items.map((item, i) => (
        <ItemComponent key={i} {...{ [resourceName]: item }} />
      ))}
    </Container>
  );
};

export default RegularList;
