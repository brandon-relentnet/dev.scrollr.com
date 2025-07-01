export const TickerCustomization = () => (
  <div className="space-y-6">
    <div className="card bg-base-200 p-6">
      <h3 className="text-lg font-semibold mb-4">Position Options</h3>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <h4 className="font-medium mb-2">Top Position</h4>
          <ul className="text-sm text-base-content/70 space-y-1">
            <li>• Good for bottom-heavy websites</li>
            <li>• Keeps navigation bars accessible</li>
            <li>• Natural reading flow</li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-2">Bottom Position</h4>
          <ul className="text-sm text-base-content/70 space-y-1">
            <li>• Default and most popular</li>
            <li>• Doesn&apos;t interfere with headers</li>
            <li>• Easy to ignore when needed</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="card bg-base-200 p-6">
      <h3 className="text-lg font-semibold mb-4">Size Guidelines</h3>
      <div className="space-y-4">
        <div>
          <h4 className="font-medium mb-2">Small Size</h4>
          <ul className="text-sm text-base-content/70 space-y-1">
            <li>• Minimal screen usage</li>
            <li>• Good for work environments</li>
            <li>• Best with slower speeds</li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-2">Medium Size</h4>
          <ul className="text-sm text-base-content/70 space-y-1">
            <li>• Balanced readability</li>
            <li>• Default recommendation</li>
            <li>• Works with all content</li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-2">Large Size</h4>
          <ul className="text-sm text-base-content/70 space-y-1">
            <li>• Easy reading</li>
            <li>• Good for vision needs</li>
            <li>• Best on larger screens</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="card bg-base-200 p-6">
      <h3 className="text-lg font-semibold mb-4">Opacity Tips</h3>
      <div className="space-y-4">
        <div>
          <h4 className="font-medium mb-2">High Opacity (80-100%)</h4>
          <ul className="text-sm text-base-content/70 space-y-1">
            <li>• Maximum readability</li>
            <li>• Good for active monitoring</li>
            <li>• Best on solid backgrounds</li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-2">Medium Opacity (50-70%)</h4>
          <ul className="text-sm text-base-content/70 space-y-1">
            <li>• Balanced visibility</li>
            <li>• Less distracting</li>
            <li>• Works on most sites</li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-2">Low Opacity (30-50%)</h4>
          <ul className="text-sm text-base-content/70 space-y-1">
            <li>• Subtle presence</li>
            <li>• Minimal distraction</li>
            <li>• Good for work</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);