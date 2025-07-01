"use client";

import { useEffect, useState, useRef } from "react";
import { SwatchIcon } from "@heroicons/react/24/solid";
import { ThemeShowcase } from "../../components";
import { THEMES } from "@/popup/tabs/data";
import PositionToggle from "@/components/controls/PositionToggle";
import LayoutToggle from "@/components/controls/LayoutToggle";
import AnimatedSpeedToggle from "@/components/controls/AnimatedSpeedToggle";
import { setOpacity, toggleSpeed, togglePosition } from "@/store/layoutSlice";
import { useSettingsUpdate } from "@/components/hooks/useSettingsUpdate";
import { useDispatch, useSelector } from "react-redux";
import SvgIllustration from "@/components/ScrollrSVG";
import IframeApp from "@/iframe/App";

export const DesignTab = () => {
  const dispatch = useDispatch();
  const { updateSetting } = useSettingsUpdate();

  const opacity = useSelector((state) => state.layout?.opacity ?? 1.0);
  const speed = useSelector((state) => state.layout?.speed || "classic");

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

  const handleSpeedToggle = () => {
    dispatch(toggleSpeed());
    const newSpeed =
      speed === "slow" ? "classic" : speed === "classic" ? "fast" : "slow";
    // No need for runtime messaging in web environment
  };

  return (
    <div>
      <section className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <SwatchIcon className="w-6 h-6 text-primary" />
          <span className="text-lg font-semibold">
            Design Tab {">"}{" "}
            <span className="text-base-content/70 italic">Themes</span>
          </span>
        </div>

        <div className="prose max-w-none mb-6">
          <p className="text-base-content/80 text-base leading-relaxed">
            The <strong>Design Tab</strong> is your central hub for customizing
            the visual appearance of your Scrollr ticker. This tab is split into
            two main sections: <strong>Themes</strong> and{" "}
            <strong>Preferences</strong>, giving you complete control over how
            your ticker looks and behaves on any webpage.
          </p>
        </div>

        <div className="bg-base-200 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold mb-4">Theme Selection</h3>
          <div className="prose max-w-none mb-4">
            <p className="text-base-content/70 mb-3">
              Choose from{" "}
              <strong>{THEMES.length} carefully crafted themes</strong> designed
              to complement any website or match your personal style. Each theme
              includes a harmonious color palette that affects the ticker's
              background, text, and accent colors.
            </p>
            <div className="bg-info/10 border-l-4 border-info p-4 mb-4">
              <p className="text-sm text-base-content/70">
                <strong>💡 Pro Tip:</strong> Themes automatically adapt to your
                website's content, ensuring optimal readability while
                maintaining visual appeal. Click any theme below to see the
                change instantly!
              </p>
            </div>
          </div>
          <ThemeShowcase themes={THEMES} />

          <div className="mt-6 grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-base-300/50 p-3 rounded">
              <h5 className="font-medium mb-2">🌈 Color Harmony</h5>
              <p className="text-base-content/70">
                Each theme uses scientifically balanced color combinations for
                optimal readability
              </p>
            </div>
            <div className="bg-base-300/50 p-3 rounded">
              <h5 className="font-medium mb-2">🎯 Context Aware</h5>
              <p className="text-base-content/70">
                Themes automatically adjust contrast based on underlying webpage
                content
              </p>
            </div>
            <div className="bg-base-300/50 p-3 rounded">
              <h5 className="font-medium mb-2">⚡ Instant Preview</h5>
              <p className="text-base-content/70">
                See changes immediately without needing to refresh or reload
                pages
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <SwatchIcon className="w-6 h-6 text-primary" />
          <span className="text-lg font-semibold">
            Design Tab {">"}{" "}
            <span className="text-base-content/70 italic">Preferences</span>
          </span>
        </div>

        <div className="prose max-w-none mb-6">
          <p className="text-base-content/80 text-base leading-relaxed">
            The <strong>Preferences</strong> section gives you fine-grained
            control over how your ticker appears and behaves. These settings
            work together with your chosen theme to create the perfect viewing
            experience for any website.
          </p>
        </div>

        <div className="mockup-browser border border-base-300 backdrop-blur-sm overflow-hidden w-full mb-6">
          <div className="mockup-browser-toolbar h-8">
            <div className="input">https://myscrollr.com</div>
          </div>
          <div className="relative w-full h-[40vh] flex items-center justify-center">
            <div className="max-w-4xl">
              <div className="flex justify-center mb-6">
                <SvgIllustration
                  width={100}
                  height={100}
                  className={"animate-bounce"}
                />
              </div>
            </div>
            <IframeApp isDemo={true} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 pr-2 gap-4">
          {/* Position Control */}
          <div className="bg-base-200 p-4 card">
            <label className="label text-base-content font-semibold text-lg mb-2 flex justify-between items-center">
              <span className="label-text">Position</span>
              <span className="bg-base-300 card h-1 flex-1 ml-2"></span>
              {isMounted && <PositionToggle showLabel={true} size="sm" />}
            </label>
            <p className="text-sm text-base-content/70 mt-2">
              Choose whether your ticker appears at the <strong>top</strong> or{" "}
              <strong>bottom</strong> of webpages. Top positioning is great for
              news and alerts, while bottom positioning is less intrusive for
              continuous monitoring.
            </p>
          </div>

          {/* Layout Control */}
          <div className="bg-base-200 p-4 card">
            <label className="label text-base-content font-semibold text-lg mb-2 flex justify-between items-center">
              <span className="label-text">Layout</span>
              <span className="bg-base-300 card h-1 flex-1 ml-2"></span>
              {isMounted && <LayoutToggle showLabel={true} size="sm" />}
            </label>
            <p className="text-sm text-base-content/70 mt-2">
              Toggle between <strong>Compact</strong> (minimal height, more
              content visible) and <strong>Comfortable</strong>
              (larger text, easier reading) layouts. Compact is perfect for
              monitoring, while comfortable is ideal for detailed content
              consumption.
            </p>
          </div>

          {/* Opacity Slider */}
          <div className="bg-base-200 p-4 card">
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
            <p className="text-sm text-base-content/70 mt-2">
              Control how transparent your ticker appears over webpage content.{" "}
              <strong>100%</strong> is fully opaque (recommended for reading),
              while lower values create a subtle overlay effect that won't
              interfere with the underlying page.
            </p>
          </div>

          {/* Speed Control */}
          <div className="bg-base-200 p-4 card">
            <label className="label text-base-content font-semibold text-lg mb-2 flex justify-between items-center">
              <span className="label-text">Speed</span>
              <span className="bg-base-300 card h-1 flex-1 mx-2"></span>
              {isMounted && (
                <AnimatedSpeedToggle
                  speed={speed}
                  onSpeedToggle={handleSpeedToggle}
                />
              )}
            </label>
            <p className="text-sm text-base-content/70 mt-2">
              Adjust how quickly content scrolls across your ticker.{" "}
              <strong>Slow</strong> is perfect for detailed reading,
              <strong>Classic</strong> provides the traditional ticker
              experience, and <strong>Fast</strong> lets you consume more
              information quickly.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
