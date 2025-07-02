import { BoltIcon } from "@heroicons/react/24/outline";

export const PowerTab = () => {
  return (
    <>
      <section className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <BoltIcon className="w-6 h-6 text-primary" />
          <span className="text-lg font-semibold">
            Power Tab {">"}{" "}
            <span className="text-base-content/70 italic">
              Extension Control
            </span>
          </span>
        </div>

        <div className="prose max-w-none mb-6">
          <p className="text-base-content/80 text-base leading-relaxed">
            The <strong>Power Tab</strong> gives you complete control over when
            and how Scrollr operates. Instantly toggle the extension on or off,
            and quickly adjust core settings without diving deep into
            configuration menus.
          </p>
        </div>
      </section>
    </>
  );
};
