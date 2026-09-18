import React from 'react';

export default function PlantHealthScoreCard({
  score = 82,
  statusLabel = 'Good Health',
}) {
  const size = 180;
  const strokeWidth = 16;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  // Arc angle ~ 82% of circle
  const progressArc = 0.82 * circumference;
  const strokeDashoffset = circumference - progressArc;

  return (
    <div className="bg-white rounded-2xl border border-slate-200/70 p-6 shadow-xs flex flex-col justify-between items-center text-center">
      {/* Title */}
      <div className="w-full flex items-center justify-between mb-2">
        <h3 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">
          Plant Health Score
        </h3>
      </div>

      {/* Circular Gauge */}
      <div className="relative flex items-center justify-center my-3">
        <svg width={size} height={size} className="transform -rotate-90">
          {/* Background track */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#f1f5f9"
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          {/* Active progress arc */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#10b981"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
            className="transition-all duration-1000 ease-out"
          />
        </svg>

        {/* Center Labels */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <div className="flex items-baseline justify-center gap-0.5">
            <span className="text-4xl font-black text-slate-900 tracking-tight leading-none">
              {score}
            </span>
            <span className="text-xs font-semibold text-slate-400">/100</span>
          </div>
          <span className="text-xs font-bold text-emerald-600 mt-1">
            {statusLabel}
          </span>
        </div>
      </div>

      {/* 3 Metric Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mt-3 pt-3 border-t border-slate-100 w-full">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span>Vigor: High</span>
        </span>

        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-sky-50 text-sky-700 border border-sky-200/60">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
          <span>Stress: Low</span>
        </span>

        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-amber-50 text-amber-700 border border-amber-200/60">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
          <span>Disease: Med</span>
        </span>
      </div>
    </div>
  );
}
