import React from "react";
import styled from "styled-components";

const Container = styled.h2`
align-items:center;
justify-content; center;
text-align: center;
`;

const LeftHandComponent = ({ message }) => {
  return <Container>{message}</Container>;
};

export default LeftHandComponent;
