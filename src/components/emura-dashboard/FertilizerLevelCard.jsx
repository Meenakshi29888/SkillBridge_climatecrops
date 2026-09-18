import React from 'react';

export default function FertilizerLevelCard() {
  // Equalizer bar heights & colors
  const bars = [
    { height: 40, color: 'bg-rose-500' },
    { height: 60, color: 'bg-rose-500' },
    { height: 80, color: 'bg-rose-500' },
    { height: 95, color: 'bg-orange-500' },
    { height: 75, color: 'bg-orange-500' },
    { height: 60, color: 'bg-amber-400' },
    { height: 45, color: 'bg-amber-400' },
    { height: 35, color: 'bg-yellow-300' },
    { height: 50, color: 'bg-slate-200' },
    { height: 65, color: 'bg-slate-200' },
    { height: 80, color: 'bg-slate-200' },
    { height: 90, color: 'bg-emerald-400' },
    { height: 100, color: 'bg-emerald-500' },
    { height: 85, color: 'bg-emerald-500' },
    { height: 70, color: 'bg-emerald-600' },
    { height: 55, color: 'bg-emerald-600' },
    { height: 40, color: 'bg-emerald-700' },
    { height: 25, color: 'bg-emerald-700' },
  ];

  return (
    <div className="bg-white rounded-3xl border border-slate-100 p-5 shadow-xs flex flex-col justify-between">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h4 className="text-xs font-bold text-slate-900">
            Fertilizer Application Level
          </h4>
          <p className="text-[11px] text-slate-400 font-medium">
            Current dosage intensity
          </p>
        </div>
        <span className="text-xs font-bold text-slate-800">
          Moderate - High
        </span>
      </div>

      {/* Multi-colored Equalizer Bars */}
      <div className="flex items-end justify-between gap-1.5 h-12 pt-2">
        {bars.map((bar, idx) => (
          <div
            key={idx}
            className="flex-1 flex items-end justify-center h-full group"
          >
            <div
              className={`w-full max-w-[6px] rounded-full transition-all duration-300 group-hover:opacity-80 ${bar.color}`}
              style={{ height: `${bar.height}%` }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
