import React from 'react';
import {
  LayoutGrid,
  Activity,
  Bell,
  MessageSquare,
  Sprout,
  TrendingUp,
  Droplets,
  SunMedium,
  Users,
  BookOpen,
  Settings,
} from 'lucide-react';

export default function EmuraSidebar({ activeItem = 'grid', onSelectItem }) {
  const topNav = [
    { id: 'grid', icon: LayoutGrid, label: 'Overview' },
    { id: 'activity', icon: Activity, label: 'Pulse' },
    { id: 'bell', icon: Bell, label: 'Alerts' },
    { id: 'chat', icon: MessageSquare, label: 'Chat' },
    { id: 'crops', icon: Sprout, label: 'Crops' },
    { id: 'trends', icon: TrendingUp, label: 'Trends' },
    { id: 'water', icon: Droplets, label: 'Water' },
    { id: 'weather', icon: SunMedium, label: 'Weather' },
  ];

  const bottomNav = [
    { id: 'team', icon: Users, label: 'Team' },
    { id: 'records', icon: BookOpen, label: 'Records' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <aside className="w-16 bg-white border-r border-slate-100 flex flex-col items-center justify-between py-6 shrink-0 select-none">
      {/* Brand Emblem */}
      <div className="flex flex-col items-center gap-6">
        <div className="w-10 h-10 rounded-2xl bg-[#064e3b] text-emerald-400 flex items-center justify-center shadow-sm">
          <div className="w-6 h-6 rounded-full border-2 border-emerald-400 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-emerald-400" />
          </div>
        </div>

        {/* Top Icons */}
        <nav className="flex flex-col items-center gap-2">
          {topNav.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectItem && onSelectItem(item.id)}
                className={`p-2.5 rounded-xl transition-all cursor-pointer ${
                  isActive
                    ? 'bg-slate-100 text-slate-900 shadow-xs'
                    : 'text-slate-400 hover:text-slate-700 hover:bg-slate-50'
                }`}
                title={item.label}
              >
                <Icon className="w-5 h-5 stroke-[1.75]" />
              </button>
            );
          })}
        </nav>
      </div>

      {/* Bottom Icons */}
      <nav className="flex flex-col items-center gap-2 pt-4 border-t border-slate-100 w-full px-2">
        {bottomNav.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSelectItem && onSelectItem(item.id)}
              className={`p-2.5 rounded-xl transition-all cursor-pointer ${
                isActive
                  ? 'bg-slate-100 text-slate-900'
                  : 'text-slate-400 hover:text-slate-700 hover:bg-slate-50'
              }`}
              title={item.label}
            >
              <Icon className="w-5 h-5 stroke-[1.75]" />
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
