import React, { useState } from 'react';
import { X, Sprout, Plus } from 'lucide-react';

export default function AddFieldModal({ isOpen, onClose, onAddField }) {
  const [name, setName] = useState('');
  const [crop, setCrop] = useState('Tomatoes');
  const [soilMoisture, setSoilMoisture] = useState(65);
  const [temp, setTemp] = useState('24°C');
  const [healthStatus, setHealthStatus] = useState('Excellent');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    const healthStyleMap = {
      Excellent: 'bg-emerald-50 text-emerald-600 border border-emerald-200',
      Good: 'bg-indigo-50 text-indigo-600 border border-indigo-100',
      Healthy: 'bg-amber-50 text-amber-600 border border-amber-200',
      'Needs Attention': 'bg-rose-50 text-rose-600 border border-rose-200',
    };

    const newField = {
      id: `F${Date.now()}`,
      code: `F${Math.floor(Math.random() * 8) + 4}`,
      codeBg: 'bg-emerald-100 text-emerald-700',
      name: name.trim(),
      crop,
      soilMoisture: Number(soilMoisture),
      temp,
      healthStatus,
      healthStyle: healthStyleMap[healthStatus] || healthStyleMap.Good,
    };

    onAddField(newField);
    setName('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl border border-slate-100 overflow-hidden transform animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/50">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <Sprout className="w-4 h-4" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Add New Field</h3>
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
              Field Name / Location
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Field B4 - North Sector"
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Crop Type
              </label>
              <select
                value={crop}
                onChange={(e) => setCrop(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
              >
                <option value="Tomatoes">Tomatoes</option>
                <option value="Wheat">Wheat</option>
                <option value="Corn">Corn</option>
                <option value="Rice">Rice</option>
                <option value="Soybeans">Soybeans</option>
                <option value="Vegetables">Vegetables</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Target Temp (°C)
              </label>
              <input
                type="text"
                value={temp}
                onChange={(e) => setTemp(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Soil Moisture Target
              </label>
              <span className="text-xs font-bold text-emerald-600">{soilMoisture}%</span>
            </div>
            <input
              type="range"
              min="10"
              max="100"
              value={soilMoisture}
              onChange={(e) => setSoilMoisture(e.target.value)}
              className="w-full accent-emerald-600"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Health Status
            </label>
            <div className="grid grid-cols-3 gap-2">
              {['Excellent', 'Good', 'Healthy'].map((status) => (
                <button
                  type="button"
                  key={status}
                  onClick={() => setHealthStatus(status)}
                  className={`py-2 text-xs font-semibold rounded-xl border transition-all ${
                    healthStatus === status
                      ? 'bg-emerald-50 border-emerald-500 text-emerald-700 shadow-sm'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {status}
                </button>
              ))}
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
              Create Field
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
