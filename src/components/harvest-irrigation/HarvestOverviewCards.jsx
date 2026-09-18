import React from 'react';
import {
  HeartPulse,
  CloudSun,
  FlaskConical,
  Sprout,
  ChevronRight,
  Wind,
  Droplets,
  CloudRain,
  ArrowUpRight,
} from 'lucide-react';
import FieldCropsSatelliteMap from './FieldCropsSatelliteMap';

export default function HarvestOverviewCards({ onNavigateToDiagnostics }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
      {/* Left 4-card 2x2 grid (7 cols on large screens) */}
      <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Card 1: Overall Crops Health */}
        <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-2xs space-y-3.5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
                  <HeartPulse className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-slate-800">Overall Crops Health</span>
              </div>
              <span className="bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded text-[10px]">
                Optimal
              </span>
            </div>

            <div className="mt-3">
              <h4 className="text-lg font-black text-slate-900 tracking-tight">Good Condition</h4>
              <p className="text-[11px] text-slate-400 font-medium">No precipitation within the next hour</p>
            </div>

            <div className="mt-4 space-y-1.5">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-slate-500 font-medium">Health Index (NDVI + NDRE)</span>
                <span className="font-extrabold text-emerald-700">88%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                <div className="h-full bg-[#10b981] rounded-full" style={{ width: '88%' }} />
              </div>
              <div className="flex items-center justify-between text-[10px] text-slate-400 pt-0.5">
                <span>88% High Vigor</span>
                <span>12% Mid Moisture Stress</span>
              </div>
            </div>
          </div>

          <button
            onClick={onNavigateToDiagnostics}
            className="flex items-center gap-1 text-xs font-bold text-slate-700 hover:text-emerald-700 pt-2 border-t border-slate-50 transition-colors cursor-pointer"
          >
            <span>View Health Report</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          </button>
        </div>

        {/* Card 2: Weather Integration */}
        <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-2xs space-y-3.5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center">
                  <CloudSun className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-slate-800">Weather Integration</span>
              </div>
              <span className="text-slate-400 font-bold text-[10px]">
                Station A02
              </span>
            </div>

            <div className="mt-3 flex items-baseline gap-2">
              <h4 className="text-2xl font-black text-slate-900 tracking-tight">23.1 °C</h4>
              <span className="text-xs font-bold text-slate-600">Cloudy Day</span>
            </div>
            <p className="text-[11px] text-slate-400 font-medium">Short-term forecast for next 24 hours</p>

            <div className="grid grid-cols-3 gap-2 mt-4 pt-2 border-t border-slate-50 text-center">
              <div className="bg-slate-50 p-2 rounded-xl">
                <span className="text-[10px] text-slate-400 block font-medium">Wind</span>
                <span className="text-xs font-extrabold text-slate-800">2 m/s</span>
              </div>
              <div className="bg-slate-50 p-2 rounded-xl">
                <span className="text-[10px] text-slate-400 block font-medium">Humidity</span>
                <span className="text-xs font-extrabold text-slate-800">62.5%</span>
              </div>
              <div className="bg-slate-50 p-2 rounded-xl">
                <span className="text-[10px] text-slate-400 block font-medium">Precipitation</span>
                <span className="text-xs font-extrabold text-slate-800">1 mm</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => alert('Opening Micro-climate Station Telemetry Report')}
            className="flex items-center gap-1 text-xs font-bold text-slate-700 hover:text-sky-700 pt-2 border-t border-slate-50 transition-colors cursor-pointer"
          >
            <span>View Weather Report</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          </button>
        </div>

        {/* Card 3: Soil Data & Fertility */}
        <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-2xs space-y-3.5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center">
                  <FlaskConical className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-slate-800">Soil Data & Fertility</span>
              </div>
              <span className="bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded text-[10px]">
                Optimal NPK
              </span>
            </div>

            <div className="mt-3">
              <h4 className="text-2xl font-black text-slate-900 tracking-tight">85%</h4>
              <p className="text-[11px] text-slate-400 font-medium">Average Soil Health Index</p>
            </div>

            <div className="mt-3 pt-2 border-t border-slate-50 flex items-center justify-between text-xs">
              <span className="text-slate-500 font-medium text-[11px]">Organic Matter Content</span>
              <span className="font-extrabold text-slate-800">4.2% (Good)</span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden mt-1.5">
              <div className="h-full bg-amber-500 rounded-full" style={{ width: '85%' }} />
            </div>
          </div>

          <button
            onClick={() => alert('Opening Soil Chemistry & Subsurface Sensor Report')}
            className="flex items-center gap-1 text-xs font-bold text-slate-700 hover:text-amber-700 pt-2 border-t border-slate-50 transition-colors cursor-pointer"
          >
            <span>View Soil Report</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          </button>
        </div>

        {/* Card 4: Harvest Overview */}
        <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-2xs space-y-3.5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
                  <Sprout className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-slate-800">Harvest Overview</span>
              </div>
              <span className="bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded text-[10px]">
                Cycle #03
              </span>
            </div>

            <div className="mt-3">
              <h4 className="text-2xl font-black text-slate-900 tracking-tight">75%</h4>
              <p className="text-[11px] text-slate-400 font-medium">Current harvest campaign ongoing</p>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-3 pt-2 border-t border-slate-50">
              <div className="bg-slate-50 p-2 rounded-xl">
                <span className="text-[10px] text-slate-400 block font-medium">Harvest Date</span>
                <span className="text-xs font-extrabold text-slate-800">18 January 2025</span>
              </div>
              <div className="bg-slate-50 p-2 rounded-xl">
                <span className="text-[10px] text-slate-400 block font-medium">Planting Age</span>
                <span className="text-xs font-extrabold text-slate-800">~3 Months</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => alert('Opening Seasonal Harvest Performance & Yield Metrics')}
            className="flex items-center gap-1 text-xs font-bold text-slate-700 hover:text-emerald-700 pt-2 border-t border-slate-50 transition-colors cursor-pointer"
          >
            <span>View Harvest Report</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          </button>
        </div>
      </div>

      {/* Right Column: Site Map (5 cols on large screens) */}
      <div className="lg:col-span-5">
        <FieldCropsSatelliteMap />
      </div>
    </div>
  );
}
