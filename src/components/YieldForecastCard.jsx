import React from 'react';
import { Wheat, Coins, Zap, Sparkles } from 'lucide-react';

const iconComponents = {
  Wheat: Wheat,
  Coins: Coins,
  Zap: Zap,
  Sparkles: Sparkles,
};

export default function YieldForecastCard({ forecastData }) {
  const totalYield = '47.8 Tons';

  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm flex flex-col justify-between">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-bold text-slate-900 tracking-tight">
          Seasonal Yield Forecast
        </h2>
      </div>

      <div className="space-y-3.5">
        {forecastData.map((item) => {
          const Icon = iconComponents[item.icon] || Sparkles;
          return (
            <div
              key={item.id}
              className="flex items-center justify-between py-1 group hover:translate-x-0.5 transition-transform"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${item.iconColor}`}
                >
                  <Icon className="w-4 h-4 stroke-[2]" />
                </div>
                <span className="text-sm font-medium text-slate-700">
                  {item.crop}
                </span>
              </div>
              <span className="text-sm font-bold text-slate-900 tracking-tight">
                {item.yieldVal}
              </span>
            </div>
          );
        })}
      </div>

      {/* Total Expected Yield Footer */}
      <div className="pt-4 mt-2 border-t border-slate-100 flex items-center justify-between">
        <span className="text-xs font-semibold text-slate-500">
          Total Expected Yield
        </span>
        <span className="text-base font-extrabold text-slate-900 tracking-tight">
          {totalYield}
        </span>
      </div>
    </div>
  );
}
