import { DesignTab } from "../content/design-tab";
import { DisplayTab } from "../content/display-tab";
import { PowerTab } from "../content/power-tab";
import { AccountsTab } from "../content/accounts-tab";
import { SettingsTab } from "../content/settings-tab";

export const extensionPopup = {
  "design-tab": {
    title: "Design Tab",
    content: {
      title: "Design & Themes",
      description: "Customize the visual appearance of your Scrollr",
      component: DesignTab,
    },
  },
  "display-tab": {
    title: "Display Tab",
    content: {
      title: "Content Display Settings",
      description: "Toggle and configure your content sources",
      component: DisplayTab,
    },
  },
  "power-tab": {
    title: "Power & Quick Settings",
    content: {
      title: "Power Controls",
      description: "Master toggle and quick customization",
      component: PowerTab,
    },
  },
  "accounts-tab": {
    title: "Accounts Tab",
    content: {
      title: "Scrollr Account",
      description: "Unlock premium features and sync settings",
      component: AccountsTab,
    },
  },
  "settings-tab": {
    title: "Settings Tab",
    content: {
      title: "Advanced Settings",
      description: "Data management and debug options",
      component: SettingsTab,
    },
  },
};
