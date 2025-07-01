import { SwatchIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

import PositionToggle from "@/components/controls/PositionToggle";
import LayoutToggle from "@/components/controls/LayoutToggle";
import SpeedToggle from "@/components/controls/SpeedToggle";
import ThemeToggle from "@/components/controls/ThemeToggle";
import OpacitySlider from "@/components/controls/OpacitySlider";

export default function ThemeTab() {
  const [currentView, setCurrentView] = useState("themes");

  return (
    <>
      <label className="tab">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Tab 1"
        />
        <SwatchIcon className="size-8" />
      </label>
      <div className="tab-content bg-base-100 border-base-300 p-2">
        <div className="p-2">
          <div className="w-full">
            {/* Tab Navigation */}
            <div className="tabs tabs-box w-full mb-4">
              <button
                className={`tab flex-1 ${
                  currentView === "themes" ? "tab-active" : ""
                }`}
                onClick={() => setCurrentView("themes")}
              >
                Themes
              </button>
              <button
                className={`tab flex-1 ${
                  currentView === "preferences" ? "tab-active" : ""
                }`}
                onClick={() => setCurrentView("preferences")}
              >
                Preferences
              </button>
            </div>

            {/* Content based on current view */}
            <div className="overflow-hidden max-h-120">
              {currentView === "themes" && <ThemeToggle />}

              {currentView === "preferences" && (
                <div className="flex flex-col w-full pr-2 gap-4 overflow-y-auto h-110">
                  {/* Opacity Slider */}
                  <div className="w-full bg-base-200 p-4 card">
                    <OpacitySlider />
                  </div>

                  {/* Position Control */}
                  <div className="w-full bg-base-200 p-4 card">
                    <PositionToggle size="sm" />
                  </div>

                  {/* Layout Control */}
                  <div className="w-full bg-base-200 p-4 card">
                    <LayoutToggle size="sm" />
                  </div>

                  {/* Speed Control */}
                  <div className="w-full bg-base-200 p-4 card">
                    <SpeedToggle />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
