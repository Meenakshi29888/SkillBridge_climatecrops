import React from 'react';
import {
  LayoutGrid,
  Layers,
  MapPin,
  Droplets,
  FlaskConical,
  SunMedium,
  TrendingUp,
  FileText,
  Bell,
  Users,
  Wrench,
  Settings,
  PanelLeftClose,
  PanelLeft,
  ChevronDown,
  HelpCircle,
  User,
  Radio,
  Sprout,
  Calendar,
} from 'lucide-react';

const iconMap = {
  LayoutGrid,
  Layers,
  MapPin,
  Droplets,
  FlaskConical,
  SunMedium,
  TrendingUp,
  FileText,
  Bell,
  Users,
  Wrench,
  Settings,
  User,
  HelpCircle,
  Network: Radio,
  Sprout,
  Calendar,
};

export default function Sidebar({
  activeTab,
  setActiveTab,
  isCollapsed,
  setIsCollapsed,
  menuItems,
  onOpenNotifications,
  unreadCount = 3,
  userData,
}) {
  const userName = userData?.name || 'Rakib Kowshar';
  const userInitials = userName
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <aside
      className={`bg-white h-full border-r border-slate-100 flex flex-col justify-between transition-all duration-300 ease-in-out shrink-0 select-none ${
        isCollapsed ? 'w-20' : 'w-64'
      }`}
    >
      {/* Brand Header */}
      <div>
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-50/80">
          <div className="flex items-center gap-2.5 overflow-hidden">
            <div className="w-8 h-8 rounded-lg bg-emerald-100/70 flex items-center justify-center text-emerald-700">
              <Sprout className="w-4 h-4 text-emerald-700" />
            </div>
            {!isCollapsed && (
              <span className="text-2xl font-bold tracking-tight text-emerald-700 flex items-center">
                Gro<span className="text-slate-900">via</span>
              </span>
            )}
          </div>
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="text-slate-400 hover:text-slate-600 hover:bg-slate-100 p-1.5 rounded-lg transition-colors cursor-pointer"
            title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {isCollapsed ? (
              <PanelLeft className="w-5 h-5" />
            ) : (
              <PanelLeftClose className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="p-3 space-y-1 max-h-[calc(100vh-180px)] overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = iconMap[item.icon] || LayoutGrid;
            const isActive = activeTab === item.id;
            const isAlert = item.id === 'alerts';

            return (
              <button
                key={item.id}
                onClick={() => {
                  if (isAlert && onOpenNotifications) {
                    onOpenNotifications();
                  }
                  setActiveTab(item.id);
                }}
                className={`w-full flex items-center gap-3.5 px-3.5 py-2.5 rounded-2xl text-[14px] font-medium transition-all group relative cursor-pointer ${
                  isActive
                    ? 'bg-[#ecfdf5] text-[#047857] font-bold shadow-2xs'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
                title={isCollapsed ? item.label : undefined}
              >
                <Icon
                  className={`w-5 h-5 shrink-0 transition-colors ${
                    isActive
                      ? 'text-[#059669]'
                      : 'text-slate-400 group-hover:text-slate-600'
                  }`}
                />

                {!isCollapsed && (
                  <span className="truncate flex-1 text-left">
                    {item.label}
                  </span>
                )}

                {item.badge && (
                  <span
                    className={`text-[11px] font-bold px-1.5 py-0.5 rounded-full flex items-center justify-center min-w-[18px] h-[18px] ${
                      item.badgeColor || 'bg-rose-500 text-white'
                    } ${isCollapsed ? 'absolute -top-1 -right-1' : ''}`}
                  >
                    {isAlert ? unreadCount : item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* User Profile Footer */}
      <div className="p-3 border-t border-slate-100">
        <button
          onClick={() => setActiveTab('account')}
          className={`w-full flex items-center justify-between p-2 rounded-2xl transition-colors cursor-pointer group text-left ${
            activeTab === 'account' ? 'bg-[#ecfdf5]' : 'hover:bg-slate-50'
          }`}
          title="Open Account Profile"
        >
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-full bg-[#064e3b] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-sm">
              {userInitials || 'RK'}
            </div>
            {!isCollapsed && (
              <div className="text-left min-w-0">
                <p className="text-sm font-semibold text-slate-800 truncate leading-tight">
                  {userName}
                </p>
                <p className="text-xs text-slate-400 font-medium truncate">
                  Admin
                </p>
              </div>
            )}
          </div>
          {!isCollapsed && (
            <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-slate-600 transition-colors" />
          )}
        </button>
      </div>
    </aside>
  );
}
