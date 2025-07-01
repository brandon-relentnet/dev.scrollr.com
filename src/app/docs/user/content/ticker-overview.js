import { InteractiveDemo, FeatureCard } from '../../components';
import { PlayIcon, PauseIcon, WindowIcon } from "@heroicons/react/24/outline";

export const TickerOverview = () => (
  <div>
    <InteractiveDemo />
    
    <div className="grid md:grid-cols-3 gap-4 mb-6">
      <FeatureCard 
        icon={PlayIcon}
        title="Auto-scroll"
        description="Smooth horizontal scrolling from right to left"
      />
      <FeatureCard 
        icon={PauseIcon}
        title="Hover to Pause"
        description="Pauses when you move mouse over ticker"
      />
      <FeatureCard 
        icon={WindowIcon}
        title="Click for Details"
        description="Click any item to open full article or details"
      />
    </div>

    <div className="bg-base-200 rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-4">Content Types in Ticker</h3>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-medium mb-2">📰 News Headlines</h4>
          <p className="text-sm text-base-content/70">RSS feed articles with source and timestamp</p>
        </div>
        <div>
          <h4 className="font-medium mb-2">📈 Stock Quotes</h4>
          <p className="text-sm text-base-content/70">Real-time prices with color-coded changes</p>
        </div>
        <div>
          <h4 className="font-medium mb-2">🏆 Sports Scores</h4>
          <p className="text-sm text-base-content/70">Live game updates with team logos</p>
        </div>
        <div>
          <h4 className="font-medium mb-2">⭐ Pinned Items</h4>
          <p className="text-sm text-base-content/70">Important content shown more frequently</p>
        </div>
      </div>
    </div>
  </div>
);