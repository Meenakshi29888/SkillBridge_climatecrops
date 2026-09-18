import React from 'react';
import { Sun } from 'lucide-react';

export default function PlotWeatherWidget() {
  return (
    <div className="bg-[#101c2c] rounded-3xl p-6 text-white shadow-xl space-y-4 border border-slate-800">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-[10px] text-slate-400 block font-bold uppercase tracking-wider">
            Plot Weather Forecast
          </span>
          <h4 className="text-base font-black text-white tracking-tight mt-0.5">
            24°C • Sunny &amp; Clear
          </h4>
        </div>
        <div className="w-10 h-10 rounded-2xl bg-amber-400/20 text-amber-400 flex items-center justify-center border border-amber-400/30">
          <Sun className="w-6 h-6 stroke-[2.5]" />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-800/80 text-center">
        <div>
          <span className="text-[10px] text-slate-400 block">Humidity</span>
          <span className="text-xs font-bold text-white">54%</span>
        </div>
        <div>
          <span className="text-[10px] text-slate-400 block">Wind</span>
          <span className="text-xs font-bold text-white">9 km/h</span>
        </div>
        <div>
          <span className="text-[10px] text-slate-400 block">Rain Prob.</span>
          <span className="text-xs font-bold text-white">0%</span>
        </div>
      </div>
    </div>
  );
}
