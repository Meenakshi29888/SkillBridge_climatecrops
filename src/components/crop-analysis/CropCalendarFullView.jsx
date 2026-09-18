import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  Calendar as CalendarIcon,
  CheckCircle2,
  Circle,
  Filter,
  Droplets,
  Sprout,
  AlertTriangle,
  Sparkles,
  Layers,
  Clock
} from 'lucide-react';

const categoryColors = {
  irrigation: 'bg-sky-500 text-white',
  fertilizer: 'bg-emerald-500 text-white',
  disease: 'bg-rose-500 text-white',
  inspection: 'bg-purple-500 text-white',
  milestone: 'bg-amber-500 text-white',
};

export default function CropCalendarFullView({
  tasks,
  onToggleTask,
  onOpenAddTask,
  stages,
}) {
  const [currentMonth, setCurrentMonth] = useState('April 2026');
  const [selectedZone, setSelectedZone] = useState('all');

  // Days in April 2026 (starts on Wednesday)
  const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1);
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Map tasks to dates in April
  const getTasksForDay = (day) => {
    return tasks.filter((t) => {
      const match = t.date.match(/Apr\s+(\d+)/);
      if (match && parseInt(match[1]) === day) {
        if (selectedZone === 'all') return true;
        return t.zone.toLowerCase().includes(selectedZone.toLowerCase());
      }
      return false;
    });
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 space-y-6">
      {/* Top Banner with Controls */}
      <div className="bg-white rounded-2xl border border-slate-200/70 p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="p-1.5 rounded-lg bg-emerald-100 text-emerald-800">
              <CalendarIcon className="w-5 h-5" />
            </span>
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              Crop Calendar & Seasonal Schedule
            </h2>
          </div>
          <p className="text-xs text-slate-500">
            Track vegetative stages, irrigation cycles, and planned agronomic operations
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* Zone Filter */}
          <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-700">
            <Filter className="w-3.5 h-3.5 text-slate-400" />
            <select
              value={selectedZone}
              onChange={(e) => setSelectedZone(e.target.value)}
              className="bg-transparent focus:outline-none cursor-pointer"
            >
              <option value="all">All Farm Zones</option>
              <option value="Zone 1">Zone 1 · Corn</option>
              <option value="Zone 2">Zone 2 · Tomatoes</option>
              <option value="Zone 3">Zone 3 · Wheat</option>
            </select>
          </div>

          {/* Month Switcher */}
          <div className="flex items-center bg-slate-50 border border-slate-200 rounded-xl p-0.5">
            <button
              onClick={() => setCurrentMonth('March 2026')}
              className="p-1.5 hover:bg-white rounded-lg text-slate-600 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="px-3 text-xs font-bold text-slate-800">{currentMonth}</span>
            <button
              onClick={() => setCurrentMonth('May 2026')}
              className="p-1.5 hover:bg-white rounded-lg text-slate-600 transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Add Task Button */}
          <button
            onClick={onOpenAddTask}
            className="flex items-center gap-1.5 px-4 py-2 bg-[#15803d] hover:bg-[#166534] text-white rounded-xl text-xs font-bold transition-all shadow-sm cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Schedule Activity</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Calendar on Left, Task Checklist on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Month Grid (8 cols) */}
        <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200/70 p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              {currentMonth} Operations Grid
            </h3>
            <div className="flex items-center gap-3 text-[11px] text-slate-500">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-sky-500" /> Irrigation
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500" /> Fertilizer
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-rose-500" /> Disease/Pest
              </span>
            </div>
          </div>

          {/* Weekday headers */}
          <div className="grid grid-cols-7 gap-2 text-center text-xs font-bold text-slate-400 py-1">
            {weekDays.map((d) => (
              <div key={d}>{d}</div>
            ))}
          </div>

          {/* Days Grid */}
          <div className="grid grid-cols-7 gap-2">
            {/* 3 offset days for April 2026 (starts Wed) */}
            <div className="h-20 sm:h-24 bg-slate-50/40 rounded-xl p-1.5 opacity-30 text-xs text-slate-400">29</div>
            <div className="h-20 sm:h-24 bg-slate-50/40 rounded-xl p-1.5 opacity-30 text-xs text-slate-400">30</div>
            <div className="h-20 sm:h-24 bg-slate-50/40 rounded-xl p-1.5 opacity-30 text-xs text-slate-400">31</div>

            {daysInMonth.map((day) => {
              const dayTasks = getTasksForDay(day);
              const isToday = day === 10;

              return (
                <div
                  key={day}
                  className={`h-20 sm:h-24 rounded-xl p-1.5 sm:p-2 border transition-all flex flex-col justify-between overflow-hidden ${
                    isToday
                      ? 'bg-emerald-50/60 border-emerald-500 shadow-xs ring-1 ring-emerald-500/20'
                      : 'bg-white border-slate-100 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center ${
                        isToday ? 'bg-emerald-600 text-white' : 'text-slate-700'
                      }`}
                    >
                      {day}
                    </span>
                  </div>

                  <div className="space-y-1 mt-1 overflow-y-auto">
                    {dayTasks.map((t) => (
                      <div
                        key={t.id}
                        className={`text-[9px] sm:text-[10px] font-semibold px-1.5 py-0.5 rounded truncate ${
                          categoryColors[t.category] || 'bg-slate-800 text-white'
                        }`}
                        title={`${t.time}: ${t.title}`}
                      >
                        {t.title}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Task List / Checklist (4 cols) */}
        <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200/70 p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              Agronomic Tasks
            </h3>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
              {tasks.filter((t) => t.completed).length}/{tasks.length} Done
            </span>
          </div>

          <div className="space-y-3 max-h-[500px] overflow-y-auto pr-1">
            {tasks.map((task) => (
              <div
                key={task.id}
                className={`p-3 rounded-xl border transition-all ${
                  task.completed
                    ? 'bg-slate-50/60 border-slate-200/60 opacity-60'
                    : 'bg-white border-slate-200/80 hover:border-emerald-400'
                }`}
              >
                <div className="flex items-start gap-2.5">
                  <button
                    onClick={() => onToggleTask(task.id)}
                    className="cursor-pointer text-slate-400 hover:text-emerald-600 mt-0.5 shrink-0"
                  >
                    {task.completed ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 fill-emerald-100" />
                    ) : (
                      <Circle className="w-4 h-4" />
                    )}
                  </button>
                  <div className="flex-1 min-w-0">
                    <p
                      className={`text-xs font-bold truncate ${
                        task.completed ? 'line-through text-slate-400' : 'text-slate-900'
                      }`}
                    >
                      {task.title}
                    </p>
                    <div className="flex items-center gap-2 text-[10px] text-slate-400 mt-1">
                      <span className="flex items-center gap-1 font-medium text-slate-600">
                        <Clock className="w-3 h-3" />
                        {task.date} · {task.time}
                      </span>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-[10px] text-slate-500 font-medium truncate">
                        {task.zone}
                      </span>
                      <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border ${task.categoryColor}`}>
                        {task.category.toUpperCase()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
