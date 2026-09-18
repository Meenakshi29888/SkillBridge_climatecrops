import React, { useState } from 'react';
import { Clock, Zap, LayoutGrid, Check, RefreshCw } from 'lucide-react';

export default function IrrigationScheduleCard() {
  const [isActive, setIsActive] = useState(true);
  const [mode, setMode] = useState('Automatic');
  const [cycles, setCycles] = useState(18);

  const toggleMode = () => {
    setMode((prev) => (prev === 'Automatic' ? 'Manual' : 'Automatic'));
  };

  const toggleFlow = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-bold text-slate-900 tracking-tight">
          Irrigation Schedule
        </h2>
      </div>

      {/* Rows */}
      <div className="space-y-4">
        {/* Next Irrigation */}
        <div className="flex items-center justify-between py-1">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100/80 flex items-center justify-center text-slate-400">
              <Clock className="w-4 h-4 stroke-[1.75]" />
            </div>
            <span className="text-sm font-medium text-slate-600">
              Next Irrigation
            </span>
          </div>
          <span className="text-sm font-bold text-slate-900 tracking-tight">
            04:30 PM
          </span>
        </div>

        {/* Water Flow */}
        <div className="flex items-center justify-between py-1">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100/80 flex items-center justify-center text-slate-400">
              <Zap className="w-4 h-4 stroke-[1.75]" />
            </div>
            <span className="text-sm font-medium text-slate-600">
              Water Flow
            </span>
          </div>
          <button
            onClick={toggleFlow}
            className="flex items-center gap-1.5 text-sm font-bold text-emerald-600 hover:opacity-80 transition-opacity cursor-pointer"
            title="Click to toggle flow state"
          >
            {isActive ? (
              <>
                <Check className="w-4 h-4 stroke-[3] text-emerald-600" />
                <span>Active</span>
              </>
            ) : (
              <span className="text-slate-400 font-semibold">Paused</span>
            )}
          </button>
        </div>

        {/* Mode */}
        <div className="flex items-center justify-between py-1">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100/80 flex items-center justify-center text-slate-400">
              <LayoutGrid className="w-4 h-4 stroke-[1.75]" />
            </div>
            <span className="text-sm font-medium text-slate-600">
              Mode
            </span>
          </div>
          <button
            onClick={toggleMode}
            className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
            title="Click to toggle between Automatic & Manual"
          >
            {mode}
          </button>
        </div>
      </div>

      {/* Today's Cycles Footer */}
      <div className="pt-4 mt-2 border-t border-slate-100 flex items-center justify-between">
        <span className="text-xs font-semibold text-slate-500">
          Today's Cycles
        </span>
        <span className="text-base font-extrabold text-slate-900 tracking-tight">
          {cycles} Completed
        </span>
      </div>
    </div>
  );
}
