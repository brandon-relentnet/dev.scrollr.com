import { Cog6ToothIcon } from "@heroicons/react/24/outline";

export const SettingsTab = () => (
  <div>
    <div className="flex items-center gap-2 mb-6">
      <Cog6ToothIcon className="w-6 h-6 text-primary" />
      <span className="text-lg font-semibold">Settings Tab</span>
    </div>

    <div className="grid gap-6">
      <div className="card bg-base-200 p-6">
        <h3 className="text-lg font-semibold mb-4">Data Management</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium mb-2">Export Data</h4>
            <p className="text-sm text-base-content/70 mb-3">
              Download all your settings, feeds, and preferences as a backup file.
            </p>
            <button className="btn btn-outline btn-sm">Export Settings</button>
          </div>
          <div>
            <h4 className="font-medium mb-2">Import Data</h4>
            <p className="text-sm text-base-content/70 mb-3">
              Restore your settings from a backup file or migrate from another device.
            </p>
            <button className="btn btn-outline btn-sm">Import Settings</button>
          </div>
        </div>
      </div>

      <div className="card bg-base-200 p-6">
        <h3 className="text-lg font-semibold mb-4">Debug Mode</h3>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Enable debug logging</span>
            <input type="checkbox" className="toggle toggle-primary" />
          </label>
        </div>
        <p className="text-sm text-base-content/70 mt-2">
          Helpful for troubleshooting issues. Logs are stored locally and never sent to servers.
        </p>
      </div>

      <div className="card bg-base-200 p-6">
        <h3 className="text-lg font-semibold mb-4">Cache Management</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <div>
              <h4 className="font-medium">Clear Feed Cache</h4>
              <p className="text-sm text-base-content/70">Remove cached RSS articles</p>
            </div>
            <button className="btn btn-outline btn-sm">Clear</button>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <h4 className="font-medium">Clear All Data</h4>
              <p className="text-sm text-base-content/70">Reset to factory defaults</p>
            </div>
            <button className="btn btn-error btn-sm">Reset</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);