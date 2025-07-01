import { PinnedItems } from "./pinned-items";
import { SiteControl } from "./site-control";
import { Performance } from "./performance";
import { FAQ } from "./faq";
import { Privacy } from "./privacy";

export const advancedFeatures = {
  "pinned-items": {
    title: "Pinned Items",
    content: {
      title: "Pinning Important Content",
      description: "Keep crucial information always visible",
      component: PinnedItems,
    },
  },
  "site-control": {
    title: "Per-Site Control",
    content: {
      title: "Site-Specific Settings",
      description: "Customize Scrollr for individual websites",
      component: SiteControl,
    },
  },
  performance: {
    title: "Performance",
    content: {
      title: "Optimizing Performance",
      description: "Keep Scrollr running smoothly",
      component: Performance,
    },
  },
  faq: {
    title: "FAQ",
    content: {
      title: "Frequently Asked Questions",
      description: "Common questions answered",
      component: FAQ,
    },
  },
  privacy: {
    title: "Privacy Policy",
    content: {
      title: "Privacy & Security",
      description: "Your data is yours alone",
      component: Privacy,
    },
  },
};

export default function AdvancedFeatures() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Advanced Features</h1>
      <p className="mb-6">
        Explore Scrollr's advanced features to enhance your browsing experience.
      </p>
      <div className="flex flex-col gap-6">
        {Object.entries(advancedFeatures).map(([key, feature]) => (
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
