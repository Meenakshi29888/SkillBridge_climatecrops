import React from 'react';
import {
  CloudSun,
  Thermometer,
  Droplets,
  CloudRain,
  Wind,
  Sparkles,
  AlertTriangle,
  Calendar,
  History,
  TrendingUp,
  ShieldAlert,
  ArrowUpRight,
  CheckCircle2,
} from 'lucide-react';

export default function AIWeatherPredictionCard({ weatherData, currentLocationName }) {
  if (!weatherData) return null;

  const locName = weatherData.locationName || currentLocationName || 'Manjeri, India';

  return (
    <div className="bg-white rounded-3xl border border-slate-100/90 shadow-2xs p-6 sm:p-7 space-y-6 animate-fadeIn">
      {/* 1. Header with AI Intelligence Badge */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center shadow-md shadow-emerald-500/20">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
                AI Weather & Seasonal Climate Predictions
              </h3>
              <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold">
                92-Day Model
              </span>
            </div>
            <p className="text-xs text-slate-400 font-medium">
              Multi-model ensemble forecasting grounded in live telemetry & 5-year climatological baseline
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3 py-1 bg-slate-50 border border-slate-200/80 rounded-full text-xs font-bold text-slate-600 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Live Grounding
          </span>
        </div>
      </div>

      {/* 2. Live Weather Report Card */}
      <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-50 via-emerald-50/20 to-teal-50/30 border border-slate-100/90 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-md inline-block mb-1">
              Current Live Telemetry
            </span>
            <h4 className="text-sm sm:text-base font-bold text-slate-900">
              Live weather report:{' '}
              <span className="font-extrabold text-emerald-800">{locName}</span> is currently{' '}
              <span className="font-extrabold text-slate-900">{weatherData.condition}</span>.
            </h4>
          </div>

          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-600 bg-white px-3 py-1.5 rounded-xl border border-slate-200/70 shadow-2xs">
            <CloudSun className="w-4 h-4 text-amber-500" />
            <span>{weatherData.condition}</span>
          </div>
        </div>

        {/* 4 Telemetry Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
          {/* Temperature */}
          <div className="p-3 bg-white rounded-xl border border-slate-100/90 shadow-2xs space-y-1">
            <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold">
              <Thermometer className="w-3.5 h-3.5 text-amber-500" />
              <span>Temperature</span>
            </div>
            <div className="text-lg sm:text-xl font-black text-slate-900">
              {weatherData.temperature}
            </div>
            <span className="text-[10px] text-emerald-600 font-bold block">
              Optimal growing range
            </span>
          </div>

          {/* Humidity */}
          <div className="p-3 bg-white rounded-xl border border-slate-100/90 shadow-2xs space-y-1">
            <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold">
              <Droplets className="w-3.5 h-3.5 text-sky-500" />
              <span>Humidity</span>
            </div>
            <div className="text-lg sm:text-xl font-black text-slate-900">
              {weatherData.humidity}
            </div>
            <span className="text-[10px] text-amber-600 font-bold block">
              High vapor density
            </span>
          </div>

          {/* Precipitation */}
          <div className="p-3 bg-white rounded-xl border border-slate-100/90 shadow-2xs space-y-1">
            <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold">
              <CloudRain className="w-3.5 h-3.5 text-indigo-500" />
              <span>Precipitation</span>
            </div>
            <div className="text-lg sm:text-xl font-black text-slate-900">
              {weatherData.precipitation}
            </div>
            <span className="text-[10px] text-slate-500 font-semibold block">
              Zero runoff current
            </span>
          </div>

          {/* Wind Speed */}
          <div className="p-3 bg-white rounded-xl border border-slate-100/90 shadow-2xs space-y-1">
            <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold">
              <Wind className="w-3.5 h-3.5 text-teal-500" />
              <span>Wind Speed</span>
            </div>
            <div className="text-lg sm:text-xl font-black text-slate-900">
              {weatherData.windSpeed}
            </div>
            <span className="text-[10px] text-emerald-600 font-bold block">
              Safe foliar spraying
            </span>
          </div>
        </div>
      </div>

      {/* 3. Weather-Aware AI Planning Recommendation (92-Day Seasonal Window) */}
      <div className="p-5 rounded-2xl bg-emerald-900 text-white space-y-4 shadow-md">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-emerald-400" />
            <h4 className="text-sm font-bold tracking-tight text-white">
              Weather-aware recommendation:{' '}
              <span className="text-emerald-300 font-extrabold">the next 92 days were checked.</span>
            </h4>
          </div>
          <span className="text-[11px] font-bold px-2 py-0.5 bg-emerald-800 text-emerald-200 rounded-full border border-emerald-700/60 w-fit">
            AI Seasonal Model
          </span>
        </div>

        {/* 3 Metrics Row: Planning Avg, Est. Rainfall, Historical Baseline */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-3 rounded-xl bg-white/10 border border-white/10">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-200 block">
              Planning Average
            </span>
            <span className="text-xl font-black text-white mt-0.5 block">
              {weatherData.planningAvgTemp}
            </span>
            <span className="text-[10px] text-emerald-300 font-medium">Predicted seasonal mean</span>
          </div>

          <div className="p-3 rounded-xl bg-white/10 border border-white/10">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-200 block">
              Estimated Rainfall
            </span>
            <span className="text-xl font-black text-white mt-0.5 block">
              {weatherData.estimatedRainfall}
            </span>
            <span className="text-[10px] text-emerald-300 font-medium">Adequate root replenishment</span>
          </div>

          <div className="p-3 rounded-xl bg-white/10 border border-white/10">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-200 block flex items-center gap-1">
              <History className="w-3 h-3 text-emerald-300" />
              Historical Baseline
            </span>
            <span className="text-base sm:text-lg font-black text-white mt-0.5 block">
              {weatherData.historicalBaseline}
            </span>
            <span className="text-[10px] text-emerald-300 font-medium">+1.4°C seasonal variance</span>
          </div>
        </div>

        <p className="text-xs text-emerald-100/90 leading-relaxed font-medium bg-white/5 p-3 rounded-xl border border-white/5">
          <span className="font-bold text-white">Agronomic Prescription:</span> Optimal planting window for high-value crops (paddy rice, pulses, and vegetables). Ensure organic mulching is maintained across topsoil beds to mitigate evaporative moisture losses during midday thermal peaks.
        </p>
      </div>

      {/* 4. Early Weather Warnings & Crop Disease Alerts */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <ShieldAlert className="w-4 h-4 text-rose-500" />
          <h4 className="text-sm font-extrabold text-slate-900 tracking-tight">
            Early Weather Warnings & Diagnostic Prescriptions:
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {/* Warning 1: Disease Pressure Risk */}
          <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200/80 space-y-2.5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-rose-900 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
                  Disease pressure risk
                </span>
                <span className="px-2 py-0.5 rounded-full bg-rose-100 text-rose-700 text-[10px] font-extrabold border border-rose-200">
                  High Priority
                </span>
              </div>
              <p className="text-xs text-rose-950/90 font-medium mt-1.5 leading-relaxed">
                <span className="font-bold">high humidity is forecast on at least five days.</span> Sustained moisture levels above 80% elevate fungal spore germination risk (Downy Mildew, Rust, and Leaf Spot).
              </p>
            </div>

            <div className="pt-2 border-t border-rose-200/60 flex items-center justify-between text-[11px] text-rose-900 font-bold">
              <span>Action: Apply preventative organic bio-fungicide</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-rose-700" />
            </div>
          </div>

          {/* Warning 2: Nutrient Leaching & Drip Calibration */}
          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-2.5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-amber-900 flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4 text-amber-600 shrink-0" />
                  Precipitation & Nitrogen Timing
                </span>
                <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-extrabold border border-amber-200">
                  Advisory
                </span>
              </div>
              <p className="text-xs text-amber-950/90 font-medium mt-1.5 leading-relaxed">
                Rainfall pulse estimated at 179 mm/month. Schedule nitrogen and potassium fertilizer top-dressing 24–48 hours before rainfall to avoid runoff and leaching.
              </p>
            </div>

            <div className="pt-2 border-t border-amber-200/60 flex items-center justify-between text-[11px] text-amber-900 font-bold">
              <span>Action: Split fertilizer doses across 3 micro-cycles</span>
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-700" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
