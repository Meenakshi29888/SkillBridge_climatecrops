import React from 'react';
import { Users, Plus, Mail, Phone, MapPin, UserCheck, Shield } from 'lucide-react';

export default function FarmTeamSection({ team, onOpenAddWorker }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/70 p-6 shadow-xs space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
            <Users className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">
              Farm Operators & Agronomy Team
            </h3>
            <p className="text-xs text-slate-400">
              Manage field personnel, task assignments, and contact details
            </p>
          </div>
        </div>

        <button
          onClick={onOpenAddWorker}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-[#15803d] hover:bg-[#166534] text-white rounded-xl text-xs font-semibold shadow-sm transition-colors cursor-pointer"
        >
          <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
          <span>Add Member</span>
        </button>
      </div>

      {/* Team Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {team.map((member) => (
          <div
            key={member.id}
            className="p-4 rounded-xl border border-slate-200/80 bg-slate-50/40 hover:bg-white hover:border-emerald-300 transition-all shadow-2xs space-y-3"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 shadow-xs ${member.avatarBg}`}
                >
                  {member.avatarText}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 truncate">
                    {member.name}
                  </h4>
                  <p className="text-xs font-semibold text-emerald-700">
                    {member.role}
                  </p>
                </div>
              </div>

              <span
                className={`text-[10px] font-bold px-2 py-0.5 rounded-full border shrink-0 ${member.statusStyle}`}
              >
                {member.status}
              </span>
            </div>

            <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span className="truncate">{member.zone}</span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <span className="flex items-center gap-2 truncate">
                  <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span className="truncate">{member.email}</span>
                </span>
                <span className="flex items-center gap-1 text-slate-600 font-medium">
                  <Phone className="w-3 h-3 text-slate-400" />
                  {member.phone}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
