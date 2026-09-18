import React, { useState } from 'react';
import { Activity, LayoutGrid, Droplets, FlaskConical } from 'lucide-react';

export default function EmuraQuickMetrics() {
  const [isWateringOn, setIsWateringOn] = useState(true);
  const [isPhAuto, setIsPhAuto] = useState(true);

  return (
    <div className="space-y-4">
      {/* Row 1: Plant Health & Active Crop Zones (2 cols) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Plant Health */}
        <div className="bg-white rounded-3xl border border-slate-100 p-5 shadow-xs flex flex-col justify-between">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 mb-3">
            <span className="p-1.5 rounded-lg bg-emerald-50 text-emerald-600">
              <Activity className="w-3.5 h-3.5" />
            </span>
            <span>Plant Health</span>
          </div>

          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-slate-900 tracking-tight">
              95%
            </span>
            <span className="text-xs font-bold text-emerald-600">
              Excellent
            </span>
          </div>
        </div>

        {/* Active Crop Zones */}
        <div className="bg-white rounded-3xl border border-slate-100 p-5 shadow-xs flex flex-col justify-between">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 mb-3">
            <span className="p-1.5 rounded-lg bg-emerald-50 text-emerald-600">
              <LayoutGrid className="w-3.5 h-3.5" />
            </span>
            <span>Active Crop Zones</span>
          </div>

          <div>
            <span className="text-3xl font-black text-slate-900 tracking-tight">
              9
            </span>
            <span className="text-xs font-bold text-slate-500 ml-1">Zones</span>
            <p className="text-[11px] font-semibold text-emerald-600 mt-0.5">
              +2 From yesterday
            </p>
          </div>
        </div>
      </div>

      {/* Row 2: Soil Nutrient Status Bar Card */}
      <div className="bg-white rounded-3xl border border-slate-100 p-5 shadow-xs flex items-center justify-between gap-4">
        <div>
          <h4 className="text-xs font-bold text-slate-900">
            Soil Nutrient Status
          </h4>
          <p className="text-[11px] text-slate-400 font-medium">
            Balanced nutrient composition
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* Tapered green gradient bar */}
          <div className="w-28 sm:w-36 h-3.5 rounded-full bg-slate-100 overflow-hidden relative flex items-center">
            <div
              className="h-full rounded-full bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-600"
              style={{ width: '85%' }}
            />
          </div>
          <span className="text-xs font-bold text-emerald-600">Optimal</span>
        </div>
      </div>

      {/* Row 3: Auto Watering & pH Balancer Controls (2 cols) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Auto Watering */}
        <div className="bg-white rounded-3xl border border-slate-100 p-5 shadow-xs flex flex-col justify-between">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-700 mb-1">
            <span className="p-1.5 rounded-lg bg-slate-50 text-slate-600">
              <Droplets className="w-3.5 h-3.5" />
            </span>
            <span>Auto Watering</span>
          </div>
          <p className="text-[11px] text-slate-400 mb-4">
            Watering every 3 hours
          </p>

          <div className="flex items-center justify-between">
            <button
              onClick={() => setIsWateringOn(!isWateringOn)}
              className={`w-14 h-7 rounded-full p-1 transition-colors flex items-center cursor-pointer ${
                isWateringOn ? 'bg-blue-600 justify-end' : 'bg-slate-200 justify-start'
              }`}
            >
              <div className="w-5 h-5 rounded-full bg-white shadow-sm" />
            </button>
            <span className="text-xs font-bold text-slate-800">
              {isWateringOn ? 'On' : 'Off'}
            </span>
          </div>
        </div>

        {/* pH Balancer */}
        <div className="bg-white rounded-3xl border border-slate-100 p-5 shadow-xs flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-700 mb-1">
                <span className="p-1.5 rounded-lg bg-slate-50 text-slate-600">
                  <FlaskConical className="w-3.5 h-3.5" />
                </span>
                <span>pH Balancer</span>
              </div>
              <p className="text-[11px] text-slate-400">
                Status: Stable
              </p>
            </div>
            <span className="text-2xl font-black text-slate-900 leading-none">
              6.4
            </span>
          </div>

          <div className="flex items-center justify-between mt-3">
            <button
              onClick={() => setIsPhAuto(!isPhAuto)}
              className={`w-14 h-7 rounded-full p-1 transition-colors flex items-center cursor-pointer ${
                isPhAuto ? 'bg-blue-600 justify-end' : 'bg-slate-200 justify-start'
              }`}
            >
              <div className="w-5 h-5 rounded-full bg-white shadow-sm" />
            </button>
            <span className="text-xs font-bold text-slate-800">
              {isPhAuto ? 'Auto' : 'Manual'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
