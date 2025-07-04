import { combineReducers } from "@reduxjs/toolkit";
import ThemeReducer from "./themeSlice.js";
import TogglesReducer from "./togglesSlice.js";
import FinanceReducer from "./financeSlice.js";
import PowerReducer from "./powerSlice.js";
import LayoutReducer from "./layoutSlice.js";
import RssReducer from "./rssSlice.js";
import PinnedReducer from "./pinnedSlice.js";
import AuthReducer from "../slices/authSlice.js";
import DebugReducer from "../slices/debugSlice.js";
import DevModeReducer from "./devModeSlice.js";
import PopupReducer from "./popupSlice.js";

const rootReducer = combineReducers({
  // Add your reducers here
  theme: ThemeReducer,
  toggles: TogglesReducer,
  finance: FinanceReducer,
  power: PowerReducer,
  layout: LayoutReducer,
  rss: RssReducer,
  pinned: PinnedReducer,
  auth: AuthReducer,
  debug: DebugReducer,
  devMode: DevModeReducer,
  popup: PopupReducer,
});

export default rootReducer;
