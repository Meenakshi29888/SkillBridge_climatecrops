import React, { useState, useRef, useEffect } from 'react';
import { Search, Bell, Plus, Calendar, ChevronDown, Check, Menu } from 'lucide-react';

export default function Header({
  searchQuery,
  setSearchQuery,
  timeRange,
  setTimeRange,
  onAddFieldClick,
  onNotificationsClick,
  unreadCount = 3,
  onMobileMenuToggle,
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const timeOptions = ['Daily', 'Weekly', 'Monthly', 'Yearly'];

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="space-y-6">
      {/* Top Search & Actions Bar */}
      <div className="flex items-center justify-between gap-4">
        {/* Mobile menu trigger */}
        <button
          onClick={onMobileMenuToggle}
          className="lg:hidden p-2 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Search input */}
        <div className="relative flex-1 max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200/90 rounded-full text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all shadow-sm"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs text-slate-400 hover:text-slate-600"
            >
              Clear
            </button>
          )}
        </div>

        {/* Top Right Notifications Bell */}
        <div className="flex items-center gap-3">
          <button
            onClick={onNotificationsClick}
            className="relative p-2.5 rounded-full bg-white border border-slate-200/80 text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
            title="Notifications"
          >
            <Bell className="w-5 h-5" />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-rose-500 text-white font-bold text-[10px] w-5 h-5 rounded-full flex items-center justify-center ring-2 ring-white animate-pulse">
                {unreadCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Greeting & Action Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-[26px] font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
            Hey Rakib <span className="inline-block animate-bounce">👋</span> , welcome back!
          </h1>
        </div>

        <div className="flex items-center gap-3">
          {/* Time Filter Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200/90 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors shadow-sm"
            >
              <Calendar className="w-4 h-4 text-slate-400" />
              <span>{timeRange}</span>
              <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-1.5 w-36 bg-white border border-slate-100 rounded-xl shadow-lg z-30 py-1 overflow-hidden animate-in fade-in zoom-in-95 duration-100">
                {timeOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      setTimeRange(option);
                      setIsDropdownOpen(false);
                    }}
                    className="w-full flex items-center justify-between px-3.5 py-2 text-xs font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 text-left transition-colors"
                  >
                    <span>{option}</span>
                    {timeRange === option && <Check className="w-3.5 h-3.5 text-emerald-600" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Add Field Button */}
          <button
            onClick={onAddFieldClick}
            className="flex items-center gap-1.5 px-4 py-2 bg-[#15803d] hover:bg-[#166534] text-white rounded-xl text-sm font-semibold transition-all shadow-sm active:scale-[0.98] cursor-pointer"
          >
            <Plus className="w-4 h-4 stroke-[2.5]" />
            <span>Add Field</span>
          </button>
        </div>
      </div>
    </div>
  );
}
