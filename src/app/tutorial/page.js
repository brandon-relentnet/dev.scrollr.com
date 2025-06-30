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
    startNextStep("userPopupTour");
  };
  return (
    <div className="flex flex-col justify-center items-center gap-10 min-h-[calc(100vh-4rem)]">
      <button onClick={handleStartTour} className="btn btn-xl btn-primary">
        Start Tour
      </button>
    </div>
  );
}
