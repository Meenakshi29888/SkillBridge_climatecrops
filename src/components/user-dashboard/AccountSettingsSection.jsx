import React, { useState } from 'react';
import { Sparkles, BellRing, Key, Check, ToggleLeft, ToggleRight, Satellite } from 'lucide-react';

export default function AccountSettingsSection() {
  const [alerts, setAlerts] = useState({
    moisture: true,
    disease: true,
    frost: false,
    irrigation: true,
  });

  const toggleAlert = (key) => {
    setAlerts((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/70 p-6 shadow-xs space-y-6">
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">
              AI Tier & Alert Automation Preferences
            </h3>
            <p className="text-xs text-slate-400">
              Configure telemetry thresholds and automated anomaly dispatch
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Subscription / Plan Box */}
        <div className="p-4 rounded-xl border border-emerald-200/80 bg-emerald-50/40 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
              Active Tier
            </span>
            <span className="px-2 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-bold">
              Enterprise AI
            </span>
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-medium text-slate-700">
              <span className="flex items-center gap-1.5">
                <Satellite className="w-3.5 h-3.5 text-emerald-700" />
                Monthly Satellite Multi-spectral Passes
              </span>
              <span className="font-bold text-slate-900">28 / 30 Passes</span>
            </div>
            <div className="w-full h-2 rounded-full bg-emerald-100 overflow-hidden">
              <div className="h-full bg-emerald-600 rounded-full" style={{ width: '93%' }} />
            </div>
          </div>

          <p className="text-[11px] text-slate-500">
            Next renewal on May 01, 2026. Includes unlimited AI crop disease diagnostics.
          </p>
        </div>

        {/* Alert Toggles */}
        <div className="space-y-2.5">
          <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
            Automated Alerts (SMS & Mobile Push)
          </span>

          <div className="flex items-center justify-between p-2.5 rounded-xl border border-slate-100 bg-slate-50/60">
            <div>
              <p className="text-xs font-bold text-slate-900">Critical Soil Moisture Drops (&lt;35%)</p>
              <p className="text-[10px] text-slate-400">Instant SMS dispatch to zone operator</p>
            </div>
            <button
              onClick={() => toggleAlert('moisture')}
              className="cursor-pointer text-emerald-600"
            >
              {alerts.moisture ? (
                <ToggleRight className="w-7 h-7" />
              ) : (
                <ToggleLeft className="w-7 h-7 text-slate-300" />
              )}
            </button>
          </div>

          <div className="flex items-center justify-between p-2.5 rounded-xl border border-slate-100 bg-slate-50/60">
            <div>
              <p className="text-xs font-bold text-slate-900">Wheat Rust & Early Disease Flagging</p>
              <p className="text-[10px] text-slate-400">Triggers preventative spray alerts</p>
            </div>
            <button
              onClick={() => toggleAlert('disease')}
              className="cursor-pointer text-emerald-600"
            >
              {alerts.disease ? (
                <ToggleRight className="w-7 h-7" />
              ) : (
                <ToggleLeft className="w-7 h-7 text-slate-300" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
