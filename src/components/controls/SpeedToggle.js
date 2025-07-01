"use client";

import { useState } from "react";
import { TurtleIcon, WalkingIcon, RunningIcon } from "../icons/SpeedIcons";
import { toggleSpeed } from "@/store/layoutSlice";
import { useDispatch, useSelector } from "react-redux";

const SpeedToggle = ({ className = "", showLabel = true }) => {
  const dispatch = useDispatch();
  const speed = useSelector((state) => state.layout?.speed || "classic");

  const [isAnimating, setIsAnimating] = useState(false);
  const [prevSpeed, setPrevSpeed] = useState(speed);

  const handleClick = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setPrevSpeed(speed);

    setTimeout(() => {
      dispatch(toggleSpeed());
    }, 75);

    setTimeout(() => {
      setIsAnimating(false);
    }, 150);
  };

  const getIconPosition = (iconSpeed) => {
    if (!isAnimating) {
      // Not animating - show current speed icon only
      return iconSpeed === speed
        ? "translate-x-0 opacity-100"
        : "translate-x-full opacity-0";
    }

    // During animation
    if (iconSpeed === prevSpeed) {
      // Previous icon slides out to the left
      return "-translate-x-3 opacity-0";
    } else if (iconSpeed === speed) {
      // New icon slides in from the right
      return "translate-x-3 opacity-100";
    } else {
      // Other icons stay hidden on the right
      return "translate-x-full opacity-0";
    }
  };

  return (
    <label className="cursor-pointer">
      <div
        className={`flex items-center gap-2 hover:scale-115 active:scale-95 transition-all duration-150 ${className}`}
        data-tip={`Layout: ${speed.charAt(0).toUpperCase() + speed.slice(1)}`}
      >
        {showLabel && (
          <span className="label-text-alt text-lg italic">
            {speed.charAt(0).toUpperCase() + speed.slice(1)}
          </span>
        )}

        <button
          onClick={handleClick}
          className={`card overflow-hidden relative cursor-pointer bg-base-300`}
        >
          <div className="relative group size-14">
            {/* Slow Speed - Turtle */}
            <div
              className={`absolute inset-0 transition-all duration-150 ease-out ${getIconPosition(
                "slow"
              )}`}
            >
              <label className="cursor-pointer flex items-center justify-center h-full text-primary transition-transform duration-150">
                <span className="label-text">
                  <TurtleIcon />
                </span>
              </label>
            </div>

            {/* Classic Speed - Walking */}
            <div
              className={`absolute inset-0 transition-all duration-150 ease-out ${getIconPosition(
                "classic"
              )}`}
            >
              <label className="cursor-pointer flex items-center justify-center h-full text-primary transition-transform duration-150">
                <span className="label-text">
                  <WalkingIcon className="size-10" />
                </span>
              </label>
            </div>

            {/* Fast Speed - Running */}
            <div
              className={`absolute inset-0 transition-all duration-150 ease-out ${getIconPosition(
                "fast"
              )}`}
            >
              <label className="cursor-pointer flex items-center justify-center h-full text-primary transition-transform duration-150">
                <span className="label-text">
                  <RunningIcon />
                </span>
              </label>
            </div>
          </div>
        </button>
      </div>
    </label>
  );
};

export default SpeedToggle;
