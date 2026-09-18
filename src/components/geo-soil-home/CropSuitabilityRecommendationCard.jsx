import React from 'react';
import { Sprout, Sparkles, CheckCircle2, ChevronRight, TrendingUp, ShieldCheck } from 'lucide-react';

export default function CropSuitabilityRecommendationCard({ soilData, onNavigateToCropLifecycle }) {
  if (!soilData || !soilData.suitableCrops) return null;

  return (
    <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-2xs space-y-5">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-base font-black text-slate-900 tracking-tight">
              AI Crop Suitability & Nutrient Prescriptions
            </h3>
            <p className="text-xs text-slate-400 font-medium">
              Ground truth recommendations tailored to this soil pH ({soilData.ph}), N ({soilData.nitrogenMgKg} mg/kg), and texture
            </p>
          </div>
        </div>

        {onNavigateToCropLifecycle && (
          <button
            onClick={onNavigateToCropLifecycle}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 transition-colors self-start sm:self-auto cursor-pointer"
          >
            <span>View Full Crop Lifecycle</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* 3 Suitable Crop Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {soilData.suitableCrops.map((crop, idx) => (
          <div
            key={idx}
            className="p-4 bg-slate-50/80 hover:bg-slate-50 rounded-2xl border border-slate-200/60 transition-all space-y-3 flex flex-col justify-between group"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-extrabold text-sm text-slate-900">{crop.name}</span>
                <span className="px-2 py-0.5 rounded-full text-xs font-black bg-emerald-100 text-emerald-800">
                  {crop.score}% Match
                </span>
              </div>
              <p className="text-[11px] font-semibold text-slate-500">{crop.variety}</p>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">{crop.reason}</p>
            </div>

            <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-[11px]">
              <span className="text-slate-400 font-medium">Predicted Yield:</span>
              <span className="font-bold text-emerald-700">+14% vs Regional Avg</span>
            </div>
          </div>
        ))}
      </div>

      {/* Recommended Fertilizer Schedule Banner */}
      <div className="p-4 bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 rounded-2xl border border-emerald-100/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
            <Sprout className="w-4 h-4" />
          </div>
          <div>
            <span className="font-extrabold text-emerald-950 block text-xs sm:text-sm">
              Tailored Agronomist Soil Amendment Advisory
            </span>
            <p className="text-emerald-800 font-medium text-[11px] sm:text-xs">
              Apply 35kg/ha Basal DAP and 20kg/ha Sulphur 90% WDG at sowing to unlock high-yield phosphorus uptake in this {soilData.soilTexture}.
            </p>
          </div>
        </div>

        <button
          onClick={() => alert(`Generating PDF Custom Fertilizer Prescription for ${soilData.locationName}...`)}
          className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#0f9f6e] hover:bg-[#087f5b] shadow-xs shrink-0 cursor-pointer"
        >
          Download Prescription
        </button>
      </div>
    </div>
  );
}
