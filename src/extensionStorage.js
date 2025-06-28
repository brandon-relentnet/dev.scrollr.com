// Mock extension storage for website
const STORAGE_KEY = 'myscrollr_state';

const loadState = async () => {
  try {
    // Check if we're in a browser environment
    if (typeof window === 'undefined') {
      return undefined;
    }
    const serializedState = localStorage.getItem(STORAGE_KEY);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Error loading state:', err);
    return undefined;
  }
};

export const saveState = async (state) => {
  try {
    // Check if we're in a browser environment
    if (typeof window === 'undefined') {
      return;
    }
    const serializedState = JSON.stringify(state);
    localStorage.setItem(STORAGE_KEY, serializedState);
  } catch (err) {
    console.error('Error saving state:', err);
  }
};

export default loadState;