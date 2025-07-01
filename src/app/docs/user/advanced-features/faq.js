export const FAQ = () => (
  <div className="space-y-6">
    <div className="card bg-base-200 p-6">
      <h3 className="text-lg font-semibold mb-4">General Questions</h3>
      <div className="space-y-4">
        <div>
          <h4 className="font-medium mb-2">Q: Is Scrollr free?</h4>
          <p className="text-sm text-base-content/70">A: Yes! Scrollr is completely free to use.</p>
        </div>
        <div>
          <h4 className="font-medium mb-2">Q: Does it work on all websites?</h4>
          <p className="text-sm text-base-content/70">A: Yes, with smart exceptions for video sites and banking.</p>
        </div>
        <div>
          <h4 className="font-medium mb-2">Q: Can I sync across devices?</h4>
          <p className="text-sm text-base-content/70">A: Cloud sync is coming soon. Currently settings are per-device.</p>
        </div>
      </div>
    </div>

    <div className="card bg-base-200 p-6">
      <h3 className="text-lg font-semibold mb-4">Technical Questions</h3>
      <div className="space-y-4">
        <div>
          <h4 className="font-medium mb-2">Q: Why does it need &apos;all sites&apos; permission?</h4>
          <p className="text-sm text-base-content/70">A: To display the ticker on any webpage you visit.</p>
        </div>
        <div>
          <h4 className="font-medium mb-2">Q: Is my data private?</h4>
          <p className="text-sm text-base-content/70">A: Yes! All data is stored locally. We don&apos;t collect anything.</p>
        </div>
        <div>
          <h4 className="font-medium mb-2">Q: Does it slow down my browser?</h4>
          <p className="text-sm text-base-content/70">A: No, Scrollr is optimized for minimal resource usage.</p>
        </div>
      </div>
    </div>

    <div className="card bg-base-200 p-6">
      <h3 className="text-lg font-semibold mb-4">Troubleshooting</h3>
      <div className="space-y-4">
        <div>
          <h4 className="font-medium mb-2">Q: Ticker not showing?</h4>
          <p className="text-sm text-base-content/70">A: Check the power toggle and refresh the page.</p>
        </div>
        <div>
          <h4 className="font-medium mb-2">Q: Feeds not updating?</h4>
          <p className="text-sm text-base-content/70">A: Verify URLs are correct and site is accessible.</p>
        </div>
        <div>
          <h4 className="font-medium mb-2">Q: Stocks showing delays?</h4>
          <p className="text-sm text-base-content/70">A: Free market data may have 15-minute delays.</p>
        </div>
      </div>
    </div>
  </div>
);