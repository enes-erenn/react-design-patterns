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

const LargePersonList = ({ person }) => {
  const { name, age, hairColor, hobbies } = person;
  return (
    <Container>
      <h3>Name: {name}</h3>
      <p>Age: {age} years</p>
      <p>Hair Color: {hairColor} years</p>
      <h3>Hobbies:</h3>
      {hobbies.map((hobby) => (
        <li key={hobby}>{hobby}</li>
      ))}
    </Container>
  );
};

export default LargePersonList;
