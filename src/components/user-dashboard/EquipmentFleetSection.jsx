import React from 'react';
import { Wrench, BatteryCharging, Radio, Cpu, RefreshCw, CheckCircle2 } from 'lucide-react';

export default function EquipmentFleetSection({ equipment }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/70 p-6 shadow-xs space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-800 flex items-center justify-center">
            <Cpu className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">
              Smart IoT Fleet & Connected Machinery
            </h3>
            <p className="text-xs text-slate-400">
              Live telemetry, battery status, and sensor arrays across zones
            </p>
          </div>
        </div>

        <button
          onClick={() => alert('All sensors synced with central gateway.')}
          className="flex items-center gap-1 px-3 py-1.5 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded-xl text-xs font-semibold border border-slate-200/80 transition-colors cursor-pointer"
        >
          <RefreshCw className="w-3.5 h-3.5 text-slate-500" />
          <span>Sync Fleet</span>
        </button>
      </div>

      {/* Equipment Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {equipment.map((item) => (
          <div
            key={item.id}
            className="p-4 rounded-xl border border-slate-200/80 bg-slate-50/40 hover:bg-white hover:border-sky-300 transition-all shadow-2xs space-y-3"
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                  {item.name}
                </h4>
                <p className="text-[11px] font-medium text-slate-500 mt-0.5">
                  Type: {item.type} · {item.zone}
                </p>
              </div>

              <span
                className={`text-[10px] font-bold px-2 py-0.5 rounded-full border shrink-0 ${item.statusStyle}`}
              >
                {item.status}
              </span>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
              <span className="flex items-center gap-1.5 text-slate-600 font-semibold">
                <BatteryCharging className="w-3.5 h-3.5 text-emerald-600" />
                {item.battery}
              </span>

              <span className="text-[11px] text-slate-400">
                Sync: {item.lastSync}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
