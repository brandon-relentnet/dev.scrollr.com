"use client";

import { useDispatch } from "react-redux";

export function useSettingsUpdate() {
  const dispatch = useDispatch();

  const updateSetting = (action, messageType, data) => {
    // Dispatch to Redux
    dispatch(action);

    // Notify background script
    // No need for runtime messaging in web environment
  };

  return { updateSetting };
}
