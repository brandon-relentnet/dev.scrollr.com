import { CloudArrowDownIcon } from "@heroicons/react/24/outline";

export function Installation() {
  return (
    <>
      <section className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <CloudArrowDownIcon className="w-6 h-6 text-primary" />
          <span className="text-lg font-semibold">
            Installation {">"}{" "}
            <span className="text-base-content/70 italic">Browser Setup</span>
          </span>
        </div>

        <div className="prose max-w-none mb-6">
          <p className="text-base-content/80 text-base leading-relaxed">
            Installing Scrollr is quick and easy. Follow the step-by-step
            instructions for your browser to get the extension up and running in
            minutes.
          </p>
        </div>

        <div className="grid gap-6">
          <div className="bg-base-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Chrome Installation</h3>
            <div className="prose max-w-none mb-4">
              <p className="text-base-content/70 mb-3">
                [Chrome Web Store Integration] - Direct link to Chrome Web Store
                listing with install button, screenshots, reviews, and version
                information
              </p>
              <div className="bg-success/10 border-l-4 border-success p-4 mb-4">
                <p className="text-sm text-base-content/70">
                  <strong>✅ Verified Publisher:</strong> Scrollr is published
                  by a verified developer and regularly updated for security and
                  compatibility.
                </p>
              </div>
            </div>
            <div className="text-sm text-base-content/70">
              [Installation Steps] - Visual guide: Open Chrome Web Store →
              Search &ldquo;Scrollr&rdquo; → Click &ldquo;Add to Chrome&rdquo; → Grant permissions →
              Done!
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <CloudArrowDownIcon className="w-6 h-6 text-primary" />
          <span className="text-lg font-semibold">
            Installation {">"}{" "}
            <span className="text-base-content/70 italic">Other Browsers</span>
          </span>
        </div>

        <div className="prose max-w-none mb-6">
          <p className="text-base-content/80 text-base leading-relaxed">
            Scrollr supports multiple browsers. Choose your preferred browser
            for detailed installation instructions.
          </p>
        </div>

        <div className="grid gap-6">
          <div className="bg-base-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Firefox Installation</h3>
            <div className="text-sm text-base-content/70">
              [Firefox Add-ons Store] - Installation process for Firefox users
              with specific permission explanations and Firefox-specific
              features
            </div>
          </div>

          <div className="bg-base-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Edge Installation</h3>
            <div className="text-sm text-base-content/70">
              [Microsoft Edge Add-ons] - Step-by-step guide for Edge browser
              installation and Edge-specific settings optimization
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <CloudArrowDownIcon className="w-6 h-6 text-primary" />
          <span className="text-lg font-semibold">
            Installation {">"}{" "}
            <span className="text-base-content/70 italic">Verification</span>
          </span>
        </div>

        <div className="prose max-w-none mb-6">
          <p className="text-base-content/80 text-base leading-relaxed">
            Verify that Scrollr installed correctly and is ready to use.
          </p>
        </div>

        <div className="grid gap-6">
          <div className="bg-base-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Installation Check</h3>
            <div className="text-sm text-base-content/70">
              [Verification Tool] - Automated check to ensure extension is
              properly installed, has correct permissions, and is communicating
              with content scripts
            </div>
          </div>

          <div className="bg-base-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Troubleshooting</h3>
            <div className="text-sm text-base-content/70">
              [Common Issues] - Solutions for installation problems like
              permission errors, compatibility issues, or corporate firewall
              restrictions
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
