import { 
  DocumentTextIcon,
  WindowIcon,
  RectangleGroupIcon,
  Cog6ToothIcon 
} from "@heroicons/react/24/outline";

import { gettingStarted } from './sections/getting-started';
import { extensionPopup } from './sections/extension-popup';
import { tickerDisplay } from './sections/ticker-display';
import { advancedFeatures } from './sections/advanced-features';

export const userNavigation = {
  "getting-started": {
    title: "Getting Started",
    icon: DocumentTextIcon,
    items: gettingStarted
  },
  "popup": {
    title: "Extension Popup",
    icon: WindowIcon,
    items: extensionPopup
  },
  "ticker": {
    title: "Ticker Display",
    icon: RectangleGroupIcon,
    items: tickerDisplay
  },
  "advanced": {
    title: "Advanced Features",
    icon: Cog6ToothIcon,
    items: advancedFeatures
  }
};