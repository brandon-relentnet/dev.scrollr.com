export const TickerInteraction = () => (
  <div className="space-y-6">
    <div className="card bg-base-200 p-6">
      <h3 className="text-lg font-semibold mb-4">Mouse Controls</h3>
      <div className="space-y-4">
        <div>
          <h4 className="font-medium mb-2">Hover to Pause</h4>
          <p className="text-sm text-base-content/70">
            Move your mouse over the ticker to pause scrolling. Perfect for reading longer headlines.
          </p>
        </div>
        <div>
          <h4 className="font-medium mb-2">Click for Details</h4>
          <ul className="text-sm text-base-content/70 space-y-1">
            <li>• News items → Opens article</li>
            <li>• Stocks → Shows detailed quote</li>
            <li>• Sports → Game details</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="card bg-base-200 p-6">
      <h3 className="text-lg font-semibold mb-4">Keyboard Shortcuts</h3>
      <div className="space-y-2">
        <div className="flex justify-between">
          <code className="bg-base-300 px-2 py-1 rounded">Alt+S</code>
          <span className="text-sm">Toggle Scrollr on/off</span>
        </div>
        <div className="flex justify-between">
          <code className="bg-base-300 px-2 py-1 rounded">Space</code>
          <span className="text-sm">Pause/resume (when focused)</span>
        </div>
        <div className="flex justify-between">
          <code className="bg-base-300 px-2 py-1 rounded">←/→</code>
          <span className="text-sm">Manual scroll control</span>
        </div>
        <div className="flex justify-between">
          <code className="bg-base-300 px-2 py-1 rounded">Esc</code>
          <span className="text-sm">Close any open panels</span>
        </div>
      </div>
    </div>

    <div className="card bg-base-200 p-6">
      <h3 className="text-lg font-semibold mb-4">Smart Behaviors</h3>
      <p className="text-sm text-base-content/70">The ticker automatically:</p>
      <ul className="mt-2 space-y-1 text-sm text-base-content/70">
        <li>• Hides on fullscreen videos</li>
        <li>• Reduces opacity on dark sites</li>
        <li>• Pauses during important interactions</li>
        <li>• Resumes when you're ready</li>
      </ul>
    </div>
  </div>
);