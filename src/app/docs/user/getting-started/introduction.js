import { FeatureCard } from '../../components';
import { BoltIcon, EyeIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";

export const Introduction = () => (
  <div>
    <div className="hero bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg mb-8">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">📊</h1>
          <h2 className="text-xl font-bold">Scrollr</h2>
          <p className="py-4">Transform any webpage into your personal information dashboard</p>
        </div>
      </div>
    </div>

    <div className="grid md:grid-cols-3 gap-4 mb-6">
      <FeatureCard 
        icon={BoltIcon}
        title="Real-time Updates"
        description="Get live news, stocks, and sports without switching tabs"
      />
      <FeatureCard 
        icon={EyeIcon}
        title="Non-intrusive"
        description="Subtle overlay that doesn't disrupt your browsing"
      />
      <FeatureCard 
        icon={Cog6ToothIcon}
        title="Fully Customizable"
        description="Position, speed, content, and themes - all your choice"
      />
    </div>

    <div className="bg-base-200 rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-3">How It Works</h3>
      <div className="steps steps-vertical lg:steps-horizontal">
        <div className="step step-primary">Install Extension</div>
        <div className="step step-primary">Add Content Sources</div>
        <div className="step step-primary">Customize Appearance</div>
        <div className="step">Enjoy!</div>
      </div>
    </div>
  </div>
);