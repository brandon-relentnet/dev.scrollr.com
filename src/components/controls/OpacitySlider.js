"use client";

import { useEffect, useState, useRef } from "react";
import { setOpacity } from "@/store/layoutSlice";
import { useSettingsUpdate } from "@/components/hooks/useSettingsUpdate";
import { useSelector } from "react-redux";

const OpacitySlider = () => {
  const { updateSetting } = useSettingsUpdate();

  const opacity = useSelector((state) => state.layout?.opacity ?? 1.0);

  const [localOpacity, setLocalOpacity] = useState(1.0);
  const [isDragging, setIsDragging] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const isSliderUpdate = useRef(false);

  // Set mounted status after hydration
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Sync localOpacity with Redux opacity after hydration
  useEffect(() => {
    setLocalOpacity(opacity);
  }, [opacity]);

  useEffect(() => {
    if (isSliderUpdate.current) {
      isSliderUpdate.current = false;
      return;
    }
    if (!isDragging) {
      setLocalOpacity(opacity);
    }
  }, [opacity, isDragging]);

  const handleOpacityChange = (event) => {
    const newOpacity = parseFloat(event.target.value) / 100;
    setLocalOpacity(newOpacity);
  };

  const handleOpacityEnd = (event) => {
    const target = event.target;
    const newOpacity = parseFloat(target.value) / 100;
    isSliderUpdate.current = true;
    updateSetting(setOpacity(newOpacity), "OPACITY_CHANGED", {
      opacity: newOpacity,
    });
    setIsDragging(false);
  };

  return (
    <>
      <label className="label text-base-content font-semibold text-lg mb-3 flex justify-between items-center">
        <span className="label-text">Opacity</span>
        <span className="bg-base-300 card h-1 flex-1 mx-2"></span>
        {isMounted && (
          <span className="label-text-alt italic">
            {Math.round(localOpacity * 100)}%
          </span>
        )}
      </label>
      {isMounted && (
        <input
          type="range"
          min={0}
          max="100"
          value={Math.round(localOpacity * 100)}
          onChange={handleOpacityChange}
          onMouseDown={() => setIsDragging(true)}
          onTouchStart={() => setIsDragging(true)}
          onMouseUp={handleOpacityEnd}
          onTouchEnd={handleOpacityEnd}
          className="range range-primary w-full"
        />
      )}
    </>
  );
};

export default OpacitySlider;
