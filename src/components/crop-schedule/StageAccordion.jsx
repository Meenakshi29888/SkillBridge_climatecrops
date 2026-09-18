import React, { useState } from 'react';
import { Check, ChevronDown, ChevronUp, Info, CheckSquare, Square } from 'lucide-react';

export default function StageAccordion({ activeFilter = 'all' }) {
  // Expanded stage state (Stage 4 default expanded as in screenshot)
  const [expandedStages, setExpandedStages] = useState({ 4: true });

  const [tasksState, setTasksState] = useState({
    task1: false,
    task2: false,
    task3: false,
  });

  const toggleStage = (stageNum) => {
    setExpandedStages((prev) => ({
      ...prev,
      [stageNum]: !prev[stageNum],
    }));
  };

  const toggleTask = (taskId) => {
    setTasksState((prev) => ({
      ...prev,
      [taskId]: !prev[taskId],
    }));
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
          <span>Crop Stage Schedule</span>
          <span className="text-xs font-normal text-slate-400">(7 Defined Stages)</span>
        </h3>
        <span className="text-xs text-slate-400">Click stage to expand guidance</span>
      </div>

      <div className="space-y-3">
        {/* Stage 1: Pre-planting (Completed) */}
        <div className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-2xs">
          <button
            onClick={() => toggleStage(1)}
            className="w-full p-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </span>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">Pre-planting</h4>
                <p className="text-[11px] text-slate-400">
                  <span className="text-emerald-600 font-semibold">Stage - Completed</span> | 02/12/2021 - 01/01/2022
                </p>
              </div>
            </div>
            {expandedStages[1] ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
          </button>
          {expandedStages[1] && (
            <div className="p-4 pt-0 border-t border-slate-100 text-xs text-slate-600">
              Deep ploughing and basal compost incorporation completed successfully.
            </div>
          )}
        </div>

        {/* Stage 2: Planting (Completed) */}
        <div className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-2xs">
          <button
            onClick={() => toggleStage(2)}
            className="w-full p-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </span>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">Planting</h4>
                <p className="text-[11px] text-slate-400">
                  <span className="text-emerald-600 font-semibold">Stage - Completed</span> | 01/01/2022 - 01/01/2022
                </p>
              </div>
            </div>
            {expandedStages[2] ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
          </button>
        </div>

        {/* Stage 3: Germination (Completed) */}
        <div className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-2xs">
          <button
            onClick={() => toggleStage(3)}
            className="w-full p-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </span>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">Germination</h4>
                <p className="text-[11px] text-slate-400">
                  <span className="text-emerald-600 font-semibold">Stage - Completed</span> | 02/01/2022 - 13/01/2022
                </p>
              </div>
            </div>
            {expandedStages[3] ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
          </button>
        </div>

        {/* Stage 4: Vegetative growth stage (ACTIVE / EXPANDED with green border) */}
        <div className="bg-white rounded-2xl border-2 border-emerald-500 overflow-hidden shadow-sm ring-2 ring-emerald-500/10">
          <button
            onClick={() => toggleStage(4)}
            className="w-full p-4 flex items-center justify-between text-left hover:bg-emerald-50/30 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-amber-500 text-white font-black text-xs flex items-center justify-center shrink-0">
                4
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-xs sm:text-sm font-black text-slate-900">
                    Vegetative growth stage
                  </h4>
                  <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-extrabold uppercase tracking-wider">
                    CURRENT STAGE
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  <span className="text-amber-600 font-bold">Stage - In progress</span> | 14/01/2022 - 05/02/2022
                </p>
              </div>
            </div>
            {expandedStages[4] ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
          </button>

          {/* Stage 4 Guidance Body */}
          {expandedStages[4] && (
            <div className="p-4 pt-0 space-y-4">
              {/* Objective Box */}
              <div className="bg-emerald-50/60 border border-emerald-200/80 rounded-xl p-3 flex items-start gap-2.5">
                <Info className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-700 leading-relaxed">
                  <span className="font-bold text-slate-900 block mb-0.5">
                    Stage Objective: Foliage and Root Bulk Maximization
                  </span>
                  During this window, leaf count should reach 7–10 healthy leaves. Adequate nitrogen &amp; sulfur nourishment is critical before bulb initiation begins.
                </div>
              </div>

              {/* Action Tasks Checklist */}
              <div className="space-y-2.5">
                <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">
                  STAGE SPECIFIC ACTION TASKS (PENDING 11)
                </span>

                {/* Task 1 */}
                <div
                  onClick={() => toggleTask('task1')}
                  className="p-3 rounded-xl border border-slate-200/80 hover:border-emerald-300 bg-slate-50/40 hover:bg-white transition-all flex items-start justify-between gap-3 cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <button className="text-slate-400 mt-0.5 shrink-0">
                      {tasksState.task1 ? (
                        <CheckSquare className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <Square className="w-4 h-4" />
                      )}
                    </button>
                    <div>
                      <p className={`text-xs font-bold ${tasksState.task1 ? 'line-through text-slate-400' : 'text-slate-900'}`}>
                        Foliar spray of 19:19:19 (NPK) + Micronutrient mix
                      </p>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        Dose: 5g per Liter water. Spray during late afternoon.
                      </p>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-extrabold whitespace-nowrap shrink-0">
                    Due Today
                  </span>
                </div>

                {/* Task 2 */}
                <div
                  onClick={() => toggleTask('task2')}
                  className="p-3 rounded-xl border border-slate-200/80 hover:border-emerald-300 bg-slate-50/40 hover:bg-white transition-all flex items-start justify-between gap-3 cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <button className="text-slate-400 mt-0.5 shrink-0">
                      {tasksState.task2 ? (
                        <CheckSquare className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <Square className="w-4 h-4" />
                      )}
                    </button>
                    <div>
                      <p className={`text-xs font-bold ${tasksState.task2 ? 'line-through text-slate-400' : 'text-slate-900'}`}>
                        Thrips &amp; Purple Blotch preventative spray
                      </p>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        Application of Mancozeb (2.5g/L) + Neem Oil 1500 ppm
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-400 font-semibold whitespace-nowrap shrink-0">
                    Due: 29/01/2022
                  </span>
                </div>

                {/* Task 3 */}
                <div
                  onClick={() => toggleTask('task3')}
                  className="p-3 rounded-xl border border-slate-200/80 hover:border-emerald-300 bg-slate-50/40 hover:bg-white transition-all flex items-start justify-between gap-3 cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <button className="text-slate-400 mt-0.5 shrink-0">
                      {tasksState.task3 ? (
                        <CheckSquare className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <Square className="w-4 h-4" />
                      )}
                    </button>
                    <div>
                      <p className={`text-xs font-bold ${tasksState.task3 ? 'line-through text-slate-400' : 'text-slate-900'}`}>
                        First Manual Weeding &amp; Soil Aeration
                      </p>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        Ensure shallow weeding to avoid root disturbance near bulb neck.
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-400 font-semibold whitespace-nowrap shrink-0">
                    Due: 02/02/2022
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Stage 5: Tillering stage (Upcoming) */}
        <div className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-2xs">
          <button
            onClick={() => toggleStage(5)}
            className="w-full p-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-600 font-bold text-xs flex items-center justify-center shrink-0">
                5
              </span>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">Tillering stage</h4>
                <p className="text-[11px] text-slate-400">
                  <span className="text-slate-500 font-semibold">Stage - Upcoming</span> | 07/02/2022 - 25/02/2022
                </p>
              </div>
            </div>
            {expandedStages[5] ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
          </button>
        </div>

        {/* Stage 6: Flowering stage (Upcoming) */}
        <div className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-2xs">
          <button
            onClick={() => toggleStage(6)}
            className="w-full p-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-600 font-bold text-xs flex items-center justify-center shrink-0">
                6
              </span>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">Flowering stage</h4>
                <p className="text-[11px] text-slate-400">
                  <span className="text-slate-500 font-semibold">Stage - Upcoming</span> | 01/03/2022 - 22/03/2022
                </p>
              </div>
            </div>
            {expandedStages[6] ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
          </button>
        </div>

        {/* Stage 7: Seed Setting (Upcoming) */}
        <div className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-2xs">
          <button
            onClick={() => toggleStage(7)}
            className="w-full p-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-600 font-bold text-xs flex items-center justify-center shrink-0">
                7
              </span>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">Seed Setting</h4>
                <p className="text-[11px] text-slate-400">
                  <span className="text-slate-500 font-semibold">Stage - Upcoming</span> | 23/03/2022 - 10/04/2022
                </p>
              </div>
            </div>
            {expandedStages[7] ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
          </button>
        </div>
      </div>
    </div>
  );
}
