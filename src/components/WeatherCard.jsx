import React from 'react';
import { Thermometer, ArrowDown, ArrowRight, Sun } from 'lucide-react';

const iconMap = {
  Thermometer: Thermometer,
  ArrowDown: ArrowDown,
  ArrowRight: ArrowRight,
  Sun: Sun,
};

export default function WeatherCard({ weatherData }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm flex flex-col justify-between">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-base font-bold text-slate-900 tracking-tight">
          Farm Weather Conditions
        </h2>
      </div>

      <div className="space-y-4">
        {weatherData.map((item, index) => {
          const Icon = iconMap[item.icon] || Sun;
          return (
            <div
              key={index}
              className="flex items-center justify-between py-1 group hover:translate-x-0.5 transition-transform"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100/80 flex items-center justify-center text-slate-400 group-hover:text-slate-600 transition-colors">
                  <Icon className="w-4 h-4 stroke-[1.75]" />
                </div>
                <span className="text-sm font-medium text-slate-600">
                  {item.label}
                </span>
              </div>
              <span className="text-sm font-bold text-slate-900 tracking-tight">
                {item.value}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
