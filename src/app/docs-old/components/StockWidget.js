export const StockWidget = ({ stocks }) => (
  <div className="bg-base-200 rounded-lg p-4 my-6">
    <h4 className="font-semibold mb-3 flex items-center gap-2">
      📈 Stock Ticker Preview
    </h4>
    <div className="space-y-2">
      {stocks.map((stock) => (
        <div key={stock.symbol} className="flex items-center justify-between bg-base-100 p-3 rounded">
          <div>
            <span className="font-bold">{stock.symbol}</span>
            <span className="text-sm text-base-content/70 ml-2">{stock.name}</span>
          </div>
          <div className="text-right">
            <div className="font-semibold">{stock.price}</div>
            <div className={`text-sm ${stock.positive ? 'text-success' : 'text-error'}`}>
              {stock.change} ({stock.percent})
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);