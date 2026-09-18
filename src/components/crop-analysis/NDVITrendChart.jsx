import React, { useState } from 'react';

export default function NDVITrendChart({ zoneName = 'Zone 3' }) {
  const [hoveredPoint, setHoveredPoint] = useState(null);

  const data = [
    { day: 'Apr 4', ndvi: 0.62, y: 150 },
    { day: 'Apr 5', ndvi: 0.72, y: 130 },
    { day: 'Apr 6', ndvi: 0.64, y: 145 },
    { day: 'Apr 7', ndvi: 0.78, y: 105 },
    { day: 'Apr 8', ndvi: 0.84, y: 90 },
    { day: 'Apr 9', ndvi: 0.80, y: 100 },
    { day: 'Apr 10', ndvi: 0.89, y: 70 },
  ];

  // SVG dimensions
  const width = 600;
  const height = 200;
  const paddingX = 40;
  const bottomPadding = 30;
  const topPadding = 20;

  // Calculate coordinates
  const stepX = (width - paddingX * 2) / (data.length - 1);
  const points = data.map((d, i) => ({
    ...d,
    x: paddingX + i * stepX,
    // normalize y: max ndvi ~0.95 at top, min ~0.50 at bottom
    calcY: topPadding + (1 - (d.ndvi - 0.5) / 0.5) * (height - bottomPadding - topPadding),
  }));

  // Build SVG path
  const pathD = points.reduce((acc, pt, i) => {
    return i === 0 ? `M ${pt.x},${pt.calcY}` : `${acc} L ${pt.x},${pt.calcY}`;
  }, '');

  // Area path (closed to bottom)
  const areaD = `${pathD} L ${points[points.length - 1].x},${height - bottomPadding} L ${points[0].x},${height - bottomPadding} Z`;

  return (
    <div className="bg-white rounded-2xl border border-slate-200/70 p-6 shadow-xs">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">
          7-Day NDVI Trend — {zoneName}
        </h3>
        <div className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
          Optimal Vegetative Index
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-44 sm:h-52 overflow-visible select-none"
        >
          <defs>
            <linearGradient id="ndviGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Dashed Horizontal Grid Lines */}
          <line
            x1={paddingX}
            y1={topPadding + 20}
            x2={width - paddingX}
            y2={topPadding + 20}
            stroke="#e2e8f0"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <line
            x1={paddingX}
            y1={height / 2}
            x2={width - paddingX}
            y2={height / 2}
            stroke="#e2e8f0"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <line
            x1={paddingX}
            y1={height - bottomPadding - 10}
            x2={width - paddingX}
            y2={height - bottomPadding - 10}
            stroke="#e2e8f0"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />

          {/* Area Fill */}
          <path d={areaD} fill="url(#ndviGradient)" />

          {/* Trend Line */}
          <path
            d={pathD}
            fill="none"
            stroke="#1b5e32"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Interactive Data Points */}
          {points.map((pt, i) => (
            <g key={i}>
              <circle
                cx={pt.x}
                cy={pt.calcY}
                r={hoveredPoint === i ? 6 : 4}
                fill={hoveredPoint === i ? '#10b981' : '#1b5e32'}
                stroke="#ffffff"
                strokeWidth="2"
                className="cursor-pointer transition-all duration-150"
                onMouseEnter={() => setHoveredPoint(i)}
                onMouseLeave={() => setHoveredPoint(null)}
              />
              {/* X-axis date labels */}
              <text
                x={pt.x}
                y={height - 8}
                textAnchor="middle"
                className="text-[11px] fill-slate-400 font-medium"
              >
                {pt.day}
              </text>
            </g>
          ))}
        </svg>

        {/* Hover Tooltip */}
        {hoveredPoint !== null && (
          <div
            className="absolute bg-slate-900 text-white text-[11px] font-bold px-2.5 py-1 rounded-lg shadow-lg pointer-events-none transform -translate-x-1/2 -translate-y-full"
            style={{
              left: `${(points[hoveredPoint].x / width) * 100}%`,
              top: `${(points[hoveredPoint].calcY / height) * 100 - 8}%`,
            }}
          >
            NDVI: {points[hoveredPoint].ndvi}
          </div>
        )}
      </div>
    </div>
  );
}
