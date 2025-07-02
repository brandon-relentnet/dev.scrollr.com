import { SwatchIcon } from "@heroicons/react/24/solid";
import { THEMES } from "@/data/dataProvider";
import SvgIllustration from "@/components/ScrollrSVG";
import IframeApp from "@/iframe/App";

import { ThemeShowcase } from "@/components/controls/ThemeToggle";
import OpacitySlider from "@/components/controls/OpacitySlider";
import PositionToggle from "@/components/controls/PositionToggle";
import LayoutToggle from "@/components/controls/LayoutToggle";
import SpeedToggle from "@/components/controls/SpeedToggle";

export const DesignTab = () => {
  return (
    <>
      <section className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <SwatchIcon className="w-6 h-6 text-primary" />
          <span className="text-lg font-semibold">
            Design Tab {">"}{" "}
            <span className="text-base-content/70 italic">Themes</span>
          </span>
        </div>

        <div className="prose max-w-none mb-6">
          <p className="text-base-content/80 text-base leading-relaxed">
            The <strong>Design Tab</strong> is your central hub for customizing
            the visual appearance of your Scrollr ticker. This tab is split into
            two main sections: <strong>Themes</strong> and{" "}
            <strong>Preferences</strong>, giving you complete control over how
            your ticker looks and behaves on any webpage.
          </p>
        </div>

        <div className="bg-base-200 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold mb-4">Theme Selection</h3>
          <div className="prose max-w-none mb-4">
            <p className="text-base-content/70 mb-3">
              Choose from{" "}
              <strong>{THEMES.length} carefully crafted themes</strong> designed
              to complement any website or match your personal style. Each theme
              includes a harmonious color palette that affects the ticker&apos;s
              background, text, and accent colors.
            </p>
            <div className="bg-info/10 border-l-4 border-info p-4 mb-4">
              <p className="text-sm text-base-content/70">
                <strong>💡 Pro Tip:</strong> Themes automatically adapt to your
                website&apos;s content, ensuring optimal readability while
                maintaining visual appeal. Click any theme below to see the
                change instantly!
              </p>
            </div>
          </div>
          <ThemeShowcase themes={THEMES} />

          <div className="mt-6 grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-base-300/50 p-3 rounded">
              <h5 className="font-medium mb-2">🌈 Color Harmony</h5>
              <p className="text-base-content/70">
                Each theme uses scientifically balanced color combinations for
                optimal readability
              </p>
            </div>
            <div className="bg-base-300/50 p-3 rounded">
              <h5 className="font-medium mb-2">🎯 Context Aware</h5>
              <p className="text-base-content/70">
                Themes automatically adjust contrast based on underlying webpage
                content
              </p>
            </div>
            <div className="bg-base-300/50 p-3 rounded">
              <h5 className="font-medium mb-2">⚡ Instant Preview</h5>
              <p className="text-base-content/70">
                See changes immediately without needing to refresh or reload
                pages
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <SwatchIcon className="w-6 h-6 text-primary" />
          <span className="text-lg font-semibold">
            Design Tab {">"}{" "}
            <span className="text-base-content/70 italic">Preferences</span>
          </span>
        </div>

        <div className="prose max-w-none mb-6">
          <p className="text-base-content/80 text-base leading-relaxed">
            The <strong>Preferences</strong> section gives you fine-grained
            control over how your ticker appears and behaves. These settings
            work together with your chosen theme to create the perfect viewing
            experience for any website.
          </p>
        </div>

        <div className="mockup-browser border border-base-300 backdrop-blur-sm overflow-hidden w-full mb-6">
          <div className="mockup-browser-toolbar h-8">
            <div className="input">https://myscrollr.com</div>
          </div>
          <div className="relative w-full h-[40vh] flex items-center justify-center">
            <div className="max-w-4xl">
              <div className="flex justify-center mb-6">
                <SvgIllustration
                  width={100}
                  height={100}
                  className={"animate-bounce"}
                />
              </div>
            </div>
            <IframeApp isDemo={true} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 pr-2 gap-4">
          {/* Position Control */}
          <div className="bg-base-200 p-4 card">
            <PositionToggle size="sm" />
            <p className="text-sm text-base-content/70 mt-2">
              Choose whether your ticker appears at the <strong>top</strong> or{" "}
              <strong>bottom</strong> of webpages. Top positioning is great for
              news and alerts, while bottom positioning is less intrusive for
              continuous monitoring.
            </p>
          </div>

          {/* Layout Control */}
          <div className="bg-base-200 p-4 card">
            <LayoutToggle size="sm" />
            <p className="text-sm text-base-content/70 mt-2">
              Toggle between <strong>Compact</strong> (minimal height, more
              content visible) and <strong>Comfortable</strong>
              (larger text, easier reading) layouts. Compact is perfect for
              monitoring, while comfortable is ideal for detailed content
              consumption.
            </p>
          </div>

          {/* Opacity Slider */}
          <div className="bg-base-200 p-4 card">
            <OpacitySlider />
          </div>

          {/* Speed Control */}
          <div className="bg-base-200 p-4 card">
            <SpeedToggle />
            <p className="text-sm text-base-content/70 mt-2">
              Adjust how quickly content scrolls across your ticker.{" "}
              <strong>Slow</strong> is perfect for detailed reading,
              <strong>Classic</strong> provides the traditional ticker
              experience, and <strong>Fast</strong> lets you consume more
              information quickly.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
