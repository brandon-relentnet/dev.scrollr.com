// Direct imports instead of lazy loading to avoid client component issues
import { DesignTab } from "@/app/docs/popup/design-tab";
import { DisplayTab } from "@/app/docs/popup/display-tab";
import { PowerTab } from "@/app/docs/popup/power-tab";
import { AccountsTab } from "@/app/docs/popup/accounts-tab";
import { SettingsTab } from "@/app/docs/popup/settings-tab";

// Placeholder components for missing pages
const Introduction = () => <div>Introduction Content Coming Soon</div>;
const Installation = () => <div>Installation Content Coming Soon</div>;
const QuickStart = () => <div>Quick Start Content Coming Soon</div>;
const FAQ = () => <div>FAQ Content Coming Soon</div>;
const Performance = () => <div>Performance Content Coming Soon</div>;
const PinnedItems = () => <div>Pinned Items Content Coming Soon</div>;
const Privacy = () => <div>Privacy Content Coming Soon</div>;
const SiteControl = () => <div>Site Control Content Coming Soon</div>;
const TickerCustomization = () => <div>Ticker Customization Content Coming Soon</div>;
const TickerDisplay = () => <div>Ticker Display Content Coming Soon</div>;
const TickerInteraction = () => <div>Ticker Interaction Content Coming Soon</div>;
const TickerOverview = () => <div>Ticker Overview Content Coming Soon</div>;

export const docsPages = {
  // Getting Started
  "getting-started": {
    title: "Getting Started",
    description: "Learn the basics of Scrollr",
    component: Introduction,
    breadcrumb: ["Getting Started"],
  },
  "getting-started/introduction": {
    title: "Introduction",
    description: "Introduction to Scrollr",
    component: Introduction,
    breadcrumb: ["Getting Started", "Introduction"],
  },
  "getting-started/installation": {
    title: "Installation",
    description: "How to install Scrollr",
    component: Installation,
    breadcrumb: ["Getting Started", "Installation"],
  },
  "getting-started/quick-start": {
    title: "Quick Start",
    description: "Get up and running quickly",
    component: QuickStart,
    breadcrumb: ["Getting Started", "Quick Start"],
  },

  // Advanced Features
  "advanced-features": {
    title: "Advanced Features",
    description: "Advanced Scrollr features and configuration",
    component: FAQ,
    breadcrumb: ["Advanced Features"],
  },
  "advanced-features/faq": {
    title: "FAQ",
    description: "Frequently asked questions",
    component: FAQ,
    breadcrumb: ["Advanced Features", "FAQ"],
  },
  "advanced-features/performance": {
    title: "Performance",
    description: "Performance tips and optimization",
    component: Performance,
    breadcrumb: ["Advanced Features", "Performance"],
  },
  "advanced-features/pinned-cards": {
    title: "Pinned Cards",
    description: "How to use pinned cards feature",
    component: PinnedItems,
    breadcrumb: ["Advanced Features", "Pinned Cards"],
  },
  "advanced-features/privacy": {
    title: "Privacy",
    description: "Privacy settings and data handling",
    component: Privacy,
    breadcrumb: ["Advanced Features", "Privacy"],
  },
  "advanced-features/site-control": {
    title: "Site Control",
    description: "Control Scrollr behavior per website",
    component: SiteControl,
    breadcrumb: ["Advanced Features", "Site Control"],
  },

  // Popup Documentation
  popup: {
    title: "Extension Popup",
    description: "Overview of the extension popup interface",
    component: DesignTab,
    breadcrumb: ["Popup"],
  },
  "popup/design-tab": {
    title: "Design Tab",
    description: "Customize themes and visual appearance",
    component: DesignTab,
    breadcrumb: ["Popup", "Design Tab"],
  },
  "popup/display-tab": {
    title: "Display Tab",
    description: "Configure content display settings",
    component: DisplayTab,
    breadcrumb: ["Popup", "Display Tab"],
  },
  "popup/power-tab": {
    title: "Power Tab",
    description: "Power controls and extension management",
    component: PowerTab,
    breadcrumb: ["Popup", "Power Tab"],
  },
  "popup/accounts-tab": {
    title: "Accounts Tab",
    description: "User accounts and premium features",
    component: AccountsTab,
    breadcrumb: ["Popup", "Accounts Tab"],
  },
  "popup/settings-tab": {
    title: "Settings Tab",
    description: "Advanced settings and preferences",
    component: SettingsTab,
    breadcrumb: ["Popup", "Settings Tab"],
  },

  // Scrollr Features
  scrollr: {
    title: "Scrollr Features",
    description: "Learn about ticker functionality",
    component: TickerOverview,
    breadcrumb: ["Scrollr"],
  },
  "scrollr/customize-scrollr": {
    title: "Customize your Scrollr",
    description: "Customize ticker appearance and behavior",
    component: TickerCustomization,
    breadcrumb: ["Scrollr", "Customize your Scrollr"],
  },
  "scrollr/scrollr-interactions": {
    title: "Scrollr Interactions",
    description: "How to interact with the ticker",
    component: TickerInteraction,
    breadcrumb: ["Scrollr", "Scrollr Interactions"],
  },
  "scrollr/scrollr-overview": {
    title: "Scrollr Overview",
    description: "Overview of ticker functionality",
    component: TickerOverview,
    breadcrumb: ["Scrollr", "Scrollr Overview"],
  },
};

// Helper function to get page data by slug
export function getPageBySlug(slugArray) {
  const slug = slugArray.join("/");
  return docsPages[slug] || null;
}

// Helper function to get all available slugs for static generation
export function getAllDocsSlugs() {
  return Object.keys(docsPages).map((slug) => ({
    slug: slug.split("/"),
  }));
}
