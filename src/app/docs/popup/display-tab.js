import { EyeIcon } from "@heroicons/react/24/outline";

export const DisplayTab = () => {
  return (
    <>
      <section className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <EyeIcon className="w-6 h-6 text-primary" />
          <span className="text-lg font-semibold">
            Display Tab {">"}{" "}
            <span className="text-base-content/70 italic">Content Sources</span>
          </span>
        </div>

        <div className="prose max-w-none mb-6">
          <p className="text-base-content/80 text-base leading-relaxed">
            The <strong>Display Tab</strong> is where you manage all your
            content sources. Choose from news feeds, financial data, sports
            scores, and premium features to create your personalized information
            stream.
          </p>
        </div>
      </section>
    </>
  );
};
