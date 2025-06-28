import { useEffect, useCallback, useMemo, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { 
  setCredentials, 
  updateUser, 
  logout as logoutAction, 
  setLoading, 
  setError, 
  setSyncStatus,
  updateSettings as updateUserSettings,
  selectAuth,
  selectIsAuthenticated,
  selectUser,
  selectToken,
  selectAuthLoading,
  selectAuthError,
  selectSyncStatus
} from "@/slices/authSlice";
import { API_ENDPOINTS } from "@/config/endpoints.js";
import debugLogger, { DEBUG_CATEGORIES } from "@/utils/debugLogger.js";

export function useAuth() {
  const dispatch = useDispatch();
  
  // Get auth state from Redux
  const authState = useSelector(selectAuth);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);
  const isLoading = useSelector(selectAuthLoading);
  const error = useSelector(selectAuthError);
  const syncStatus = useSelector(selectSyncStatus);

  // Get settings with a stable reference to prevent infinite loops
  const theme = useSelector((state) => state.theme);
  const layout = useSelector((state) => state.layout);
  const finance = useSelector((state) => state.finance);
  const power = useSelector((state) => state.power);
  const toggles = useSelector((state) => state.toggles);
  const rss = useSelector((state) => state.rss);
  const pinned = useSelector((state) => state.pinned);

  const currentSettings = useMemo(
    () => ({
      theme,
      layout,
      finance,
      power,
      toggles,
      rss,
      pinned,
    }),
    [theme, layout, finance, power, toggles, rss, pinned]
  );

  // Create a stable reference to prevent unnecessary effect triggers
  const settingsRef = useRef(currentSettings);
  const [lastSavedSettings, setLastSavedSettings] = useState(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isLoadingSettings, setIsLoadingSettings] = useState(false);

  // Save current settings to server
  const saveSettingsToServer = useCallback(
    async (token, settingsToSave) => {
      try {
        const settings = settingsToSave || currentSettings;
        const response = await fetch(API_ENDPOINTS.accounts.auth.settings, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            settings: settings,
            version: "2.0.0-beta.1",
          }),
        });

        if (!response.ok) {
          debugLogger.error(
            DEBUG_CATEGORIES.AUTH,
            "Failed to save settings to server"
          );
        }
      } catch (error) {
        debugLogger.error(
          DEBUG_CATEGORIES.AUTH,
          "Error saving settings to server",
          error
        );
      }
    },
    [currentSettings]
  );

  // Load settings from server and apply to Redux store
  const loadSettingsFromServer = useCallback(
    async (token) => {
      setIsLoadingSettings(true);
      try {
        const response = await fetch(API_ENDPOINTS.accounts.auth.settings, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const { settings } = await response.json();

          // Only apply server settings if they exist and are not empty
          if (settings && Object.keys(settings).length > 0) {
            // Apply each slice of settings to Redux store
            Object.keys(settings).forEach((key) => {
              if (settings[key] && typeof settings[key] === "object") {
                const actionType = `${key}/setState`;
                dispatch({ type: actionType, payload: settings[key] });
              }
            });

            debugLogger.authEvent("Settings loaded from server and applied");
          } else {
            // If no server settings exist, save current local settings to server
            await saveSettingsToServer(token);
            debugLogger.authEvent(
              "No server settings found, saved current local settings"
            );
          }
        }
      } catch (error) {
        debugLogger.error(
          DEBUG_CATEGORIES.AUTH,
          "Error loading settings from server",
          error
        );
        // If there's an error loading settings, save current local settings as backup
        await saveSettingsToServer(token);
      } finally {
        // Small delay to ensure Redux state has updated before allowing auto-save
        setTimeout(() => setIsLoadingSettings(false), 1000);
      }
    },
    [dispatch, saveSettingsToServer]
  );

  // Initialize auth state from Redux persisted storage
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        dispatch(setLoading(true));
        
        // Redux persist has already loaded the token and user from storage
        if (token && user) {
          // Verify token is still valid by fetching current user
          const response = await fetch(API_ENDPOINTS.accounts.auth.me, {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          });

          if (response.ok) {
            const { user: currentUser } = await response.json();
            dispatch(setCredentials({ token, user: currentUser }));

            // Load user settings from server
            await loadSettingsFromServer(token);
          } else {
            // Token is invalid, clear auth state
            dispatch(logoutAction());
          }
        }
      } catch (error) {
        debugLogger.error(
          DEBUG_CATEGORIES.AUTH,
          "Auth initialization error",
          error
        );
        dispatch(logoutAction());
        dispatch(setError("Failed to initialize authentication"));
      } finally {
        dispatch(setLoading(false));
        setIsInitialized(true);
      }
    };

    if (!isInitialized) {
      initializeAuth();
    }
  }, [isInitialized, token, user, dispatch, loadSettingsFromServer]);

  // Update settings ref when settings change
  useEffect(() => {
    settingsRef.current = currentSettings;
  }, [currentSettings]);

  // Immediate save function for critical changes (like when popup closes)
  const saveSettingsImmediately = useCallback(async () => {
    if (
      !isInitialized ||
      isLoadingSettings ||
      !isAuthenticated ||
      !token
    ) {
      return;
    }

    // Only save if settings have actually changed
    if (
      lastSavedSettings &&
      JSON.stringify(currentSettings) === JSON.stringify(lastSavedSettings)
    ) {
      return;
    }

    try {
      debugLogger.authEvent("Immediately saving settings to server");
      await saveSettingsToServer(token);
      setLastSavedSettings(settingsRef.current);
    } catch (error) {
      debugLogger.error(DEBUG_CATEGORIES.AUTH, "Immediate save failed", error);
    }
  }, [
    currentSettings,
    isInitialized,
    isLoadingSettings,
    isAuthenticated,
    token,
    saveSettingsToServer,
    lastSavedSettings,
  ]);

  // Auto-save settings when they change (with safeguards to prevent infinite loops)
  useEffect(() => {
    // Don't auto-save during initialization, settings loading, or if not authenticated
    if (
      !isInitialized ||
      isLoadingSettings ||
      !isAuthenticated ||
      !token
    ) {
      return;
    }

    // Only save if settings have actually changed
    if (
      lastSavedSettings &&
      JSON.stringify(currentSettings) === JSON.stringify(lastSavedSettings)
    ) {
      return;
    }

    // Debounce auto-save to prevent excessive API calls
    const timeoutId = setTimeout(async () => {
      try {
        debugLogger.authEvent("Auto-saving settings to server");
        await saveSettingsToServer(token);
        setLastSavedSettings(settingsRef.current);
      } catch (error) {
        debugLogger.error(DEBUG_CATEGORIES.AUTH, "Auto-save failed", error);
      }
    }, 500); // Reduced from 2000ms to 500ms for better responsiveness

    return () => clearTimeout(timeoutId);
  }, [
    currentSettings,
    isInitialized,
    isLoadingSettings,
    isAuthenticated,
    token,
    saveSettingsToServer,
    lastSavedSettings,
  ]);

  // Save settings immediately when the popup/window is about to close
  useEffect(() => {
    const handleBeforeUnload = () => {
      if (
        isInitialized &&
        !isLoadingSettings &&
        isAuthenticated &&
        token &&
        lastSavedSettings &&
        JSON.stringify(currentSettings) !== JSON.stringify(lastSavedSettings)
      ) {
        // For browser extensions, use synchronous fetch with keepalive
        try {
          fetch(API_ENDPOINTS.accounts.auth.settings, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              settings: currentSettings,
              version: "2.0.0-beta.1",
            }),
            keepalive: true, // Keep request alive during page unload
          });
          debugLogger.authEvent("Emergency save triggered on unload");
        } catch (error) {
          debugLogger.error(
            DEBUG_CATEGORIES.AUTH,
            "Emergency save on unload failed",
            error
          );
        }
      }
    };

    // Use both beforeunload and unload events for maximum coverage
    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("unload", handleBeforeUnload);

    // Also handle visibility change (when user switches tabs or minimizes)
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        handleBeforeUnload();
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("unload", handleBeforeUnload);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [
    currentSettings,
    isInitialized,
    isLoadingSettings,
    isAuthenticated,
    token,
    lastSavedSettings,
  ]);

  const login = useCallback(
    async (credentials) => {
      const maxRetries = 3;
      let lastError = null;
      
      dispatch(setLoading(true));
      dispatch(setError(null));

      for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
          debugLogger.authEvent(
            `Login attempt ${attempt}/${maxRetries} to ${API_ENDPOINTS.accounts.auth.login}`
          );

          const response = await fetch(API_ENDPOINTS.accounts.auth.login, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
          });

          debugLogger.authEvent(`Login response status: ${response.status}`);

          // Handle 502/503 errors with retry
          if (response.status >= 502 && response.status <= 504) {
            debugLogger.warn(
              DEBUG_CATEGORIES.AUTH,
              `Server error on attempt ${attempt}, retrying`,
              { status: response.status }
            );
            if (attempt < maxRetries) {
              await new Promise((resolve) =>
                setTimeout(resolve, 1000 * attempt)
              ); // exponential backoff
              continue;
            }
            dispatch(setError(`Server temporarily unavailable (${response.status}). Please try again.`));
            return {
              success: false,
              error: `Server temporarily unavailable (${response.status}). Please try again.`,
            };
          }

          let data;
          try {
            data = await response.json();
          } catch (parseError) {
            debugLogger.error(
              DEBUG_CATEGORIES.AUTH,
              "Failed to parse response as JSON",
              parseError
            );
            const text = await response.text();
            debugLogger.error(DEBUG_CATEGORIES.AUTH, "Response text", {
              text: text.substring(0, 200),
            });

            if (attempt < maxRetries) {
              debugLogger.warn(
                DEBUG_CATEGORIES.AUTH,
                `JSON parse error on attempt ${attempt}, retrying`
              );
              await new Promise((resolve) =>
                setTimeout(resolve, 1000 * attempt)
              );
              continue;
            }
            dispatch(setError("Server returned invalid response. Please try again."));
            return {
              success: false,
              error: "Server returned invalid response. Please try again.",
            };
          }

          if (response.ok) {
            const { token, user } = data;

            // Update Redux store with auth data
            dispatch(setCredentials({ token, user }));
            dispatch(setLoading(false));

            // Load user settings from server after successful login
            await loadSettingsFromServer(token);

            return { success: true };
          } else {
            const errorMessage = data.error || "Login failed";
            dispatch(setError(errorMessage));
            return { success: false, error: errorMessage };
          }
        } catch (error) {
          debugLogger.error(
            DEBUG_CATEGORIES.AUTH,
            `Login error on attempt ${attempt}`,
            error
          );
          lastError = error;

          if (attempt < maxRetries) {
            debugLogger.warn(
              DEBUG_CATEGORIES.AUTH,
              `Network error on attempt ${attempt}, retrying`
            );
            await new Promise((resolve) => setTimeout(resolve, 1000 * attempt));
            continue;
          }
        }
      }

      const errorMessage = "Network error during login. Please check your connection and try again.";
      dispatch(setError(errorMessage));
      return {
        success: false,
        error: errorMessage,
      };
    },
    [dispatch, loadSettingsFromServer]
  );

  const register = useCallback(
    async (credentials) => {
      try {
        dispatch(setLoading(true));
        dispatch(setError(null));
        
        const response = await fetch(API_ENDPOINTS.accounts.auth.register, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        });

        const data = await response.json();

        if (response.ok) {
          const { token, user } = data;

          // Update Redux store with auth data
          dispatch(setCredentials({ token, user }));
          dispatch(setLoading(false));

          // For new registrations, save current local settings to server
          await saveSettingsToServer(token);

          return { success: true };
        } else {
          const errorMessage = data.error || "Registration failed";
          dispatch(setError(errorMessage));
          return { success: false, error: errorMessage };
        }
      } catch (error) {
        debugLogger.error(DEBUG_CATEGORIES.AUTH, "Registration error", error);
        const errorMessage = "Network error during registration";
        dispatch(setError(errorMessage));
        return { success: false, error: errorMessage };
      }
    },
    [dispatch, saveSettingsToServer]
  );

  const logout = useCallback(async () => {
    // Save current settings to server before logging out
    if (token) {
      await saveSettingsToServer(token);
    }

    // Dispatch logout action to Redux
    dispatch(logoutAction());

    // Clear extension storage
    try {
      // Clear localStorage in web environment
      if (typeof window !== "undefined" && window.localStorage) {
        // Only clear non-Redux persist keys
        const keysToKeep = ['persist:myscrollr_state'];
        const allKeys = Object.keys(window.localStorage);
        allKeys.forEach(key => {
          if (!keysToKeep.includes(key)) {
            window.localStorage.removeItem(key);
          }
        });
      }
    } catch (error) {
      debugLogger.error(
        DEBUG_CATEGORIES.STORAGE,
        "Failed to clear browser storage",
        error
      );
    }

    // Refresh the entire extension to reset all state
    setTimeout(() => {
      // Send message to background script to notify all contexts
      // No need to send runtime messages in web environment
      // Extension-specific code disabled

      // Force refresh of current context (popup)
      window.location.reload();
    }, 100);
  }, [token, dispatch, saveSettingsToServer]);

  const updateProfile = useCallback(
    async (profileData) => {
      try {
        const response = await fetch(API_ENDPOINTS.accounts.auth.profile, {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(profileData),
        });

        const data = await response.json();

        if (response.ok) {
          const { user } = data;

          // Update user data in Redux store
          dispatch(updateUser(user));

          return { success: true };
        } else {
          return {
            success: false,
            error: data.error || "Profile update failed",
          };
        }
      } catch (error) {
        debugLogger.error(DEBUG_CATEGORIES.AUTH, "Profile update error", error);
        return { success: false, error: "Network error during profile update" };
      }
    },
    [token, dispatch]
  );

  const changePassword = useCallback(
    async (currentPassword, newPassword) => {
      try {
        const response = await fetch(
          API_ENDPOINTS.accounts.auth.changePassword,
          {
            method: "PUT",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ currentPassword, newPassword }),
          }
        );

        const data = await response.json();

        if (response.ok) {
          return { success: true };
        } else {
          return {
            success: false,
            error: data.error || "Password change failed",
          };
        }
      } catch (error) {
        debugLogger.error(
          DEBUG_CATEGORIES.AUTH,
          "Password change error",
          error
        );
        return {
          success: false,
          error: "Network error during password change",
        };
      }
    },
    [token]
  );

  // Manual settings sync function for UI use
  const syncSettings = useCallback(async () => {
    if (isAuthenticated && token) {
      dispatch(setSyncStatus({ status: 'syncing' }));
      try {
        await saveSettingsToServer(token);
        dispatch(setSyncStatus({ status: 'synced' }));
      } catch (error) {
        dispatch(setSyncStatus({ status: 'error' }));
        throw error;
      }
    }
  }, [isAuthenticated, token, dispatch, saveSettingsToServer]);

  return {
    user,
    token,
    isAuthenticated,
    isLoading,
    error,
    syncStatus,
    login,
    register,
    logout,
    updateProfile,
    changePassword,
    syncSettings,
    saveSettingsImmediately,
  };
}