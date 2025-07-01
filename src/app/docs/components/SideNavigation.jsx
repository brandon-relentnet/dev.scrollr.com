"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
    section: "Advanced Features",
    link: "/docs/advanced-features",
    items: [
      { label: "FAQ", link: "/docs/advanced-features/faq" },
      { label: "Performance", link: "/docs/advanced-features/performance" },
      { label: "Pinned Cards", link: "/docs/advanced-features/pinned-cards" },
      { label: "Privacy", link: "/docs/advanced-features/privacy" },
      { label: "Site Control", link: "/docs/advanced-features/site-control" },
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
];

export default function SideNavigation() {
  const pathname = usePathname();

  return (
    <div className="relative pt-40">
      <ul className="menu fixed menu-lg rounded-box w-76 h-[calc(100vh-6rem)]">
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
      <div className="w-76" />
    </div>
  );
}
