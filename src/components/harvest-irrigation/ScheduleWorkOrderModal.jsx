import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, ShieldCheck, Droplets, Sparkles } from 'lucide-react';

export default function ScheduleWorkOrderModal({ isOpen, onClose, prescription, onConfirm }) {
  if (!isOpen || !prescription) return null;

  const [date, setDate] = useState('2025-01-20');
  const [assignedOperator, setAssignedOperator] = useState('Tariqul Islam (Lead Field Specialist)');
  const [notes, setNotes] = useState('Execute per drone multispectral telemetry recommendations.');

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm({
      ...prescription,
      date,
      assignedOperator,
      notes,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-[#0f9f6e] text-white">
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-5 h-5" />
            <div>
              <h3 className="text-base font-bold">Schedule AI Agronomic Work Order</h3>
              <p className="text-xs text-emerald-100">Prescription Action Dispatch</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs">
          <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-100 space-y-1">
            <div className="flex items-center justify-between">
              <span className="font-bold text-emerald-900 text-sm">{prescription.title}</span>
              <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded font-extrabold text-[10px]">
                {prescription.priority} Priority
              </span>
            </div>
            <p className="text-emerald-700 font-medium">
              Target: <span className="font-bold">{prescription.target}</span> · Category:{' '}
              <span className="font-bold">{prescription.category}</span>
            </p>
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">Scheduled Execution Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-3 py-2 border border-slate-200 rounded-xl text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
              required
            />
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">Assign Drone / Field Specialist</label>
            <select
              value={assignedOperator}
              onChange={(e) => setAssignedOperator(e.target.value)}
              className="w-full px-3 py-2 border border-slate-200 rounded-xl text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
            >
              <option>Tariqul Islam (Lead Field Specialist)</option>
              <option>Anika Rahman (Senior Agronomist)</option>
              <option>Marcus Vance (Drone & GIS Operator)</option>
              <option>Autonomous Precision IoT Sprayer Unit #2</option>
            </select>
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">Field Execution Instructions</label>
            <textarea
              rows="3"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-3 py-2 border border-slate-200 rounded-xl text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl font-bold text-slate-600 hover:bg-slate-100 cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center gap-1.5 px-5 py-2 rounded-xl font-bold text-white bg-[#0f9f6e] hover:bg-[#087f5b] shadow-sm cursor-pointer"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Confirm & Dispatch</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
