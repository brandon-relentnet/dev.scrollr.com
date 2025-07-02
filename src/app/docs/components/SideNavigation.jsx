"use client";

import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { spring } from "motion/react";

const docsNavigations = [
  {
    section: "Getting Started",
    link: "/docs/getting-started",
    items: [
      { label: "Introduction", link: "/docs/getting-started/introduction" },
      { label: "Installation", link: "/docs/getting-started/installation" },
      { label: "Quick Start", link: "/docs/getting-started/quick-start" },
    ],
  },
  {
    section: "Popup",
    link: "/docs/popup",
    items: [
      {
        label: "Design Tab",
        link: "/docs/popup/design-tab",
      },
      {
        label: "Display Tab",
        link: "/docs/popup/display-tab",
      },
      {
        label: "Power Tab",
        link: "/docs/popup/power-tab",
      },
      {
        label: "Accounts Tab",
        link: "/docs/popup/accounts-tab",
      },
      {
        label: "Settings Tab",
        link: "/docs/popup/settings-tab",
      },
    ],
  },
  {
    section: "Scrollr",
    link: "/docs/scrollr",
    items: [
      {
        label: "Customize your Scrollr",
        link: "/docs/scrollr/customize-scrollr",
      },
      {
        label: "Scrollr Interactions",
        link: "/docs/scrollr/scrollr-interactions",
      },
      {
        label: "Scrollr Overview",
        link: "/docs/scrollr/scrollr-overview",
      },
    ],
  },
  {
    section: "Advanced",
    link: "/docs/advanced-features",
    items: [
      { label: "FAQ", link: "/docs/advanced-features/faq" },
      { label: "Performance", link: "/docs/advanced-features/performance" },
      { label: "Pinned Cards", link: "/docs/advanced-features/pinned-cards" },
      { label: "Privacy", link: "/docs/advanced-features/privacy" },
      { label: "Site Control", link: "/docs/advanced-features/site-control" },
    ],
  },
];

export default function SideNavigation() {
  const [showNavigation, setShowNavigation] = useState(true);

  const pathname = usePathname();

  return (
    <div className="relative pt-40 flex items-end flex-col">
      <button
        className="btn btn-ghost fixed -mt-10 z-10 group"
        onClick={() => setShowNavigation(!showNavigation)}
      >
        <ArrowLeftIcon
          className={`size-6 group-hover:text-base-content transition-all duration-250 ${
            showNavigation
              ? "text-base-content/70 rotate-0"
              : "rotate-180 text-base-content/40"
          }`}
        />
      </button>
      <div
        className={`relative ${showNavigation ? "w-54 md:w-76" : "w-0"}`}
        style={{
          transition: `width ${spring(0.2, 0.3)}`,
        }}
      >
        <ul
          className="menu mt-2 fixed md:menu-lg rounded-box w-54 md:w-76 h-[calc(100vh-6rem)]"
          style={{
            opacity: showNavigation ? 1 : 0,
            transition: showNavigation
              ? "opacity 200ms ease-out 150ms"
              : "opacity 100ms ease-in",
            pointerEvents: showNavigation ? "auto" : "none",
          }}
        >
          {docsNavigations.map((nav) => (
            <li
              key={nav.section}
              className={`${pathname === nav.link ? "menu-active" : ""}`}
            >
              <details open>
                <summary>{nav.section}</summary>
                <ul>
                  {nav.items.map((item) => (
                    <li key={item.label}>
                      <Link
                        className={`${
                          pathname === item.link ? "menu-active" : ""
                        }`}
                        href={item.link}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          ))}
        </ul>
        <div className="w-54 md:w-76" />
      </div>
    </div>
  );
}
