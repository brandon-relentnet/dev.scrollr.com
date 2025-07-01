export const Performance = () => (
  <div className="space-y-6">
    <div className="card bg-base-200 p-6">
      <h3 className="text-lg font-semibold mb-4">Best Practices</h3>
      <ul className="space-y-2 text-sm text-base-content/70">
        <li>• Limit feeds to 10-15 for best performance</li>
        <li>• Remove inactive feeds</li>
        <li>• Use reasonable refresh intervals</li>
        <li>• Disable on heavy sites</li>
      </ul>
    </div>

    <div className="card bg-base-200 p-6">
      <h3 className="text-lg font-semibold mb-4">Troubleshooting</h3>
      <div className="space-y-4">
        <div>
          <h4 className="font-medium mb-2">Ticker stuttering?</h4>
          <ul className="text-sm text-base-content/70 space-y-1">
            <li>• Reduce number of items</li>
            <li>• Lower scroll speed</li>
            <li>• Check CPU usage</li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-2">Not updating?</h4>
          <ul className="text-sm text-base-content/70 space-y-1">
            <li>• Check internet connection</li>
            <li>• Verify feed URLs</li>
            <li>• Clear cache</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="card bg-base-200 p-6">
      <h3 className="text-lg font-semibold mb-4">Resource Usage</h3>
      <p className="text-base-content/70 mb-3">Scrollr is designed to be lightweight:</p>
      <ul className="space-y-1 text-sm text-base-content/70">
        <li>• Minimal CPU usage</li>
        <li>• Efficient memory management</li>
        <li>• Smart content caching</li>
        <li>• Throttled updates</li>
      </ul>
    </div>
  </div>
);