import React from "react";
import styled from "styled-components";
import RecursiveComponent from "./components/RecursiveComponent";

const Container = styled.div`
  width: 100%;
  height: 93vh;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #fff;
  font-size: 24px;
`;

const nestedObject = {
  a: 1,
  b: {
    b1: 4,
    b2: {
      b23: "Hello",
    },
    b3: {
      b31: {
        message: "Hi",
      },
      b32: {
        message: "Hi",
      },
    },
  },
  c: {
    c1: 2,
    c2: 3,
  },
};

const RecursiveComponentApp = () => {
  return (
    <Container>
      <RecursiveComponent data={nestedObject} />
    </Container>
  );
};

export default RecursiveComponentApp;
