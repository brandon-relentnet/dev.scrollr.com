import { TvIcon } from "@heroicons/react/24/solid";

export function TickerDisplay() {
  return (
    <>
      <section className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <TvIcon className="w-6 h-6 text-primary" />
          <span className="text-lg font-semibold">
            Ticker Display {">"}{" "}
            <span className="text-base-content/70 italic">
              Interface Overview
            </span>
          </span>
        </div>

        <div className="prose max-w-none mb-6">
          <p className="text-base-content/80 text-base leading-relaxed">
            The <strong>Scrollr ticker display</strong> is your information
            window to the world. This horizontally scrolling overlay brings
            real-time news, financial data, and sports updates directly to any
            webpage you&rsquo;re viewing, creating a seamless information experience.
          </p>
        </div>

        <div className="bg-base-200 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold mb-4">How the Ticker Works</h3>
          <div className="prose max-w-none mb-4">
            <p className="text-base-content/70 mb-3">
              The ticker operates as a <strong>persistent overlay</strong> that
              appears on top of webpage content. It continuously scrolls from
              right to left, displaying your selected content in an organized,
              readable format that doesn&rsquo;t interrupt your browsing experience.
            </p>
            <div className="bg-info/10 border-l-4 border-info p-4 mb-4">
              <p className="text-sm text-base-content/70">
                <strong>💡 Smart Design:</strong> The ticker automatically
                adjusts its appearance based on the underlying webpage, ensuring
                optimal readability while maintaining visual harmony with any
                site design.
              </p>
            </div>
          </div>

          <div className="bg-base-300/50 p-4 rounded mb-4">
            <p className="text-sm text-base-content/70">
              [Interactive Ticker Demo] - Live preview showing news, stocks, and
              sports scrolling
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-base-300/50 p-3 rounded">
              <h5 className="font-medium mb-2">▶️ Auto-Scroll</h5>
              <p className="text-base-content/70">
                Smooth horizontal scrolling from right to left at your preferred
                speed
              </p>
            </div>
            <div className="bg-base-300/50 p-3 rounded">
              <h5 className="font-medium mb-2">⏸️ Hover to Pause</h5>
              <p className="text-base-content/70">
                Automatically pauses when you move your mouse over the ticker
                content
              </p>
            </div>
            <div className="bg-base-300/50 p-3 rounded">
              <h5 className="font-medium mb-2">🔗 Click for Details</h5>
              <p className="text-base-content/70">
                Click any item to open full articles, stock details, or game
                information
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <TvIcon className="w-6 h-6 text-primary" />
          <span className="text-lg font-semibold">
            Ticker Display {">"}{" "}
            <span className="text-base-content/70 italic">Content Types</span>
          </span>
        </div>

        <div className="prose max-w-none mb-6">
          <p className="text-base-content/80 text-base leading-relaxed">
            Your ticker can display multiple types of content simultaneously,
            each formatted and color-coded for easy identification. Content is
            intelligently mixed to provide variety while maintaining
            readability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-base-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">News & Information</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-info p-3 bg-info/5">
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  📰 <span>RSS Headlines</span>
                </h4>
                <ul className="text-sm text-base-content/70 space-y-1">
                  <li>• Article titles with source attribution</li>
                  <li>• Publication timestamps for freshness</li>
                  <li>• Click to read full articles</li>
                  <li>• Automatic feed refresh every 5 minutes</li>
                </ul>
              </div>

              <div className="border-l-4 border-warning p-3 bg-warning/5">
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  ⭐ <span>Pinned Items</span>
                </h4>
                <ul className="text-sm text-base-content/70 space-y-1">
                  <li>• Important content marked for priority</li>
                  <li>• Appears more frequently in rotation</li>
                  <li>• Visual indicators for emphasis</li>
                  <li>• Custom content you want to highlight</li>
                </ul>
              </div>
            </div>

            <div className="bg-base-300/50 p-3 rounded mt-4">
              <p className="text-sm text-base-content/70">
                [News Item Component] - Sample news headline with source and
                timestamp
              </p>
            </div>
          </div>

          <div className="bg-base-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">
              Financial & Sports Data
            </h3>
            <div className="space-y-4">
              <div className="border-l-4 border-success p-3 bg-success/5">
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  📈 <span>Stock Quotes</span>
                </h4>
                <ul className="text-sm text-base-content/70 space-y-1">
                  <li>• Real-time price updates during market hours</li>
                  <li>• Color-coded gains (green) and losses (red)</li>
                  <li>• Percentage and dollar change indicators</li>
                  <li>• Click for detailed stock information</li>
                </ul>
              </div>

              <div className="border-l-4 border-error p-3 bg-error/5">
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  🏆 <span>Sports Scores</span>
                </h4>
                <ul className="text-sm text-base-content/70 space-y-1">
                  <li>• Live game updates and final scores</li>
                  <li>• Team logos and abbreviations</li>
                  <li>• Game status (live, final, upcoming)</li>
                  <li>• Click for detailed game information</li>
                </ul>
              </div>
            </div>

            <div className="bg-base-300/50 p-3 rounded mt-4">
              <p className="text-sm text-base-content/70">
                [Stock Quote Component] - Sample stock ticker with price and
                change data
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <TvIcon className="w-6 h-6 text-primary" />
          <span className="text-lg font-semibold">
            Ticker Display {">"}{" "}
            <span className="text-base-content/70 italic">Smart Features</span>
          </span>
        </div>

        <div className="prose max-w-none mb-6">
          <p className="text-base-content/80 text-base leading-relaxed">
            The ticker includes intelligent behaviors that enhance your browsing
            experience by automatically adapting to different situations and
            website contexts.
          </p>
        </div>

        <div className="bg-base-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Intelligent Behaviors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-3">🧠 Automatic Adaptations</h4>
              <ul className="space-y-2 text-sm text-base-content/70">
                <li>
                  • <strong>Fullscreen Detection:</strong> Hides during video
                  playback
                </li>
                <li>
                  • <strong>Dark Site Adaptation:</strong> Adjusts opacity on
                  dark websites
                </li>
                <li>
                  • <strong>Scroll Awareness:</strong> Pauses during active page
                  scrolling
                </li>
                <li>
                  • <strong>Focus Management:</strong> Reduces prominence during
                  form interactions
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">⚙️ Performance Optimizations</h4>
              <ul className="space-y-2 text-sm text-base-content/70">
                <li>
                  • <strong>Efficient Rendering:</strong> Minimal impact on page
                  performance
                </li>
                <li>
                  • <strong>Smart Caching:</strong> Reduces network requests
                </li>
                <li>
                  • <strong>Battery Awareness:</strong> Adjusts update frequency
                  on low battery
                </li>
                <li>
                  • <strong>Memory Management:</strong> Automatic cleanup of old
                  content
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-primary/10 border-l-4 border-primary p-4 mt-6">
            <p className="text-sm text-base-content/70">
              <strong>🎯 Smart Integration:</strong> The ticker is designed to
              feel like a natural part of your browsing experience, not an
              intrusive overlay. It learns from your behavior and adapts to
              provide information when you need it most.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
