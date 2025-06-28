"use client";

import { useEffect } from "react";
import DisplayTab from "./tabs/DisplayTab.jsx";
import PowerTab from "./tabs/PowerTab.jsx";
import ThemeTab from "./tabs/ThemeTab.js";
import AccountsTab from "./tabs/AccountsTab.js";
import SettingsTab from "./tabs/SettingsTab.js";

export default function Popup() {
  return (
    <div className="tabs tabs-lift p-2 overflow-hidden relative">
      {/* CENTER THE TABS */}
      <span className="tab w-[42px]">&nbsp;</span>

      {/* TAB #1 THEMES */}
      <ThemeTab />

      {/* TAB #2 VIEWS */}
      <DisplayTab />

      {/* TAB #3 POWER */}
      <PowerTab />

      {/* TAB #4 ACCOUNTS */}
      <AccountsTab />

      {/* TAB #5 SETTINGS */}
      <SettingsTab />
    </div>
  );
}
