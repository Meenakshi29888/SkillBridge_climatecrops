import React, { useState } from 'react';

export default function CropHealthCard({ data }) {
  const [hoveredSegment, setHoveredSegment] = useState(null);

  const total = data.categories.reduce((acc, cat) => acc + cat.count, 0);

  // Calculate SVG arc parameters for donut chart
  const size = 160;
  const strokeWidth = 16;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  // Exact proportions based on the screenshot (Green dominant ~60%, Orange ~32%, Red ~8%)
  const segments = [
    { label: 'Healthy Fields', count: 42, color: '#16a34a', percent: 0.60, offsetPercent: 0 },
    { label: 'Moderate Risk', count: 26, color: '#f59e0b', percent: 0.32, offsetPercent: 0.60 },
    { label: 'Needs Attention', count: 5, color: '#ef4444', percent: 0.08, offsetPercent: 0.92 },
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm flex flex-col justify-between">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-base font-bold text-slate-900 tracking-tight">
          Crop Health Overview
        </h2>
      </div>

      {/* Donut Chart with Center Text */}
      <div className="relative flex items-center justify-center my-3">
        <svg width={size} height={size} className="transform -rotate-90">
          {segments.map((seg, idx) => {
            const strokeDasharray = `${seg.percent * circumference} ${circumference}`;
            const strokeDashoffset = -seg.offsetPercent * circumference;
            const isHovered = hoveredSegment === seg.label;

            return (
              <circle
                key={seg.label}
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="transparent"
                stroke={seg.color}
                strokeWidth={isHovered ? strokeWidth + 2 : strokeWidth}
                strokeDasharray={strokeDasharray}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="butt"
                className="transition-all duration-300 cursor-pointer"
                onMouseEnter={() => setHoveredSegment(seg.label)}
                onMouseLeave={() => setHoveredSegment(null)}
              />
            );
          })}
        </svg>

        {/* Center Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center">
          <span className="text-2xl font-black text-slate-900 leading-none mb-0.5">
            42
          </span>
          <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">
            TOTAL FIELDS
          </span>
        </div>
      </div>

      {/* Legend List */}
      <div className="space-y-2.5 mt-2 pt-2 border-t border-slate-50">
        {data.categories.map((item) => (
          <div
            key={item.label}
            onMouseEnter={() => setHoveredSegment(item.label)}
            onMouseLeave={() => setHoveredSegment(null)}
            className={`flex items-center justify-between text-xs py-0.5 px-1 rounded transition-colors cursor-pointer ${
              hoveredSegment === item.label ? 'bg-slate-50 font-semibold' : ''
            }`}
          >
            <div className="flex items-center gap-2.5">
              <span
                className="w-2.5 h-2.5 rounded-full shrink-0"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-slate-600 font-medium">{item.label}</span>
            </div>
            <span className="font-bold text-slate-900">{item.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
