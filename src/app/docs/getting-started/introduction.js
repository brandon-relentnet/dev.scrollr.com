import { BookOpenIcon } from "@heroicons/react/24/outline";

export function Introduction() {
  return (
    <>
      <section className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <BookOpenIcon className="w-6 h-6 text-primary" />
          <span className="text-lg font-semibold">
            Introduction {">"}{" "}
            <span className="text-base-content/70 italic">
              Welcome to Scrollr
            </span>
          </span>
        </div>

        <div className="prose max-w-none mb-6">
          <p className="text-base-content/80 text-base leading-relaxed">
            Welcome to Scrollr! This introduction will help you understand what
            Scrollr is, how it works, and why it&rsquo;s the perfect solution for
            staying informed while browsing the web without constant tab
            switching.
          </p>
        </div>

        <div className="grid gap-6">
          <div className="bg-base-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">What is Scrollr?</h3>
            <div className="prose max-w-none mb-4">
              <p className="text-base-content/70 mb-3">
                [Product Demo Video] - Interactive video showing Scrollr in
                action across different websites, demonstrating the ticker
                overlay with news, stocks, and sports content flowing seamlessly
              </p>
              <div className="bg-primary/10 border-l-4 border-primary p-4 mb-4">
                <p className="text-sm text-base-content/70">
                  <strong>🎯 Core Concept:</strong> Scrollr transforms any
                  webpage into your personal information dashboard with a
                  customizable ticker overlay.
                </p>
              </div>
            </div>
            <div className="text-sm text-base-content/70">
              [Feature Highlights] - Key benefits: Real-time updates,
              customizable appearance, privacy-focused, works on any website
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <BookOpenIcon className="w-6 h-6 text-primary" />
          <span className="text-lg font-semibold">
            Introduction {">"}{" "}
            <span className="text-base-content/70 italic">How It Works</span>
          </span>
        </div>

        <div className="prose max-w-none mb-6">
          <p className="text-base-content/80 text-base leading-relaxed">
            Understanding how Scrollr works will help you get the most out of
            the extension. Learn about the technology and design principles
            behind the ticker.
          </p>
        </div>

        <div className="grid gap-6">
          <div className="bg-base-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">
              Getting Started Steps
            </h3>
            <div className="text-sm text-base-content/70">
              [Interactive Tutorial] - Step-by-step walkthrough: 1. Install
              extension → 2. Add content sources → 3. Customize appearance → 4.
              Enjoy!
            </div>
          </div>

          <div className="bg-base-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Use Cases</h3>
            <div className="text-sm text-base-content/70">
              [Scenario Examples] - Real-world use cases: &ldquo;Day trader monitoring
              stocks&rdquo;, &ldquo;News junkie staying informed&rdquo;, &ldquo;Sports fan following
              games&rdquo;, &ldquo;Professional tracking industry news&rdquo;
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <BookOpenIcon className="w-6 h-6 text-primary" />
          <span className="text-lg font-semibold">
            Introduction {">"}{" "}
            <span className="text-base-content/70 italic">Next Steps</span>
          </span>
        </div>

        <div className="prose max-w-none mb-6">
          <p className="text-base-content/80 text-base leading-relaxed">
            Ready to get started? Here&rsquo;s what to do next to begin your Scrollr
            journey.
          </p>
        </div>

        <div className="grid gap-6">
          <div className="bg-base-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Quick Navigation</h3>
            <div className="text-sm text-base-content/70">
              [Navigation Links] - Direct links to Installation Guide, Quick
              Start Tutorial, and Feature Overview with estimated time to
              complete each section
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
