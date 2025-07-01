export const PinnedItems = () => (
  <div className="space-y-6">
    <div className="card bg-base-200 p-6">
      <h3 className="text-lg font-semibold mb-4">How Pinning Works</h3>
      <p className="text-base-content/70">
        Pin any item to ensure it appears more frequently in your ticker rotation. 
        Pinned items get priority placement and appear multiple times per cycle.
      </p>
    </div>

    <div className="card bg-base-200 p-6">
      <h3 className="text-lg font-semibold mb-4">What to Pin</h3>
      <p className="text-base-content/70 mb-3">Consider pinning:</p>
      <ul className="space-y-1 text-sm text-base-content/70">
        <li>• Breaking news sources</li>
        <li>• Volatile stocks</li>
        <li>• Your team's games</li>
        <li>• Important feeds</li>
        <li>• Market indices</li>
      </ul>
    </div>

    <div className="card bg-base-200 p-6">
      <h3 className="text-lg font-semibold mb-4">Managing Pins</h3>
      <ul className="space-y-2 text-sm text-base-content/70">
        <li>• Click the pin icon on any item</li>
        <li>• Pinned items show a pin indicator</li>
        <li>• Unpin anytime</li>
        <li>• Set pin frequency in settings</li>
      </ul>
    </div>
  </div>
);