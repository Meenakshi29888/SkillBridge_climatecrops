import React, { useState } from 'react';
import { Plus, Filter, Calendar as CalendarIcon, RefreshCw, CheckCircle2 } from 'lucide-react';
import CropScheduleHeader from './CropScheduleHeader';
import StageAccordion from './StageAccordion';
import SoilHealthWidget from './SoilHealthWidget';
import RecommendedFertilizersWidget from './RecommendedFertilizersWidget';
import PlotWeatherWidget from './PlotWeatherWidget';

export default function CropScheduleView({ onOpenLogOperation }) {
  const [activeFilter, setActiveFilter] = useState('Total');

  const filterTabs = [
    { id: 'Total', label: 'Total', count: 51, color: 'bg-slate-900 text-white' },
    { id: 'Today', label: 'Today', count: 1, color: 'bg-amber-100 text-amber-800' },
    { id: 'Pending', label: 'Pending', count: 11, color: 'bg-rose-100 text-rose-800' },
    { id: 'Completed', label: 'Completed', count: 0, color: 'bg-slate-100 text-slate-600' },
    { id: 'Skip', label: 'Skip', count: 0, color: 'bg-slate-100 text-slate-600' },
  ];

  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      {/* Onion Crop Lifecycle Banner / Header */}
      <CropScheduleHeader />

      {/* Task Filters and Action Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-100 shadow-2xs">
        <div className="flex flex-wrap items-center gap-2">
          {filterTabs.map((tab) => {
            const isSelected = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-slate-900 text-white shadow-sm ring-2 ring-slate-900/10'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                    isSelected ? 'bg-white/20 text-white' : tab.color
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        <button
          onClick={onOpenLogOperation}
          className="flex items-center gap-2 bg-[#10b981] hover:bg-[#059669] text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-sm hover:shadow transition-all cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Log Custom Operation</span>
        </button>
      </div>

      {/* Main 2-Column Schedule Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Growth Stages Accordion & Tasks */}
        <div className="lg:col-span-8 space-y-4">
          <StageAccordion />
        </div>

        {/* Right Column: Weather, Soil Health & Fertilizers */}
        <div className="lg:col-span-4 space-y-6">
          <PlotWeatherWidget />
          <SoilHealthWidget />
          <RecommendedFertilizersWidget />
        </div>
      </div>
    </div>
  );
}
