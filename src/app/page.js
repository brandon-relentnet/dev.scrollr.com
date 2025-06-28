"use client";

import { useState, useEffect } from "react";
import { Provider, useSelector } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from "../store";
import PopupApp from "../popup/App";
import IframeApp from "../iframe/App";
import ClientOnly from "../components/ClientOnly";

function MyScrollrContent() {
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
    <div className="min-h-screen flex flex-col items-center justify-center container mx-auto px-4">
      <div className="mockup-browser border border-base-300 max-w-7xl w-full relative overflow-hidden">
        <div className="mockup-browser-toolbar">
          <div className="input">https://dev.myscrollr.com</div>
        </div>
        <div className="grid place-content-center h-160">
          {/* Popup toggle button - adjusts position based on carousel */}
          <label className="btn btn-circle swap swap-rotate absolute top-2 right-4 m-auto">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" onChange={() => setShowPopup(!showPopup)} />

            {/* hamburger icon */}
            <img
              className="swap-off flex items-center justify-center p-1"
              src="/icon-128.png"
              alt="Menu"
              width="32"
              height="32"
            />

            {/* close icon */}
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
            className={`h-160 p-3 overflow-hidden absolute top-14 right-4 transition-all duration-300 ease-in-out origin-right ${
              showPopup ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
            }`}
          >
            <div className="w-[420px] shadow-lg h-auto bg-base-200 card card-border border-base-300">
              <PopupApp />
            </div>
          </div>
        </div>
      </div>

      {/* Carousel iframe - responsive to settings */}
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
    </div>
  );
}

export default function Home() {
  return (
    <ClientOnly>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MyScrollrContent />
        </PersistGate>
      </Provider>
    </ClientOnly>
  );
}
