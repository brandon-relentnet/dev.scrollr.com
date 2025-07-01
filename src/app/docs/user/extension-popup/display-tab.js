import { EyeIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import { NewsWidget, StockWidget, SportsWidget, RSS_EXAMPLES, STOCK_EXAMPLES, SPORTS_EXAMPLES } from '../../components';

export const DisplayTab = () => (
  <div>
    <div className="flex items-center gap-2 mb-6">
      <EyeIcon className="w-6 h-6 text-primary" />
      <span className="text-lg font-semibold">Display Tab</span>
    </div>

    <div className="grid gap-6 mb-6">
      <div className="card bg-base-200 p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          📰 RSS Feeds
          <div className="badge badge-success">Unlocked</div>
        </h3>
        <p className="text-base-content/70 mb-4">Add unlimited RSS feeds from your favorite news sources.</p>
        <NewsWidget articles={RSS_EXAMPLES} />
        <div className="flex gap-2">
          <button className="btn btn-primary btn-sm">Add Feed</button>
          <button className="btn btn-outline btn-sm">Browse Suggestions</button>
        </div>
      </div>

      <div className="card bg-base-200 p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          📈 Finance
          <div className="badge badge-success">Unlocked</div>
        </h3>
        <p className="text-base-content/70 mb-4">Track your favorite stocks with real-time quotes.</p>
        <StockWidget stocks={STOCK_EXAMPLES} />
        <div className="flex gap-2">
          <button className="btn btn-primary btn-sm">Add Symbol</button>
          <button className="btn btn-outline btn-sm">Stock Presets</button>
        </div>
      </div>

      <div className="card bg-base-200 p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          🏆 Sports
          <div className="badge badge-success">Unlocked</div>
        </h3>
        <p className="text-base-content/70 mb-4">Follow live scores from NFL, NBA, MLB, and NHL.</p>
        <SportsWidget games={SPORTS_EXAMPLES} />
        <div className="flex gap-2">
          <button className="btn btn-primary btn-sm">Add Teams</button>
          <button className="btn btn-outline btn-sm">League Settings</button>
        </div>
      </div>

      <div className="card bg-base-200 p-6 opacity-60">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          🏈 Fantasy Sports
          <div className="badge badge-warning">Premium</div>
          <LockClosedIcon className="w-4 h-4" />
        </h3>
        <p className="text-base-content/70 mb-4">Track your fantasy teams and player stats.</p>
        <div className="alert alert-warning">
          <div>
            <p>Create a Scrollr account to unlock Fantasy Sports features.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);