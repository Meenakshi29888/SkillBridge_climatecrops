import React from 'react';
import { User, MapPin, Mail, Phone, ShieldCheck, Download, Edit3, Award } from 'lucide-react';

export default function UserProfileCard({ userData, onEditProfile, onExportData }) {
  const name = userData?.name || 'Rakib Kowshar';
  const role = userData?.role || 'Lead Agronomist & Farm Operations Director';
  const farmName = userData?.farmName || 'GreenValley Smart Farm';
  const location = userData?.location || 'California, USA · Sector 4';
  const email = userData?.email || 'rakib@agfarm.io';
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="bg-white rounded-2xl border border-slate-200/70 p-6 shadow-xs space-y-6">
      {/* Top Profile Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-emerald-800 text-white flex items-center justify-center font-black text-2xl shadow-md ring-4 ring-emerald-50 shrink-0">
            {initials || 'RK'}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">
                {name}
              </h2>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-bold">
                <ShieldCheck className="w-3 h-3" />
                Verified Admin
              </span>
            </div>
            <p className="text-xs text-slate-500 font-medium">
              {role}
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mt-1">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                {farmName} · {location}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                {email}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          <button
            onClick={onEditProfile}
            className="flex items-center gap-1.5 px-3.5 py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded-xl text-xs font-semibold border border-slate-200 transition-colors cursor-pointer"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>Edit Profile</span>
          </button>
          <button
            onClick={onExportData}
            className="flex items-center gap-1.5 px-3.5 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-semibold shadow-sm transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export Report</span>
          </button>
        </div>
      </div>

      {/* Farm Scale KPI Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
        <div className="bg-slate-50/80 rounded-xl p-3 border border-slate-100">
          <span className="text-[11px] font-semibold text-slate-400 block uppercase tracking-wider">
            Total Farmland
          </span>
          <span className="text-xl font-black text-slate-900">450</span>
          <span className="text-xs text-slate-500 font-medium ml-1">Acres</span>
        </div>

        <div className="bg-slate-50/80 rounded-xl p-3 border border-slate-100">
          <span className="text-[11px] font-semibold text-slate-400 block uppercase tracking-wider">
            Active Zones
          </span>
          <span className="text-xl font-black text-emerald-700">24</span>
          <span className="text-xs text-slate-500 font-medium ml-1">Monitored</span>
        </div>

        <div className="bg-slate-50/80 rounded-xl p-3 border border-slate-100">
          <span className="text-[11px] font-semibold text-slate-400 block uppercase tracking-wider">
            Field Personnel
          </span>
          <span className="text-xl font-black text-slate-900">18</span>
          <span className="text-xs text-slate-500 font-medium ml-1">On Duty</span>
        </div>

        <div className="bg-slate-50/80 rounded-xl p-3 border border-slate-100">
          <span className="text-[11px] font-semibold text-slate-400 block uppercase tracking-wider">
            IoT & Sensors
          </span>
          <span className="text-xl font-black text-sky-700">56</span>
          <span className="text-xs text-slate-500 font-medium ml-1">Connected</span>
        </div>
      </div>
    </div>
  );
}
