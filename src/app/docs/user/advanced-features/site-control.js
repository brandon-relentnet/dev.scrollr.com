export const SiteControl = () => (
  <div className="space-y-6">
    <div className="card bg-base-200 p-6">
      <h3 className="text-lg font-semibold mb-4">Auto-Disable Rules</h3>
      <p className="text-base-content/70 mb-3">Scrollr automatically disables on:</p>
      <ul className="space-y-1 text-sm text-base-content/70">
        <li>• Video streaming sites</li>
        <li>• Online banking</li>
        <li>• Password managers</li>
        <li>• Sensitive applications</li>
      </ul>
    </div>

    <div className="card bg-base-200 p-6">
      <h3 className="text-lg font-semibold mb-4">Custom Rules</h3>
      <p className="text-base-content/70 mb-3">Create your own rules:</p>
      <ul className="space-y-1 text-sm text-base-content/70">
        <li>• Disable on specific domains</li>
        <li>• Different opacity per site</li>
        <li>• Position overrides</li>
        <li>• Speed adjustments</li>
      </ul>
    </div>

    <div className="card bg-base-200 p-6">
      <h3 className="text-lg font-semibold mb-4">Smart Detection</h3>
      <p className="text-base-content/70 mb-3">Scrollr detects:</p>
      <ul className="space-y-1 text-sm text-base-content/70">
        <li>• Full-screen mode</li>
        <li>• Video playback</li>
        <li>• Form focus</li>
        <li>• Reading mode</li>
      </ul>
      <p className="text-sm text-base-content/70 mt-3">And adjusts accordingly!</p>
    </div>
  </div>
);