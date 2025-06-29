"use client";

import { useDevMode } from "@/hooks/useDevMode";

export default function DevToggle() {
  const { devMode, toggleMode } = useDevMode();

  return (
    <label className="label btn btn-ghost">
      <span className="text-sm italic opacity-70">
        {devMode ? "Dev" : "User"}
      </span>
      <input
        type="checkbox"
        checked={devMode}
        onChange={toggleMode}
        className="toggle toggle-sm toggle-primary"
        title={`Switch to ${devMode ? "user" : "developer"} mode`}
      />
    </label>
  );
}
