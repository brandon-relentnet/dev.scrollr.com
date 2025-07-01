import { PinnedItems } from '../content/pinned-items';
import { SiteControl } from '../content/site-control';
import { Performance } from '../content/performance';
import { FAQ } from '../content/faq';
import { Privacy } from '../content/privacy';

export const advancedFeatures = {
  "pinned-items": {
    title: "Pinned Items",
    content: {
      title: "Pinning Important Content",
      description: "Keep crucial information always visible",
      component: PinnedItems
    }
  },
  "site-control": {
    title: "Per-Site Control",
    content: {
      title: "Site-Specific Settings",
      description: "Customize Scrollr for individual websites",
      component: SiteControl
    }
  },
  "performance": {
    title: "Performance",
    content: {
      title: "Optimizing Performance",
      description: "Keep Scrollr running smoothly",
      component: Performance
    }
  },
  "faq": {
    title: "FAQ",
    content: {
      title: "Frequently Asked Questions",
      description: "Common questions answered",
      component: FAQ
    }
  },
  "privacy": {
    title: "Privacy Policy",
    content: {
      title: "Privacy & Security",
      description: "Your data is yours alone",
      component: Privacy
    }
  }
};