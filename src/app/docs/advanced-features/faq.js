import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

export function FAQ() {
  return (
    <>
      <section className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <QuestionMarkCircleIcon className="w-6 h-6 text-primary" />
          <span className="text-lg font-semibold">
            FAQ {">"}{" "}
            <span className="text-base-content/70 italic">
              Common Questions
            </span>
          </span>
        </div>

        <div className="prose max-w-none mb-6">
          <p className="text-base-content/80 text-base leading-relaxed">
            Find answers to the most frequently asked questions about Scrollr.
            This section covers common troubleshooting, feature explanations,
            and helpful tips for getting the most out of your ticker experience.
          </p>
        </div>

        <div className="grid gap-6">
          <div className="bg-base-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">General Usage</h3>
            <div className="prose max-w-none mb-4">
              <p className="text-base-content/70 mb-3">
                [FAQ Component] - Expandable accordion with questions like: &ldquo;How
                do I add RSS feeds?&rdquo;, &ldquo;Why isn&rsquo;t my ticker showing?&rdquo;, &ldquo;Can I
                customize the colors?&rdquo;, etc.
              </p>
              <div className="bg-info/10 border-l-4 border-info p-4 mb-4">
                <p className="text-sm text-base-content/70">
                  <strong>💡 Quick Tip:</strong> Most issues can be resolved by
                  checking if Scrollr is enabled and the website isn&rsquo;t on your
                  blocked list.
                </p>
              </div>
            </div>
            <div className="text-sm text-base-content/70">
              [Search Component] - FAQ search bar to filter questions by
              keywords
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <QuestionMarkCircleIcon className="w-6 h-6 text-primary" />
          <span className="text-lg font-semibold">
            FAQ {">"}{" "}
            <span className="text-base-content/70 italic">Troubleshooting</span>
          </span>
        </div>

        <div className="prose max-w-none mb-6">
          <p className="text-base-content/80 text-base leading-relaxed">
            Step-by-step solutions for common technical issues and compatibility
            problems.
          </p>
        </div>

        <div className="grid gap-6">
          <div className="bg-base-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Performance Issues</h3>
            <div className="text-sm text-base-content/70">
              [Troubleshooting Guide] - Common performance problems and
              solutions: &ldquo;Ticker is lagging&rdquo;, &ldquo;High CPU usage&rdquo;, &ldquo;Memory leaks&rdquo;,
              browser compatibility issues
            </div>
          </div>

          <div className="bg-base-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Content Not Loading</h3>
            <div className="text-sm text-base-content/70">
              [Diagnostic Steps] - RSS feed validation, network connectivity
              checks, CORS issues, invalid feed URLs, rate limiting explanations
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <QuestionMarkCircleIcon className="w-6 h-6 text-primary" />
          <span className="text-lg font-semibold">
            FAQ {">"}{" "}
            <span className="text-base-content/70 italic">
              Feature Requests
            </span>
          </span>
        </div>

        <div className="prose max-w-none mb-6">
          <p className="text-base-content/80 text-base leading-relaxed">
            Popular feature requests and their current status in our development
            roadmap.
          </p>
        </div>

        <div className="grid gap-6">
          <div className="bg-base-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Planned Features</h3>
            <div className="text-sm text-base-content/70">
              [Roadmap Component] - Upcoming features like mobile app, custom
              themes, API integrations, advanced filtering options
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
