import { useSelector, useDispatch } from "react-redux";
import { setDevMode, toggleDevMode, setFeature, resetDevMode } from "@/store/devModeSlice";

export const useDevMode = () => {
  const dispatch = useDispatch();
  const devMode = useSelector((state) => state.devMode?.mode || false);
  const features = useSelector((state) => state.devMode?.features || {});

  const toggleMode = () => {
    dispatch(toggleDevMode());
  };

  const setMode = (enabled) => {
    dispatch(setDevMode(enabled));
  };

  const setDevFeature = (feature, enabled) => {
    dispatch(setFeature({ feature, enabled }));
  };

  const reset = () => {
    dispatch(resetDevMode());
  };

  const isFeatureEnabled = (feature) => {
    return devMode && features[feature];
  };

  return {
    devMode,
    features,
    toggleMode,
    setMode,
    setDevFeature,
    reset,
    isFeatureEnabled,
  };
};