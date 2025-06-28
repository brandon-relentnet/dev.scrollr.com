import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  enabled: false,
  categories: [],
};

const debugSlice = createSlice({
  name: 'debug',
  initialState,
  reducers: {
    setDebugEnabled: (state, action) => {
      state.enabled = action.payload;
    },
    setDebugCategories: (state, action) => {
      state.categories = action.payload;
    },
    toggleCategory: (state, action) => {
      const category = action.payload;
      const index = state.categories.indexOf(category);
      if (index === -1) {
        state.categories.push(category);
      } else {
        state.categories.splice(index, 1);
      }
    },
    resetDebug: (state) => {
      state.enabled = false;
      state.categories = [];
    },
  },
});

export const {
  setDebugEnabled,
  setDebugCategories,
  toggleCategory,
  resetDebug,
} = debugSlice.actions;

export default debugSlice.reducer;

// Selectors
export const selectDebugEnabled = (state) => state.debug.enabled;
export const selectDebugCategories = (state) => state.debug.categories;
export const selectIsDebugCategory = (state, category) => 
  state.debug.enabled && state.debug.categories.includes(category);