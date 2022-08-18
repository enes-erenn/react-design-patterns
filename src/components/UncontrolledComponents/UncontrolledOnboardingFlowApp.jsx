import React from "react";
import UncontrolledOnboardingFlow from "./UncontrolledOnboardingFlow";

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
    <UncontrolledOnboardingFlow
      onFinish={(data) => {
        console.log(data);
        alert("Completed");
      }}
    >
      <StepOne />
      <StepTwo />
    </UncontrolledOnboardingFlow>
  );
};

export default UncontrolledOnboardingFlowApp;
