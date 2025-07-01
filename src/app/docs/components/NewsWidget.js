export const NewsWidget = ({ articles }) => (
  <div className="bg-base-200 rounded-lg p-4 my-6">
    <h4 className="font-semibold mb-3 flex items-center gap-2">
      📰 RSS Feed Preview
    </h4>
    <div className="space-y-3">
      {articles.map((article, index) => (
        <div key={index} className="bg-base-100 p-3 rounded border-l-4 border-primary">
          <h5 className="font-medium text-sm leading-tight mb-1">{article.title}</h5>
          <div className="flex justify-between text-xs text-base-content/60">
            <span>{article.source}</span>
            <span>{article.time}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);