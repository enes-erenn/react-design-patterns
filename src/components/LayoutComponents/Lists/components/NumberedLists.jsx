import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: lightblue;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
`;
const NumberedList = ({
  items,
  resourceName,
  itemComponent: ItemComponent,
}) => {
  return (
    <Container>
      {items.map((item, i) => (
        <>
          <h3>{i + 1}</h3>
          <ItemComponent key={i} {...{ [resourceName]: item }} />
        </>
      ))}
    </Container>
  );
};

export default NumberedList;
