import React from 'react';
import {
  Thermometer,
  Droplets,
  Wind,
  Sun,
  CloudRain,
  Compass,
  ArrowUpRight,
} from 'lucide-react';

export default function WeatherCard({ weatherData }) {
  // Rich graphical weather telemetry
  const weatherMetrics = [
    {
      label: 'Air Temperature',
      value: '24°C',
      sub: 'Low 19° · High 28°',
      progress: 60, // mapped to 10-40C scale
      color: 'from-amber-400 to-rose-500',
      icon: Thermometer,
      iconBg: 'bg-amber-50 text-amber-600 border-amber-100',
      badge: 'Comfortable',
      badgeBg: 'bg-amber-50 text-amber-700 border-amber-200',
    },
    {
      label: 'Relative Humidity',
      value: '63%',
      sub: 'Optimal vapor deficit',
      progress: 63,
      color: 'from-sky-400 to-blue-600',
      icon: Droplets,
      iconBg: 'bg-sky-50 text-sky-600 border-sky-100',
      badge: 'Ideal VPD',
      badgeBg: 'bg-sky-50 text-sky-700 border-sky-200',
    },
    {
      label: 'Wind Flow Speed',
      value: '9 km/h',
      sub: 'North-West · Gentle',
      progress: 30, // 9/30 kmh
      color: 'from-teal-400 to-emerald-600',
      icon: Wind,
      iconBg: 'bg-teal-50 text-teal-600 border-teal-100',
      badge: 'Safe Spraying',
      badgeBg: 'bg-teal-50 text-teal-700 border-teal-200',
    },
    {
      label: 'Daylight Radiation',
      value: '8.4 hrs',
      sub: 'UV Index: 6.8 (High)',
      progress: 84,
      color: 'from-yellow-400 to-amber-500',
      icon: Sun,
      iconBg: 'bg-yellow-50 text-yellow-600 border-yellow-100',
      badge: 'Peak Solar',
      badgeBg: 'bg-yellow-50 text-yellow-700 border-yellow-200',
    },
    {
      label: 'Rain Probability',
      value: '12%',
      sub: 'Zero storm risk (48h)',
      progress: 12,
      color: 'from-indigo-400 to-purple-500',
      icon: CloudRain,
      iconBg: 'bg-indigo-50 text-indigo-600 border-indigo-100',
      badge: 'Low Chance',
      badgeBg: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    },
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-5 sm:p-6 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-50">
        <div>
          <h2 className="text-base font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <Sun className="w-5 h-5 text-amber-500" />
            Farm Weather Conditions
          </h2>
          <p className="text-[11px] text-slate-400 font-medium">
            Live on-field micrometeorology & spray safety
          </p>
        </div>
        <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold rounded-full flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Optimal
        </span>
      </div>

      {/* Graphical Metrics List with Progress Bars */}
      <div className="space-y-3.5 my-3">
        {weatherMetrics.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="p-2.5 rounded-xl bg-slate-50/60 hover:bg-slate-50 border border-slate-100/80 transition-colors space-y-1.5"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div
                    className={`w-7 h-7 rounded-lg border flex items-center justify-center shrink-0 ${item.iconBg}`}
                  >
                    <Icon className="w-3.5 h-3.5 stroke-[2]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-800">
                      {item.label}
                    </span>
                    <span className="text-[10px] text-slate-400 block font-medium">
                      {item.sub}
                    </span>
                  </div>
                </div>

                <div className="text-right flex flex-col items-end">
                  <span className="text-xs font-black text-slate-900">
                    {item.value}
                  </span>
                  <span
                    className={`text-[9px] font-bold px-1.5 py-0.2 rounded-full border mt-0.5 ${item.badgeBg}`}
                  >
                    {item.badge}
                  </span>
                </div>
              </div>

              {/* Graphical mini progress indicator */}
              <div className="w-full h-1.5 bg-slate-200/60 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${item.color} transition-all duration-500`}
                  style={{ width: `${item.progress}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Advisory */}
      <div className="pt-2 border-t border-slate-50 flex items-center justify-between text-[11px] text-slate-500">
        <span>Spraying Window Status</span>
        <span className="font-bold text-emerald-600 flex items-center gap-1">
          Open until 11:30 AM
          <ArrowUpRight className="w-3 h-3" />
        </span>
      </div>
    </div>
  );
}

