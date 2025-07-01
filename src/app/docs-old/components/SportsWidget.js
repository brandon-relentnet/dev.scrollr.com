export const SportsWidget = ({ games }) => (
  <div className="bg-base-200 rounded-lg p-4 my-6">
    <h4 className="font-semibold mb-3 flex items-center gap-2">
      🏆 Sports Scores Preview
    </h4>
    <div className="space-y-2">
      {games.map((game, index) => (
        <div key={index} className="bg-base-100 p-3 rounded flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-lg">{game.sport}</span>
            <div>
              <div className="text-sm font-medium">{game.away} @ {game.home}</div>
              <div className="text-xs text-base-content/60">{game.quarter}</div>
            </div>
          </div>
          <div className="text-right font-bold">
            {game.awayScore} - {game.homeScore}
          </div>
        </div>
      ))}
    </div>
  </div>
);