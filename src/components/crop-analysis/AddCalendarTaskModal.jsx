import React, { useState } from 'react';
import { X, Calendar as CalendarIcon, Plus } from 'lucide-react';

export default function AddCalendarTaskModal({ isOpen, onClose, onAddTask }) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('Apr 15');
  const [time, setTime] = useState('10:00 AM');
  const [zone, setZone] = useState('Zone 3 · Wheat');
  const [category, setCategory] = useState('irrigation');

  if (!isOpen) return null;

  const categoryColorMap = {
    irrigation: 'bg-sky-100 text-sky-700 border-sky-200',
    fertilizer: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    disease: 'bg-rose-100 text-rose-700 border-rose-200',
    inspection: 'bg-purple-100 text-purple-700 border-purple-200',
    milestone: 'bg-amber-100 text-amber-700 border-amber-200',
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newTask = {
      id: `task-${Date.now()}`,
      title: title.trim(),
      date,
      time,
      zone,
      category,
      categoryColor: categoryColorMap[category] || categoryColorMap.irrigation,
      completed: false,
    };

    onAddTask(newTask);
    setTitle('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl border border-slate-100 overflow-hidden transform animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/50">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <CalendarIcon className="w-4 h-4" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Schedule Agronomic Task</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Task Description
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Second Fungicide Spray or Soil Sampling"
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Date
              </label>
              <input
                type="text"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="e.g. Apr 15"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Time
              </label>
              <input
                type="text"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                placeholder="e.g. 10:00 AM"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Farm Zone
              </label>
              <select
                value={zone}
                onChange={(e) => setZone(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
              >
                <option value="Zone 3 · Wheat">Zone 3 · Wheat</option>
                <option value="Zone 1 · Corn">Zone 1 · Corn</option>
                <option value="Zone 2 · Tomatoes">Zone 2 · Tomatoes</option>
                <option value="Zone 4 · Soybeans">Zone 4 · Soybeans</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
              >
                <option value="irrigation">Irrigation</option>
                <option value="fertilizer">Fertilizer</option>
                <option value="disease">Disease / Pest</option>
                <option value="inspection">Scan / Inspection</option>
                <option value="milestone">Stage Milestone</option>
              </select>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-[#15803d] hover:bg-[#166534] text-white text-sm font-semibold rounded-xl shadow-sm transition-all"
            >
              Add to Calendar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
