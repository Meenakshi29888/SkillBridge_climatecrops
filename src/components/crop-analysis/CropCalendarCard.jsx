import React, { useState } from 'react';
import {
  Calendar as CalendarIcon,
  CheckCircle2,
  Circle,
  Plus,
  Clock,
  ChevronRight,
  Droplets,
  Sprout,
  AlertTriangle,
  Sparkles,
  Layers
} from 'lucide-react';

const categoryIcons = {
  irrigation: Droplets,
  fertilizer: Sprout,
  disease: AlertTriangle,
  inspection: Sparkles,
  milestone: Layers,
};

export default function CropCalendarCard({
  stages,
  tasks,
  onToggleTask,
  onOpenAddTask,
  onOpenFullCalendar,
}) {
  const currentStage = stages.find((s) => s.status === 'current') || stages[2];

  return (
    <div className="bg-white rounded-2xl border border-slate-200/70 p-6 shadow-xs space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-emerald-100/70 text-emerald-700 flex items-center justify-center">
            <CalendarIcon className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight flex items-center gap-2">
              Crop Lifecycle & Activity Calendar
            </h3>
            <p className="text-xs text-slate-400">
              Current: <span className="font-semibold text-emerald-700">{currentStage.name} Phase</span> (Day 42 of 120)
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenAddTask}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 rounded-xl text-xs font-semibold transition-colors cursor-pointer border border-emerald-200/60"
          >
            <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Add Task</span>
          </button>
          <button
            onClick={onOpenFullCalendar}
            className="flex items-center gap-1 px-3 py-1.5 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded-xl text-xs font-semibold transition-colors cursor-pointer border border-slate-200/80"
          >
            <span>Full Schedule</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Growth Stages Linear Progression Bar */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
            Wheat Growth Progression
          </span>
          <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
            {currentStage.daysLeft} days until Stem Extension
          </span>
        </div>

        {/* Stage Timeline Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
          {stages.map((stage) => {
            const isCompleted = stage.status === 'completed';
            const isCurrent = stage.status === 'current';

            return (
              <div
                key={stage.id}
                className={`p-2.5 rounded-xl border text-center transition-all ${
                  isCurrent
                    ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm ring-2 ring-emerald-600/20'
                    : isCompleted
                    ? 'bg-emerald-50/70 border-emerald-200/80 text-emerald-900'
                    : 'bg-slate-50/70 border-slate-200/60 text-slate-400'
                }`}
              >
                <div className="flex items-center justify-center mb-1">
                  {isCompleted ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  ) : isCurrent ? (
                    <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                  ) : (
                    <Circle className="w-3 h-3 text-slate-300" />
                  )}
                </div>
                <p className={`text-xs font-bold truncate ${isCurrent ? 'text-white' : ''}`}>
                  {stage.name}
                </p>
                <p className={`text-[10px] mt-0.5 truncate ${isCurrent ? 'text-emerald-100' : 'text-slate-400'}`}>
                  {stage.date}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Upcoming Scheduled Field Operations */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
            Upcoming Field Schedule & Milestones
          </h4>
          <span className="text-[11px] text-slate-400 font-medium">
            {tasks.filter((t) => t.completed).length} of {tasks.length} Completed
          </span>
        </div>

        <div className="space-y-2.5">
          {tasks.map((task) => {
            const Icon = categoryIcons[task.category] || CalendarIcon;

            return (
              <div
                key={task.id}
                className={`flex items-center justify-between p-3 rounded-xl border transition-all ${
                  task.completed
                    ? 'bg-slate-50/60 border-slate-200/60 opacity-60'
                    : 'bg-white border-slate-200/80 hover:border-emerald-300 hover:shadow-xs'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <button
                    onClick={() => onToggleTask(task.id)}
                    className="cursor-pointer text-slate-400 hover:text-emerald-600 transition-colors shrink-0"
                    title={task.completed ? "Mark incomplete" : "Mark completed"}
                  >
                    {task.completed ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 fill-emerald-100" />
                    ) : (
                      <Circle className="w-5 h-5" />
                    )}
                  </button>

                  <div className="min-w-0">
                    <p
                      className={`text-xs sm:text-sm font-bold truncate ${
                        task.completed ? 'line-through text-slate-400' : 'text-slate-900'
                      }`}
                    >
                      {task.title}
                    </p>
                    <div className="flex items-center gap-2 text-[11px] text-slate-400 mt-0.5">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {task.date} · {task.time}
                      </span>
                      <span>•</span>
                      <span className="text-slate-500 font-medium truncate">{task.zone}</span>
                    </div>
                  </div>
                </div>

                <span
                  className={`text-[10px] font-bold px-2.5 py-1 rounded-full shrink-0 border ${task.categoryColor}`}
                >
                  {task.category.toUpperCase()}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
