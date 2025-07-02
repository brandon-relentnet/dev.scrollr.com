import { BoltIcon } from "@heroicons/react/24/outline";

export function Performance() {
  return (
    <>
      <section className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <BoltIcon className="w-6 h-6 text-primary" />
          <span className="text-lg font-semibold">
            Performance {">"}{" "}
            <span className="text-base-content/70 italic">
              Optimization Tips
            </span>
          </span>
        </div>

        <div className="prose max-w-none mb-6">
          <p className="text-base-content/80 text-base leading-relaxed">
            Learn how to optimize Scrollr for the best performance on your
            system. These tips will help you maintain smooth scrolling while
            minimizing browser resource usage and maximizing content update
            frequency.
          </p>
        </div>
      </section>
    </>
  );
}
