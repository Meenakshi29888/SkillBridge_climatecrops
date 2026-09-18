import React from 'react';
import {
  LayoutGrid,
  Monitor,
  FlaskConical,
  RefreshCw,
  Droplet,
  CheckCircle2,
  AlertTriangle,
  ShoppingBag
} from 'lucide-react';

const iconComponents = {
  LayoutGrid: LayoutGrid,
  Monitor: Monitor,
  FlaskConical: FlaskConical,
  RefreshCw: RefreshCw,
  Droplet: Droplet,
  CheckCircle2: CheckCircle2,
  AlertTriangle: AlertTriangle,
  ShoppingBag: ShoppingBag,
};

export default function StatsGrid({ stats }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-slate-100">
        {/* Render Top 4 cards */}
        {stats.slice(0, 4).map((item, idx) => {
          const Icon = iconComponents[item.icon] || LayoutGrid;
          return (
            <div
              key={item.id}
              className="p-5 flex items-center gap-4 hover:bg-slate-50/50 transition-colors"
            >
              <div className="w-11 h-11 rounded-full bg-slate-50 border border-slate-100/80 flex items-center justify-center text-slate-500 shrink-0">
                <Icon className="w-5 h-5 stroke-[1.75]" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-slate-400 font-medium tracking-normal mb-1">
                  {item.title}
                </p>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl font-bold text-slate-900 tracking-tight">
                    {item.value}
                  </span>
                  {item.unit && (
                    <span className="text-xs font-semibold text-slate-500">
                      {item.unit}
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="hidden lg:block border-t border-slate-100" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-slate-100">
        {/* Render Bottom 4 cards */}
        {stats.slice(4, 8).map((item, idx) => {
          const Icon = iconComponents[item.icon] || LayoutGrid;
          return (
            <div
              key={item.id}
              className="p-5 flex items-center gap-4 hover:bg-slate-50/50 transition-colors"
            >
              <div className="w-11 h-11 rounded-full bg-slate-50 border border-slate-100/80 flex items-center justify-center text-slate-500 shrink-0">
                <Icon className="w-5 h-5 stroke-[1.75]" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-slate-400 font-medium tracking-normal mb-1">
                  {item.title}
                </p>
                <div className="flex items-baseline gap-1.5">
                  <span className={`text-2xl font-bold tracking-tight ${
                    item.id === 'weather-risk' ? 'text-slate-900 text-xl sm:text-2xl' : 'text-slate-900'
                  }`}>
                    {item.value}
                  </span>
                  {item.unit && (
                    <span className="text-xs font-semibold text-slate-500">
                      {item.unit}
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
