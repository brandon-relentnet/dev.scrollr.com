export const FeatureCard = ({ icon: Icon, title, description, badge }) => (
  <div className="card bg-base-200 p-4">
    <div className="flex items-start gap-3">
      <div className="p-2 bg-primary/20 rounded-lg">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <h4 className="font-semibold">{title}</h4>
          {badge && <span className="badge badge-primary badge-sm">{badge}</span>}
        </div>
        <p className="text-sm text-base-content/70">{description}</p>
      </div>
    </div>
  </div>
);