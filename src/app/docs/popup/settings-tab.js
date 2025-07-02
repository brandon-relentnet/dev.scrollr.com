import { CogIcon } from "@heroicons/react/24/outline";

export const SettingsTab = () => {
  return (
    <>
      <section className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <CogIcon className="w-6 h-6 text-primary" />
          <span className="text-lg font-semibold">
            Settings Tab {">"}{" "}
            <span className="text-base-content/70 italic">
              General Preferences
            </span>
          </span>
        </div>

        <div className="prose max-w-none mb-6">
          <p className="text-base-content/80 text-base leading-relaxed">
            The <strong>Settings Tab</strong> provides fine-grained control over
            how Scrollr behaves across different websites and situations.
            Customize notifications, update frequencies, and advanced
            preferences to match your workflow.
          </p>
        </div>
      </section>
    </>
  );
};
