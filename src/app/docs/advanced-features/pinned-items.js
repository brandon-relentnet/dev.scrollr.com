import { StarIcon } from "@heroicons/react/24/outline";

export function PinnedItems() {
  return (
    <>
      <section className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <StarIcon className="w-6 h-6 text-primary" />
          <span className="text-lg font-semibold">
            Pinned Items {">"}{" "}
            <span className="text-base-content/70 italic">
              Priority Content
            </span>
          </span>
        </div>

        <div className="prose max-w-none mb-6">
          <p className="text-base-content/80 text-base leading-relaxed">
            Pin your most important content to ensure it gets priority placement
            in your ticker. Pinned items appear more frequently and help you
            stay on top of the information that matters most to you.
          </p>
        </div>

        <div className="grid gap-6">
          <div className="bg-base-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">How Pinning Works</h3>
            <div className="prose max-w-none mb-4">
              <p className="text-base-content/70 mb-3">
                [Pin Interface Component] - Visual demonstration of how to pin
                items, with interactive examples showing pin icons, frequency
                controls, and priority indicators in the ticker
              </p>
              <div className="bg-warning/10 border-l-4 border-warning p-4 mb-4">
                <p className="text-sm text-base-content/70">
                  <strong>⭐ Smart Pinning:</strong> Pinned items automatically
                  adjust their frequency based on content freshness and user
                  interaction patterns.
                </p>
              </div>
            </div>
            <div className="text-sm text-base-content/70">
              [Pin Manager] - Dashboard to view all pinned items, adjust
              frequencies, and organize pins by category or priority level
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <StarIcon className="w-6 h-6 text-primary" />
          <span className="text-lg font-semibold">
            Pinned Items {">"}{" "}
            <span className="text-base-content/70 italic">Best Practices</span>
          </span>
        </div>

        <div className="prose max-w-none mb-6">
          <p className="text-base-content/80 text-base leading-relaxed">
            Learn effective strategies for using pins to create a personalized
            information flow that matches your priorities and workflow.
          </p>
        </div>

        <div className="grid gap-6">
          <div className="bg-base-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Pin Categories</h3>
            <div className="text-sm text-base-content/70">
              [Category System] - Organize pins into groups like &ldquo;Breaking
              News&rdquo;, &ldquo;Portfolio Stocks&rdquo;, &ldquo;Favorite Teams&rdquo;, &ldquo;Work Feeds&rdquo; with
              different display frequencies and visual indicators
            </div>
          </div>

          <div className="bg-base-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">
              Smart Recommendations
            </h3>
            <div className="text-sm text-base-content/70">
              [AI Suggestions] - Intelligent recommendations for what to pin
              based on user behavior, content engagement, and trending topics
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <StarIcon className="w-6 h-6 text-primary" />
          <span className="text-lg font-semibold">
            Pinned Items {">"}{" "}
            <span className="text-base-content/70 italic">
              Advanced Features
            </span>
          </span>
        </div>

        <div className="prose max-w-none mb-6">
          <p className="text-base-content/80 text-base leading-relaxed">
            Unlock advanced pinning features for power users who want granular
            control over their content prioritization and display preferences.
          </p>
        </div>

        <div className="grid gap-6">
          <div className="bg-base-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Conditional Pinning</h3>
            <div className="text-sm text-base-content/70">
              [Rule Engine] - Set up complex rules like &ldquo;Pin stocks only during
              market hours&rdquo;, &ldquo;Pin sports content only on game days&rdquo;, &ldquo;Pin
              breaking news from specific sources&rdquo;
            </div>
          </div>

          <div className="bg-base-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Temporary Pins</h3>
            <div className="text-sm text-base-content/70">
              [Time-based Pins] - Create pins that automatically expire after a
              set time period, perfect for events, earnings calls, or temporary
              high-priority content
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
