import { UserCircleIcon } from "@heroicons/react/24/outline";

export const AccountsTab = () => {
  return (
    <>
      <section className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <UserCircleIcon className="w-6 h-6 text-primary" />
          <span className="text-lg font-semibold">
            Accounts Tab {">"}{" "}
            <span className="text-base-content/70 italic">Get Started</span>
          </span>
        </div>

        <div className="prose max-w-none mb-6">
          <p className="text-base-content/80 text-base leading-relaxed">
            The <strong>Accounts Tab</strong> is your gateway to enhanced
            Scrollr features. Create a free account to unlock cross-device sync,
            premium content sources, and advanced customization options that
            take your ticker experience to the next level.
          </p>
        </div>
      </section>
    </>
  );
};
