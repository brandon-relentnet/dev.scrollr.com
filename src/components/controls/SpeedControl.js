import { TurtleIcon, WalkingIcon, RunningIcon } from "../icons/SpeedIcons";

export default function SpeedControl({ speed, onChange }) {
  const speedOptions = [
    { value: "slow", icon: TurtleIcon },
    { value: "classic", icon: WalkingIcon },
    { value: "fast", icon: RunningIcon },
  ];

  return (
    <div className="flex gap-2 justify-evenly">
      {speedOptions.map(({ value, icon: Icon }) => (
        <label
          key={value}
          className={`cursor-pointer flex items-center flex-col flex-1 btn btn-ghost py-12 ${
            speed === value ? "text-primary" : "text-base-content/30"
          }`}
        >
          <span className="label-text">
            <Icon />
          </span>
          <input
            type="radio"
            name="speed-radio"
            className="radio"
            checked={speed === value}
            onChange={() => onChange(value)}
          />
        </label>
      ))}
    </div>
  );
}