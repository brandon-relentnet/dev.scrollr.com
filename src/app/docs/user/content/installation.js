export const Installation = () => (
  <div>
    <div className="grid md:grid-cols-2 gap-6 mb-6">
      <div className="card bg-base-200 p-6">
        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
          <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJMMTMuMDkgOC4yNkwyMCA5TDEzLjA5IDE1Ljc0TDEyIDIyTDEwLjkxIDE1Ljc0TDQgOUwxMC45MSA4LjI2TDEyIDJaIiBmaWxsPSIjNEI5MEU1Ii8+Cjwvc3ZnPgo=" alt="Chrome" className="w-6 h-6" />
          Chrome Installation
        </h3>
        <ol className="steps steps-vertical">
          <li className="step">Visit Chrome Web Store</li>
          <li className="step">Search for "Scrollr"</li>
          <li className="step">Click "Add to Chrome"</li>
          <li className="step">Confirm installation</li>
          <li className="step">Look for icon in toolbar</li>
        </ol>
        <div className="mt-4">
          <button className="btn btn-primary btn-sm">
            Install from Chrome Store
          </button>
        </div>
      </div>

      <div className="card bg-base-200 p-6">
        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
          <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyUzYuNDggMjIgMTIgMjIgMjIgMTcuNTIgMjIgMTJTMTcuNTIgMiAxMiAyWiIgZmlsbD0iI0ZGNTcyMiIvPgo8L3N2Zz4K" alt="Firefox" className="w-6 h-6" />
          Firefox Installation
        </h3>
        <ol className="steps steps-vertical">
          <li className="step">Visit Firefox Add-ons</li>
          <li className="step">Search for "Scrollr"</li>
          <li className="step">Click "Add to Firefox"</li>
          <li className="step">Grant permissions</li>
          <li className="step">Find in toolbar</li>
        </ol>
        <div className="mt-4">
          <button className="btn btn-secondary btn-sm">
            Install from Firefox Store
          </button>
        </div>
      </div>
    </div>

    <div className="alert alert-info">
      <div>
        <h4 className="font-bold">Why does Scrollr need permissions?</h4>
        <p className="text-sm">• <strong>All sites</strong> - To display the ticker on any webpage<br/>
        • <strong>Storage</strong> - To save your preferences locally<br/>
        • <strong>Alarms</strong> - To refresh content periodically</p>
      </div>
    </div>
  </div>
);