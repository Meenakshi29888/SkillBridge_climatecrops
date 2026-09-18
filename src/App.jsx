import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Layers, Sparkles, Activity, Eye, EyeOff } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatsGrid from './components/StatsGrid';
import WeatherCard from './components/WeatherCard';
import CropHealthCard from './components/CropHealthCard';
import YieldForecastCard from './components/YieldForecastCard';
import FieldStatusTable from './components/FieldStatusTable';
import IrrigationScheduleCard from './components/IrrigationScheduleCard';

// Geo-Location Soil Intelligence Homepage
import GeoSoilHomeView from './components/geo-soil-home/GeoSoilHomeView';

// AI Crop Analysis & Calendar components
import AICropAnalysisView from './components/crop-analysis/AICropAnalysisView';
import CropCalendarFullView from './components/crop-analysis/CropCalendarFullView';
import AddCalendarTaskModal from './components/crop-analysis/AddCalendarTaskModal';

// Crop Schedule & Lifecycle components
import CropScheduleView from './components/crop-schedule/CropScheduleView';
import LogOperationModal from './components/crop-schedule/LogOperationModal';

// HarvestIQ Precision Irrigation & Harvest components
import HarvestIrrigationView from './components/harvest-irrigation/HarvestIrrigationView';

// User Dashboard components
import EmuraDashboardView from './components/emura-dashboard/EmuraDashboardView';
import UserDashboardView from './components/user-dashboard/UserDashboardView';
import AddWorkerModal from './components/user-dashboard/AddWorkerModal';
import EditProfileModal from './components/user-dashboard/EditProfileModal';

// AgriSense Settings View
import AgriSenseSettingsView from './components/settings/AgriSenseSettingsView';

// Global Modals
import AddFieldModal from './components/AddFieldModal';
import NotificationsModal from './components/NotificationsModal';
import SeeAllFieldsModal from './components/SeeAllFieldsModal';

import {
  initialStatsData,
  weatherConditions,
  cropHealthData,
  yieldForecastData,
  initialFieldStatusData,
  allExtendedFields,
  sidebarMenuItems,
  cropStagesData,
  initialCalendarTasks,
  initialFarmTeam,
  initialEquipmentFleet,
} from './data/mockData';

export default function App() {
  // Primary Navigation State (managed exclusively by the permanent AgFarm Sidebar)
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  // User Profile state
  const [userProfileData, setUserProfileData] = useState({
    name: 'Rakib Kowshar',
    role: 'Lead Agronomist & Farm Operations Director',
    email: 'rakib@agfarm.io',
    phone: '+1 (555) 123-4567',
    farmName: 'GreenValley Smart Farm',
    location: 'California, USA · Sector 4',
  });
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);

  // Search & Timeframe state
  const [searchQuery, setSearchQuery] = useState('');
  const [timeRange, setTimeRange] = useState('Monthly');

  // Stats & Fields state
  const [statsData, setStatsData] = useState(initialStatsData);
  const [fields, setFields] = useState(initialFieldStatusData);
  const [allFieldsList, setAllFieldsList] = useState(allExtendedFields);

  // Calendar states
  const [calendarTasks, setCalendarTasks] = useState(initialCalendarTasks);
  const [cropStages, setCropStages] = useState(cropStagesData);
  const [isAddCalendarTaskOpen, setIsAddCalendarTaskOpen] = useState(false);

  // Team & Equipment states
  const [farmTeam, setFarmTeam] = useState(initialFarmTeam);
  const [equipmentFleet, setEquipmentFleet] = useState(initialEquipmentFleet);
  const [isAddWorkerOpen, setIsAddWorkerOpen] = useState(false);

  // Modals & UI Expansion state
  const [isTelemetryExpanded, setIsTelemetryExpanded] = useState(false);
  const [isAddFieldOpen, setIsAddFieldOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isSeeAllFieldsOpen, setIsSeeAllFieldsOpen] = useState(false);
  const [isLogOperationOpen, setIsLogOperationOpen] = useState(false);

  // Notifications state
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'Moisture alert in Field A1',
      message: 'Soil moisture dropped to 30% in Zone 3',
      time: '10m ago',
      type: 'warning',
      iconBg: 'bg-amber-100',
    },
    {
      id: 2,
      title: 'Irrigation cycle scheduled',
      message: 'Zone 2 automatic cycle starts at 04:30 PM',
      time: '45m ago',
      type: 'water',
      iconBg: 'bg-sky-100',
    },
    {
      id: 3,
      title: 'Pest risk low today',
      message: 'Optimal weather conditions recorded',
      time: '2h ago',
      type: 'success',
      iconBg: 'bg-emerald-100',
    },
  ]);

  const handleAddField = (newField) => {
    setFields((prev) => [newField, ...prev]);
    setAllFieldsList((prev) => [newField, ...prev]);
    setStatsData((prev) =>
      prev.map((item) =>
        item.id === 'active-fields'
          ? { ...item, value: String(Number(item.value) + 1) }
          : item
      )
    );
  };

  const handleToggleTask = (taskId) => {
    setCalendarTasks((prev) =>
      prev.map((t) => (t.id === taskId ? { ...t, completed: !t.completed } : t))
    );
  };

  const handleAddCalendarTask = (newTask) => {
    setCalendarTasks((prev) => [newTask, ...prev]);
  };

  const handleLogOperation = (newOp) => {
    const newTask = {
      id: `task-${Date.now()}`,
      date: newOp.date || 'Today',
      time: '10:00 AM',
      title: newOp.title || 'Scheduled Operation',
      zone: 'Field Plot A-2 (Onion)',
      category: newOp.category?.toLowerCase() || 'general',
      categoryColor: 'bg-emerald-100 text-emerald-700 border-emerald-200',
      completed: false,
    };
    setCalendarTasks((prev) => [newTask, ...prev]);
    setIsLogOperationOpen(false);
  };

  const handleClearNotifications = () => {
    setNotifications([]);
  };

  // Filter fields based on search query
  const filteredFields = fields.filter((f) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      f.name.toLowerCase().includes(q) ||
      f.crop.toLowerCase().includes(q) ||
      f.code.toLowerCase().includes(q) ||
      f.healthStatus.toLowerCase().includes(q)
    );
  });

  return (
    <div className="min-h-screen agri-bg-pattern p-2 sm:p-4 md:p-6 lg:p-8 flex items-center justify-center font-sans selection:bg-emerald-200 selection:text-emerald-900">
      {/* Unified Main Application Container */}
      <div className="w-full max-w-[1520px] bg-white rounded-3xl sm:rounded-4xl shadow-2xl overflow-hidden border border-white/40 flex flex-col md:flex-row min-h-[920px]">
        
        {/* PERMANENT LEFT SIDEBAR (Fixed and never changes across pages) */}
        <div className="hidden md:block shrink-0">
          <Sidebar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            isCollapsed={isSidebarCollapsed}
            setIsCollapsed={setIsSidebarCollapsed}
            menuItems={sidebarMenuItems}
            onOpenNotifications={() => setIsNotificationsOpen(true)}
            unreadCount={notifications.length}
            userData={userProfileData}
          />
        </div>

        {/* Mobile Sidebar Overlay */}
        {isMobileSidebarOpen && (
          <div className="fixed inset-0 z-50 md:hidden flex">
            <div
              className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs"
              onClick={() => setIsMobileSidebarOpen(false)}
            />
            <div className="relative z-10 w-72 bg-white h-full shadow-2xl">
              <Sidebar
                activeTab={activeTab}
                setActiveTab={(tab) => {
                  setActiveTab(tab);
                  setIsMobileSidebarOpen(false);
                }}
                isCollapsed={false}
                setIsCollapsed={() => setIsMobileSidebarOpen(false)}
                menuItems={sidebarMenuItems}
                onOpenNotifications={() => {
                  setIsNotificationsOpen(true);
                  setIsMobileSidebarOpen(false);
                }}
                unreadCount={notifications.length}
                userData={userProfileData}
              />
            </div>
          </div>
        )}

        {/* DYNAMIC SCREEN CONTENT AREA (Only this changes when clicking sidebar items) */}
        <div className="flex-1 bg-[#fbfdfb] overflow-y-auto min-h-[920px] flex flex-col">
          
          {/* VIEW 1: Main AgFarm Operations & Geo-Location Soil Intelligence Homepage */}
          {activeTab === 'dashboard' && (
            <div className="p-4 sm:p-6 lg:p-8 space-y-6 flex-1">
              <Header
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                timeRange={timeRange}
                setTimeRange={setTimeRange}
                onAddFieldClick={() => setIsAddFieldOpen(true)}
                onNotificationsClick={() => setIsNotificationsOpen(true)}
                unreadCount={notifications.length}
                onMobileMenuToggle={() => setIsMobileSidebarOpen(true)}
              />

              {/* Geo-Location Soil Intelligence Explorer (ISRIC SoilGrids REST API v2.0) */}
              <GeoSoilHomeView
                onNavigateToCropLifecycle={() => setActiveTab('crop-schedule')}
                onNavigateToIrrigation={() => setActiveTab('irrigation')}
              />

              {/* Farm Operations Telemetry - User-Friendly "See More" Expandable Section */}
              <div className="pt-6 border-t border-slate-200/80 space-y-5">
                {/* Header with Title & See More / See Less Toggle Button */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-3xl border border-slate-100 shadow-xs">
                  <div className="flex items-start sm:items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                      <Layers className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-black text-slate-900 tracking-tight">
                          Farm Cultivation Telemetry & Operations
                        </h3>
                        <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold rounded-full">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          Live Stream
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 font-medium mt-0.5">
                        Active parcel performance, sensor thresholds, micrometeorology, and automated drip irrigation
                      </p>
                    </div>
                  </div>

                  {/* Primary "See More" / "See Less" Button */}
                  <button
                    onClick={() => setIsTelemetryExpanded(!isTelemetryExpanded)}
                    className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-2xl font-bold text-xs sm:text-sm transition-all cursor-pointer shrink-0 shadow-xs ${
                      isTelemetryExpanded
                        ? 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
                        : 'bg-[#059669] hover:bg-[#047857] text-white shadow-md shadow-emerald-700/20 hover:shadow-lg'
                    }`}
                  >
                    {isTelemetryExpanded ? (
                      <>
                        <EyeOff className="w-4 h-4" />
                        <span>See Less (Collapse Telemetry)</span>
                        <ChevronUp className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 text-emerald-200" />
                        <span>See More Details</span>
                        <ChevronDown className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                {/* Collapsed State: Quick Summary Glance Cards with Direct See More CTA */}
                {!isTelemetryExpanded && (
                  <div className="bg-gradient-to-r from-emerald-50/50 via-slate-50 to-teal-50/40 p-4 sm:p-5 rounded-2xl border border-emerald-100/70 flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Glance Metric Pills */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 w-full md:w-auto">
                      <div className="px-3 py-2 bg-white rounded-xl border border-slate-100 shadow-2xs text-center sm:text-left">
                        <span className="text-[10px] text-slate-400 font-bold block uppercase tracking-wider">Active Fields</span>
                        <span className="text-sm font-black text-slate-900">24 Parcels</span>
                      </div>
                      <div className="px-3 py-2 bg-white rounded-xl border border-slate-100 shadow-2xs text-center sm:text-left">
                        <span className="text-[10px] text-slate-400 font-bold block uppercase tracking-wider">Soil Moisture</span>
                        <span className="text-sm font-black text-emerald-600">68% Optimal</span>
                      </div>
                      <div className="px-3 py-2 bg-white rounded-xl border border-slate-100 shadow-2xs text-center sm:text-left">
                        <span className="text-[10px] text-slate-400 font-bold block uppercase tracking-wider">Crop Health</span>
                        <span className="text-sm font-black text-emerald-600">92% Vigour</span>
                      </div>
                      <div className="px-3 py-2 bg-white rounded-xl border border-slate-100 shadow-2xs text-center sm:text-left">
                        <span className="text-[10px] text-slate-400 font-bold block uppercase tracking-wider">Weather Temp</span>
                        <span className="text-sm font-black text-slate-900">24°C Safe</span>
                      </div>
                      <div className="px-3 py-2 bg-white rounded-xl border border-slate-100 shadow-2xs text-center sm:text-left col-span-2 sm:col-span-1">
                        <span className="text-[10px] text-slate-400 font-bold block uppercase tracking-wider">Est. Yield</span>
                        <span className="text-sm font-black text-amber-600">46.8 Tons</span>
                      </div>
                    </div>

                    {/* Quick Expand Button */}
                    <button
                      onClick={() => setIsTelemetryExpanded(true)}
                      className="text-xs font-bold text-emerald-700 hover:text-emerald-800 bg-white hover:bg-emerald-50 px-4 py-2.5 rounded-xl border border-emerald-200/80 shrink-0 transition-colors flex items-center gap-1.5 cursor-pointer shadow-2xs"
                    >
                      <Eye className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Expand All 8 Telemetry Cards & Charts</span>
                      <ChevronDown className="w-3.5 h-3.5 text-emerald-600" />
                    </button>
                  </div>
                )}

                {/* Expanded State: Full Rich Graphical Telemetry, Cards, Charts & Table */}
                {isTelemetryExpanded && (
                  <div className="space-y-6 animate-fadeIn">
                    {/* 8 Graphical Telemetry Cards */}
                    <StatsGrid stats={statsData} />

                    {/* 3 Detailed Telemetry Cards (Weather, Crop Health Donut, Seasonal Yield) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <WeatherCard weatherData={weatherConditions} />
                      <CropHealthCard data={cropHealthData} />
                      <YieldForecastCard forecastData={yieldForecastData} />
                    </div>

                    {/* Field Status Parcels Table & Irrigation Schedule */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      <div className="lg:col-span-2">
                        <FieldStatusTable
                          fields={filteredFields}
                          onSeeAllClick={() => setIsSeeAllFieldsOpen(true)}
                        />
                      </div>
                      <div className="lg:col-span-1">
                        <IrrigationScheduleCard />
                      </div>
                    </div>

                    {/* Bottom Collapse Button */}
                    <div className="flex justify-center pt-2">
                      <button
                        onClick={() => setIsTelemetryExpanded(false)}
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-2xl bg-white hover:bg-slate-50 text-slate-600 hover:text-slate-900 border border-slate-200 text-xs font-bold shadow-2xs transition-all cursor-pointer"
                      >
                        <ChevronUp className="w-4 h-4" />
                        <span>See Less (Collapse to Summary)</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* VIEW: Onion Crop Schedule & Lifecycle */}
          {activeTab === 'crop-schedule' && (
            <div className="p-4 sm:p-6 lg:p-8 space-y-6 flex-1 bg-[#f8faf8]">
              {/* Header with Mobile Menu Trigger */}
              <div className="flex items-center justify-between gap-4 pb-2 border-b border-slate-200/60">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsMobileSidebarOpen(true)}
                    className="md:hidden p-2 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 cursor-pointer"
                  >
                    ☰
                  </button>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                      Onion Crop Schedule & Lifecycle
                    </h2>
                    <p className="text-xs text-slate-500">
                      Field Plot A-2 (Red Nashik) · 7 Growth Stages · Precision Soil Nutrients & Advisory
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-emerald-50 border border-emerald-200 rounded-full text-xs font-bold text-emerald-700">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Lifecycle Active (Day 28)
                  </span>
                </div>
              </div>

              <CropScheduleView onOpenLogOperation={() => setIsLogOperationOpen(true)} />
            </div>
          )}

          {/* VIEW 2: AI Crop Analysis & Soil Monitoring */}
          {(activeTab === 'crops' || activeTab === 'soil-monitoring') && (
            <div className="p-4 sm:p-6 lg:p-8 space-y-6 flex-1 bg-[#f8faf8]">
              {/* Header with Mobile Menu Trigger */}
              <div className="flex items-center justify-between gap-4 pb-2 border-b border-slate-200/60">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsMobileSidebarOpen(true)}
                    className="md:hidden p-2 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50"
                  >
                    ☰
                  </button>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                      {activeTab === 'soil-monitoring' ? 'Soil Health & Nutrients' : 'AI Crop Health Diagnostics'}
                    </h2>
                    <p className="text-xs text-slate-500">
                      Real-time multispectral telemetry, NDVI vegetative indices, and anomaly detection
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-emerald-50 border border-emerald-200 rounded-full text-xs font-bold text-emerald-700">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Live AI Diagnostics
                  </span>
                </div>
              </div>

              <AICropAnalysisView
                stages={cropStages}
                tasks={calendarTasks}
                onToggleTask={handleToggleTask}
                onOpenAddTask={() => setIsAddCalendarTaskOpen(true)}
                onOpenFullCalendar={() => setActiveTab('fields')}
              />
            </div>
          )}

          {/* VIEW 3: Crop Calendar, Fields & Seasonal Scheduler */}
          {(activeTab === 'fields' || activeTab === 'reports' || activeTab === 'yield-forecast') && (
            <div className="p-4 sm:p-6 lg:p-8 space-y-6 flex-1 bg-[#f8faf8]">
              <div className="flex items-center justify-between pb-2 border-b border-slate-200/60">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsMobileSidebarOpen(true)}
                    className="md:hidden p-2 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50"
                  >
                    ☰
                  </button>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                      Crop Calendar & Growth Schedule
                    </h2>
                    <p className="text-xs text-slate-500">
                      Vegetative phase milestones, irrigation calendar, and scheduled field tasks
                    </p>
                  </div>
                </div>
              </div>

              <CropCalendarFullView
                tasks={calendarTasks}
                onToggleTask={handleToggleTask}
                onOpenAddTask={() => setIsAddCalendarTaskOpen(true)}
                stages={cropStages}
              />
            </div>
          )}

          {/* VIEW: Account - Emura Farm Overview Dashboard */}
          {activeTab === 'account' && (
            <div className="p-4 sm:p-6 lg:p-8 space-y-6 flex-1 bg-[#f8faf8]">
              {/* Header with Mobile Menu Trigger */}
              <div className="flex items-center justify-between gap-4 pb-2 border-b border-slate-200/60">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsMobileSidebarOpen(true)}
                    className="md:hidden p-2 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 cursor-pointer"
                  >
                    ☰
                  </button>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                      Account & Farm Overview
                    </h2>
                    <p className="text-xs text-slate-500">
                      Personalized agronomist overview, live IoT sensor metrics, plant health, and AI assistant
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsEditProfileOpen(true)}
                    className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 transition-colors shadow-2xs cursor-pointer"
                  >
                    Edit Profile
                  </button>
                </div>
              </div>

              <EmuraDashboardView
                userData={userProfileData}
                onEditProfile={() => setIsEditProfileOpen(true)}
                onSwitchToAccountProfile={() => setActiveTab('farm-workers')}
              />
            </div>
          )}

          {/* VIEW: Settings - AgriSense Settings & Preferences Dashboard */}
          {activeTab === 'settings' && (
            <AgriSenseSettingsView
              userData={userProfileData}
              onSaveProfile={(updated) => setUserProfileData(updated)}
            />
          )}

          {/* VIEW: Farm Workers, Team & Help Support */}
          {(activeTab === 'farm-workers' || activeTab === 'help-support') && (
            <div className="p-4 sm:p-6 lg:p-8 space-y-6 flex-1 bg-[#f8faf8]">
              <div className="flex items-center justify-between pb-2 border-b border-slate-200/60">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsMobileSidebarOpen(true)}
                    className="md:hidden p-2 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 cursor-pointer"
                  >
                    ☰
                  </button>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                      {activeTab === 'farm-workers'
                        ? 'Farm Workers & Team'
                        : 'Help & Support'}
                    </h2>
                    <p className="text-xs text-slate-500">
                      Manage farm operations, machinery fleet, worker assignments, and team members
                    </p>
                  </div>
                </div>
              </div>

              <UserDashboardView
                userData={userProfileData}
                team={farmTeam}
                equipment={equipmentFleet}
                onOpenAddWorker={() => setIsAddWorkerOpen(true)}
                onEditProfile={() => setIsEditProfileOpen(true)}
                onExportData={() => alert('Exporting Farm Telemetry & AI Diagnostic Report...')}
              />
            </div>
          )}

          {/* VIEW 5: Weather Telemetry */}
          {activeTab === 'weather' && (
            <div className="p-4 sm:p-6 lg:p-8 space-y-6 flex-1 bg-[#f8faf8]">
              <div className="flex items-center gap-3 pb-2 border-b border-slate-200/60">
                <button
                  onClick={() => setIsMobileSidebarOpen(true)}
                  className="md:hidden p-2 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50"
                >
                  ☰
                </button>
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Micro-Climate & Farm Weather
                  </h2>
                  <p className="text-xs text-slate-500">
                    High-precision local weather telemetry, precipitation probability, and wind forecasting
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                <WeatherCard weatherData={weatherConditions} />
                <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm space-y-4">
                  <h3 className="text-sm font-bold text-slate-900">7-Day Precipitation Forecast</h3>
                  <p className="text-xs text-slate-500">Low rain probability (12%) with optimal sunlight conditions (8.4 hrs/day).</p>
                  <div className="w-full h-3 rounded-full bg-emerald-100 overflow-hidden">
                    <div className="h-full bg-emerald-600 rounded-full" style={{ width: '88%' }} />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* VIEW: HarvestIQ Precision Irrigation & Harvest Dashboard */}
          {activeTab === 'irrigation' && (
            <div className="p-4 sm:p-6 lg:p-8 space-y-6 flex-1 bg-[#f8faf8]">
              {/* Header with Mobile Menu Trigger */}
              <div className="flex items-center justify-between gap-4 pb-2 border-b border-slate-200/60">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsMobileSidebarOpen(true)}
                    className="md:hidden p-2 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 cursor-pointer"
                  >
                    ☰
                  </button>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                      Irrigation & Harvest Management (HarvestIQ)
                    </h2>
                    <p className="text-xs text-slate-500">
                      Lembang Farm · 585 ha Monitored · Smart Drip Automation & Multispectral Telemetry
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-emerald-50 border border-emerald-200 rounded-full text-xs font-bold text-emerald-700">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Harvest Campaign Active (75%)
                  </span>
                </div>
              </div>

              <HarvestIrrigationView onNavigateToDiagnostics={() => setActiveTab('crops')} />
            </div>
          )}

        </div>
      </div>

      {/* Global Modals */}
      <AddFieldModal
        isOpen={isAddFieldOpen}
        onClose={() => setIsAddFieldOpen(false)}
        onAddField={handleAddField}
      />

      <EditProfileModal
        isOpen={isEditProfileOpen}
        onClose={() => setIsEditProfileOpen(false)}
        userData={userProfileData}
        onSaveProfile={(updated) => setUserProfileData(updated)}
      />

      <AddCalendarTaskModal
        isOpen={isAddCalendarTaskOpen}
        onClose={() => setIsAddCalendarTaskOpen(false)}
        onAddTask={handleAddCalendarTask}
      />

      <AddWorkerModal
        isOpen={isAddWorkerOpen}
        onClose={() => setIsAddWorkerOpen(false)}
        onAddWorker={(newWorker) => setFarmTeam((prev) => [newWorker, ...prev])}
      />

      <NotificationsModal
        isOpen={isNotificationsOpen}
        onClose={() => setIsNotificationsOpen(false)}
        notifications={notifications}
        onClearAll={handleClearNotifications}
      />

      <SeeAllFieldsModal
        isOpen={isSeeAllFieldsOpen}
        onClose={() => setIsSeeAllFieldsOpen(false)}
        fields={allFieldsList}
        onAddNewFieldClick={() => setIsAddFieldOpen(true)}
      />

      <LogOperationModal
        isOpen={isLogOperationOpen}
        onClose={() => setIsLogOperationOpen(false)}
        onSaveOperation={handleLogOperation}
      />
    </div>
  );
}
