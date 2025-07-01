"use client";

import { THEMES } from "@/data/dataProvider";
import { useTheme } from "next-themes";
import { useDispatch } from "react-redux";
import { setReduxTheme } from "@/store/themeSlice";
import { useAuth } from "@/components/hooks/useAuth";
import debugLogger from "@/utils/debugLogger.js";
import { useMemo, useCallback, memo } from "react";

// Custom hook for theme management
function useThemeChange() {
  const { theme, setTheme } = useTheme();
  const dispatch = useDispatch();
  const { saveSettingsImmediately } = useAuth();

  const themeChange = useCallback(
    (newTheme) => {
      setTheme(newTheme);
      debugLogger.uiEvent(`Theme changed to ${newTheme}`);
      dispatch(setReduxTheme(newTheme));

      // Using requestIdleCallback for better performance
      if ("requestIdleCallback" in window) {
        requestIdleCallback(() => saveSettingsImmediately());
      } else {
        setTimeout(() => saveSettingsImmediately(), 100);
      }
    },
    [setTheme, dispatch, saveSettingsImmediately]
  );

  return { theme, themeChange };
}

// Memoized color dots component
const ColorDots = memo(({ colors, size = "w-2 h-2" }) => (
  <span className="flex gap-0.5">
    {colors.map((color, i) => (
      <span
        key={i}
        className={`${size} rounded-full`}
        style={{ backgroundColor: color }}
      />
    ))}
  </span>
));

ColorDots.displayName = "ColorDots";

// Reusable theme button component
const ThemeButton = memo(
  ({
    theme,
    value,
    label,
    colors,
    onClick,
    variant = "toggle",
    className = "",
  }) => {
    const isActive = theme === value;

    const baseStyles = useMemo(() => {
      if (variant === "toggle") {
        return {
          backgroundColor: isActive ? "var(--color-primary)" : "",
          color: isActive ? "var(--color-primary-content)" : "",
        };
      }
      return {};
    }, [isActive, variant]);

    if (variant === "showcase") {
      return (
        <div
          className={`btn btn-ghost py-8 ${
            isActive ? "btn-active" : ""
          } ${className}`}
          onClick={() => onClick(value)}
        >
          <div className="text-center">
            <div className="flex justify-center gap-1 mb-2">
              <ColorDots colors={colors} size="size-4 card" />
            </div>
            <p className="text-sm font-medium">{label}</p>
          </div>
        </div>
      );
    }

    return (
      <label
        className={`btn theme-controller join-item flex items-center justify-between ${className}`}
        style={baseStyles}
      >
        <input
          type="radio"
          name="theme-buttons"
          value={value}
          className="theme-controller hidden"
          checked={isActive}
          onChange={() => onClick(value)}
        />
        <span>{label}</span>
        <span className="ml-2">
          <ColorDots colors={colors} />
        </span>
      </label>
    );
  }
);

ThemeButton.displayName = "ThemeButton";

// Main theme toggle component
export default function ThemeToggle({ themes = THEMES, className = "" }) {
  const { theme, themeChange } = useThemeChange();

  return (
    <div
      className={`w-full join join-vertical overflow-y-auto h-110 pr-1 ${className}`}
    >
      {themes.map((themeOption) => (
        <ThemeButton
          key={themeOption.value}
          theme={theme}
          onClick={themeChange}
          variant="toggle"
          {...themeOption}
        />
      ))}
    </div>
  );
}

// Theme showcase component
export function ThemeShowcase({ themes = THEMES, className = "" }) {
  const { theme, themeChange } = useThemeChange();

  return (
    <div
      className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 my-6 ${className}`}
    >
      {themes.map((themeOption) => (
        <ThemeButton
          key={themeOption.value}
          theme={theme}
          onClick={themeChange}
          variant="showcase"
          {...themeOption}
        />
      ))}
    </div>
  );
}

// Export the hook for external use if needed
export { useThemeChange };
