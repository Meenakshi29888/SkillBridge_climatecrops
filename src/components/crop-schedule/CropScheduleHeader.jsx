import React from 'react';
import { Search, Bell, FileText, FlaskConical, Sprout } from 'lucide-react';

export default function CropScheduleHeader({ onOpenSoilCard, onOpenFertilizers }) {
  return (
    <div className="space-y-4">
      {/* Top Breadcrumb & Search Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-slate-200/60">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
          <span className="hover:text-emerald-700 cursor-pointer">Crops</span>
          <span>/</span>
          <span className="text-slate-900 font-bold">Onion (Allium Cepa)</span>
          <span>/</span>
          <span className="text-emerald-700">Schedule & Lifecycle</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Search stage, nutrient, pest..."
              className="pl-8 pr-4 py-1.5 bg-white border border-slate-200 rounded-full text-xs text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 w-48 sm:w-64 shadow-2xs"
            />
          </div>
          <button
            className="p-1.5 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 relative"
            title="Notifications"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-rose-500 rounded-full" />
          </button>
        </div>
      </div>

      {/* Main Hero Card */}
      <div className="bg-white rounded-3xl border border-slate-200/70 p-6 shadow-xs flex flex-col lg:flex-row items-center gap-6">
        {/* Left: Mobile App Mockup Preview */}
        <div className="w-full lg:w-72 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-950 rounded-2xl p-4 text-white shadow-xl flex flex-col justify-between shrink-0 h-64 relative overflow-hidden border border-slate-800">
          {/* Subtle crop preview pattern */}
          <div className="absolute inset-0 opacity-15 bg-radial from-emerald-400 to-transparent pointer-events-none" />

          <div className="relative z-10 flex items-center justify-between">
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-extrabold tracking-wider">
              ● FIELD PLOT A-2
            </span>
          </div>

          <div className="relative z-10 bg-black/40 backdrop-blur-md rounded-xl p-3 border border-white/10 space-y-1">
            <h4 className="text-xs font-bold text-white">Onion Lifecycle Monitor</h4>
            <p className="text-[10px] text-emerald-300 font-semibold">Active: Vegetative Growth (Day 28)</p>
            <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden mt-1">
              <div className="h-full bg-emerald-400 rounded-full" style={{ width: '28%' }} />
            </div>
          </div>

          <div className="relative z-10 text-[10px] text-slate-400 font-medium">
            Total Crop Area: <span className="text-white font-bold">3.5 Acres</span> • Red Nashik Variety
          </div>
        </div>

        {/* Right: Crop Metadata & Duration Stats */}
        <div className="flex-1 w-full space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Onion
              </h2>
              <p className="text-xs text-slate-500 font-medium italic mt-0.5">
                Allium cepa L. • Winter Rabi Season
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={onOpenSoilCard}
                className="flex items-center gap-1.5 px-3.5 py-1.5 bg-white border border-slate-200 hover:bg-slate-50 rounded-xl text-xs font-bold text-slate-700 shadow-2xs transition-colors cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-emerald-600" />
                <span>Soil health card</span>
              </button>
              <button
                onClick={onOpenFertilizers}
                className="flex items-center gap-1.5 px-3.5 py-1.5 bg-[#15803d] hover:bg-[#166534] text-white rounded-xl text-xs font-bold shadow-sm transition-colors cursor-pointer"
              >
                <FlaskConical className="w-3.5 h-3.5" />
                <span>Recommended fertilizers</span>
              </button>
            </div>
          </div>

          {/* 4 Key Metric Boxes */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-slate-50/80 rounded-2xl p-3 border border-slate-100">
              <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider">
                Sowing/Planting Date
              </span>
              <span className="text-sm font-black text-slate-900">01-01-2022</span>
            </div>

            <div className="bg-slate-50/80 rounded-2xl p-3 border border-slate-100">
              <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider">
                Closing Date
              </span>
              <span className="text-sm font-black text-slate-900">09-06-2022</span>
            </div>

            <div className="bg-slate-50/80 rounded-2xl p-3 border border-slate-100">
              <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider">
                Total Duration
              </span>
              <div className="text-sm font-black text-slate-900">
                160 Days <span className="text-[10px] font-normal text-slate-500">(Expected)</span>
              </div>
            </div>

            <div className="bg-slate-50/80 rounded-2xl p-3 border border-slate-100">
              <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider">
                Current Status
              </span>
              <div className="text-xs font-black text-emerald-700 flex items-center gap-1 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Vegetative Stage (Day 28)</span>
              </div>
            </div>
          </div>

          {/* Cycle Progress Bar */}
          <div className="space-y-1.5 pt-1">
            <div className="flex items-center justify-between text-xs font-semibold">
              <span className="text-slate-600">Cycle Progress</span>
              <span className="text-slate-900 font-bold">22% Completed (45 of 160 Days)</span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
              <div className="h-full bg-emerald-600 rounded-full" style={{ width: '22%' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
