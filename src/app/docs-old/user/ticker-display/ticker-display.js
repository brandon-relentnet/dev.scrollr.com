import { TickerOverview } from "./ticker-overview";
import { TickerInteraction } from "./ticker-interaction";
import { TickerCustomization } from "./ticker-customization";

export const tickerDisplay = {
  "ticker-overview": {
    title: "Ticker Overview",
    content: {
      title: "The Scrolling Ticker",
      description: "Understanding the main display",
      component: TickerOverview,
    },
  },
  "ticker-interaction": {
    title: "Interacting with Ticker",
    content: {
      title: "Ticker Interactions",
      description: "How to use the ticker effectively",
      component: TickerInteraction,
    },
  },
  "ticker-customization": {
    title: "Visual Customization",
    content: {
      title: "Customizing Appearance",
      description: "Make the ticker fit your style",
      component: TickerCustomization,
    },
  },
};
