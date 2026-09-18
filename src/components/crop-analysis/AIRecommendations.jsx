import React, { useState } from 'react';
import { Sparkles, Droplet, AlertTriangle, Sprout, Check } from 'lucide-react';

export default function AIRecommendations({ onApplyRecommendation }) {
  const [appliedRecs, setAppliedRecs] = useState({});

  const recommendations = [
    {
      id: 'irrigation',
      title: 'Increase Irrigation',
      confidence: '94% confidence',
      confidenceStyle: 'bg-amber-50 text-amber-700 border border-amber-200/60',
      description: 'Soil moisture below threshold in zones 3–5. Schedule drip irrigation within 48hrs.',
      icon: Droplet,
      iconBg: 'bg-amber-100/70 text-amber-600',
      borderAccent: 'border-l-4 border-l-amber-500',
      actionLabel: 'Schedule Drip',
    },
    {
      id: 'rust-disease',
      title: 'Monitor for Rust Disease',
      confidence: '76% confidence',
      confidenceStyle: 'bg-rose-50 text-rose-700 border border-rose-200/60',
      description: 'Early indicators of wheat rust detected. Apply fungicide preventatively.',
      icon: AlertTriangle,
      iconBg: 'bg-rose-100/70 text-rose-600',
      borderAccent: 'border-l-4 border-l-rose-400',
      actionLabel: 'Order Fungicide',
    },
    {
      id: 'fertilization',
      title: 'Optimal Fertilization Window',
      confidence: '88% confidence',
      confidenceStyle: 'bg-emerald-50 text-emerald-700 border border-emerald-200/60',
      description: 'N-P-K levels indicate good uptake window. Apply in next 3–5 days.',
      icon: Sprout,
      iconBg: 'bg-emerald-100/70 text-emerald-600',
      borderAccent: 'border-l-4 border-l-emerald-500',
      actionLabel: 'Schedule NPK',
    },
  ];

  const handleAction = (id) => {
    setAppliedRecs((prev) => ({ ...prev, [id]: true }));
    if (onApplyRecommendation) onApplyRecommendation(id);
  };

  return (
    <div className="space-y-3.5">
      {/* Section Header */}
      <div className="flex items-center gap-2">
        <Sparkles className="w-4 h-4 text-emerald-600" />
        <h3 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">
          AI Recommendations
        </h3>
      </div>

      {/* Cards List */}
      <div className="space-y-3">
        {recommendations.map((item) => {
          const Icon = item.icon;
          const isDone = appliedRecs[item.id];

          return (
            <div
              key={item.id}
              className={`bg-white rounded-2xl border border-slate-200/70 p-4 sm:p-5 shadow-xs transition-all hover:shadow-sm ${item.borderAccent}`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3.5 flex-1 min-w-0">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${item.iconBg}`}
                  >
                    <Icon className="w-4 h-4 stroke-[2]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <h4 className="text-sm font-bold text-slate-900 truncate">
                        {item.title}
                      </h4>
                      <span
                        className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${item.confidenceStyle}`}
                      >
                        {item.confidence}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Interactive trigger on hover / action */}
              <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-end">
                <button
                  onClick={() => handleAction(item.id)}
                  className={`text-xs font-semibold px-3 py-1 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer ${
                    isDone
                      ? 'bg-emerald-50 text-emerald-700'
                      : 'bg-slate-50 hover:bg-emerald-50 hover:text-emerald-700 text-slate-600 border border-slate-200/80'
                  }`}
                >
                  {isDone ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Action Scheduled</span>
                    </>
                  ) : (
                    <span>{item.actionLabel}</span>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
