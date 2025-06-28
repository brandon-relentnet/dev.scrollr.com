// Bridge between extension storage API and Redux store
// This file provides compatibility layer for components that use extension storage patterns

import store from './store';

const STORAGE_KEY = "myscrollr_state";

// Load state from Redux store
const loadState = async () => {
  try {
    // Get current state from Redux store
    const state = store.getState();
    
    // Remove redux-persist metadata
    const { _persist, ...cleanState } = state;
    
    return cleanState;
  } catch (err) {
    console.error("Error loading state from Redux:", err);
    return undefined;
  }
};

// Save state is now handled automatically by redux-persist
// This function is kept for compatibility but doesn't need to do anything
export const saveState = async (state) => {
  // Redux-persist handles all persistence automatically
  // This function is a no-op for compatibility
  console.debug("saveState called - handled by redux-persist");
};

// Get specific value from store
export const getValue = async (key) => {
  try {
    const state = store.getState();
    return state[key];
  } catch (err) {
    console.error("Error getting value from Redux:", err);
    return undefined;
  }
};

// Set specific value in store (requires dispatching actions)
export const setValue = async (key, value) => {
  console.warn(`setValue called for ${key} - should use Redux actions instead`);
  // This would require knowing which action to dispatch
  // Components should be updated to use Redux actions directly
};

export default loadState;