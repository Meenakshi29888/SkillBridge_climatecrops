import React, { useState } from 'react';
import EmuraSidebar from './EmuraSidebar';
import EmuraWeatherCard from './EmuraWeatherCard';
import EmuraQuickMetrics from './EmuraQuickMetrics';
import FertilizerLevelCard from './FertilizerLevelCard';
import SatelliteFieldMapCard from './SatelliteFieldMapCard';
import GrowthAnalyticsCard from './GrowthAnalyticsCard';
import EmuraAIAssistantCard from './EmuraAIAssistantCard';
import { ChevronsUpDown, Check, User, LogOut, Settings, Edit3 } from 'lucide-react';

export default function EmuraDashboardView({ userData, onEditProfile, onSwitchToAccountProfile }) {
  const [activeSidebarItem, setActiveSidebarItem] = useState('grid');
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);

  const userName = userData?.name || 'Rakib Kowshar';
  const userEmail = userData?.email || 'rakib@agfarm.io';
  const firstName = userName.split(' ')[0] || userName;

  const [selectedAccount, setSelectedAccount] = useState(userName);

  const accounts = [
    { name: userName, email: userEmail, role: userData?.role || 'Lead Agronomist & Farm Operations Director' },
    { name: 'Emura Studio', email: 'hello@emura.studio', role: 'Farm Enterprise Admin' },
    { name: 'GreenValley Operations', email: 'ops@greenvalley.ag', role: 'Field Operations Hub' },
  ];

  return (
    <div className="w-full max-w-[1440px] mx-auto bg-[#f8faf8] rounded-4xl border border-slate-200/80 shadow-2xl overflow-hidden flex min-h-[900px] my-2 animate-fadeIn">
      {/* 1. Slim Vertical Icon Sidebar */}
      <EmuraSidebar
        activeItem={activeSidebarItem}
        onSelectItem={(item) => setActiveSidebarItem(item)}
      />

      {/* 2. Main Dashboard Area */}
      <div className="flex-1 p-4 sm:p-8 space-y-6 overflow-y-auto">
        {/* Top Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Hi, {firstName}!
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 font-medium mt-0.5">
              Your farm performance is stable. Here's today's overview.
            </p>
          </div>

          {/* Account Pill Card with Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsAccountMenuOpen(!isAccountMenuOpen)}
              className="flex items-center gap-3 bg-[#111827] text-white px-4 py-2.5 rounded-2xl shadow-md hover:bg-slate-900 transition-colors cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center bg-white/10 shrink-0">
                <div className="w-4 h-4 rounded-full border border-emerald-400 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                </div>
              </div>
              <div className="text-left min-w-[130px]">
                <h4 className="text-xs font-bold text-white leading-tight truncate">
                  {selectedAccount}
                </h4>
                <p className="text-[10px] text-slate-400 truncate">
                  {accounts.find((a) => a.name === selectedAccount)?.email || userEmail}
                </p>
              </div>
              <ChevronsUpDown className="w-4 h-4 text-slate-400" />
            </button>

            {/* Account Switcher Dropdown */}
            {isAccountMenuOpen && (
              <div className="absolute right-0 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-slate-100 py-2 z-50 animate-in fade-in zoom-in-95 duration-100">
                <div className="px-4 py-2 border-b border-slate-100 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Active Linked Account
                </div>
                {accounts.map((acc) => (
                  <button
                    key={acc.name}
                    onClick={() => {
                      setSelectedAccount(acc.name);
                      setIsAccountMenuOpen(false);
                    }}
                    className="w-full px-4 py-2.5 text-left flex items-center justify-between hover:bg-emerald-50 transition-colors cursor-pointer"
                  >
                    <div className="min-w-0 pr-2">
                      <p className="text-xs font-bold text-slate-900 truncate">{acc.name}</p>
                      <p className="text-[10px] text-slate-400 truncate">{acc.email}</p>
                    </div>
                    {selectedAccount === acc.name && (
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    )}
                  </button>
                ))}
                <div className="border-t border-slate-100 mt-1 pt-1 space-y-0.5">
                  {onEditProfile && (
                    <button
                      onClick={() => {
                        setIsAccountMenuOpen(false);
                        onEditProfile();
                      }}
                      className="w-full px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 flex items-center gap-2 cursor-pointer"
                    >
                      <Edit3 className="w-3.5 h-3.5 text-slate-500" />
                      <span>Edit Account Profile</span>
                    </button>
                  )}
                  {onSwitchToAccountProfile && (
                    <button
                      onClick={() => {
                        setIsAccountMenuOpen(false);
                        onSwitchToAccountProfile();
                      }}
                      className="w-full px-4 py-2 text-xs font-semibold text-emerald-700 hover:bg-emerald-50 flex items-center gap-2 cursor-pointer"
                    >
                      <User className="w-3.5 h-3.5" />
                      <span>Manage Full Profile & Security</span>
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 3. Main Dashboard Grid (Left 6 cols, Right 6 cols on Large Screens) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <EmuraWeatherCard />
            <EmuraQuickMetrics />
            <FertilizerLevelCard />
          </div>

          {/* Right Column (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            {/* Satellite Map */}
            <SatelliteFieldMapCard />

            {/* Bottom Row (2 cols): Growth Analytics & AI Assistant */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
              <GrowthAnalyticsCard />
              <EmuraAIAssistantCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
