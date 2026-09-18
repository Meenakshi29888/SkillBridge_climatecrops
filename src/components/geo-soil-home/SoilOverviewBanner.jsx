import React from 'react';
import { MapPin, Sparkles, Download, RefreshCw, Layers, CheckCircle2, Globe2 } from 'lucide-react';

export default function SoilOverviewBanner({ soilData, onRefresh, isLoading }) {
  if (!soilData) return null;

  return (
    <div className="bg-white p-5 sm:p-6 rounded-3xl border border-slate-100 shadow-2xs space-y-4">
      {/* Top Breadcrumb & API Status Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2 text-slate-500 font-medium">
          <Globe2 className="w-4 h-4 text-emerald-600" />
          <span className="font-bold text-slate-900">{soilData.locationName}</span>
          <span className="text-slate-300">·</span>
          <span className="font-mono text-[11px] text-slate-500">
            {soilData.lat.toFixed(4)}° N, {soilData.lon.toFixed(4)}° E
          </span>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          <span className="flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 border border-emerald-200 rounded-full text-[11px] font-bold text-emerald-800">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            ISRIC SoilGrids v2.0 API Connected
          </span>
        </div>
      </div>

      {/* Main Title & Action Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pt-1">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {soilData.soilTexture}
            </h1>
            <span className="px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-extrabold tracking-wide">
              Grade AA+ Health
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
            Global soil profile analysis based on 250m multi-depth spatial interpolation
          </p>
        </div>

        <div className="flex items-center gap-2.5 self-start lg:self-auto">
          <button
            onClick={() => alert(`Exporting Soil Telemetry GeoJSON for ${soilData.locationName}...`)}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-slate-500" />
            <span>Export Soil Report</span>
          </button>

          <button
            onClick={onRefresh}
            disabled={isLoading}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#0f9f6e] hover:bg-[#087f5b] shadow-sm transition-all cursor-pointer disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
            <span>{isLoading ? 'Querying API...' : 'Refresh Telemetry'}</span>
          </button>
        </div>
      </div>

      {/* 4 Quick Key Telemetry Pills */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
        <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100/80">
          <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider">Nitrogen (N)</span>
          <span className="text-base font-black text-slate-900">{soilData.nitrogenMgKg} mg/kg</span>
          <span className="text-[10px] text-emerald-700 font-semibold block mt-0.5">{soilData.nRating}</span>
        </div>

        <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100/80">
          <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider">Soil pH</span>
          <span className="text-base font-black text-slate-900">{soilData.ph} pH</span>
          <span className="text-[10px] text-emerald-700 font-semibold block mt-0.5">{soilData.phRating.split(' ')[0]}</span>
        </div>

        <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100/80">
          <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider">Organic Carbon</span>
          <span className="text-base font-black text-slate-900">{soilData.socPercent}%</span>
          <span className="text-[10px] text-emerald-700 font-semibold block mt-0.5">SOM: {soilData.organicMatterPercent}%</span>
        </div>

        <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100/80">
          <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider">CEC Capacity</span>
          <span className="text-base font-black text-slate-900">{soilData.cec} meq/100g</span>
          <span className="text-[10px] text-slate-500 font-semibold block mt-0.5">Optimal Nutrient Buffer</span>
        </div>
      </div>
    </div>
  );
}
