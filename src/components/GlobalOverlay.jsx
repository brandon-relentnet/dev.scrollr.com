"use client";

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import PopupApp from "../popup/App";
import IframeApp from "../iframe/App";

export default function GlobalOverlay() {
  const [showPopup, setShowPopup] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Get state from Redux
  const layout = useSelector((state) => state.layout?.mode || "compact");
  const position = useSelector((state) => state.layout?.position || "bottom");
  const opacity = useSelector((state) => state.layout?.opacity ?? 1.0);
  const power = useSelector((state) => state.power?.mode !== false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Height configurations based on layout mode
  const heightConfig = {
    compact: "h-16", // 64px
    comfort: "h-44", // 176px
  };

  return (
    <>
      {/* Popup toggle button */}
      <label className="btn btn-circle swap swap-rotate fixed top-3 right-4 z-50">
        <input type="checkbox" onChange={() => setShowPopup(!showPopup)} />
        <Image
          className="swap-off flex items-center justify-center p-1"
          src="/icon-128.png"
          alt="Menu"
          width={32}
          height={32}
        />
        <svg
          className="swap-on fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
        </svg>
      </label>

      {/* Popup iframe */}
      <div
        className={`h-160 p-3 overflow-hidden fixed top-14 right-4 z-40 transition-all duration-300 ease-in-out origin-right ${
          showPopup ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
        }`}
      >
        <div className="w-[420px] shadow-lg h-auto bg-base-200 card card-border border-base-300">
          <PopupApp />
        </div>
      </div>

      {/* Carousel iframe */}
      {isMounted && (
        <div
          className={`
            fixed left-0 right-0 z-30 transition-all duration-300 ease-out
            ${position === "top" ? "top-0" : "bottom-0"}
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
          <IframeApp />
        </div>
      )}
    </>
  );
}
