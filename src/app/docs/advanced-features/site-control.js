import { GlobeAltIcon } from "@heroicons/react/24/outline";

export function SiteControl() {
  return (
    <>
      <section className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <GlobeAltIcon className="w-6 h-6 text-primary" />
          <span className="text-lg font-semibold">
            Site Control {">"}{" "}
            <span className="text-base-content/70 italic">Smart Behavior</span>
          </span>
        </div>

        <div className="prose max-w-none mb-6">
          <p className="text-base-content/80 text-base leading-relaxed">
            Scrollr intelligently adapts to different websites and situations.
            Learn how to customize its behavior for specific sites and create
            rules that match your browsing patterns and preferences.
          </p>
        </div>

        <div className="grid gap-6">
          <div className="bg-base-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Automatic Detection</h3>
            <div className="prose max-w-none mb-4">
              <p className="text-base-content/70 mb-3">
                [Smart Detection System] - Visual dashboard showing how Scrollr
                automatically detects video players, forms, full-screen mode,
                and other contexts to adjust its behavior appropriately
              </p>
              <div className="bg-info/10 border-l-4 border-info p-4 mb-4">
                <p className="text-sm text-base-content/70">
                  <strong>🤖 AI Detection:</strong> Scrollr uses intelligent
                  algorithms to recognize when to hide, reposition, or adjust
                  the ticker automatically.
                </p>
              </div>
            </div>
            <div className="text-sm text-base-content/70">
              [Behavior Preview] - Live preview showing how Scrollr behaves on
              different types of websites and in various scenarios
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <GlobeAltIcon className="w-6 h-6 text-primary" />
          <span className="text-lg font-semibold">
            Site Control {">"}{" "}
            <span className="text-base-content/70 italic">Custom Rules</span>
          </span>
        </div>

        <div className="prose max-w-none mb-6">
          <p className="text-base-content/80 text-base leading-relaxed">
            Create sophisticated rules to control exactly how Scrollr behaves on
            each website. From simple on/off switches to complex conditional
            logic.
          </p>
        </div>

        <div className="grid gap-6">
          <div className="bg-base-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Rule Builder</h3>
            <div className="text-sm text-base-content/70">
              [Visual Rule Editor] - Drag-and-drop interface to create rules
              like &ldquo;Hide on Netflix&rdquo;, &ldquo;Bottom-only on YouTube&rdquo;, &ldquo;Transparent on
              news sites&rdquo;
            </div>
          </div>

          <div className="bg-base-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Site Templates</h3>
            <div className="text-sm text-base-content/70">
              [Template System] - Pre-configured rule sets for common site
              types: &ldquo;Social Media&rdquo;, &ldquo;News Sites&rdquo;, &ldquo;Work Tools&rdquo;, &ldquo;Entertainment&rdquo;
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <GlobeAltIcon className="w-6 h-6 text-primary" />
          <span className="text-lg font-semibold">
            Site Control {">"}{" "}
            <span className="text-base-content/70 italic">
              Advanced Features
            </span>
          </span>
        </div>

        <div className="prose max-w-none mb-6">
          <p className="text-base-content/80 text-base leading-relaxed">
            Power user features for granular control over how Scrollr integrates
            with your favorite websites and applications.
          </p>
        </div>

        <div className="grid gap-6">
          <div className="bg-base-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Context-Aware Rules</h3>
            <div className="text-sm text-base-content/70">
              [Context Engine] - Rules that respond to time of day, user
              activity, page content, or external factors like &ldquo;Hide during
              video calls&rdquo;
            </div>
          </div>

          <div className="bg-base-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">
              Performance Optimization
            </h3>
            <div className="text-sm text-base-content/70">
              [Performance Tuner] - Automatically adjust Scrollr settings based
              on site performance, device capabilities, and network conditions
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
