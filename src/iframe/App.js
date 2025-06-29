"use client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Carousel } from "./Carousel";
import PinnedOverlay from "./PinnedOverlay";

export default function App({ isDemo = false }) {
  const [isMounted, setIsMounted] = useState(false);

  // Get state from Redux
  const currentTheme = useSelector((state) => state.theme);
  const layout = useSelector((state) => state.layout?.mode || "compact");
  const position = useSelector((state) => state.layout?.position || "bottom");
  const opacity = useSelector((state) => state.layout?.opacity ?? 1.0);
  const power = useSelector((state) => state.power?.mode !== false);

  // Height configurations based on layout mode
  const heightConfig = {
    compact: "h-16", // 64px
    comfort: "h-44", // 176px
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    // Handle both string and object theme formats to match popup behavior
    if (currentTheme && typeof currentTheme === "string") {
      document.documentElement.setAttribute("data-theme", currentTheme);
    } else if (currentTheme && currentTheme.mode) {
      document.documentElement.setAttribute("data-theme", currentTheme.mode);
    }
  }, [currentTheme]);

  if (!isMounted) {
    return null;
  }

  return (
    <div
      className={`
        ${
          isDemo ? "absolute" : "fixed"
        } left-0 right-0 z-30 transition-all duration-300 ease-out
        ${position === "top" ? "top-0" : "bottom-0"}
        ${!isDemo && position === "top" ? "!top-16" : ""}
        ${heightConfig[layout]}
        ${power ? "pointer-events-auto" : "pointer-events-none"}
        ${
          power
            ? position === "top"
              ? "translate-y-0"
              : "translate-y-0"
            : position === "top"
            ? "-translate-y-full"
            : "translate-y-full"
        }
      `}
      style={{
        opacity: power ? opacity : 0,
      }}
    >
      <div className="bg-base-200 w-full px-2 h-full absolute bottom-0 left-0 flex items-center">
        <PinnedOverlay />
        <Carousel />
      </div>
    </div>
  );
}
