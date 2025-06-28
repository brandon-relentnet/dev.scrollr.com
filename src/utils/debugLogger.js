/**
 * Centralized Debug Logging Utility for Scrollr Extension
 *
 * Provides structured logging with configurable debug modes.
 * Only critical errors are shown in production unless debug mode is enabled.
 * Now uses Redux store for state management.
 */

import store from '../store';
import { setDebugEnabled, setDebugCategories } from '../slices/debugSlice';

// Debug categories for granular control
export const DEBUG_CATEGORIES = {
  WEBSOCKET: "websocket",
  AUTH: "auth",
  RSS: "rss",
  STORAGE: "storage",
  UI: "ui",
  CONFIG: "config",
  NETWORK: "network",
  STATE: "state",
};

// Log levels with priority (higher number = higher priority)
export const LOG_LEVELS = {
  DEBUG: 0,
  INFO: 1,
  WARN: 2,
  ERROR: 3,
};

class DebugLogger {
  constructor() {
    this.sessionId = this.generateSessionId();
    this.initializeFromStore();
  }

  generateSessionId() {
    return Math.random().toString(36).substr(2, 9);
  }

  initializeFromStore() {
    try {
      const state = store.getState();
      const isDebugMode = state.debug?.enabled || false;
      const debugCategories = state.debug?.categories || [];

      if (isDebugMode) {
        this.info("DEBUG", "🐛 Debug mode initialized from Redux", {
          sessionId: this.sessionId,
          categories: debugCategories,
        });
      }
    } catch (error) {
      console.error("Failed to initialize debug logger from store:", error);
    }
  }

  get isDebugMode() {
    const state = store.getState();
    return state.debug?.enabled || false;
  }

  get debugCategories() {
    const state = store.getState();
    return new Set(state.debug?.categories || []);
  }

  async setDebugMode(enabled, categories = []) {
    try {
      store.dispatch(setDebugEnabled(enabled));
      store.dispatch(setDebugCategories(categories));

      if (enabled) {
        this.info("DEBUG", "🐛 Debug mode enabled", {
          categories: categories,
        });
      } else {
        console.log("🐛 Debug mode disabled");
      }
    } catch (error) {
      console.error("Failed to save debug settings:", error);
    }
  }

  shouldLog(level, category) {
    // Always log errors and warnings
    if (level >= LOG_LEVELS.WARN) {
      return true;
    }

    // For debug/info, check if debug mode is enabled
    if (!this.isDebugMode) {
      return false;
    }

    // If specific categories are set, only log those categories
    const categories = this.debugCategories;
    if (categories.size > 0) {
      return categories.has(category);
    }

    // If debug mode is on but no specific categories, log everything
    return true;
  }

  formatMessage(level, category, message, data = null) {
    const timestamp = new Date().toISOString().substr(11, 12); // HH:MM:SS.sss
    const levelIcon =
      {
        [LOG_LEVELS.DEBUG]: "🔍",
        [LOG_LEVELS.INFO]: "ℹ️",
        [LOG_LEVELS.WARN]: "⚠️",
        [LOG_LEVELS.ERROR]: "❌",
      }[level] || "📝";

    const categoryTag = category ? `[${category.toUpperCase()}]` : "";
    const prefix = `${levelIcon} ${timestamp} ${categoryTag}`;

    return { prefix, message, data };
  }

  log(level, category, message, data = null) {
    if (!this.shouldLog(level, category)) {
      return;
    }

    const {
      prefix,
      message: msg,
      data: logData,
    } = this.formatMessage(level, category, message, data);

    switch (level) {
      case LOG_LEVELS.DEBUG:
      case LOG_LEVELS.INFO:
        if (logData) {
          console.log(`${prefix} ${msg}`, logData);
        } else {
          console.log(`${prefix} ${msg}`);
        }
        break;
      case LOG_LEVELS.WARN:
        if (logData) {
          console.warn(`${prefix} ${msg}`, logData);
        } else {
          console.warn(`${prefix} ${msg}`);
        }
        break;
      case LOG_LEVELS.ERROR:
        if (logData) {
          console.error(`${prefix} ${msg}`, logData);
        } else {
          console.error(`${prefix} ${msg}`);
        }
        break;
    }
  }

  // Convenience methods
  debug(category, message, data) {
    this.log(LOG_LEVELS.DEBUG, category, message, data);
  }

  info(category, message, data) {
    this.log(LOG_LEVELS.INFO, category, message, data);
  }

  warn(category, message, data) {
    this.log(LOG_LEVELS.WARN, category, message, data);
  }

  error(category, message, data) {
    this.log(LOG_LEVELS.ERROR, category, message, data);
  }

  // Specialized logging methods for common patterns
  websocketEvent(event, data = null) {
    this.debug(DEBUG_CATEGORIES.WEBSOCKET, `WebSocket ${event}`, data);
  }

  authEvent(event, data = null) {
    this.info(DEBUG_CATEGORIES.AUTH, `Auth ${event}`, data);
  }

  rssEvent(event, data = null) {
    this.info(DEBUG_CATEGORIES.RSS, `RSS ${event}`, data);
  }

  storageEvent(event, data = null) {
    this.debug(DEBUG_CATEGORIES.STORAGE, `Storage ${event}`, data);
  }

  uiEvent(event, data = null) {
    this.debug(DEBUG_CATEGORIES.UI, `UI ${event}`, data);
  }

  networkEvent(event, data = null) {
    this.debug(DEBUG_CATEGORIES.NETWORK, `Network ${event}`, data);
  }

  stateChange(component, data = null) {
    this.debug(DEBUG_CATEGORIES.STATE, `State change: ${component}`, data);
  }

  // Performance timing helper
  time(label, category = "PERF") {
    if (this.shouldLog(LOG_LEVELS.DEBUG, category)) {
      console.time(`🕐 [${category}] ${label}`);
    }
  }

  timeEnd(label, category = "PERF") {
    if (this.shouldLog(LOG_LEVELS.DEBUG, category)) {
      console.timeEnd(`🕐 [${category}] ${label}`);
    }
  }

  // Group logging for complex operations
  group(title, category, data = null) {
    if (this.shouldLog(LOG_LEVELS.DEBUG, category)) {
      const { prefix } = this.formatMessage(
        LOG_LEVELS.DEBUG,
        category,
        title,
        data
      );
      console.group(`${prefix} ${title}`);
      if (data) {
        console.log("Context:", data);
      }
    }
  }

  groupEnd(category) {
    if (this.shouldLog(LOG_LEVELS.DEBUG, category)) {
      console.groupEnd();
    }
  }
}

// Create singleton instance
const debugLogger = new DebugLogger();

// Export both the instance and the class for testing
export { debugLogger as default, DebugLogger };

// Export convenience methods for easier imports
export const {
  debug,
  info,
  warn,
  error,
  websocketEvent,
  authEvent,
  rssEvent,
  storageEvent,
  uiEvent,
  networkEvent,
  stateChange,
  time,
  timeEnd,
  group,
  groupEnd,
  setDebugMode,
} = debugLogger;