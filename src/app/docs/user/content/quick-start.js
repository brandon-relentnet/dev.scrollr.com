export const QuickStart = () => (
  <div className="space-y-6">
    <div className="card bg-base-200 p-6">
      <h3 className="text-lg font-semibold mb-4">Step 1: Open the Control Panel</h3>
      <p>Click the Scrollr icon in your browser toolbar. This opens the popup control panel where you manage everything.</p>
    </div>

    <div className="card bg-base-200 p-6">
      <h3 className="text-lg font-semibold mb-4">Step 2: Add Your First Feed</h3>
      <ol className="list-decimal list-inside space-y-2">
        <li>Go to the RSS tab</li>
        <li>Click "Add Feed"</li>
        <li>Try this starter feed: <code className="bg-base-300 px-2 py-1 rounded">https://feeds.bbci.co.uk/news/rss.xml</code></li>
        <li>Give it a friendly name like "BBC News"</li>
        <li>Click Save</li>
      </ol>
    </div>

    <div className="card bg-base-200 p-6">
      <h3 className="text-lg font-semibold mb-4">Step 3: Add Stock Symbols</h3>
      <ol className="list-decimal list-inside space-y-2">
        <li>Switch to the Finance tab</li>
        <li>Type a stock symbol (e.g., AAPL, GOOGL, TSLA)</li>
        <li>Press Enter or click Add</li>
        <li>Watch real-time prices appear in your ticker</li>
      </ol>
    </div>

    <div className="card bg-base-200 p-6">
      <h3 className="text-lg font-semibold mb-4">Step 4: Customize Appearance</h3>
      <ol className="list-decimal list-inside space-y-2">
        <li>Go to Settings tab</li>
        <li>Adjust ticker position (top/bottom)</li>
        <li>Set your preferred speed</li>
        <li>Fine-tune opacity for the perfect look</li>
      </ol>
    </div>

    <div className="alert alert-info">
      <p className="font-semibold">Pro Tip</p>
      <p>Start simple! Add 2-3 feeds first, then expand as you get comfortable. Too much information can be overwhelming.</p>
    </div>
  </div>
);