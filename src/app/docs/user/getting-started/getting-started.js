import { Introduction } from "./introduction";
import { Installation } from "./installation";
import { QuickStart } from "./quick-start";

export const gettingStarted = {
  introduction: {
    title: "Introduction",
    content: {
      title: "Welcome to Scrollr",
      description: "Your personal news ticker for the web",
      component: Introduction,
    },
  },
  installation: {
    title: "Installation",
    content: {
      title: "Installing Scrollr",
      description: "Get up and running in less than a minute",
      component: Installation,
    },
  },
  "quick-start": {
    title: "Quick Start Guide",
    content: {
      title: "Quick Start",
      description: "Get the most out of Scrollr in 5 minutes",
      component: QuickStart,
    },
  },
};
