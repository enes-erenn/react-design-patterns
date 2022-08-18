import React from "react";

const ControlledOnboardingFlow = ({
  children,
  onFinish,
  currentIndex,
  onNext,
}) => {
  const currentChild = React.Children.toArray(children)[currentIndex];

  const nextStep = (stepData) => {
    onNext(stepData);
  };

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { nextStep });
  }
  return currentChild;
};

export default ControlledOnboardingFlow;
