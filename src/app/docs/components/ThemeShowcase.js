import { useDispatch, useSelector } from "react-redux";
import { setReduxTheme } from "@/store/themeSlice";
import { useTheme } from "next-themes";
import { useAuth } from "@/components/hooks/useAuth";
import debugLogger from "@/utils/debugLogger.js";

export const ThemeShowcase = ({ themes }) => {
  const { setTheme } = useTheme();
  const dispatch = useDispatch();
  const { saveSettingsImmediately } = useAuth();
  const currentTheme = useSelector((state) => state.theme);

  const themeChange = (theme) => {
    setTheme(theme);
    debugLogger.uiEvent(`Theme changed to ${theme}`);
    dispatch(setReduxTheme(theme));
    setTimeout(() => saveSettingsImmediately(), 100);
  };

  const getCurrentTheme = () => {
    if (typeof currentTheme === "string") return currentTheme;
    if (currentTheme?.mode) return currentTheme.mode;
    return "scrollr";
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-6">
      {themes.map((theme) => (
        <div
          key={theme.value}
          className={`btn btn-ghost py-8 ${
            theme.value === getCurrentTheme() ? "btn-active" : ""
          }`}
          onClick={() => themeChange(theme.value)}
        >
          <div className="text-center">
            <div className="flex justify-center gap-1 mb-2">
              {theme.colors.map((color, i) => (
                <div
                  key={i}
                  className="size-4 card"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            <p className="text-sm font-medium">{theme.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

// Alternative compact version for use in other components
export const CompactThemeShowcase = ({ themes }) => (
  <ThemeShowcase themes={themes} description={false} />
);
