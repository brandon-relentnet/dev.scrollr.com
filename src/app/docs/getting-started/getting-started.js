import { BookOpenIcon } from "@heroicons/react/24/solid";

export function GettingStarted() {
  return (
    <>
      <section className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <BookOpenIcon className="w-6 h-6 text-primary" />
          <span className="text-lg font-semibold">
            Getting Started {">"}{" "}
            <span className="text-base-content/70 italic">Overview</span>
          </span>
        </div>

        <div className="prose max-w-none mb-6">
          <p className="text-base-content/80 text-base leading-relaxed">
            Welcome to <strong>Scrollr</strong>, your personal news ticker for
            the web. This powerful browser extension transforms any webpage into
            an information dashboard by overlaying a customizable scrolling
            ticker with real-time news, stock prices, and sports scores.
          </p>
        </div>

        <div className="bg-base-200 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold mb-4">
            What Makes Scrollr Special
          </h3>
          <div className="prose max-w-none mb-4">
            <p className="text-base-content/70 mb-3">
              Unlike traditional news readers that require switching tabs or
              apps,
              <strong>Scrollr brings information directly to you</strong> while
              you browse. Whether you&rsquo;re working, shopping, or researching, stay
              informed without interrupting your workflow.
            </p>
            <div className="bg-success/10 border-l-4 border-success p-4 mb-4">
              <p className="text-sm text-base-content/70">
                <strong>✨ Key Benefits:</strong> Zero interruption to your
                browsing, real-time updates, completely customizable appearance,
                and works on every website you visit.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-base-300/50 p-3 rounded">
              <h5 className="font-medium mb-2">📰 Live News</h5>
              <p className="text-base-content/70">
                [RSS Feed Manager] - Add unlimited news sources and stay updated
              </p>
            </div>
            <div className="bg-base-300/50 p-3 rounded">
              <h5 className="font-medium mb-2">📈 Stock Tracking</h5>
              <p className="text-base-content/70">
                [Finance Ticker] - Monitor your portfolio with real-time price
                updates
              </p>
            </div>
            <div className="bg-base-300/50 p-3 rounded">
              <h5 className="font-medium mb-2">🏆 Sports Scores</h5>
              <p className="text-base-content/70">
                [Sports Widget] - Follow your favorite teams with live game
                updates
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <BookOpenIcon className="w-6 h-6 text-primary" />
          <span className="text-lg font-semibold">
            Getting Started {">"}{" "}
            <span className="text-base-content/70 italic">Installation</span>
          </span>
        </div>

        <div className="prose max-w-none mb-6">
          <p className="text-base-content/80 text-base leading-relaxed">
            Installing Scrollr takes less than a minute and requires no
            technical knowledge. The extension is lightweight, secure, and
            designed to have minimal impact on your browser&rsquo;s performance.
          </p>
        </div>

        <div className="bg-base-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Installation Steps</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="bg-primary text-primary-content rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div className="flex-1">
                <h4 className="font-medium mb-2">Visit the Extension Store</h4>
                <p className="text-sm text-base-content/70 mb-2">
                  Go to the Chrome Web Store, Firefox Add-ons, or Edge Add-ons
                  depending on your browser.
                </p>
                <div className="bg-base-300/50 p-3 rounded">
                  <p className="text-xs text-base-content/70">
                    [Store Links] - Direct links to Scrollr in each browser&rsquo;s
                    extension store
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary text-primary-content rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div className="flex-1">
                <h4 className="font-medium mb-2">Add to Browser</h4>
                <p className="text-sm text-base-content/70 mb-2">
                  Click &ldquo;Add to Chrome/Firefox/Edge&rdquo; and confirm the
                  installation. Scrollr requests minimal permissions for optimal
                  security.
                </p>
                <div className="bg-info/10 border-l-4 border-info p-3">
                  <p className="text-xs text-base-content/70">
                    <strong>Privacy Note:</strong> Scrollr only accesses webpage
                    content to position the ticker. No personal data is
                    collected or transmitted.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary text-primary-content rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div className="flex-1">
                <h4 className="font-medium mb-2">Start Using</h4>
                <p className="text-sm text-base-content/70 mb-2">
                  Look for the Scrollr icon in your browser toolbar. Click it to
                  open the control panel and begin customizing your ticker.
                </p>
                <div className="bg-success/10 border-l-4 border-success p-3">
                  <p className="text-xs text-base-content/70">
                    <strong>✅ Ready to Go:</strong> Your ticker is now active
                    on every webpage you visit. Time to add some content!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <BookOpenIcon className="w-6 h-6 text-primary" />
          <span className="text-lg font-semibold">
            Getting Started {">"}{" "}
            <span className="text-base-content/70 italic">First Steps</span>
          </span>
        </div>

        <div className="prose max-w-none mb-6">
          <p className="text-base-content/80 text-base leading-relaxed">
            Now that Scrollr is installed, let&rsquo;s get you up and running with
            your first content sources. We recommend starting simple with one
            news feed and a few stock symbols before expanding your ticker.
          </p>
        </div>

        <div className="bg-base-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Your First 5 Minutes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-3 flex items-center gap-2">
                🔴 <span>Essential Setup</span>
              </h4>
              <ul className="space-y-2 text-sm text-base-content/70">
                <li>• Click the Scrollr icon to open controls</li>
                <li>• Add one news feed (we suggest BBC or Reuters)</li>
                <li>• Add 2-3 stock symbols you follow</li>
                <li>• Choose your preferred ticker position</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3 flex items-center gap-2">
                🔵 <span>Advanced Features</span>
              </h4>
              <ul className="space-y-2 text-sm text-base-content/70">
                <li>• Explore theme options for visual appeal</li>
                <li>• Adjust speed and opacity settings</li>
                <li>• Set up sports team tracking</li>
                <li>• Configure keyboard shortcuts</li>
              </ul>
            </div>
          </div>

          <div className="bg-warning/10 border-l-4 border-warning p-4 mt-6">
            <p className="text-sm text-base-content/70">
              <strong>💡 Getting Started Tip:</strong> Don&rsquo;t try to add
              everything at once! Start with 2-3 content sources, use Scrollr
              for a day, then gradually add more feeds and customize settings
              based on your preferences.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
