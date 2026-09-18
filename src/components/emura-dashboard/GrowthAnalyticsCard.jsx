import React from 'react';

export default function GrowthAnalyticsCard() {
  const percentage = 87;
  const radius = 60;
  const strokeWidth = 10;
  const circumference = Math.PI * radius; // Half circle
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="bg-white rounded-3xl border border-slate-100 p-6 shadow-xs flex flex-col justify-between items-center text-center">
      {/* Header */}
      <div className="w-full flex items-center justify-between mb-2">
        <div className="text-left">
          <h4 className="text-xs font-bold text-slate-900">
            Growth Analytics
          </h4>
          <p className="text-[11px] text-slate-400 font-medium">
            Strong nutrient balance
          </p>
        </div>
      </div>

      {/* Speedometer Gauge */}
      <div className="relative flex flex-col items-center justify-center my-2">
        <svg width="180" height="100" viewBox="0 0 180 100" className="overflow-visible">
          {/* Dashed background track */}
          <path
            d="M 20 90 A 70 70 0 0 1 160 90"
            fill="transparent"
            stroke="#e2e8f0"
            strokeWidth={strokeWidth}
            strokeDasharray="4 4"
            strokeLinecap="round"
          />
          {/* Active green arc */}
          <path
            d="M 20 90 A 70 70 0 0 1 160 90"
            fill="transparent"
            stroke="#10b981"
            strokeWidth={strokeWidth}
            strokeDasharray={220}
            strokeDashoffset={220 - (percentage / 100) * 220}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
          {/* Marker dot */}
          <circle
            cx="148"
            cy="52"
            r="5"
            fill="#064e3b"
            stroke="#ffffff"
            strokeWidth="2"
          />
        </svg>

        {/* Center Text */}
        <div className="mt-[-35px] text-center">
          <span className="text-3xl font-black text-slate-900 tracking-tight block">
            {percentage}%
          </span>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            Growth Level
          </span>
        </div>
      </div>

      {/* Bottom Metrics: Max, Min, Avg */}
      <div className="flex items-center justify-between w-full pt-4 mt-2 border-t border-slate-100 text-xs">
        <div>
          <span className="font-extrabold text-slate-900">92</span>
          <span className="text-[10px] text-slate-400 ml-1">Max</span>
        </div>
        <div>
          <span className="font-extrabold text-slate-900">72</span>
          <span className="text-[10px] text-slate-400 ml-1">Min</span>
        </div>
        <div>
          <span className="font-extrabold text-slate-900">64</span>
          <span className="text-[10px] text-slate-400 ml-1">Avg</span>
        </div>
      </div>
    </div>
  );
}
