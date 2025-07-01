import { UserCircleIcon, CheckCircleIcon, LockClosedIcon } from "@heroicons/react/24/outline";

export const AccountsTab = () => (
  <div>
    <div className="flex items-center gap-2 mb-6">
      <UserCircleIcon className="w-6 h-6 text-primary" />
      <span className="text-lg font-semibold">Accounts Tab</span>
    </div>

    <div className="grid gap-6">
      <div className="hero bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg">
        <div className="hero-content text-center">
          <div>
            <h3 className="text-xl font-bold">Create Your Scrollr Account</h3>
            <p className="py-4">Unlock premium features and sync your settings across devices</p>
            <button className="btn btn-primary">Sign Up Free</button>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="card bg-base-200 p-6">
          <h4 className="font-semibold mb-4 flex items-center gap-2">
            <CheckCircleIcon className="w-5 h-5 text-success" />
            Free Features
          </h4>
          <ul className="space-y-2 text-sm">
            <li>• Unlimited RSS feeds</li>
            <li>• Real-time stock quotes</li>
            <li>• Sports scores (4 leagues)</li>
            <li>• All themes & customization</li>
            <li>• Local settings storage</li>
          </ul>
        </div>

        <div className="card bg-base-200 p-6">
          <h4 className="font-semibold mb-4 flex items-center gap-2">
            <LockClosedIcon className="w-5 h-5 text-warning" />
            Premium Features
          </h4>
          <ul className="space-y-2 text-sm">
            <li>• Fantasy sports tracking</li>
            <li>• Advanced RSS filters</li>
            <li>• Cross-device sync</li>
            <li>• Custom themes</li>
            <li>• Priority support</li>
          </ul>
        </div>
      </div>

      <div className="card bg-success/10 border border-success/20 p-6">
        <h4 className="font-semibold text-success mb-2 flex items-center gap-2">
          🔄 Settings Sync
        </h4>
        <p className="text-sm">
          With a Scrollr account, your themes, speed, position, and content preferences 
          are automatically saved and synced across all your devices.
        </p>
      </div>
    </div>
  </div>
);