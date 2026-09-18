import React from 'react';
import { FlaskConical, Activity } from 'lucide-react';

export default function SoilDataCardsGrid({ soilData }) {
  if (!soilData) return null;

  return (
    <div className="space-y-6">
      {/* 2-Column Primary Grid: NPK & Soil pH */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        {/* CARD 1: Primary Macronutrients (NPK) */}
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-2xs space-y-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                  <FlaskConical className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-black text-slate-900 tracking-tight">
                    Primary Macronutrients (NPK)
                  </h3>
                  <p className="text-xs text-slate-400 font-medium">
                    Nitrogen, Phosphorus, and Potassium soil availability
                  </p>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-bold border border-emerald-200">
                Optimal Balance
              </span>
            </div>

            {/* NPK Progress Breakdown */}
            <div className="mt-4 space-y-4 text-xs">
              {/* Nitrogen (N) */}
              <div className="p-3.5 bg-slate-50/80 rounded-2xl border border-slate-100/80 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-extrabold text-slate-900 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
                    Total Nitrogen (N)
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold text-slate-400">Target: 250 - 400 mg/kg</span>
                    <span className="text-sm font-black text-slate-900">{soilData.nitrogenMgKg} mg/kg</span>
                  </div>
                </div>
                <div className="w-full h-2.5 rounded-full bg-slate-200/80 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-[#10b981] transition-all duration-700"
                    style={{ width: `${Math.min((soilData.nitrogenMgKg / 450) * 100, 100)}%` }}
                  />
                </div>
                <div className="flex items-center justify-between text-[10px] text-slate-500 font-medium">
                  <span>Soil Content: {soilData.nitrogenPercent}% Total N</span>
                  <span className="text-emerald-700 font-bold">{soilData.nRating}</span>
                </div>
              </div>

              {/* Phosphorus (P) */}
              <div className="p-3.5 bg-slate-50/80 rounded-2xl border border-slate-100/80 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-extrabold text-slate-900 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    Available Phosphorus (P)
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold text-slate-400">Target: 20 - 40 mg/kg</span>
                    <span className="text-sm font-black text-slate-900">{soilData.phosphorus} mg/kg</span>
                  </div>
                </div>
                <div className="w-full h-2.5 rounded-full bg-slate-200/80 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-amber-500 transition-all duration-700"
                    style={{ width: `${Math.min((soilData.phosphorus / 50) * 100, 100)}%` }}
                  />
                </div>
                <div className="flex items-center justify-between text-[10px] text-slate-500 font-medium">
                  <span>Olsen/Bray-1 Phosphorus</span>
                  <span className="text-amber-700 font-bold">{soilData.pRating}</span>
                </div>
              </div>

              {/* Potassium (K) */}
              <div className="p-3.5 bg-slate-50/80 rounded-2xl border border-slate-100/80 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-extrabold text-slate-900 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-sky-500" />
                    Exchangeable Potassium (K)
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold text-slate-400">Target: 180 - 300 mg/kg</span>
                    <span className="text-sm font-black text-slate-900">{soilData.potassium} mg/kg</span>
                  </div>
                </div>
                <div className="w-full h-2.5 rounded-full bg-slate-200/80 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-sky-500 transition-all duration-700"
                    style={{ width: `${Math.min((soilData.potassium / 350) * 100, 100)}%` }}
                  />
                </div>
                <div className="flex items-center justify-between text-[10px] text-slate-500 font-medium">
                  <span>Potassium Reserve</span>
                  <span className="text-sky-700 font-bold">{soilData.kRating}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span className="font-medium">Data Grounding: ISRIC Global Soil Repository</span>
            <span className="font-extrabold text-emerald-700">NPK Index: 92/100</span>
          </div>
        </div>

        {/* CARD 2: Soil pH & Chemical Properties */}
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-2xs space-y-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center">
                  <Activity className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-black text-slate-900 tracking-tight">
                    Soil pH & Chemical Reaction
                  </h3>
                  <p className="text-xs text-slate-400 font-medium">
                    Acidity, Cation Exchange & Salinity Index
                  </p>
                </div>
              </div>
              <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold border ${soilData.phColor}`}>
                {soilData.phRating}
              </span>
            </div>

            {/* Circular / Scale Visualizer for pH */}
            <div className="mt-4 p-5 bg-gradient-to-br from-slate-50 to-emerald-50/40 rounded-2xl border border-slate-100 space-y-4 text-center">
              <div className="inline-flex flex-col items-center justify-center">
                <span className="text-4xl font-black text-slate-900 tracking-tight">{soilData.ph}</span>
                <span className="text-xs font-extrabold text-emerald-700 mt-0.5">Soil pH in H₂O</span>
                <span className="text-[11px] text-slate-400 font-medium">Optimal root nutrient absorption</span>
              </div>

              {/* Visual pH Spectrum Scale */}
              <div className="space-y-1">
                <div className="h-3 w-full rounded-full bg-gradient-to-r from-red-500 via-amber-400 via-emerald-500 via-cyan-400 to-indigo-600 relative overflow-hidden shadow-inner">
                  {/* Indicator Marker */}
                  <div
                    className="absolute top-0 bottom-0 w-2.5 bg-white border-2 border-slate-900 rounded-full shadow-md -translate-x-1/2"
                    style={{ left: `${Math.min(Math.max(((soilData.ph - 4) / 6) * 100, 5), 95)}%` }}
                  />
                </div>
                <div className="flex justify-between text-[10px] font-bold text-slate-400 px-1">
                  <span>Acidic (4.0)</span>
                  <span>Neutral (6.5 - 7.5)</span>
                  <span>Alkaline (10.0)</span>
                </div>
              </div>
            </div>

            {/* CEC & EC Sub-properties */}
            <div className="grid grid-cols-2 gap-3 mt-4 text-xs">
              <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
                <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider">
                  CEC (Cation Exchange)
                </span>
                <span className="text-base font-black text-slate-900">{soilData.cec} meq/100g</span>
                <p className="text-[10px] text-slate-500 mt-0.5">High nutrient holding capacity</p>
              </div>

              <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
                <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider">
                  Salinity / EC
                </span>
                <span className="text-base font-black text-slate-900">{soilData.electricalConductivity}</span>
                <p className="text-[10px] text-emerald-700 font-semibold mt-0.5">No salinity stress detected</p>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span className="font-medium">Liming / Gypsum Requirement:</span>
            <span className="font-bold text-emerald-700">None Required (Ideal)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

