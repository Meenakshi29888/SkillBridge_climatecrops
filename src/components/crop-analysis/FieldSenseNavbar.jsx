import React from 'react';
import { Search, Bell, Sprout, ChevronDown, Check } from 'lucide-react';

export default function FieldSenseNavbar({
  activeNavTab,
  setActiveNavTab,
  onOpenSearch,
  onOpenNotifications,
  unreadAlerts = 2,
}) {
  const navTabs = [
    { id: 'user-dashboard', label: 'User Dashboard' },
    { id: 'ai-analysis', label: 'AI Analysis' },
    { id: 'crop-calendar', label: 'Crop Calendar' },
    { id: 'overview', label: 'AgFarm Operations' },
    { id: 'user-profile', label: 'Account Profile' },
  ];

  return (
    <header className="w-full shadow-sm sticky top-0 z-40">
      {/* Dark Forest Green Top Bar */}
      <div className="bg-[#1b4332] text-white px-4 sm:px-8 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-6 sm:gap-10">
          {/* Logo */}
          <div className="flex items-center gap-2 font-bold text-lg tracking-tight">
            <div className="w-6 h-6 rounded flex items-center justify-center text-emerald-400">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L4 7v10l8 5 8-5V7l-8-5zm0 2.8L18 8.5v7l-6 3.7-6-3.7v-7L12 4.8z" />
                <path d="M12 7l4 3-4 3-4-3 4-3z" />
              </svg>
            </div>
            <span className="font-extrabold text-base tracking-tight text-white">
              FieldSense
            </span>
            <span className="text-emerald-500/40 text-sm hidden sm:inline">|</span>
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center gap-1 sm:gap-2">
            {navTabs.map((tab) => {
              const isActive = activeNavTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveNavTab(tab.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#295944] text-white font-semibold shadow-inner'
                      : 'text-emerald-100/80 hover:text-white hover:bg-[#23503c]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Sub-header White Bar */}
      <div className="bg-white border-b border-slate-200/80 px-4 sm:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm">
          <span className="font-bold text-slate-900">FieldSense</span>
          <span className="text-slate-300">|</span>
          <span className="text-slate-600 font-medium">AI Crop Analysis</span>
        </div>

        <div className="flex items-center gap-4">
          {/* AI Active Pill Badge */}
          <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-50 border border-emerald-200/60 rounded-full text-xs font-semibold text-emerald-700">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>AI Active</span>
          </div>

          {/* Search Action */}
          <button
            onClick={onOpenSearch}
            className="text-slate-500 hover:text-slate-800 p-1.5 rounded-full hover:bg-slate-100 transition-colors"
            title="Search analysis"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Notifications Action */}
          <button
            onClick={onOpenNotifications}
            className="relative text-slate-500 hover:text-slate-800 p-1.5 rounded-full hover:bg-slate-100 transition-colors"
            title="Notifications"
          >
            <Bell className="w-4 h-4" />
            {unreadAlerts > 0 && (
              <span className="absolute top-1 right-1 w-2 h-2 bg-rose-500 rounded-full" />
            )}
          </button>

          {/* Quick Account / User Profile Link */}
          <button
            onClick={() => setActiveNavTab('user-profile')}
            className="flex items-center gap-2 pl-2 border-l border-slate-200 cursor-pointer hover:opacity-80 transition-opacity"
            title="Open User Profile & Account"
          >
            <div className="w-7 h-7 rounded-full bg-emerald-800 text-white font-bold text-xs flex items-center justify-center shadow-xs">
              RK
            </div>
            <span className="text-xs font-bold text-slate-800 hidden md:inline">
              Rakib
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
