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

// Help & Support View
import HelpSupportView from './components/help-support/HelpSupportView';

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
    <div className="min-h-screen w-full bg-[#fbfdfb] flex flex-col md:flex-row font-sans selection:bg-emerald-200 selection:text-emerald-900 antialiased">
      {/* PERMANENT LEFT SIDEBAR (Fixed and never changes across pages) */}
      <div className="hidden md:block shrink-0 h-screen sticky top-0 z-30">
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
      <main className="flex-1 bg-[#fbfdfb] min-h-screen flex flex-col min-w-0">
          
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

          {/* VIEW: Farm Workers & Team */}
          {activeTab === 'farm-workers' && (
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
                      Farm Workers & Team
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

          {/* VIEW: Help & Support View */}
          {activeTab === 'help-support' && (
            <div className="p-4 sm:p-6 lg:p-8 flex-1 bg-[#f8faf8] min-h-screen flex flex-col justify-start">
              {/* Header with Mobile Menu Trigger */}
              <div className="flex items-center justify-between pb-2 md:hidden border-b border-slate-200/60 mb-4">
                <button
                  onClick={() => setIsMobileSidebarOpen(true)}
                  className="p-2 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 cursor-pointer"
                >
                  ☰
                </button>
                <span className="text-sm font-bold text-slate-700">Help & Support</span>
                <div className="w-8" />
              </div>

              <HelpSupportView userData={userProfileData} />
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

        </main>

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
