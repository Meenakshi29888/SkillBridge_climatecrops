import React from 'react';
import { X, Bell, AlertTriangle, Droplets, CheckCircle, Info } from 'lucide-react';

export default function NotificationsModal({ isOpen, onClose, notifications, onClearAll }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl border border-slate-100 overflow-hidden transform animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/50">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center">
              <Bell className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">Farm Alerts & Notifications</h3>
              <p className="text-xs text-slate-400">Real-time alerts across your fields</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Notifications List */}
        <div className="p-4 space-y-3 max-h-[360px] overflow-y-auto">
          {notifications.length === 0 ? (
            <div className="py-8 text-center text-slate-400">
              <CheckCircle className="w-8 h-8 mx-auto mb-2 text-emerald-500" />
              <p className="text-sm font-medium">All caught up! No active alerts.</p>
            </div>
          ) : (
            notifications.map((item) => (
              <div
                key={item.id}
                className="p-3 rounded-xl border border-slate-100 bg-slate-50/60 hover:bg-slate-50 transition-colors flex items-start gap-3"
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${item.iconBg}`}>
                  {item.type === 'warning' && <AlertTriangle className="w-4 h-4 text-amber-600" />}
                  {item.type === 'water' && <Droplets className="w-4 h-4 text-sky-600" />}
                  {item.type === 'success' && <CheckCircle className="w-4 h-4 text-emerald-600" />}
                  {item.type === 'info' && <Info className="w-4 h-4 text-indigo-600" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-xs font-bold text-slate-900 truncate">{item.title}</p>
                    <span className="text-[10px] text-slate-400 whitespace-nowrap">{item.time}</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">{item.message}</p>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between">
          <button
            onClick={onClearAll}
            className="text-xs font-semibold text-slate-500 hover:text-slate-800"
          >
            Mark all as read
          </button>
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
