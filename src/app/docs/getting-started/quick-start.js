import { RocketLaunchIcon } from "@heroicons/react/24/solid";

export function QuickStart() {
  return (
    <>
      <section className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <RocketLaunchIcon className="w-6 h-6 text-primary" />
          <span className="text-lg font-semibold">
            Getting Started {">"}{" "}
            <span className="text-base-content/70 italic">Quick Setup</span>
          </span>
        </div>

        <div className="prose max-w-none mb-6">
          <p className="text-base-content/80 text-base leading-relaxed">
            Get your <strong>Scrollr ticker</strong> up and running in just a
            few minutes. This quick start guide will have you monitoring news,
            stocks, and sports in no time. Follow these simple steps to get the
            most out of your first Scrollr experience.
          </p>
        </div>

        <div className="bg-base-200 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold mb-4">
            Step 1: Open the Control Panel
          </h3>
          <div className="prose max-w-none mb-4">
            <p className="text-base-content/70 mb-3">
              Click the <strong>Scrollr icon</strong> in your browser toolbar to
              open the popup control panel. This is your command center for
              managing all ticker content and settings.
            </p>
            <div className="bg-info/10 border-l-4 border-info p-4 mb-4">
              <p className="text-sm text-base-content/70">
                <strong>💡 Pro Tip:</strong> You can also use the keyboard
                shortcut
                <code className="bg-base-300 px-2 py-1 rounded mx-1">
                  Alt+S
                </code>
                to quickly toggle Scrollr on/off from any webpage.
              </p>
            </div>
          </div>
          <div className="bg-base-300/50 p-4 rounded">
            <p className="text-sm text-base-content/70">
              [Control Panel Interface] - Interactive popup showing all tabs and
              settings
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <RocketLaunchIcon className="w-6 h-6 text-primary" />
          <span className="text-lg font-semibold">
            Getting Started {">"}{" "}
            <span className="text-base-content/70 italic">Content Setup</span>
          </span>
        </div>

        <div className="prose max-w-none mb-6">
          <p className="text-base-content/80 text-base leading-relaxed">
            Now let&rsquo;s add some content to your ticker. We&rsquo;ll start with a news
            feed and some stock symbols to give you a taste of what Scrollr can
            display.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-base-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">
              Step 2: Add Your First Feed
            </h3>
            <ol className="list-decimal list-inside space-y-2 mb-4">
              <li>
                Go to the <strong>RSS tab</strong>
              </li>
              <li>
                Click <strong>&ldquo;Add Feed&rdquo;</strong>
              </li>
              <li>
                Try this starter feed:{" "}
                <code className="bg-base-300 px-2 py-1 rounded text-xs">
                  https://feeds.bbci.co.uk/news/rss.xml
                </code>
              </li>
              <li>
                Give it a friendly name like <strong>&ldquo;BBC News&rdquo;</strong>
              </li>
              <li>
                Click <strong>Save</strong>
              </li>
            </ol>
            <div className="bg-success/10 border-l-4 border-success p-4">
              <p className="text-sm text-base-content/70">
                <strong>✅ Success:</strong> You should now see BBC News
                headlines scrolling in your ticker within seconds!
              </p>
            </div>
          </div>

          <div className="bg-base-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">
              Step 3: Add Stock Symbols
            </h3>
            <ol className="list-decimal list-inside space-y-2 mb-4">
              <li>
                Switch to the <strong>Finance tab</strong>
              </li>
              <li>
                Type a stock symbol (e.g.,{" "}
                <code className="bg-base-300 px-1 rounded">AAPL</code>,{" "}
                <code className="bg-base-300 px-1 rounded">GOOGL</code>,{" "}
                <code className="bg-base-300 px-1 rounded">TSLA</code>)
              </li>
              <li>
                Press <strong>Enter</strong> or click <strong>Add</strong>
              </li>
              <li>Watch real-time prices appear in your ticker</li>
            </ol>
            <div className="bg-warning/10 border-l-4 border-warning p-4">
              <p className="text-sm text-base-content/70">
                <strong>⚠️ Note:</strong> Stock prices update every few seconds
                during market hours. Color coding shows gains (green) and losses
                (red).
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <RocketLaunchIcon className="w-6 h-6 text-primary" />
          <span className="text-lg font-semibold">
            Getting Started {">"}{" "}
            <span className="text-base-content/70 italic">Customization</span>
          </span>
        </div>

        <div className="prose max-w-none mb-6">
          <p className="text-base-content/80 text-base leading-relaxed">
            Make Scrollr look perfect on your favorite websites by adjusting the
            appearance settings. These controls let you fine-tune the ticker&rsquo;s
            behavior and visual style.
          </p>
        </div>

        <div className="bg-base-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">
            Step 4: Customize Appearance
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-3">📍 Position Settings</h4>
              <ul className="space-y-2 text-sm text-base-content/70">
                <li>
                  • <strong>Top:</strong> Great for news alerts and active
                  monitoring
                </li>
                <li>
                  • <strong>Bottom:</strong> Less intrusive, perfect for
                  background info
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">⚡ Speed Control</h4>
              <ul className="space-y-2 text-sm text-base-content/70">
                <li>
                  • <strong>Slow:</strong> Perfect for detailed reading
                </li>
                <li>
                  • <strong>Fast:</strong> Consume more information quickly
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">🎨 Opacity Tuning</h4>
              <ul className="space-y-2 text-sm text-base-content/70">
                <li>
                  • <strong>High:</strong> Maximum readability
                </li>
                <li>
                  • <strong>Low:</strong> Subtle, less distracting
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">📐 Layout Options</h4>
              <ul className="space-y-2 text-sm text-base-content/70">
                <li>
                  • <strong>Compact:</strong> More content visible
                </li>
                <li>
                  • <strong>Comfortable:</strong> Easier reading
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-primary/10 border-l-4 border-primary p-4 mt-6">
            <p className="text-sm text-base-content/70">
              <strong>🎯 Best Practice:</strong> Start with default settings,
              then adjust based on your usage patterns. Most users find bottom
              position with medium opacity works best for daily browsing.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
