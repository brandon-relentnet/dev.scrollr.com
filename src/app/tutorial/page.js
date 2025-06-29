"use client";

import { useNextStep } from "nextstepjs";

export default function TutorialPage() {
  const {
    startNextStep,
    closeNextStep,
    currentTour,
    currentStep,
    setCurrentStep,
    isNextStepVisible,
  } = useNextStep();
  const handleStartTour = () => {
    startNextStep("firsttour");
  };
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-10">
      <button onClick={handleStartTour}>Start Tour</button>
      <div id="tour1-step1" className="size-25 bg-yellow-500 shadow-lg"></div>
      <div id="tour1-step2" className="size-25 bg-blue-500 shadow-lg"></div>
    </div>
  );
}
