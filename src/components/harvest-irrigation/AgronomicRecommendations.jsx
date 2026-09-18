import React from 'react';
import {
  Sparkles,
  RefreshCw,
  Calendar,
  Zap,
  ShieldCheck,
  CheckCircle2,
  Droplets,
  TrendingUp,
  FileText,
  Clock,
} from 'lucide-react';

export default function AgronomicRecommendations({ onOpenScheduleModal }) {
  return (
    <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-2xs space-y-5">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-[#0f9f6e] text-white flex items-center justify-center shrink-0">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-base font-black text-slate-900 tracking-tight">
              AI & Agronomic Priority Recommendations
            </h3>
            <p className="text-xs text-slate-500 font-medium">
              Prescriptions generated from drone multispectral scans and IoT sensor arrays
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 self-end sm:self-auto">
          <span className="text-[11px] text-slate-400 font-medium hidden md:inline">
            Auto-generated: Today, 08:30 AM
          </span>
          <button
            onClick={() => alert('Refreshing AI Neural Recommendations against live telemetry...')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 transition-colors cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Refresh AI</span>
          </button>
        </div>
      </div>

      {/* 3 Recommendations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Recommendation 1: Foliar Fertilizer (High Priority) */}
        <div className="bg-slate-50/70 hover:bg-slate-50 p-5 rounded-2xl border border-slate-200/80 transition-all space-y-4 flex flex-col justify-between group">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-[11px] font-extrabold text-rose-700 bg-rose-100/80 px-2.5 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-600" />
                High Priority
              </span>
              <span className="text-[11px] text-slate-400 font-bold">Confidence: 94%</span>
            </div>

            <h4 className="text-sm font-black text-slate-900 leading-snug">
              Immediate Foliar Fertilizer Application
            </h4>

            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              Sector B (Maize) displays an 18% dip in Leaf Chlorophyll Index (NDRE). Apply 25kg/ha Urea-based soluble
              Nitrogen before rain expected on Thursday.
            </p>

            <div className="flex items-center justify-between p-2.5 bg-white rounded-xl border border-slate-200/60 text-xs">
              <span className="text-slate-500 font-semibold">Target Area: Sector B (34 ha)</span>
              <span className="text-emerald-700 font-extrabold bg-emerald-50 px-2 py-0.5 rounded">
                ROI: +8.4%
              </span>
            </div>
          </div>

          <button
            onClick={() => onOpenScheduleModal({
              title: 'Immediate Foliar Fertilizer Application',
              category: 'Fertilizer',
              target: 'Sector B (34 ha)',
              priority: 'High',
            })}
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold text-white bg-[#0f9f6e] hover:bg-[#087f5b] shadow-xs hover:shadow transition-all cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Schedule Work Order</span>
          </button>
        </div>

        {/* Recommendation 2: Adjust Drip Irrigation (Medium Priority) */}
        <div className="bg-slate-50/70 hover:bg-slate-50 p-5 rounded-2xl border border-slate-200/80 transition-all space-y-4 flex flex-col justify-between group">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-[11px] font-extrabold text-amber-800 bg-amber-100/80 px-2.5 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                Medium Priority
              </span>
              <span className="text-[11px] text-slate-400 font-bold">Confidence: 91%</span>
            </div>

            <h4 className="text-sm font-black text-slate-900 leading-snug">
              Adjust Drip Irrigation Schedule
            </h4>

            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              Elevated surface temperature of 42 °C detected in Sector C2. Increase evening pulse frequency by 15% to
              maintain root-zone soil water tension.
            </p>

            <div className="flex items-center justify-between p-2.5 bg-white rounded-xl border border-slate-200/60 text-xs">
              <span className="text-slate-500 font-semibold">Target: Valve #4 & #7</span>
              <span className="text-slate-700 font-extrabold flex items-center gap-1">
                <Clock className="w-3 h-3 text-slate-400" />
                18:00 - 20:30
              </span>
            </div>
          </div>

          <button
            onClick={() => onOpenScheduleModal({
              title: 'Automate Valve #4 & #7 Drip Cycle',
              category: 'Irrigation',
              target: 'Valve #4 & #7',
              priority: 'Medium',
            })}
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200/80 transition-all cursor-pointer"
          >
            <Droplets className="w-3.5 h-3.5 text-[#0f9f6e]" />
            <span>Automate Valve #4</span>
          </button>
        </div>

        {/* Recommendation 3: Preventative Spray (Preventative) */}
        <div className="bg-slate-50/70 hover:bg-slate-50 p-5 rounded-2xl border border-slate-200/80 transition-all space-y-4 flex flex-col justify-between group">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-[11px] font-extrabold text-sky-800 bg-sky-100/80 px-2.5 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                Preventative
              </span>
              <span className="text-[11px] text-slate-400 font-bold">Confidence: 98%</span>
            </div>

            <h4 className="text-sm font-black text-slate-900 leading-snug">
              Blight & Rust Preventative Spray
            </h4>

            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              Relative humidity sustained above 62.5% combined with 23.1 °C temperature elevates spore germination
              probability. Apply organic bio-fungicide copper sulfate.
            </p>

            <div className="flex items-center justify-between p-2.5 bg-white rounded-xl border border-slate-200/60 text-xs">
              <span className="text-slate-500 font-semibold">Method: Drone Spraying</span>
              <span className="text-slate-700 font-extrabold">Dosage: 2.2 L/ha</span>
            </div>
          </div>

          <button
            onClick={() => onOpenScheduleModal({
              title: 'Blight & Rust Preventative Spray Protocol',
              category: 'Protection',
              target: 'Drone Squad Alpha',
              priority: 'Preventative',
            })}
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200/80 transition-all cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-sky-600" />
            <span>View Spray Protocol</span>
          </button>
        </div>
      </div>
    </div>
  );
}
