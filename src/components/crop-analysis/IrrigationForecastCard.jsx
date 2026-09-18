import React from 'react';
import { Droplets } from 'lucide-react';

export default function IrrigationForecastCard() {
  const forecastDays = [
    { day: 'Apr 10', heightPercent: 45, isCurrent: true },
    { day: 'Apr 11', heightPercent: 78, isCurrent: false },
    { day: 'Apr 12', heightPercent: 60, isCurrent: false },
    { day: 'Apr 13', heightPercent: 0, isCurrent: false },
    { day: 'Apr 14', heightPercent: 52, isCurrent: false },
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200/70 p-6 shadow-xs flex flex-col justify-between">
      {/* Title */}
      <div className="flex items-center gap-2 mb-4">
        <Droplets className="w-4 h-4 text-sky-500 fill-sky-500" />
        <h3 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">
          Irrigation Forecast
        </h3>
      </div>

      {/* Bar Chart */}
      <div className="pt-4 pb-2">
        <div className="flex items-end justify-between h-28 sm:h-32 px-2 border-b border-slate-100">
          {forecastDays.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center gap-2 flex-1 group cursor-pointer"
            >
              <div className="w-full flex items-end justify-center h-20">
                {item.heightPercent > 0 ? (
                  <div
                    className={`w-6 sm:w-8 rounded-t-lg transition-all duration-300 group-hover:opacity-85 ${
                      item.isCurrent
                        ? 'bg-[#007799]'
                        : 'bg-[#70d4ec]'
                    }`}
                    style={{ height: `${item.heightPercent}%` }}
                  />
                ) : (
                  <div className="w-6 sm:w-8 h-1 bg-slate-100 rounded-t" />
                )}
              </div>
              <span className="text-[11px] font-medium text-slate-500 pb-1">
                {item.day}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-3 pt-2 text-center text-xs text-slate-500">
        Next: <span className="font-extrabold text-slate-900">Today , 3pm</span>
      </div>
    </div>
  );
}
