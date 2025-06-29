import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: false,
  features: {
    debugLogging: true,
    advancedSettings: true,
    experimentalFeatures: false,
  },
};

const devModeSlice = createSlice({
  name: "devMode",
  initialState,
  reducers: {
    setDevMode: (state, action) => {
      state.mode = action.payload;
    },
    toggleDevMode: (state) => {
      state.mode = !state.mode;
    },
    setFeature: (state, action) => {
      const { feature, enabled } = action.payload;
      if (state.features.hasOwnProperty(feature)) {
        state.features[feature] = enabled;
      }
    },
    resetDevMode: (state) => {
      return initialState;
    },
  },
});

export const { setDevMode, toggleDevMode, setFeature, resetDevMode } = devModeSlice.actions;
export default devModeSlice.reducer;
