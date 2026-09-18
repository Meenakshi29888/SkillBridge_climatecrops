import React, { useState } from 'react';
import {
  LayoutGrid,
  Monitor,
  FlaskConical,
  RefreshCw,
  Droplets,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';

export default function StatsGrid({ stats }) {
  const [activeMetricHover, setActiveMetricHover] = useState(null);

  // Rich telemetry metadata with graphical progress & visual badges
  const enrichedMetrics = [
    {
      id: 'active-fields',
      title: 'Total Active Fields',
      value: '24',
      unit: 'Parcels',
      subtext: '+2 parcels onboarded',
      trend: '+8.3%',
      trendUp: true,
      progress: 86, // 24/28 capacity
      progressLabel: '86% Capacity Utilized',
      accentColor: 'from-emerald-500 to-teal-600',
      badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      iconBg: 'bg-emerald-50 text-emerald-600 border-emerald-100',
      icon: LayoutGrid,
      visualType: 'parcels',
    },
    {
      id: 'crops-monitored',
      title: 'Crops Monitored',
      value: '12',
      unit: 'Varieties',
      subtext: '4 Cereals · 5 Veg · 3 Fruits',
      trend: '100% Tracked',
      trendUp: true,
      progress: 100,
      progressLabel: 'Full Multispectral Coverage',
      accentColor: 'from-blue-500 to-indigo-600',
      badgeBg: 'bg-blue-50 text-blue-700 border-blue-200',
      iconBg: 'bg-blue-50 text-blue-600 border-blue-100',
      icon: Monitor,
      visualType: 'categories',
    },
    {
      id: 'soil-moisture',
      title: 'Soil Moisture Average',
      value: '68%',
      unit: 'VWC',
      subtext: 'Target: 60% – 75% optimal',
      trend: 'Optimal',
      trendUp: true,
      progress: 68,
      progressLabel: 'Ideal Root Absorption',
      accentColor: 'from-cyan-500 to-sky-600',
      badgeBg: 'bg-cyan-50 text-cyan-700 border-cyan-200',
      iconBg: 'bg-cyan-50 text-cyan-600 border-cyan-100',
      icon: FlaskConical,
      visualType: 'gauge',
    },
    {
      id: 'irrigation-cycles',
      title: 'Irrigation Cycles Today',
      value: '18',
      unit: '/ 22 Scheduled',
      subtext: 'Next: Zone 4 at 04:30 PM',
      trend: '82% Done',
      trendUp: true,
      progress: 82,
      progressLabel: '4 Cycles Remaining Today',
      accentColor: 'from-teal-500 to-emerald-600',
      badgeBg: 'bg-teal-50 text-teal-700 border-teal-200',
      iconBg: 'bg-teal-50 text-teal-600 border-teal-100',
      icon: RefreshCw,
      visualType: 'cycles',
    },
    {
      id: 'water-usage',
      title: 'Daily Water Usage',
      value: '12,400',
      unit: 'Liters',
      subtext: '5.2% below allotted quota',
      trend: '-650 L saved',
      trendUp: true,
      progress: 74, // 74% of 16,500L daily budget
      progressLabel: '74% of Daily Allotment',
      accentColor: 'from-sky-500 to-blue-600',
      badgeBg: 'bg-sky-50 text-sky-700 border-sky-200',
      iconBg: 'bg-sky-50 text-sky-600 border-sky-100',
      icon: Droplets,
      visualType: 'budget',
    },
    {
      id: 'crop-health',
      title: 'Crop Health Score',
      value: '92%',
      unit: 'Index',
      subtext: 'Multispectral NDVI Vigour',
      trend: '+3.1% Vigour',
      trendUp: true,
      progress: 92,
      progressLabel: 'Peak Vegetative Vigor',
      accentColor: 'from-emerald-500 to-green-600',
      badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      iconBg: 'bg-emerald-50 text-emerald-600 border-emerald-100',
      icon: CheckCircle2,
      visualType: 'score',
    },
    {
      id: 'weather-risk',
      title: 'Weather Risk Level',
      value: 'Low Risk',
      unit: 'Safe',
      subtext: 'Zero storm / frost threat',
      trend: '98/100 Stability',
      trendUp: true,
      progress: 98,
      progressLabel: 'Clear Weather Window (7 Days)',
      accentColor: 'from-emerald-500 to-teal-500',
      badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      iconBg: 'bg-emerald-50 text-emerald-600 border-emerald-100',
      icon: ShieldCheck,
      visualType: 'risk',
    },
    {
      id: 'estimated-yield',
      title: 'Seasonal Yield Estimate',
      value: '46.8',
      unit: 'Tons',
      subtext: 'Target 42.0 T (+11.4%)',
      trend: '+4.8 T Surplus',
      trendUp: true,
      progress: 94,
      progressLabel: '94% Confidence Projection',
      accentColor: 'from-amber-500 to-orange-500',
      badgeBg: 'bg-amber-50 text-amber-700 border-amber-200',
      iconBg: 'bg-amber-50 text-amber-600 border-amber-100',
      icon: TrendingUp,
      visualType: 'yield',
    },
  ];

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {enrichedMetrics.map((item) => {
          const Icon = item.icon;
          const isHovered = activeMetricHover === item.id;

          return (
            <div
              key={item.id}
              onMouseEnter={() => setActiveMetricHover(item.id)}
              onMouseLeave={() => setActiveMetricHover(null)}
              className={`relative bg-white rounded-2xl p-5 border transition-all duration-200 flex flex-col justify-between group cursor-pointer shadow-xs hover:shadow-md ${
                isHovered
                  ? 'border-emerald-300 ring-2 ring-emerald-500/10 -translate-y-0.5'
                  : 'border-slate-100 hover:border-slate-200'
              }`}
            >
              {/* Header: Icon + Title + Trend Badge */}
              <div className="flex items-start justify-between gap-2 mb-3">
                <div className="flex items-center gap-2.5">
                  <div
                    className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-transform group-hover:scale-105 ${item.iconBg}`}
                  >
                    <Icon className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold text-slate-700 leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-slate-400 font-medium">
                      {item.subtext}
                    </p>
                  </div>
                </div>

                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full border shrink-0 flex items-center gap-0.5 ${item.badgeBg}`}
                >
                  <ArrowUpRight className="w-2.5 h-2.5" />
                  {item.trend}
                </span>
              </div>

              {/* Main Metric Value */}
              <div className="flex items-baseline gap-1.5 my-1">
                <span className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  {item.value}
                </span>
                {item.unit && (
                  <span className="text-xs font-bold text-slate-500">
                    {item.unit}
                  </span>
                )}
              </div>

              {/* Graphical Visualizer: Progress bar & visual micro-meters */}
              <div className="mt-3 pt-2.5 border-t border-slate-50 space-y-1.5">
                <div className="flex items-center justify-between text-[10px] font-semibold text-slate-500">
                  <span>{item.progressLabel}</span>
                  <span className="font-bold text-slate-800">{item.progress}%</span>
                </div>

                {/* Styled Gradient Progress Bar */}
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden p-0.5">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${item.accentColor} transition-all duration-700 ease-out`}
                    style={{ width: `${Math.min(item.progress, 100)}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

