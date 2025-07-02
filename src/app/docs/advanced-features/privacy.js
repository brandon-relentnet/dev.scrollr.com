import { ShieldCheckIcon } from "@heroicons/react/24/outline";

export function Privacy() {
  return (
    <>
      <section className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <ShieldCheckIcon className="w-6 h-6 text-primary" />
          <span className="text-lg font-semibold">
            Privacy {">"}{" "}
            <span className="text-base-content/70 italic">Data Protection</span>
          </span>
        </div>

        <div className="prose max-w-none mb-6">
          <p className="text-base-content/80 text-base leading-relaxed">
            Your privacy is our top priority. Learn about how Scrollr protects
            your data, what information we collect (spoiler: very little), and
            how you maintain complete control over your personal information.
          </p>
        </div>

        <div className="grid gap-6">
          <div className="bg-base-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Privacy-First Design</h3>
            <div className="prose max-w-none mb-4">
              <p className="text-base-content/70 mb-3">
                [Privacy Dashboard] - Visual breakdown of what data is stored
                locally vs. remotely, with toggles to control data collection
                and sharing preferences
              </p>
              <div className="bg-success/10 border-l-4 border-success p-4 mb-4">
                <p className="text-sm text-base-content/70">
                  <strong>🛡️ Zero Tracking:</strong> Scrollr operates entirely
                  locally. No analytics, no tracking pixels, no external data
                  collection.
                </p>
              </div>
            </div>
            <div className="text-sm text-base-content/70">
              [Data Audit Tool] - See exactly what data Scrollr has stored and
              export or delete it with one click
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <ShieldCheckIcon className="w-6 h-6 text-primary" />
          <span className="text-lg font-semibold">
            Privacy {">"}{" "}
            <span className="text-base-content/70 italic">
              Permissions & Access
            </span>
          </span>
        </div>

        <div className="prose max-w-none mb-6">
          <p className="text-base-content/80 text-base leading-relaxed">
            Understand exactly what browser permissions Scrollr requires and
            why. We believe in transparency about what access we need to
            function.
          </p>
        </div>

        <div className="grid gap-6">
          <div className="bg-base-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Required Permissions</h3>
            <div className="text-sm text-base-content/70">
              [Permission Explainer] - Interactive guide showing each browser
              permission, why it&rsquo;s needed, and what Scrollr does (and doesn&rsquo;t
              do) with that access
            </div>
          </div>

          <div className="bg-base-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Data Flow Diagram</h3>
            <div className="text-sm text-base-content/70">
              [Flow Visualization] - Visual diagram showing how data moves
              through Scrollr, from RSS feeds to your browser, with no external
              servers involved
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <ShieldCheckIcon className="w-6 h-6 text-primary" />
          <span className="text-lg font-semibold">
            Privacy {">"}{" "}
            <span className="text-base-content/70 italic">Your Rights</span>
          </span>
        </div>

        <div className="prose max-w-none mb-6">
          <p className="text-base-content/80 text-base leading-relaxed">
            You have complete control over your data in Scrollr. Learn about
            your rights and how to exercise them, from data export to complete
            deletion.
          </p>
        </div>

        <div className="grid gap-6">
          <div className="bg-base-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Data Control Center</h3>
            <div className="text-sm text-base-content/70">
              [Data Management Interface] - Central dashboard to view, export,
              modify, or delete all your Scrollr data with granular controls
            </div>
          </div>

          <div className="bg-base-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Privacy Settings</h3>
            <div className="text-sm text-base-content/70">
              [Privacy Controls] - Toggles for optional data collection, crash
              reporting, usage analytics (all opt-in only)
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
