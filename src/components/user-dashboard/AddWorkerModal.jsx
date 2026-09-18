import React, { useState } from 'react';
import { X, Users, UserPlus } from 'lucide-react';

export default function AddWorkerModal({ isOpen, onClose, onAddWorker }) {
  const [name, setName] = useState('');
  const [role, setRole] = useState('Irrigation Specialist');
  const [zone, setZone] = useState('Zone 3 · Wheat');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    const initials = name
      .trim()
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);

    const colors = [
      'bg-emerald-700 text-white',
      'bg-indigo-700 text-white',
      'bg-purple-700 text-white',
      'bg-teal-700 text-white',
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    const newMember = {
      id: `w-${Date.now()}`,
      name: name.trim(),
      role,
      zone,
      status: 'Available',
      statusStyle: 'bg-sky-100 text-sky-700 border-sky-200',
      email: email || `${name.toLowerCase().replace(/\s+/g, '')}@agfarm.io`,
      phone: phone || '+1 (555) 000-0000',
      avatarBg: randomColor,
      avatarText: initials || 'AG',
    };

    onAddWorker(newMember);
    setName('');
    setEmail('');
    setPhone('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl border border-slate-100 overflow-hidden transform animate-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/50">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <UserPlus className="w-4 h-4" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Add Team Member</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Full Name
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. David Miller"
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Specialized Role
              </label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
              >
                <option value="Senior Agronomist">Senior Agronomist</option>
                <option value="Irrigation Specialist">Irrigation Specialist</option>
                <option value="Drone & GIS Operator">Drone Operator</option>
                <option value="Heavy Machinery Tech">Heavy Machinery Tech</option>
                <option value="Field Scout">Field Scout</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Primary Zone
              </label>
              <select
                value={zone}
                onChange={(e) => setZone(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
              >
                <option value="Zone 3 · Wheat">Zone 3 · Wheat</option>
                <option value="Zone 1 · Corn">Zone 1 · Corn</option>
                <option value="Zone 2 · Tomatoes">Zone 2 · Tomatoes</option>
                <option value="All Cultivation Zones">All Cultivation Zones</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="operator@agfarm.io"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Phone
              </label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+1 (555) 000-0000"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
              />
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
              Add Member
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
