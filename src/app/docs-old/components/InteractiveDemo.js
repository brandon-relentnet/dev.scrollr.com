"use client";

import { useState } from 'react';
import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/24/outline";

export const InteractiveDemo = () => {
  const [demoOpacity, setDemoOpacity] = useState(0.9);
  const [demoSpeed, setDemoSpeed] = useState("medium");
  const [demoPosition, setDemoPosition] = useState("bottom");

  return (
    <div className="bg-base-200 rounded-lg p-6 my-6">
      <h4 className="font-semibold mb-4">🎮 Interactive Demo</h4>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-4">
          <div>
            <label className="label">
              <span className="label-text">Opacity: {Math.round(demoOpacity * 100)}%</span>
            </label>
            <input 
              type="range" 
              min="30" 
              max="100" 
              value={Math.round(demoOpacity * 100)}
              onChange={(e) => setDemoOpacity(e.target.value / 100)}
              className="range range-primary" 
            />
          </div>
          
          <div>
            <label className="label">
              <span className="label-text">Speed</span>
            </label>
            <div className="btn-group">
              {['slow', 'medium', 'fast'].map(speed => (
                <button 
                  key={speed}
                  className={`btn btn-sm ${demoSpeed === speed ? 'btn-primary' : 'btn-outline'}`}
                  onClick={() => setDemoSpeed(speed)}
                >
                  {speed}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <label className="label">
              <span className="label-text">Position</span>
            </label>
            <div className="btn-group">
              <button 
                className={`btn btn-sm ${demoPosition === 'top' ? 'btn-primary' : 'btn-outline'}`}
                onClick={() => setDemoPosition('top')}
              >
                <ArrowUpIcon className="w-4 h-4" /> Top
              </button>
              <button 
                className={`btn btn-sm ${demoPosition === 'bottom' ? 'btn-primary' : 'btn-outline'}`}
                onClick={() => setDemoPosition('bottom')}
              >
                <ArrowDownIcon className="w-4 h-4" /> Bottom
              </button>
            </div>
          </div>
        </div>
        
        <div className="bg-base-300 rounded-lg p-4 relative overflow-hidden min-h-[200px]">
          <div className="text-center text-sm text-base-content/60 mb-4">Webpage Preview</div>
          <div 
            className={`absolute left-0 right-0 bg-primary text-primary-content p-2 text-sm
              ${demoPosition === 'top' ? 'top-0' : 'bottom-0'}`}
            style={{ opacity: demoOpacity }}
          >
            <div className={`whitespace-nowrap ${
              demoSpeed === 'slow' ? 'animate-pulse' : 
              demoSpeed === 'fast' ? 'animate-bounce' : ''
            }`}>
              📈 AAPL +2.50 | 📰 Breaking News Update | 🏀 Lakers 108-102 | 💰 Bitcoin $45,230
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};