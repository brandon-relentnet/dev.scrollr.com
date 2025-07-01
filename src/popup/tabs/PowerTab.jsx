import { BoltIcon, BoltSlashIcon, PowerIcon } from "@heroicons/react/24/solid";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { setLayout, toggleSpeed, togglePosition } from "@/store/layoutSlice";
import { togglePower } from "@/store/powerSlice";
import AnimatedSpeedToggle from "@/components/controls/SpeedToggle";
import PositionToggle from "@/components/controls/PositionToggle";
import LayoutToggle from "@/components/controls/LayoutToggle";

export default function PowerTab() {
  const dispatch = useDispatch();
  const [isMounted, setIsMounted] = useState(false);

  const layout = useSelector((state) => state.layout?.mode || "compact");
  const speed = useSelector((state) => state.layout?.speed || "classic");
  const position = useSelector((state) => state.layout?.position || "top");
  const power = useSelector((state) => state.power?.mode !== false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleLayoutChange = () => {
    const newLayout = layout === "compact" ? "comfort" : "compact";
    dispatch(setLayout(newLayout));
    // No need for runtime messaging in web environment
  };

  const handlePowerToggle = () => {
    dispatch(togglePower());
    // No need for runtime messaging in web environment
  };

  const handleSpeedToggle = () => {
    dispatch(toggleSpeed());
    const newSpeed =
      speed === "slow" ? "classic" : speed === "classic" ? "fast" : "slow";
    // No need for runtime messaging in web environment
  };

  const handlePositionToggle = () => {
    dispatch(togglePosition());
    const newPosition = position === "top" ? "bottom" : "top";
    // No need for runtime messaging in web environment
  };

  return (
    <>
      <label className="tab">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Tab 3"
          defaultChecked
        />
        <BoltIcon className="size-8" />
      </label>
      <div className="tab-content bg-base-100 border-base-300 p-6">
        <div className="flex flex-col items-center justify-center">
          <button
            id="popup-tabs-powerbutton"
            className={`btn btn-ghost btn-circle p-6 size-50 transition-colors duration-150 ${
              power ? "text-primary" : "text-primary/30"
            }`}
            onClick={handlePowerToggle}
          >
            <PowerIcon className="size-full transition-colors duration-150" />
          </button>
          {isMounted && (
            <ul className="flex items-center justify-center shadow-sm hover:shadow-md transition duration-150 gap-6 px-5 p-3 bg-base-200 rounded-box mt-6">
              <li>
                <PositionToggle
                  position={position}
                  layout={layout}
                  onChange={handlePositionToggle}
                  showLabel={false}
                  className="tooltip"
                />
              </li>
              <AnimatedSpeedToggle
                speed={speed}
                onSpeedToggle={handleSpeedToggle}
                className="tooltip"
                showLabel={false}
              />
              <li>
                <LayoutToggle
                  layout={layout}
                  position={position}
                  onChange={() => handleLayoutChange()}
                  showLabel={false}
                  className="tooltip"
                />
              </li>
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
