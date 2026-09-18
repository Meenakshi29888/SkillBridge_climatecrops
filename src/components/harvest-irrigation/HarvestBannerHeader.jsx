import React from 'react';
import {
  ChevronRight,
  Download,
  ClipboardCheck,
  Sparkles,
  TrendingUp,
  TrendingDown,
  Droplets,
  Layers,
  CheckCircle2,
} from 'lucide-react';

export default function HarvestBannerHeader({ onRunDiagnostics, onDownloadReport, onFieldInspection }) {
  return (
    <div className="space-y-4">
      {/* Top Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
        <span>Plantations</span>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="font-semibold text-slate-800">Lembang Farm</span>
        <span className="bg-emerald-100/70 text-emerald-800 font-bold px-1.5 py-0.5 rounded text-[10px]">
          AA+ Grade
        </span>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-emerald-700 font-medium">Health & Recommendations</span>
      </div>

      {/* Main Title & Action Buttons Row */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-5 sm:p-6 rounded-3xl border border-slate-100 shadow-2xs">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Lembang Farm
            </h1>
            <span className="bg-emerald-100 text-emerald-800 font-extrabold px-2.5 py-1 rounded-lg text-xs tracking-wide">
              AA+ Grade
            </span>
            <span className="text-xs text-slate-400 font-medium hidden sm:inline">
              Total area monitored across all plantations
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
            High-resolution optical & multispectral monitoring active (Sentinel-2 L2A & Drone Fleet)
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={onDownloadReport}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-slate-500" />
            <span>Download Health Report</span>
          </button>

          <button
            onClick={onFieldInspection}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors cursor-pointer"
          >
            <ClipboardCheck className="w-3.5 h-3.5 text-slate-500" />
            <span>Field Inspection</span>
          </button>

          <button
            onClick={onRunDiagnostics}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#0f9f6e] hover:bg-[#087f5b] shadow-sm hover:shadow transition-all cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Run AI Diagnostics</span>
          </button>
        </div>
      </div>

      {/* 4 Key Metrics Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Metric 1: Farm Area */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-100 shadow-2xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-500 font-semibold">Farm Area (ha)</span>
            <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
              <TrendingUp className="w-3 h-3" />
              +20%
            </span>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-2xl font-black text-slate-900 tracking-tight">585</span>
          </div>
          <p className="text-[11px] text-slate-400 font-medium">14 active parcels</p>
        </div>

        {/* Metric 2: Yield */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-100 shadow-2xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-500 font-semibold">Yield (kg/ha)</span>
            <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
              <TrendingUp className="w-3 h-3" />
              +3.5%
            </span>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-2xl font-black text-slate-900 tracking-tight">4,514.0</span>
          </div>
          <p className="text-[11px] text-slate-400 font-medium">Target: 4,200.0 kg/ha</p>
        </div>

        {/* Metric 3: Production */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-100 shadow-2xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-500 font-semibold">Production (pounds)</span>
            <span className="flex items-center gap-1 text-[11px] font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded-md">
              <TrendingDown className="w-3 h-3" />
              -10%
            </span>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-2xl font-black text-slate-900 tracking-tight">2,381.0</span>
          </div>
          <p className="text-[11px] text-slate-400 font-medium">Adjusted for early harvesting</p>
        </div>

        {/* Metric 4: Water Consumption */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-100 shadow-2xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-500 font-semibold">Water Consumption (L)</span>
            <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
              Optimized
            </span>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-2xl font-black text-slate-900 tracking-tight">4,200.0</span>
          </div>
          <p className="text-[11px] text-slate-400 font-medium">Smart drip automation active</p>
        </div>
      </div>
    </div>
  );
}
