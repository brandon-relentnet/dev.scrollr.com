import {
  BoltIcon,
  PlayIcon,
  ArrowUpIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/outline";
import { InteractiveDemo, FeatureCard } from "../components/constants";

export const PowerTab = () => (
  <div>
    <div className="flex items-center gap-2 mb-6">
      <BoltIcon className="w-6 h-6 text-primary" />
      <span className="text-lg font-semibold">Power Tab</span>
    </div>

    <div className="grid gap-6">
      <div className="card bg-base-200 p-6">
        <h3 className="text-lg font-semibold mb-4">Master Power Toggle</h3>
        <div className="flex items-center justify-center mb-4">
          <button className="btn btn-circle btn-lg btn-success">
            <PlayIcon className="w-8 h-8" />
          </button>
        </div>
        <p className="text-center text-base-content/70">
          One click to turn Scrollr on or off across all websites
        </p>
      </div>

      <div className="card bg-base-200 p-6">
        <h3 className="text-lg font-semibold mb-4">Quick Settings</h3>
        <InteractiveDemo />
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <FeatureCard
          icon={ArrowUpIcon}
          title="Position"
          description="Quickly switch between top and bottom placement"
        />
        <FeatureCard
          icon={BoltIcon}
          title="Speed"
          description="Adjust scrolling speed with one tap"
        />
        <FeatureCard
          icon={AdjustmentsHorizontalIcon}
          title="Height"
          description="Change ticker height for better readability"
        />
      </div>
    </div>
  </div>
);
