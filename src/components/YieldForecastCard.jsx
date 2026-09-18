import React from 'react';
import { Wheat, Coins, Zap, Sparkles, TrendingUp, DollarSign } from 'lucide-react';

export default function YieldForecastCard({ forecastData }) {
  const totalYield = '46.8 Tons';
  const totalRevenue = '$94,200';

  // Rich graphical crop yield breakdown
  const crops = [
    {
      id: 'wheat',
      crop: 'Wheat (Durum)',
      yieldVal: '18.5 Tons',
      percent: 39,
      trend: '+8.4%',
      barColor: 'from-amber-400 to-amber-600',
      iconBg: 'bg-amber-50 text-amber-600 border-amber-100',
      icon: Wheat,
    },
    {
      id: 'corn',
      crop: 'Sweet Corn',
      yieldVal: '14.2 Tons',
      percent: 30,
      trend: '+4.2%',
      barColor: 'from-yellow-400 to-amber-500',
      iconBg: 'bg-yellow-50 text-yellow-600 border-yellow-100',
      icon: Zap,
    },
    {
      id: 'rice',
      crop: 'Paddy Rice',
      yieldVal: '9.1 Tons',
      percent: 20,
      trend: 'Stable',
      barColor: 'from-slate-400 to-slate-600',
      iconBg: 'bg-slate-50 text-slate-600 border-slate-100',
      icon: Coins,
    },
    {
      id: 'vegetables',
      crop: 'Onions & Veggies',
      yieldVal: '5.0 Tons',
      percent: 11,
      trend: '+14.0%',
      barColor: 'from-emerald-400 to-emerald-600',
      iconBg: 'bg-emerald-50 text-emerald-600 border-emerald-100',
      icon: Sparkles,
    },
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-5 sm:p-6 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-50">
        <div>
          <h2 className="text-base font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-amber-500" />
            Seasonal Yield Forecast
          </h2>
          <p className="text-[11px] text-slate-400 font-medium">
            AI biomass model vs historical 5-year averages
          </p>
        </div>
        <span className="px-2 py-0.5 bg-amber-50 text-amber-700 border border-amber-200 text-[10px] font-bold rounded-full">
          +11.4% Growth
        </span>
      </div>

      {/* Graphical Yield Breakdown with Progress Bars */}
      <div className="space-y-3.5 my-3">
        {crops.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
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
                      {item.crop}
                    </span>
                    <span className="text-[10px] text-slate-400 block font-semibold">
                      {item.percent}% of total harvest
                    </span>
                  </div>
                </div>

                <div className="text-right flex flex-col items-end">
                  <span className="text-xs font-black text-slate-900">
                    {item.yieldVal}
                  </span>
                  <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.2 rounded-full border border-emerald-100 mt-0.5">
                    {item.trend}
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-1.5 bg-slate-200/60 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${item.barColor} transition-all duration-500`}
                  style={{ width: `${item.percent * 2.2}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Total Expected Yield Footer */}
      <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
        <div>
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
            Projected Total Biomass
          </span>
          <span className="text-lg font-black text-slate-900 tracking-tight">
            {totalYield}
          </span>
        </div>
        <div className="text-right">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
            Est. Market Value
          </span>
          <span className="text-lg font-black text-emerald-600 tracking-tight">
            {totalRevenue}
          </span>
        </div>
      </div>
    </div>
  );
}

