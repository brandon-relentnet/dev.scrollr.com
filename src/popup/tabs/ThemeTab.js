import { SwatchIcon } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "@/store/themeSlice";
import {
  setOpacity,
  setLayout,
  toggleSpeed,
  togglePosition,
} from "@/store/layoutSlice";
import { useAuth } from "@/components/hooks/useAuth";
import { useSettingsUpdate } from "@/components/hooks/useSettingsUpdate";
import debugLogger from "@/utils/debugLogger.js";
import { useState, useEffect, useRef } from "react";
import PositionToggle from "@/components/controls/PositionToggle";
import LayoutToggle from "@/components/controls/LayoutToggle";
import SpeedControl from "@/components/controls/SpeedControl";
import { THEMES } from "./data";

export default function ThemeTab() {
  const dispatch = useDispatch();
  const { updateSetting } = useSettingsUpdate();
  const { saveSettingsImmediately } = useAuth();

  const currentTheme = useSelector((state) => state.theme);
  const opacity = useSelector((state) => state.layout?.opacity ?? 1.0);
  const speed = useSelector((state) => state.layout?.speed || "classic");
  const position = useSelector((state) => state.layout?.position || "top");
  const layout = useSelector((state) => state.layout?.mode || "compact");

  const [currentView, setCurrentView] = useState("themes");
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

  const handleSpeedChange = (newSpeed) => {
    let currentSpeed = speed;
    while (currentSpeed !== newSpeed) {
      dispatch(toggleSpeed());
      currentSpeed =
        currentSpeed === "slow"
          ? "classic"
          : currentSpeed === "classic"
          ? "fast"
          : "slow";
    }
    // No need for runtime messaging in web environment
  };

  const handlePositionChange = (newPosition) => {
    if (position !== newPosition) {
      updateSetting(togglePosition(), "POSITION_CHANGED", {
        position: newPosition,
      });
    }
  };

  const handleLayoutChange = (newLayout) => {
    updateSetting(setLayout(newLayout), "LAYOUT_CHANGED", {
      layout: newLayout,
    });
  };

  const getCurrentTheme = () => {
    if (typeof currentTheme === "string") return currentTheme;
    if (currentTheme?.mode) return currentTheme.mode;
    return "scrollr";
  };

  const themeChange = (theme) => {
    debugLogger.uiEvent(`Theme changed to ${theme}`);
    dispatch(setTheme(theme));
    document.documentElement.setAttribute("data-theme", theme);
    setTimeout(() => saveSettingsImmediately(), 100);
  };

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
              {currentView === "themes" && isMounted && (
                <div className="w-full join join-vertical overflow-y-auto h-110 pr-1">
                  {THEMES.map(({ label, value, colors }) => (
                    <label
                      key={value}
                      className="btn theme-controller join-item flex items-center justify-between"
                      style={{
                        backgroundColor:
                          getCurrentTheme() === value
                            ? "var(--color-primary)"
                            : "",
                        color:
                          getCurrentTheme() === value
                            ? "var(--color-primary-content)"
                            : "",
                      }}
                    >
                      <input
                        type="radio"
                        name="theme-buttons"
                        value={value}
                        className="theme-controller hidden"
                        checked={getCurrentTheme() === value}
                        onChange={() => themeChange(value)}
                      />
                      <span>{label}</span>
                      <span className="flex gap-0.5 ml-2">
                        {colors.map((color, i) => (
                          <span
                            key={i}
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </span>
                    </label>
                  ))}
                </div>
              )}

              {currentView === "preferences" && (
                <div className="flex flex-col w-full pr-2 gap-4 overflow-y-auto h-110">
                  {/* Opacity Slider */}
                  <div className="w-full bg-base-200 p-4 card">
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
                        className="range range-primary"
                      />
                    )}
                  </div>

                  {/* Position Control */}
                  <div className="w-full bg-base-200 p-4 card">
                    <label className="label text-base-content font-semibold text-lg mb-2 flex justify-between items-center">
                      <span className="label-text">Position</span>
                      <span className="bg-base-300 card h-1 flex-1 ml-2"></span>
                      {isMounted && (
                        <PositionToggle
                          position={position}
                          layout={layout}
                          onChange={handlePositionChange}
                          showLabel={true}
                          size="sm"
                        />
                      )}
                    </label>
                  </div>

                  {/* Layout Control */}
                  <div className="w-full bg-base-200 p-4 card">
                    <label className="label text-base-content font-semibold text-lg mb-2 flex justify-between items-center">
                      <span className="label-text">Layout</span>
                      <span className="bg-base-300 card h-1 flex-1 ml-2"></span>
                      {isMounted && (
                        <LayoutToggle
                          layout={layout}
                          position={position}
                          onChange={handleLayoutChange}
                          showLabel={true}
                          size="sm"
                        />
                      )}
                    </label>
                  </div>

                  {/* Speed Control */}
                  <div className="w-full bg-base-200 p-4 card">
                    <label className="label text-base-content font-semibold text-lg mb-2 flex justify-between items-center">
                      <span className="label-text">Speed</span>
                      <span className="bg-base-300 card h-1 flex-1 mx-2"></span>
                      {isMounted && (
                        <span className="label-text-alt italic">
                          {speed.charAt(0).toUpperCase() + speed.slice(1)}
                        </span>
                      )}
                    </label>
                    {isMounted && (
                      <SpeedControl speed={speed} onChange={handleSpeedChange} />
                    )}
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