import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "@/store/rootReducer.js";

// Configure persistence
const persistConfig = {
  key: "myscrollr_state",
  storage,
  whitelist: [
    "finance",
    "rss",
    "layout",
    "theme",
    "pinned",
    "power",
    "toggles",
    "auth",
    "debug",
  ],
  // Don't persist certain fields
  blacklist: [],
};

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create store with persisted reducer
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Create persistor
export const persistor = persistStore(store);

export default store;
