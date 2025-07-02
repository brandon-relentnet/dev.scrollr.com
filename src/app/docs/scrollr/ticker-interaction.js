import { CursorArrowRaysIcon } from "@heroicons/react/24/solid";

export function TickerInteraction() {
  return (
    <>
      <section className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <CursorArrowRaysIcon className="w-6 h-6 text-primary" />
          <span className="text-lg font-semibold">
            Ticker Interaction {">"}{" "}
            <span className="text-base-content/70 italic">User Controls</span>
          </span>
        </div>

        <div className="prose max-w-none mb-6">
          <p className="text-base-content/80 text-base leading-relaxed">
            Interacting with your <strong>Scrollr ticker</strong> is intuitive
            and responsive. The ticker responds to both mouse and keyboard
            inputs, giving you complete control over your information
            consumption experience.
          </p>
        </div>

        <div className="bg-base-200 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold mb-4">Mouse Interactions</h3>
          <div className="prose max-w-none mb-4">
            <p className="text-base-content/70 mb-3">
              The ticker is designed for{" "}
              <strong>natural mouse interactions</strong>
              that feel intuitive. These controls work consistently across all
              content types and don&rsquo;t require any special setup or
              configuration.
            </p>
            <div className="bg-info/10 border-l-4 border-info p-4 mb-4">
              <p className="text-sm text-base-content/70">
                <strong>💡 Pro Tip:</strong> The ticker&rsquo;s hover detection is
                intelligent - it distinguishes between intentional hovering (to
                read) and accidental mouse movement, preventing unnecessary
                interruptions.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-base-300/50 p-4 rounded">
              <h4 className="font-medium mb-3 flex items-center gap-2">
                ⏸️ <span>Hover to Pause</span>
              </h4>
              <p className="text-sm text-base-content/70 mb-3">
                Move your mouse over the ticker to{" "}
                <strong>instantly pause scrolling</strong>. Perfect for reading
                longer headlines, stock details, or sports scores without losing
                your place.
              </p>
              <ul className="text-xs text-base-content/60 space-y-1">
                <li>• Instant response with no delay</li>
                <li>• Visual feedback shows paused state</li>
                <li>• Auto-resumes when mouse moves away</li>
              </ul>
            </div>

            <div className="bg-base-300/50 p-4 rounded">
              <h4 className="font-medium mb-3 flex items-center gap-2">
                🔗 <span>Click for Details</span>
              </h4>
              <p className="text-sm text-base-content/70 mb-3">
                Click any ticker item to{" "}
                <strong>open detailed information</strong>
                in a new tab. Each content type opens its most relevant
                destination.
              </p>
              <ul className="text-xs text-base-content/60 space-y-1">
                <li>
                  • <strong>News:</strong> Full article on source website
                </li>
                <li>
                  • <strong>Stocks:</strong> Detailed quote and charts
                </li>
                <li>
                  • <strong>Sports:</strong> Game details and statistics
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-base-300/50 p-3 rounded mt-4">
            <p className="text-sm text-base-content/70">
              [Interactive Demo] - Mouse hover and click demonstrations
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <CursorArrowRaysIcon className="w-6 h-6 text-primary" />
          <span className="text-lg font-semibold">
            Ticker Interaction {">"}{" "}
            <span className="text-base-content/70 italic">
              Keyboard Shortcuts
            </span>
          </span>
        </div>

        <div className="prose max-w-none mb-6">
          <p className="text-base-content/80 text-base leading-relaxed">
            Power users will appreciate the <strong>keyboard shortcuts</strong>{" "}
            that provide quick access to ticker controls without reaching for
            the mouse. These shortcuts work from any webpage when Scrollr is
            active.
          </p>
        </div>

        <div className="bg-base-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Available Shortcuts</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-base-300/50 p-4 rounded">
                <div className="flex justify-between items-center mb-2">
                  <code className="bg-base-100 px-3 py-1 rounded font-mono text-sm border">
                    Alt + S
                  </code>
                  <span className="text-sm font-medium">Toggle Scrollr</span>
                </div>
                <p className="text-xs text-base-content/70">
                  Instantly turn the entire ticker on or off from any webpage.
                  Perfect for presentations or when you need distraction-free
                  browsing.
                </p>
              </div>

              <div className="bg-base-300/50 p-4 rounded">
                <div className="flex justify-between items-center mb-2">
                  <code className="bg-base-100 px-3 py-1 rounded font-mono text-sm border">
                    Space
                  </code>
                  <span className="text-sm font-medium">Pause/Resume</span>
                </div>
                <p className="text-xs text-base-content/70">
                  Pause or resume ticker scrolling when the ticker is focused.
                  Useful for taking time to read content without using the
                  mouse.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-base-300/50 p-4 rounded">
                <div className="flex justify-between items-center mb-2">
                  <code className="bg-base-100 px-3 py-1 rounded font-mono text-sm border">
                    ← / →
                  </code>
                  <span className="text-sm font-medium">Manual Scroll</span>
                </div>
                <p className="text-xs text-base-content/70">
                  Manually control ticker scrolling direction when paused or
                  focused. Great for reviewing content you missed or moving
                  ahead quickly.
                </p>
              </div>

              <div className="bg-base-300/50 p-4 rounded">
                <div className="flex justify-between items-center mb-2">
                  <code className="bg-base-100 px-3 py-1 rounded font-mono text-sm border">
                    Esc
                  </code>
                  <span className="text-sm font-medium">Close Panels</span>
                </div>
                <p className="text-xs text-base-content/70">
                  Close any open Scrollr panels or dialogs and return focus to
                  the main webpage. Standard escape behavior for clean
                  navigation.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-warning/10 border-l-4 border-warning p-4 mt-6">
            <p className="text-sm text-base-content/70">
              <strong>⚠️ Browser Note:</strong> Some shortcuts may conflict with
              browser or webpage shortcuts. If you experience conflicts, you can
              customize shortcut keys in the Scrollr settings panel.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <CursorArrowRaysIcon className="w-6 h-6 text-primary" />
          <span className="text-lg font-semibold">
            Ticker Interaction {">"}{" "}
            <span className="text-base-content/70 italic">Smart Behaviors</span>
          </span>
        </div>

        <div className="prose max-w-none mb-6">
          <p className="text-base-content/80 text-base leading-relaxed">
            Beyond manual controls, the ticker includes{" "}
            <strong>intelligent automatic behaviors</strong> that enhance your
            browsing experience by adapting to different situations without
            requiring your input.
          </p>
        </div>

        <div className="bg-base-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Automatic Adaptations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-3">🎥 Media Awareness</h4>
              <ul className="space-y-2 text-sm text-base-content/70">
                <li>
                  • <strong>Fullscreen Videos:</strong> Automatically hides
                  during video playback
                </li>
                <li>
                  • <strong>Media Controls:</strong> Pauses when you&rsquo;re
                  adjusting volume or playback
                </li>
                <li>
                  • <strong>Streaming Detection:</strong> Reduces prominence
                  during live streams
                </li>
                <li>
                  • <strong>Audio Cues:</strong> Minimizes during audio/video
                  conferences
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-3">🌌 Website Adaptation</h4>
              <ul className="space-y-2 text-sm text-base-content/70">
                <li>
                  • <strong>Dark Themes:</strong> Adjusts opacity on dark
                  websites automatically
                </li>
                <li>
                  • <strong>Busy Layouts:</strong> Increases contrast on complex
                  page designs
                </li>
                <li>
                  • <strong>Mobile Detection:</strong> Adapts size and position
                  on mobile viewports
                </li>
                <li>
                  • <strong>Accessibility:</strong> Respects user&rsquo;s motion and
                  animation preferences
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-base-300/50 p-4 rounded mt-6">
            <h4 className="font-medium mb-3">⚙️ Interaction Intelligence</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <strong>Form Focus:</strong>
                <p className="text-base-content/70 text-xs mt-1">
                  Reduces prominence when you&rsquo;re filling out forms or typing
                </p>
              </div>
              <div>
                <strong>Scroll Sync:</strong>
                <p className="text-base-content/70 text-xs mt-1">
                  Pauses during active page scrolling to avoid distraction
                </p>
              </div>
              <div>
                <strong>Tab Switching:</strong>
                <p className="text-base-content/70 text-xs mt-1">
                  Remembers state when switching between browser tabs
                </p>
              </div>
            </div>
          </div>

          <div className="bg-success/10 border-l-4 border-success p-4 mt-6">
            <p className="text-sm text-base-content/70">
              <strong>✨ Smart Integration:</strong> These behaviors work
              together to make the ticker feel like a natural part of your
              browsing experience rather than an intrusive overlay. The ticker
              learns from your usage patterns and becomes less obtrusive over
              time.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
