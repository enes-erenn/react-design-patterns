import React from "react";
import styled from "styled-components";
import UncontrolledOnboardingFlow from "./UncontrolledOnboardingFlow";

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

const StepOne = ({ nextStep }) => (
  <>
    <h1>Step 1</h1>
    <button onClick={() => nextStep({ name: "John" })}>Next</button>
  </>
);
const StepTwo = ({ nextStep }) => (
  <>
    <h1>Step 2</h1>
    <button onClick={() => nextStep({ age: 1 })}>Next</button>
  </>
);

const UncontrolledOnboardingFlowApp = () => {
  return (
    <Container>
      <UncontrolledOnboardingFlow
        onFinish={(data) => {
          console.log(data);
          alert("Completed");
        }}
      >
        <StepOne />
        <StepTwo />
      </UncontrolledOnboardingFlow>
    </Container>
  );
};

export default UncontrolledOnboardingFlowApp;
