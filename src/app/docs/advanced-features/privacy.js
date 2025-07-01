export const Privacy = () => (
  <div className="space-y-6">
    <div className="card bg-base-200 p-6">
      <h3 className="text-lg font-semibold mb-4">Our Privacy Promise</h3>
      <ul className="space-y-2 text-sm text-base-content/70">
        <li>• <strong>No tracking</strong> - We don&apos;t track your browsing</li>
        <li>• <strong>No analytics</strong> - No Google Analytics or similar</li>
        <li>• <strong>No accounts</strong> - No sign-ups required</li>
        <li>• <strong>Local storage</strong> - Everything stays on your device</li>
        <li>• <strong>No cloud</strong> - No external servers (yet)</li>
      </ul>
    </div>

    <div className="card bg-base-200 p-6">
      <h3 className="text-lg font-semibold mb-4">Data Storage</h3>
      <p className="text-base-content/70 mb-3">What we store locally:</p>
      <ul className="space-y-1 text-sm text-base-content/70">
        <li>• Your RSS feed URLs</li>
        <li>• Stock symbols you track</li>
        <li>• Display preferences</li>
        <li>• Theme settings</li>
      </ul>
      <p className="text-sm text-base-content/70 mt-3">This never leaves your browser.</p>
    </div>

    <div className="card bg-base-200 p-6">
      <h3 className="text-lg font-semibold mb-4">Permissions Explained</h3>
      <div className="space-y-3">
        <div>
          <h4 className="font-medium">All Sites Access:</h4>
          <p className="text-sm text-base-content/70">Needed to inject the ticker overlay</p>
        </div>
        <div>
          <h4 className="font-medium">Storage:</h4>
          <p className="text-sm text-base-content/70">Saves your settings locally</p>
        </div>
        <div>
          <h4 className="font-medium">Alarms:</h4>
          <p className="text-sm text-base-content/70">Refreshes content periodically</p>
        </div>
      </div>
      <p className="text-sm text-base-content/70 mt-3">That&apos;s it - no other permissions!</p>
    </div>
  </div>
);