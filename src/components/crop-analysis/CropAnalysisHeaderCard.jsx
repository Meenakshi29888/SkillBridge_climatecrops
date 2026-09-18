import React from 'react';
import { Sprout } from 'lucide-react';

export default function CropAnalysisHeaderCard({
  zoneName = 'Zone 3',
  cropType = 'Wheat',
  growthStage = 'Tillering',
  stressIndex = 'Moderate',
  canopyCoverage = 78,
}) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/70 p-6 shadow-xs">
      {/* Title */}
      <div className="flex items-center gap-2.5 mb-6">
        <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
          <Sprout className="w-3.5 h-3.5" />
        </div>
        <h2 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">
          Crop Analysis — {zoneName} · {cropType}
        </h2>
      </div>

      {/* 3 Key Metrics Rows */}
      <div className="space-y-4">
        {/* Growth Stage */}
        <div className="flex items-center justify-between text-xs sm:text-sm">
          <span className="text-slate-500 font-medium">Growth Stage</span>
          <div className="flex items-center gap-3">
            <span className="font-bold text-slate-900">{growthStage}</span>
            {/* 5-segment pill bar */}
            <div className="flex items-center gap-1">
              <span className="w-3.5 h-1.5 rounded-full bg-emerald-500" />
              <span className="w-3.5 h-1.5 rounded-full bg-emerald-500" />
              <span className="w-3.5 h-1.5 rounded-full bg-emerald-500" />
              <span className="w-3.5 h-1.5 rounded-full bg-slate-200" />
              <span className="w-3.5 h-1.5 rounded-full bg-slate-200" />
            </div>
          </div>
        </div>

        {/* Stress Index */}
        <div className="flex items-center justify-between text-xs sm:text-sm">
          <span className="text-slate-500 font-medium">Stress Index</span>
          <div className="flex items-center gap-3">
            <span className="font-bold text-amber-600">{stressIndex}</span>
            {/* Gradient horizontal bar */}
            <div className="w-16 sm:w-20 h-2 rounded-full bg-slate-100 overflow-hidden relative">
              <div
                className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-amber-400 to-amber-500"
                style={{ width: '65%' }}
              />
            </div>
          </div>
        </div>

        {/* Canopy Coverage */}
        <div className="flex items-center justify-between text-xs sm:text-sm">
          <span className="text-slate-500 font-medium">Canopy Coverage</span>
          <div className="flex items-center gap-3">
            <span className="font-bold text-slate-900">{canopyCoverage}%</span>
            {/* Solid green progress bar */}
            <div className="w-16 sm:w-20 h-2 rounded-full bg-slate-100 overflow-hidden">
              <div
                className="h-full rounded-full bg-emerald-500"
                style={{ width: `${canopyCoverage}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
