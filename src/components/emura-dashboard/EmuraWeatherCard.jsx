import React from 'react';
import { Thermometer, Wind, Gauge, Sun, Cloud } from 'lucide-react';

export default function EmuraWeatherCard() {
  return (
    <div className="bg-white rounded-3xl border border-slate-100 p-6 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
      {/* Left: 3D Sun & Cloud Illustration */}
      <div className="flex items-center gap-4">
        <div className="relative w-20 h-16 flex items-center justify-center shrink-0">
          {/* Sun disc */}
          <div className="absolute top-0 left-2 w-10 h-10 rounded-full bg-gradient-to-tr from-amber-400 to-yellow-300 shadow-md animate-pulse" />
          {/* Cloud bubble */}
          <div className="absolute bottom-0 right-0 w-16 h-10 rounded-2xl bg-gradient-to-b from-white to-slate-100 shadow-md border border-slate-100/80 flex items-center justify-center">
            <div className="w-12 h-6 bg-white/80 rounded-xl" />
          </div>
        </div>

        <div>
          <h4 className="text-base font-bold text-slate-900 leading-tight">
            Partly Cloudy
          </h4>
          <p className="text-xs text-slate-400 font-medium mt-0.5">
            <span className="font-bold text-slate-700 text-sm">16</span> March 2026
          </p>
        </div>
      </div>

      {/* Right: 3 Metric Pills */}
      <div className="space-y-2 w-full sm:w-auto">
        <div className="flex items-center justify-between sm:justify-start gap-3 px-3.5 py-1.5 rounded-xl bg-slate-50 border border-slate-100">
          <div className="flex items-center gap-2 text-slate-500 text-xs font-medium">
            <Thermometer className="w-3.5 h-3.5 text-slate-400" />
            <span>Temperature</span>
          </div>
          <span className="text-xs font-bold text-slate-900">24 °C</span>
        </div>

        <div className="flex items-center justify-between sm:justify-start gap-3 px-3.5 py-1.5 rounded-xl bg-slate-50 border border-slate-100">
          <div className="flex items-center gap-2 text-slate-500 text-xs font-medium">
            <Wind className="w-3.5 h-3.5 text-slate-400" />
            <span>Wind</span>
          </div>
          <span className="text-xs font-bold text-slate-900">3 m/s</span>
        </div>

        <div className="flex items-center justify-between sm:justify-start gap-3 px-3.5 py-1.5 rounded-xl bg-slate-50 border border-slate-100">
          <div className="flex items-center gap-2 text-slate-500 text-xs font-medium">
            <Gauge className="w-3.5 h-3.5 text-slate-400" />
            <span>Humidity</span>
          </div>
          <span className="text-xs font-bold text-slate-900">80 %</span>
        </div>
      </div>
    </div>
  );
}
