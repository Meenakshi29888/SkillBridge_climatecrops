import React from 'react';
import { Sprout, Lightbulb } from 'lucide-react';

export default function RecommendedFertilizersWidget() {
  const fertilizers = [
    {
      name: 'Urea (46% N)',
      description: 'Split dose 30 DAT',
      dosage: '25 kg / Acre',
    },
    {
      name: 'Sulphur 90% (WDG)',
      description: 'Improves pungency & scale color',
      dosage: '10 kg / Acre',
    },
    {
      name: '00:52:34 (MKP)',
      description: 'For upcoming bulb development',
      dosage: '5 kg / Fertigation',
    },
  ];

  return (
    <div className="bg-white rounded-3xl border border-slate-200/70 p-6 shadow-xs space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <Sprout className="w-4 h-4 text-emerald-700" />
          <h4 className="text-sm font-bold text-slate-900">Recommended Fertilizers</h4>
        </div>
        <button
          onClick={() => alert('Viewing complete nutrient dosage chart')}
          className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 cursor-pointer"
        >
          View All
        </button>
      </div>

      {/* Fertilizers List */}
      <div className="space-y-2.5">
        {fertilizers.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between p-3 rounded-2xl bg-slate-50/70 border border-slate-100 hover:bg-slate-50 transition-colors"
          >
            <div>
              <h5 className="text-xs font-bold text-slate-900">{item.name}</h5>
              <p className="text-[10px] text-slate-400 mt-0.5">{item.description}</p>
            </div>
            <span className="text-xs font-black text-slate-800 bg-white px-2.5 py-1 rounded-xl border border-slate-200/60 shadow-2xs">
              {item.dosage}
            </span>
          </div>
        ))}
      </div>

      {/* Agronomist Tip */}
      <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-3.5 flex items-start gap-2.5">
        <Lightbulb className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
        <div className="text-[11px] text-emerald-950 leading-relaxed">
          <span className="font-bold block text-emerald-900 mb-0.5">Agronomist Tip:</span>
          Avoid excess nitrogen after 60 days to prevent thick necks and storage rots.
        </div>
      </div>
    </div>
  );
}
