"use client";

import SvgIllustration from "@/components/ScrollrSVG";
import PopupApp from "@/popup/App";
import { usePopup } from "@/hooks/usePopup";

export default function PopupContainer() {
  const { isOpen, toggle } = usePopup();

  return (
    <>
      <label className="btn btn-ghost swap swap-rotate z-50" id="popup-toggle">
        <input type="checkbox" checked={isOpen} onChange={toggle} />
        <SvgIllustration
          width={32}
          height={32}
          className={"swap-off flex items-center justify-center p-1"}
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
        className={`h-160 p-3 overflow-hidden fixed top-16 right-0 z-40 transition-all duration-300 ease-in-out origin-right ${
          isOpen ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
        }`}
      >
        <div className="w-[420px] shadow-lg h-auto bg-base-200 card card-border border-base-300">
          <PopupApp />
        </div>
      </div>
    </>
  );
}
