"use client";

import { DesignTab } from "./design-tab/page";
import { DisplayTab } from "./display-tab";
import { PowerTab } from "./power-tab";
import { AccountsTab } from "./accounts-tab";
import { SettingsTab } from "./settings-tab";

export const extensionPopup = {
  "design-tab": {
    title: "Design Tab",
    content: {
      title: "Design & Themes",
      description: "Customize the visual appearance of your Scrollr",
      component: DesignTab,
    },
  },
};

export default function ExtensionPopup() {
  return (
    <div className="container max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Extension Popup</h1>
      <p className="mb-6">
        This is the control center of Scrollr. Customize your experience here.
      </p>
      <div className="flex flex-col gap-6">
        {Object.entries(extensionPopup).map(([key, feature]) => (
          <div key={key}>
            <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
            <p className="mb-4">{feature.content.description}</p>
            <feature.content.component />
          </div>
        ))}
      </div>
    </div>
  );
}
