import { PaintBrushIcon } from "@heroicons/react/24/solid";

export function TickerCustomization() {
  return (
    <>
      <section className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <PaintBrushIcon className="w-6 h-6 text-primary" />
          <span className="text-lg font-semibold">
            Ticker Customization{" "}
            <span className="text-base-content/70 italic">Visual Settings</span>
          </span>
        </div>

        <div className="prose max-w-none mb-6">
          <p className="text-base-content/80 text-base leading-relaxed">
            Customize your <strong>Scrollr ticker&rsquo;s appearance</strong> to
            perfectly match your browsing style and website preferences. These
            visual settings help you create the ideal balance between
            information visibility and browsing comfort.
          </p>
        </div>

        <div className="bg-base-200 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold mb-4">
            Position & Layout Control
          </h3>
          <div className="prose max-w-none mb-4">
            <p className="text-base-content/70 mb-3">
              The ticker&rsquo;s <strong>position and layout</strong> dramatically
              affect your browsing experience. Choose settings that complement
              both your workflow and the websites you visit most frequently.
            </p>
            <div className="bg-info/10 border-l-4 border-info p-4 mb-4">
              <p className="text-sm text-base-content/70">
                <strong>💡 Pro Tip:</strong> Most users prefer bottom
                positioning for general browsing, but switch to top positioning
                when actively monitoring breaking news or market updates.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-base-300/50 p-4 rounded">
              <h4 className="font-medium mb-3">🔼 Top Position</h4>
              <ul className="text-sm text-base-content/70 space-y-2">
                <li>
                  • <strong>Best for:</strong> Active monitoring and alerts
                </li>
                <li>
                  • <strong>Advantage:</strong> Immediate visibility of updates
                </li>
                <li>
                  • <strong>Works well:</strong> On bottom-heavy website layouts
                </li>
                <li>
                  • <strong>Maintains:</strong> Natural top-to-bottom reading
                  flow
                </li>
              </ul>
            </div>
            <div className="bg-base-300/50 p-4 rounded">
              <h4 className="font-medium mb-3">🔽 Bottom Position</h4>
              <ul className="text-sm text-base-content/70 space-y-2">
                <li>
                  • <strong>Best for:</strong> Background information monitoring
                </li>
                <li>
                  • <strong>Advantage:</strong> Doesn&rsquo;t interfere with site
                  navigation
                </li>
                <li>
                  • <strong>Popular choice:</strong> Default and most widely
                  used
                </li>
                <li>
                  • <strong>Flexibility:</strong> Easy to ignore when focusing
                  on content
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <div className="bg-base-300/50 p-4 rounded">
              <p className="text-sm text-base-content/70">
                [Position Toggle Component] - Interactive switch to test top vs
                bottom positioning
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <PaintBrushIcon className="w-6 h-6 text-primary" />
          <span className="text-lg font-semibold">
            Ticker Customization{" "}
            <span className="text-base-content/70 italic">Size & Opacity</span>
          </span>
        </div>

        <div className="prose max-w-none mb-6">
          <p className="text-base-content/80 text-base leading-relaxed">
            Fine-tune your ticker&rsquo;s <strong>size and transparency</strong> for
            optimal readability across different websites and lighting
            conditions. These settings work together to create the perfect
            viewing experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-base-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Size Guidelines</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-success p-3 bg-success/5">
                <h4 className="font-medium mb-2 text-success">
                  🔸 Compact Layout
                </h4>
                <ul className="text-sm text-base-content/70 space-y-1">
                  <li>
                    • <strong>Height:</strong> Minimal screen real estate usage
                  </li>
                  <li>
                    • <strong>Best for:</strong> Work environments and
                    productivity
                  </li>
                  <li>
                    • <strong>Pairs with:</strong> Slower scroll speeds for
                    readability
                  </li>
                  <li>
                    • <strong>Content fit:</strong> More items visible
                    simultaneously
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-warning p-3 bg-warning/5">
                <h4 className="font-medium mb-2 text-warning">
                  🔹 Comfortable Layout
                </h4>
                <ul className="text-sm text-base-content/70 space-y-1">
                  <li>
                    • <strong>Height:</strong> Larger text and spacing for easy
                    reading
                  </li>
                  <li>
                    • <strong>Best for:</strong> Casual browsing and
                    entertainment
                  </li>
                  <li>
                    • <strong>Accessibility:</strong> Better for users with
                    vision needs
                  </li>
                  <li>
                    • <strong>Screen size:</strong> Ideal for larger monitors
                    and displays
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-base-300/50 p-3 rounded mt-4">
              <p className="text-sm text-base-content/70">
                [Layout Toggle Component] - Switch between compact and
                comfortable layouts
              </p>
            </div>
          </div>

          <div className="bg-base-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Opacity Control</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-error p-3 bg-error/5">
                <h4 className="font-medium mb-2 text-error">
                  🔴 High Opacity (80-100%)
                </h4>
                <ul className="text-sm text-base-content/70 space-y-1">
                  <li>
                    • <strong>Visibility:</strong> Maximum readability and
                    contrast
                  </li>
                  <li>
                    • <strong>Use case:</strong> Active monitoring and important
                    updates
                  </li>
                  <li>
                    • <strong>Works best:</strong> On websites with solid,
                    simple backgrounds
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-info p-3 bg-info/5">
                <h4 className="font-medium mb-2 text-info">
                  🔵 Medium Opacity (50-70%)
                </h4>
                <ul className="text-sm text-base-content/70 space-y-1">
                  <li>
                    • <strong>Balance:</strong> Good visibility without being
                    intrusive
                  </li>
                  <li>
                    • <strong>Versatility:</strong> Works well on most website
                    designs
                  </li>
                  <li>
                    • <strong>Popular choice:</strong> Recommended starting
                    point
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-neutral p-3 bg-neutral/5">
                <h4 className="font-medium mb-2">⚪ Low Opacity (30-50%)</h4>
                <ul className="text-sm text-base-content/70 space-y-1">
                  <li>
                    • <strong>Subtlety:</strong> Minimal visual distraction
                  </li>
                  <li>
                    • <strong>Professional:</strong> Perfect for work
                    environments
                  </li>
                  <li>
                    • <strong>Background info:</strong> Passive information
                    monitoring
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-base-300/50 p-3 rounded mt-4">
              <p className="text-sm text-base-content/70">
                [Opacity Slider Component] - Interactive slider to adjust ticker
                transparency
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <PaintBrushIcon className="w-6 h-6 text-primary" />
          <span className="text-lg font-semibold">
            Ticker Customization{" "}
            <span className="text-base-content/70 italic">Best Practices</span>
          </span>
        </div>

        <div className="prose max-w-none mb-6">
          <p className="text-base-content/80 text-base leading-relaxed">
            Follow these <strong>proven customization strategies</strong> to get
            the most out of your Scrollr ticker. These recommendations are based
            on extensive user feedback and usage patterns.
          </p>
        </div>

        <div className="bg-base-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">
            Customization Strategies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-base-300/50 p-4 rounded">
              <h5 className="font-medium mb-2">🏢 Work Environment</h5>
              <ul className="text-sm text-base-content/70 space-y-1">
                <li>
                  • <strong>Position:</strong> Bottom
                </li>
                <li>
                  • <strong>Layout:</strong> Compact
                </li>
                <li>
                  • <strong>Opacity:</strong> 40-60%
                </li>
                <li>
                  • <strong>Speed:</strong> Slow to medium
                </li>
              </ul>
            </div>
            <div className="bg-base-300/50 p-4 rounded">
              <h5 className="font-medium mb-2">🏠 Casual Browsing</h5>
              <ul className="text-sm text-base-content/70 space-y-1">
                <li>
                  • <strong>Position:</strong> Bottom
                </li>
                <li>
                  • <strong>Layout:</strong> Comfortable
                </li>
                <li>
                  • <strong>Opacity:</strong> 60-80%
                </li>
                <li>
                  • <strong>Speed:</strong> Medium
                </li>
              </ul>
            </div>
            <div className="bg-base-300/50 p-4 rounded">
              <h5 className="font-medium mb-2">📊 Active Monitoring</h5>
              <ul className="text-sm text-base-content/70 space-y-1">
                <li>
                  • <strong>Position:</strong> Top
                </li>
                <li>
                  • <strong>Layout:</strong> Either
                </li>
                <li>
                  • <strong>Opacity:</strong> 80-95%
                </li>
                <li>
                  • <strong>Speed:</strong> Medium to fast
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-primary/10 border-l-4 border-primary p-4 mt-6">
            <p className="text-sm text-base-content/70">
              <strong>🎯 Pro Strategy:</strong> Create different &ldquo;profiles&rdquo; by
              remembering your preferred settings for different activities.
              Switch between work mode (subtle, compact) and entertainment mode
              (comfortable, visible) as needed.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
