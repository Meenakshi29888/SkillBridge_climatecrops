import React from 'react';
import { FlaskConical } from 'lucide-react';

export default function SoilHealthWidget() {
  return (
    <div className="bg-white rounded-3xl border border-slate-200/70 p-6 shadow-xs space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-emerald-100/80 text-emerald-800 flex items-center justify-center">
            <FlaskConical className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900">Soil Health Card</h4>
            <p className="text-[11px] text-slate-400">Tested: 15 Dec 2021 (Nashik Lab)</p>
          </div>
        </div>

        <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-extrabold">
          Optimal
        </span>
      </div>

      {/* N-P-K Nutrients Bars */}
      <div className="space-y-3 pt-1">
        {/* Nitrogen (N) */}
        <div>
          <div className="flex justify-between items-center text-xs mb-1">
            <span className="font-semibold text-slate-700">Nitrogen (N)</span>
            <span className="font-bold text-amber-700">Medium (210 kg/ha)</span>
          </div>
          <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
            <div className="h-full bg-amber-500 rounded-full" style={{ width: '60%' }} />
          </div>
        </div>

        {/* Phosphorus (P) */}
        <div>
          <div className="flex justify-between items-center text-xs mb-1">
            <span className="font-semibold text-slate-700">Phosphorus (P)</span>
            <span className="font-bold text-emerald-700">High (28 kg/ha)</span>
          </div>
          <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
            <div className="h-full bg-emerald-600 rounded-full" style={{ width: '85%' }} />
          </div>
        </div>

        {/* Potassium (K) */}
        <div>
          <div className="flex justify-between items-center text-xs mb-1">
            <span className="font-semibold text-slate-700">Potassium (K)</span>
            <span className="font-bold text-emerald-700">Sufficient (280 kg/ha)</span>
          </div>
          <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
            <div className="h-full bg-emerald-600 rounded-full" style={{ width: '92%' }} />
          </div>
        </div>
      </div>

      {/* pH & Organic Carbon */}
      <div className="grid grid-cols-2 gap-3 pt-2">
        <div className="bg-slate-50/80 rounded-xl p-2.5 border border-slate-100 text-left">
          <span className="text-[10px] text-slate-400 block font-medium">Soil pH</span>
          <span className="text-xs font-bold text-slate-900">6.8 (Slightly Acidic)</span>
        </div>

        <div className="bg-slate-50/80 rounded-xl p-2.5 border border-slate-100 text-left">
          <span className="text-[10px] text-slate-400 block font-medium">Organic Carbon</span>
          <span className="text-xs font-bold text-slate-900">0.62% (Normal)</span>
        </div>
      </div>
    </div>
  );
}
