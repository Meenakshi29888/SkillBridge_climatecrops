import React, { useState } from 'react';
import { ShieldCheck, Activity, AlertTriangle, CheckCircle2 } from 'lucide-react';

export default function CropHealthCard({ data }) {
  const [hoveredSegment, setHoveredSegment] = useState(null);

  // Exact proportions based on 42 parcels + 26 moderate + 5 attention = 73 total plots
  const total = 73;
  const segments = [
    { label: 'Healthy Vigour', count: 42, color: '#10b981', percent: 0.58, offsetPercent: 0, sub: 'Optimal NDVI > 0.75' },
    { label: 'Moderate Risk', count: 26, color: '#f59e0b', percent: 0.35, offsetPercent: 0.58, sub: 'NDVI 0.55 - 0.75' },
    { label: 'Needs Attention', count: 5, color: '#f43f5e', percent: 0.07, offsetPercent: 0.93, sub: 'NDVI < 0.55 (Moisture Deficit)' },
  ];

  const size = 160;
  const strokeWidth = 16;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-5 sm:p-6 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-50">
        <div>
          <h2 className="text-base font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <Activity className="w-5 h-5 text-emerald-600" />
            Crop Health Overview
          </h2>
          <p className="text-[11px] text-slate-400 font-medium">
            AI multispectral NDVI vegetative index & canopy scans
          </p>
        </div>
        <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold rounded-full">
          92% Index
        </span>
      </div>

      {/* Donut Chart with Dynamic Center Text */}
      <div className="relative flex items-center justify-center my-3">
        <svg width={size} height={size} className="transform -rotate-90">
          {segments.map((seg) => {
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
                strokeWidth={isHovered ? strokeWidth + 3 : strokeWidth}
                strokeDasharray={strokeDasharray}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                className="transition-all duration-300 cursor-pointer"
                onMouseEnter={() => setHoveredSegment(seg.label)}
                onMouseLeave={() => setHoveredSegment(null)}
              />
            );
          })}
        </svg>

        {/* Center Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center">
          <span className="text-3xl font-black text-slate-900 leading-none">
            {hoveredSegment
              ? segments.find((s) => s.label === hoveredSegment)?.count
              : '42'}
          </span>
          <span className="text-[9px] font-bold text-slate-400 tracking-wider uppercase mt-1">
            {hoveredSegment || 'HEALTHY FIELDS'}
          </span>
        </div>
      </div>

      {/* Graphical Breakdown Bars */}
      <div className="space-y-2 mt-2 pt-2 border-t border-slate-50">
        {segments.map((item) => {
          const isHovered = hoveredSegment === item.label;
          return (
            <div
              key={item.label}
              onMouseEnter={() => setHoveredSegment(item.label)}
              onMouseLeave={() => setHoveredSegment(null)}
              className={`p-2 rounded-xl border transition-all cursor-pointer ${
                isHovered
                  ? 'bg-slate-50 border-slate-200'
                  : 'bg-white border-slate-100/70 hover:bg-slate-50/50'
              }`}
            >
              <div className="flex items-center justify-between text-xs mb-1">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full shrink-0 shadow-xs"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="font-bold text-slate-800">{item.label}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-semibold text-slate-400">
                    {Math.round(item.percent * 100)}%
                  </span>
                  <span className="font-black text-slate-900 text-xs">
                    {item.count} Plots
                  </span>
                </div>
              </div>

              {/* Graphical mini bar */}
              <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${Math.round(item.percent * 100)}%`,
                    backgroundColor: item.color,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

