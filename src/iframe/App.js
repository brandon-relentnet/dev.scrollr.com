"use client";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Carousel } from "./Carousel";
import PinnedOverlay from "./PinnedOverlay";

export default function App() {
  const currentTheme = useSelector((state) => state.theme);

  useEffect(() => {
    // Handle both string and object theme formats to match popup behavior
    if (currentTheme && typeof currentTheme === "string") {
      document.documentElement.setAttribute("data-theme", currentTheme);
    } else if (currentTheme && currentTheme.mode) {
      document.documentElement.setAttribute("data-theme", currentTheme.mode);
    }
  }, [currentTheme]);

  return (
    <div className="bg-base-200 w-full px-2 h-full absolute bottom-0 left-0 flex items-center">
      <PinnedOverlay />
      <Carousel />
    </div>
  );
}
