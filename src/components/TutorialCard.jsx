"use client";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const TutorialCard = ({
  step,
  currentStep,
  totalSteps,
  nextStep,
  prevStep,
  skipTour,
  arrow,
}) => {
  const isPopupOpen = useSelector((state) => state.popup?.isOpen || false);
  const [hasOpenedPopup, setHasOpenedPopup] = useState(false);

  useEffect(() => {
    if (currentStep === 0 && isPopupOpen && !hasOpenedPopup) {
      setHasOpenedPopup(true);
      setTimeout(() => {
        nextStep();
      }, 250);
    }
  }, [isPopupOpen, currentStep, hasOpenedPopup, nextStep]);

  // Reset the hasOpenedPopup state when moving to a different step
  useEffect(() => {
    if (currentStep !== 0) {
      setHasOpenedPopup(false);
    }
  }, [currentStep]);

  // Determine if the Next button should be disabled
  const isNextDisabled = currentStep === 0 && !hasOpenedPopup;

  return (
    <div
      className={`card card-border mr-8 border-base-300 bg-base-200 p-6 shadow-lg min-w-100 ${
        currentStep === 0 ? "mr-8" : ""
      }`}
    >
      <div className="flex items-center gap-3 mb-4">
        {step.icon && <div className="text-2xl">{step.icon}</div>}
        <h3 className="text-xl font-bold">{step.title}</h3>
      </div>

      <div className="mb-6">{step.content}</div>

      {/* Show a hint on the first step if popup hasn't been opened */}
      {currentStep === 0 && !hasOpenedPopup && (
        <div className="alert alert-info mb-4">
          <span>👆 Click the Scrollr icon in the navbar to continue</span>
        </div>
      )}

      {arrow}

      <div className="flex justify-between items-center">
        <div className="text-sm">
          Step {currentStep + 1} of {totalSteps}
        </div>

        <div className="flex gap-2">
          {currentStep > 1 && (
            <button onClick={prevStep} className="btn btn-outline">
              Previous
            </button>
          )}

          <button
            onClick={nextStep}
            disabled={isNextDisabled}
            className={`btn btn-primary ${isNextDisabled ? "" : ""}`}
            title={isNextDisabled ? "Open the popup to continue" : ""}
          >
            {currentStep === totalSteps - 1 ? "Finish" : "Next"}
          </button>
        </div>
      </div>
      {step.showSkip && (
        <button
          onClick={skipTour}
          className="btn btn-small absolute top-3 right-3 btn-ghost"
        >
          Skip
        </button>
      )}
    </div>
  );
};

export default TutorialCard;
