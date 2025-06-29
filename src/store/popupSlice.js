import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  lastToggleTime: null,
};

const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    openPopup: (state) => {
      state.isOpen = true;
      state.lastToggleTime = Date.now();
    },
    closePopup: (state) => {
      state.isOpen = false;
      state.lastToggleTime = Date.now();
    },
    togglePopup: (state) => {
      state.isOpen = !state.isOpen;
      state.lastToggleTime = Date.now();
    },
    setPopupState: (state, action) => {
      state.isOpen = action.payload;
      state.lastToggleTime = Date.now();
    },
  },
});

export const { openPopup, closePopup, togglePopup, setPopupState } = popupSlice.actions;
export default popupSlice.reducer;