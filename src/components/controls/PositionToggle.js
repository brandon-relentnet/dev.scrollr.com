"use client";

import { ArrowDownIcon } from "@heroicons/react/24/solid";
import { useSettingsUpdate } from "@/components/hooks/useSettingsUpdate";
import { useSelector } from "react-redux";
import { togglePosition } from "@/store/layoutSlice";

export default function PositionToggle({
  className = "",
  showLabel = true,
  size = "md",
}) {
  const sizeClasses = {
    sm: "size-10",
    md: "size-12",
    lg: "size-14",
  };
  const { updateSetting } = useSettingsUpdate();
  const position = useSelector((state) => state.layout?.position || "top");
  const layout = useSelector((state) => state.layout?.mode || "compact");

  const handlePositionChange = (newPosition) => {
    if (position !== newPosition) {
      updateSetting(togglePosition(), "POSITION_CHANGED", {
        position: newPosition,
      });
    }
  };

  return (
    <label className="label swap text-base-content font-semibold text-lg flex justify-between items-center">
      {showLabel && (
        <>
          <span className="label-text">Position</span>
          <span className="bg-base-300 card h-1 flex-1 ml-2" />
        </>
      )}

      <input
        type="checkbox"
        onChange={(e) =>
          handlePositionChange(e.target.checked ? "bottom" : "top")
        }
        checked={position === "bottom"}
      />
      <div
        className={`flex items-center gap-2 hover:scale-115 active:scale-95 transition-all duration-150 ${className}`}
        data-tip={`Position: ${
          position.charAt(0).toUpperCase() + position.slice(1)
        }`}
      >
        {showLabel && (
          <span className="label-text-alt text-lg italic">
            {position.charAt(0).toUpperCase() + position.slice(1)}
          </span>
        )}
        <div
          className={`flex flex-col ${
            sizeClasses[size]
          } card bg-base-300 card size-14 overflow-hidden ${
            position === "top" ? "rotate-180" : "rotate-360"
          } transition-transform duration-150`}
        >
          <div className="h-full transition-colors duration-150 flex items-center justify-center">
            <ArrowDownIcon className="size-6 text-primary" />
          </div>
          <div
            className="bg-primary origin-bottom transition-transform duration-300 ease-in-out h-4"
            style={{
              transform: layout === "compact" ? "scaleY(0.25)" : "scaleY(1)",
            }}
          />
        </div>
      </div>
    </label>
  );
}
