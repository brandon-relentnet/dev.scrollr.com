import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
  syncStatus: 'idle', // 'idle', 'syncing', 'synced', 'error'
  lastSyncedAt: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { token, user } = action.payload;
      state.token = token;
      state.user = user;
      state.isAuthenticated = !!token;
      state.error = null;
    },
    updateUser: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
      state.syncStatus = 'idle';
      state.lastSyncedAt = null;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    setSyncStatus: (state, action) => {
      state.syncStatus = action.payload.status;
      if (action.payload.status === 'synced') {
        state.lastSyncedAt = new Date().toISOString();
      }
    },
    updateSettings: (state, action) => {
      if (state.user) {
        state.user.settings = { ...state.user.settings, ...action.payload };
      }
    },
  },
});

export const {
  setCredentials,
  updateUser,
  logout,
  setLoading,
  setError,
  setSyncStatus,
  updateSettings,
} = authSlice.actions;

export default authSlice.reducer;

// Selectors
export const selectAuth = (state) => state.auth;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectUser = (state) => state.auth.user;
export const selectToken = (state) => state.auth.token;
export const selectAuthLoading = (state) => state.auth.isLoading;
export const selectAuthError = (state) => state.auth.error;
export const selectSyncStatus = (state) => state.auth.syncStatus;