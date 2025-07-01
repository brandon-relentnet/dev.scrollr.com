import {
  DocumentTextIcon,
  WindowIcon,
  RectangleGroupIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

import { gettingStarted } from "./getting-started/getting-started";
import { extensionPopup } from "./extension-popup/extension-popup";
import { tickerDisplay } from "./ticker-display/ticker-display";
import { advancedFeatures } from "./advanced-features/advanced-features";

export const userNavigation = {
  "getting-started": {
    title: "Getting Started",
    icon: DocumentTextIcon,
    items: gettingStarted,
  },
  popup: {
    title: "Extension Popup",
    icon: WindowIcon,
    items: extensionPopup,
  },
  ticker: {
    title: "Ticker Display",
    icon: RectangleGroupIcon,
    items: tickerDisplay,
  },
  advanced: {
    title: "Advanced Features",
    icon: Cog6ToothIcon,
    items: advancedFeatures,
  },
};
