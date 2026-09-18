import React, { useState } from 'react';
import { X, Search, Layers, Plus } from 'lucide-react';

export default function SeeAllFieldsModal({ isOpen, onClose, fields, onAddNewFieldClick }) {
  const [filterQuery, setFilterQuery] = useState('');

  if (!isOpen) return null;

  const filtered = fields.filter(
    (f) =>
      f.name.toLowerCase().includes(filterQuery.toLowerCase()) ||
      f.crop.toLowerCase().includes(filterQuery.toLowerCase()) ||
      f.code.toLowerCase().includes(filterQuery.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl w-full max-w-2xl shadow-2xl border border-slate-100 overflow-hidden transform animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/50">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">All Farm Fields</h3>
              <p className="text-xs text-slate-400">Manage and monitor all active cultivation zones</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search & Actions Bar */}
        <div className="p-4 border-b border-slate-100 flex items-center justify-between gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              placeholder="Filter fields by name, crop or code..."
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
            />
          </div>
          <button
            onClick={() => {
              onClose();
              onAddNewFieldClick();
            }}
            className="flex items-center gap-1.5 px-3 py-2 bg-[#15803d] hover:bg-[#166534] text-white rounded-xl text-xs font-semibold shadow-sm"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>New Field</span>
          </button>
        </div>

        {/* List of fields */}
        <div className="p-6 max-h-[380px] overflow-y-auto divide-y divide-slate-100">
          {filtered.map((item) => (
            <div key={item.id} className="py-3 flex items-center justify-between hover:bg-slate-50/50 px-2 rounded-lg transition-colors">
              <div className="flex items-center gap-3">
                <span className={`w-8 h-8 rounded-lg text-xs font-bold flex items-center justify-center ${item.codeBg}`}>
                  {item.code}
                </span>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{item.name}</h4>
                  <p className="text-xs text-slate-500">Crop: {item.crop} • Temp: {item.temp}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <span className="text-xs text-slate-400 block">Moisture</span>
                  <span className="text-xs font-bold text-slate-800">{item.soilMoisture}%</span>
                </div>
                <span className={`px-2.5 py-1 rounded-lg text-xs font-bold ${item.healthStyle}`}>
                  {item.healthStatus}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-100 bg-slate-50/50 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
