import React, { useState } from "react";
import ControlledOnboardingFlow from "../ControlledComponents/ControlledOnboardingFlow";

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

const ControlledOnboardingFlowApp = () => {
  const [onboardingData, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const onNext = (stepData) => {
    setOnboardingData({ ...onboardingData, ...stepData });
    setCurrentIndex((currentIndex) => currentIndex + 1);
  };

  return (
    <ControlledOnboardingFlow currentIndex={currentIndex} onNext={onNext}>
      <StepOne />
      <StepTwo />
    </ControlledOnboardingFlow>
  );
};

export default ControlledOnboardingFlowApp;
