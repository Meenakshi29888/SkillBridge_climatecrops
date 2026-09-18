import React, { useState } from 'react';
import { TrendingUp, BarChart2, ChevronDown, ArrowRight } from 'lucide-react';

export default function CropGrowthCharts() {
  const [metricTab, setMetricTab] = useState('height');
  const [timeUnit, setTimeUnit] = useState('Days');

  const historicalBars = [
    { year: '2020', healthy: 320, prod: 90, stressed: 70, total: '480ha' },
    { year: '2021', healthy: 380, prod: 110, stressed: 60, total: '550ha' },
    { year: '2022', healthy: 450, prod: 130, stressed: 55, total: '635ha' },
    { year: '2023', healthy: 490, prod: 140, stressed: 50, total: '680ha' },
    { year: '2024', healthy: 540, prod: 150, stressed: 45, total: '735ha' },
    { year: '2025', healthy: 580, prod: 155, stressed: 50, total: '585ha' },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
      {/* Left: Crop Growth Monitoring (7 cols) */}
      <div className="lg:col-span-8 bg-white p-6 rounded-3xl border border-slate-100 shadow-2xs space-y-4 flex flex-col justify-between">
        <div>
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-black text-slate-900 tracking-tight">Crop Growth Monitoring</h3>
                <p className="text-xs text-slate-400 font-medium">Temporal biometric progression index</p>
              </div>
            </div>

            {/* Time Unit Selector */}
            <div className="flex items-center bg-slate-100 p-1 rounded-xl self-start sm:self-auto">
              {['Days', 'Weeks', 'Months'].map((unit) => (
                <button
                  key={unit}
                  onClick={() => setTimeUnit(unit)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    timeUnit === unit ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {unit}
                </button>
              ))}
            </div>
          </div>

          {/* Metric Sub-Tabs */}
          <div className="flex items-center gap-6 pt-2 border-b border-slate-100 text-xs font-bold overflow-x-auto">
            <button
              onClick={() => setMetricTab('height')}
              className={`pb-2 transition-all whitespace-nowrap cursor-pointer ${
                metricTab === 'height'
                  ? 'text-emerald-700 border-b-2 border-emerald-600'
                  : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              Cumulative Height (cm)
            </button>
            <button
              onClick={() => setMetricTab('biomass')}
              className={`pb-2 transition-all whitespace-nowrap cursor-pointer ${
                metricTab === 'biomass'
                  ? 'text-emerald-700 border-b-2 border-emerald-600'
                  : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              Cumulative Biomass (kg/ha)
            </button>
            <button
              onClick={() => setMetricTab('lai')}
              className={`pb-2 transition-all whitespace-nowrap cursor-pointer ${
                metricTab === 'lai'
                  ? 'text-emerald-700 border-b-2 border-emerald-600'
                  : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              Cumulative Leaf Area Index (LAI)
            </button>
          </div>

          {/* SVG Biometric Progression Chart */}
          <div className="relative mt-4 h-[220px] w-full">
            <svg viewBox="0 0 700 220" className="w-full h-full overflow-visible">
              <defs>
                <linearGradient id="growthGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Grid Lines */}
              {[30, 70, 110, 150, 190].map((y, i) => (
                <line
                  key={i}
                  x1="30"
                  y1={y}
                  x2="680"
                  y2={y}
                  stroke="#f1f5f9"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
              ))}

              {/* Y Axis Labels */}
              <text x="15" y="35" fontSize="10" fill="#94a3b8" fontWeight="600">11</text>
              <text x="15" y="75" fontSize="10" fill="#94a3b8" fontWeight="600">9</text>
              <text x="15" y="115" fontSize="10" fill="#94a3b8" fontWeight="600">7</text>
              <text x="15" y="155" fontSize="10" fill="#94a3b8" fontWeight="600">5</text>
              <text x="15" y="195" fontSize="10" fill="#94a3b8" fontWeight="600">1</text>

              {/* Smooth Area Path */}
              <path
                d="M 40 195 C 160 190, 260 170, 360 140 C 460 110, 560 90, 670 60 L 670 200 L 40 200 Z"
                fill="url(#growthGradient)"
              />

              {/* Sector A Curve (Canopy Standard) */}
              <path
                d="M 40 195 C 160 190, 260 170, 360 140 C 460 110, 560 90, 670 60"
                fill="none"
                stroke="#10b981"
                strokeWidth="3"
                strokeLinecap="round"
              />

              {/* Sector B Curve (Target Height) */}
              <path
                d="M 40 190 C 160 180, 260 160, 360 130 C 460 100, 560 80, 670 50"
                fill="none"
                stroke="#0284c7"
                strokeWidth="2.5"
                strokeDasharray="6 4"
              />

              {/* Data points on the curve */}
              <circle cx="360" cy="130" r="4.5" fill="#0284c7" stroke="#fff" strokeWidth="2" />
              <circle cx="500" cy="95" r="4.5" fill="#0284c7" stroke="#fff" strokeWidth="2" />
              <circle cx="670" cy="50" r="5.5" fill="#0284c7" stroke="#fff" strokeWidth="2.5" />
            </svg>

            {/* X-axis days row */}
            <div className="flex justify-between px-6 text-[10px] font-semibold text-slate-400 mt-1">
              {['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'].map((d) => (
                <span key={d}>{d}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Legend and Growth Benchmark */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-3 border-t border-slate-100 text-xs">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-bold text-slate-700">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              Sector A (Canopy Standard)
            </span>
            <span className="flex items-center gap-1.5 font-bold text-slate-700">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-500" />
              Sector B (Target Height)
            </span>
          </div>
          <span className="text-emerald-700 font-extrabold bg-emerald-50 px-2.5 py-1 rounded-lg self-start sm:self-auto">
            +14.2% faster than 2024 season
          </span>
        </div>
      </div>

      {/* Right: Farm Area Historical & Projections (4 cols) */}
      <div className="lg:col-span-4 bg-white p-6 rounded-3xl border border-slate-100 shadow-2xs space-y-4 flex flex-col justify-between">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <BarChart2 className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-black text-slate-900 tracking-tight">Farm Area Historical</h3>
            </div>
            <button className="flex items-center gap-1 text-xs font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-lg hover:bg-slate-200 transition-colors cursor-pointer">
              <span>Year ▾</span>
            </button>
          </div>

          {/* Stacked Bars Visualizer */}
          <div className="relative pt-6 pb-2">
            <span className="absolute top-1 right-2 text-[10px] font-extrabold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
              585ha
            </span>
            <div className="flex items-end justify-between gap-2 h-[120px] px-1">
              {historicalBars.map((b) => (
                <div key={b.year} className="flex-1 flex flex-col items-center gap-1.5 group">
                  <div className="w-full max-w-[28px] h-full flex flex-col justify-end rounded-lg overflow-hidden bg-slate-100 transition-all group-hover:scale-105">
                    {/* Stressed (sky) */}
                    <div className="bg-[#38bdf8] w-full" style={{ height: `${(b.stressed / 750) * 100}%` }} />
                    {/* Productivity (amber) */}
                    <div className="bg-[#fbbf24] w-full" style={{ height: `${(b.prod / 750) * 100}%` }} />
                    {/* Healthy (teal) */}
                    <div className="bg-[#0f9f6e] w-full" style={{ height: `${(b.healthy / 750) * 100}%` }} />
                  </div>
                  <span className="text-[10px] font-bold text-slate-500">{b.year}</span>
                </div>
              ))}
            </div>
          </div>

          {/* GRAIN 2025 PROJECTIONS */}
          <div className="mt-4 pt-3 border-t border-slate-100 space-y-2.5">
            <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">
              Grain 2025 Projections
            </span>

            <div className="flex items-center justify-between text-xs">
              <span className="flex items-center gap-2 font-medium text-slate-600">
                <span className="w-2 h-2 rounded-full bg-[#0f9f6e]" />
                Healthy Area (ha)
              </span>
              <div className="flex items-center gap-2">
                <span className="text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.5 rounded text-[10px]">+20</span>
                <span className="font-extrabold text-slate-900">580</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs">
              <span className="flex items-center gap-2 font-medium text-slate-600">
                <span className="w-2 h-2 rounded-full bg-[#fbbf24]" />
                Productivity (ha/sc)
              </span>
              <div className="flex items-center gap-2">
                <span className="text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.5 rounded text-[10px]">+40</span>
                <span className="font-extrabold text-slate-900">155</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs">
              <span className="flex items-center gap-2 font-medium text-slate-600">
                <span className="w-2 h-2 rounded-full bg-[#38bdf8]" />
                Stressed Area (ha)
              </span>
              <div className="flex items-center gap-2">
                <span className="text-rose-700 font-bold bg-rose-50 px-1.5 py-0.5 rounded text-[10px]">-10</span>
                <span className="font-extrabold text-slate-900">50</span>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => alert('Opening Full Multi-Year Farm Area Historical Telemetry & GIS Analysis')}
          className="flex items-center justify-between text-xs font-bold text-slate-700 hover:text-emerald-700 pt-2 border-t border-slate-100 transition-colors cursor-pointer"
        >
          <span>Complete Historical Analysis</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
