import React, { useState } from 'react';
import {
  User,
  Home,
  Sliders,
  Bell,
  Lock,
  Shield,
  Edit2,
  CloudRain,
  MapPin,
  CheckCircle2,
  Globe,
  Gauge,
  Sprout,
  Sun,
  Eye,
  EyeOff,
  Sparkles,
} from 'lucide-react';

export default function AgriSenseSettingsView({ userData, onSaveProfile }) {
  const [activeTab, setActiveTab] = useState('profile');

  // Form profile state (linked to global userProfileData)
  const [profile, setProfile] = useState({
    name: userData?.name || 'Ramesh Kumar',
    email: userData?.email || 'ramesh@example.com',
    phone: userData?.phone || '+91 98765 43210',
    role: userData?.role || 'Farmer',
    farmName: userData?.farmName || 'Green Valley Farm',
    location: userData?.location || 'Kodungallur, Kerala',
    landArea: '150 cents (1.5 acres)',
    soilType: 'Laterite',
    waterAvailability: 'Moderate',
    language: 'English',
    unitSystem: 'Metric (kg, °C, mm)',
    cropFocus: 'All Crops',
    notifFrequency: 'Daily',
    theme: 'Light',
  });

  // Notification toggles
  const [notifications, setNotifications] = useState({
    weatherAlerts: true,
    taskReminders: true,
    cropSuggestions: true,
    systemUpdates: true,
  });

  // Password fields
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Edit Modal State
  const [editingSection, setEditingSection] = useState(null);
  const [tempProfile, setTempProfile] = useState({ ...profile });

  const toggleNotification = (key) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    if (!currentPassword || !newPassword || !confirmPassword) {
      alert('Please fill in all password fields.');
      return;
    }
    if (newPassword !== confirmPassword) {
      alert('New password and confirmation do not match.');
      return;
    }
    alert('Password updated successfully!');
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  const handleSaveModal = () => {
    setProfile({ ...tempProfile });
    if (onSaveProfile) {
      onSaveProfile({
        ...userData,
        name: tempProfile.name,
        email: tempProfile.email,
        phone: tempProfile.phone,
        role: tempProfile.role,
        farmName: tempProfile.farmName,
        location: tempProfile.location,
      });
    }
    setEditingSection(null);
  };

  const sidebarTabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'farm', label: 'Farm Information', icon: Home },
    { id: 'preferences', label: 'Preferences', icon: Sliders },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'password', label: 'Change Password', icon: Lock },
    { id: 'privacy', label: 'Privacy & Security', icon: Shield },
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 flex-1 bg-[#f8faf8] animate-fadeIn pb-12">
      {/* 1. Header Bar with Microclimate & Location Badges */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-200/80">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Settings</h1>
          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
            Manage your account, farm details and preferences
          </p>
        </div>

        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2.5">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100/90 border border-slate-200 text-xs font-semibold text-slate-700">
            <CloudRain className="w-3.5 h-3.5 text-sky-500" />
            <span>28°C Light Rain</span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100/90 border border-slate-200 text-xs font-semibold text-slate-700">
            <MapPin className="w-3.5 h-3.5 text-slate-400" />
            <span>{profile.location}</span>
          </div>

          <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
            <div className="w-8 h-8 rounded-full bg-emerald-800 text-white flex items-center justify-center font-bold text-xs shadow-xs">
              {profile.name[0] || 'R'}
            </div>
            <div className="text-left hidden sm:block">
              <p className="text-xs font-bold text-slate-900 leading-tight">Hello, {profile.name.split(' ')[0]}</p>
              <p className="text-[10px] text-slate-400 font-medium">{profile.role}</p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Workarea: Left Navigation Category Tabs & Right Content Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Category Navigation Pills (Left 3 cols) */}
        <div className="lg:col-span-3 bg-white p-3 rounded-2xl border border-slate-200/80 shadow-2xs space-y-1">
          {sidebarTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-emerald-50 text-emerald-800 font-extrabold shadow-2xs'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-700' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content Cards Grid (Right 9 cols) */}
        <div className="lg:col-span-9 space-y-6">
          {/* Card 1: Profile Information */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-2xs space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div>
                <h3 className="text-base font-black text-slate-900 tracking-tight">Profile Information</h3>
                <p className="text-xs text-slate-400 font-medium">Update your personal details</p>
              </div>
              <button
                onClick={() => {
                  setTempProfile({ ...profile });
                  setEditingSection('profile');
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-2xs transition-colors cursor-pointer"
              >
                <Edit2 className="w-3.5 h-3.5 text-slate-500" />
                <span>Edit</span>
              </button>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400 shrink-0">
                <User className="w-10 h-10 text-slate-500" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 flex-1 w-full text-xs">
                <div>
                  <span className="text-slate-400 font-medium block">Name</span>
                  <span className="font-extrabold text-slate-900 text-sm">{profile.name}</span>
                </div>
                <div>
                  <span className="text-slate-400 font-medium block">Email</span>
                  <span className="font-bold text-slate-800 text-xs sm:text-sm">{profile.email}</span>
                </div>
                <div>
                  <span className="text-slate-400 font-medium block">Phone</span>
                  <span className="font-bold text-slate-800 text-xs sm:text-sm">{profile.phone}</span>
                </div>
                <div>
                  <span className="text-slate-400 font-medium block">Role</span>
                  <span className="font-bold text-slate-800 text-xs sm:text-sm">{profile.role}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Farm Information & Preferences (2 columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {/* Farm Information */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-2xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div>
                  <h3 className="text-sm sm:text-base font-black text-slate-900 tracking-tight">Farm Information</h3>
                  <p className="text-[11px] text-slate-400 font-medium">Your farm details help us give better recommendations</p>
                </div>
                <button
                  onClick={() => {
                    setTempProfile({ ...profile });
                    setEditingSection('farm');
                  }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-2xs transition-colors cursor-pointer"
                >
                  <Edit2 className="w-3 h-3 text-slate-500" />
                  <span>Edit</span>
                </button>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-slate-500 font-medium">
                    <Home className="w-3.5 h-3.5 text-emerald-600" />
                    Farm Name
                  </span>
                  <span className="font-bold text-slate-900">{profile.farmName}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-slate-500 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                    Location
                  </span>
                  <span className="font-bold text-slate-900">{profile.location}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-slate-500 font-medium">
                    <Gauge className="w-3.5 h-3.5 text-emerald-600" />
                    Total Land Area
                  </span>
                  <span className="font-bold text-slate-900">{profile.landArea}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-slate-500 font-medium">
                    <Sprout className="w-3.5 h-3.5 text-emerald-600" />
                    Soil Type
                  </span>
                  <span className="font-bold text-slate-900">{profile.soilType}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-slate-500 font-medium">
                    <CloudRain className="w-3.5 h-3.5 text-emerald-600" />
                    Water Availability
                  </span>
                  <span className="font-bold text-slate-900">{profile.waterAvailability}</span>
                </div>
              </div>
            </div>

            {/* Preferences */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-2xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div>
                  <h3 className="text-sm sm:text-base font-black text-slate-900 tracking-tight">Preferences</h3>
                  <p className="text-[11px] text-slate-400 font-medium">Customize your app experience</p>
                </div>
                <button
                  onClick={() => {
                    setTempProfile({ ...profile });
                    setEditingSection('preferences');
                  }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-2xs transition-colors cursor-pointer"
                >
                  <Edit2 className="w-3 h-3 text-slate-500" />
                  <span>Edit</span>
                </button>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-slate-500 font-medium">
                    <Globe className="w-3.5 h-3.5 text-emerald-600" />
                    Preferred Language
                  </span>
                  <span className="font-bold text-slate-900">{profile.language}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-slate-500 font-medium">
                    <Gauge className="w-3.5 h-3.5 text-emerald-600" />
                    Unit System
                  </span>
                  <span className="font-bold text-slate-900">{profile.unitSystem}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-slate-500 font-medium">
                    <Sprout className="w-3.5 h-3.5 text-emerald-600" />
                    Crop Focus
                  </span>
                  <span className="font-bold text-slate-900">{profile.cropFocus}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-slate-500 font-medium">
                    <Bell className="w-3.5 h-3.5 text-emerald-600" />
                    Notifications Frequency
                  </span>
                  <span className="font-bold text-slate-900">{profile.notifFrequency}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-slate-500 font-medium">
                    <Sun className="w-3.5 h-3.5 text-emerald-600" />
                    Theme
                  </span>
                  <span className="font-bold text-slate-900">{profile.theme}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Row 3: Notification Settings & Change Password (2 columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {/* Notification Settings */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-2xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div>
                  <h3 className="text-sm sm:text-base font-black text-slate-900 tracking-tight">Notification Settings</h3>
                  <p className="text-[11px] text-slate-400 font-medium">Choose what updates you want to receive</p>
                </div>
              </div>

              <div className="space-y-3.5 text-xs">
                {/* Weather Alerts */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-2.5">
                    <CloudRain className="w-4 h-4 text-slate-500 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block">Weather Alerts</span>
                      <span className="text-[11px] text-slate-400">Heavy rain, drought and extreme weather warnings</span>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleNotification('weatherAlerts')}
                    className={`w-11 h-6 rounded-full p-0.5 transition-colors flex items-center cursor-pointer shrink-0 ${
                      notifications.weatherAlerts ? 'bg-[#0f9f6e] justify-end' : 'bg-slate-200 justify-start'
                    }`}
                  >
                    <div className="w-5 h-5 rounded-full bg-white shadow-xs" />
                  </button>
                </div>

                {/* Task Reminders */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-2.5">
                    <Bell className="w-4 h-4 text-slate-500 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block">Task Reminders</span>
                      <span className="text-[11px] text-slate-400">Irrigation, fertilizer, harvesting and other farm tasks</span>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleNotification('taskReminders')}
                    className={`w-11 h-6 rounded-full p-0.5 transition-colors flex items-center cursor-pointer shrink-0 ${
                      notifications.taskReminders ? 'bg-[#0f9f6e] justify-end' : 'bg-slate-200 justify-start'
                    }`}
                  >
                    <div className="w-5 h-5 rounded-full bg-white shadow-xs" />
                  </button>
                </div>

                {/* Crop Suggestions */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-2.5">
                    <Sprout className="w-4 h-4 text-slate-500 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block">Crop Suggestions</span>
                      <span className="text-[11px] text-slate-400">New crop recommendations and farming tips</span>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleNotification('cropSuggestions')}
                    className={`w-11 h-6 rounded-full p-0.5 transition-colors flex items-center cursor-pointer shrink-0 ${
                      notifications.cropSuggestions ? 'bg-[#0f9f6e] justify-end' : 'bg-slate-200 justify-start'
                    }`}
                  >
                    <div className="w-5 h-5 rounded-full bg-white shadow-xs" />
                  </button>
                </div>

                {/* System Updates */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-2.5">
                    <Sparkles className="w-4 h-4 text-slate-500 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block">System Updates</span>
                      <span className="text-[11px] text-slate-400">New features and important announcements</span>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleNotification('systemUpdates')}
                    className={`w-11 h-6 rounded-full p-0.5 transition-colors flex items-center cursor-pointer shrink-0 ${
                      notifications.systemUpdates ? 'bg-[#0f9f6e] justify-end' : 'bg-slate-200 justify-start'
                    }`}
                  >
                    <div className="w-5 h-5 rounded-full bg-white shadow-xs" />
                  </button>
                </div>
              </div>
            </div>

            {/* Change Password */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-2xs space-y-4">
              <form onSubmit={handlePasswordChange} className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div>
                    <h3 className="text-sm sm:text-base font-black text-slate-900 tracking-tight">Change Password</h3>
                    <p className="text-[11px] text-slate-400 font-medium">Keep your account secure</p>
                  </div>
                  <button
                    type="submit"
                    className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-2xs transition-colors cursor-pointer"
                  >
                    Change
                  </button>
                </div>

                <div className="space-y-3">
                  <div className="relative">
                    <Lock className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Current Password"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                    />
                  </div>

                  <div className="relative">
                    <Lock className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="New Password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                    />
                  </div>

                  <div className="relative">
                    <Lock className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Confirm New Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Edit Modal */}
      {editingSection && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
            <div className="p-6 border-b border-slate-100 bg-emerald-800 text-white flex items-center justify-between">
              <h3 className="font-bold text-base">
                Edit {editingSection === 'profile' ? 'Profile Details' : editingSection === 'farm' ? 'Farm Information' : 'Preferences'}
              </h3>
              <button onClick={() => setEditingSection(null)} className="text-white/80 hover:text-white cursor-pointer font-bold">
                ✕
              </button>
            </div>

            <div className="p-6 space-y-4 text-xs">
              {editingSection === 'profile' && (
                <>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      value={tempProfile.name}
                      onChange={(e) => setTempProfile({ ...tempProfile, name: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-200 rounded-xl text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      value={tempProfile.email}
                      onChange={(e) => setTempProfile({ ...tempProfile, email: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-200 rounded-xl text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Phone Number</label>
                    <input
                      type="text"
                      value={tempProfile.phone}
                      onChange={(e) => setTempProfile({ ...tempProfile, phone: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-200 rounded-xl text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Role / Designation</label>
                    <input
                      type="text"
                      value={tempProfile.role}
                      onChange={(e) => setTempProfile({ ...tempProfile, role: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-200 rounded-xl text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                    />
                  </div>
                </>
              )}

              {editingSection === 'farm' && (
                <>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Farm Name</label>
                    <input
                      type="text"
                      value={tempProfile.farmName}
                      onChange={(e) => setTempProfile({ ...tempProfile, farmName: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-200 rounded-xl text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Location</label>
                    <input
                      type="text"
                      value={tempProfile.location}
                      onChange={(e) => setTempProfile({ ...tempProfile, location: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-200 rounded-xl text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Total Land Area</label>
                    <input
                      type="text"
                      value={tempProfile.landArea}
                      onChange={(e) => setTempProfile({ ...tempProfile, landArea: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-200 rounded-xl text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Soil Type</label>
                    <input
                      type="text"
                      value={tempProfile.soilType}
                      onChange={(e) => setTempProfile({ ...tempProfile, soilType: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-200 rounded-xl text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                    />
                  </div>
                </>
              )}

              {editingSection === 'preferences' && (
                <>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Preferred Language</label>
                    <select
                      value={tempProfile.language}
                      onChange={(e) => setTempProfile({ ...tempProfile, language: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-200 rounded-xl text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                    >
                      <option>English</option>
                      <option>Hindi</option>
                      <option>Malayalam</option>
                      <option>Spanish</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Unit System</label>
                    <select
                      value={tempProfile.unitSystem}
                      onChange={(e) => setTempProfile({ ...tempProfile, unitSystem: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-200 rounded-xl text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                    >
                      <option>Metric (kg, °C, mm)</option>
                      <option>Imperial (lbs, °F, in)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Crop Focus</label>
                    <input
                      type="text"
                      value={tempProfile.cropFocus}
                      onChange={(e) => setTempProfile({ ...tempProfile, cropFocus: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-200 rounded-xl text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                    />
                  </div>
                </>
              )}

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setEditingSection(null)}
                  className="px-4 py-2 rounded-xl font-bold text-slate-600 hover:bg-slate-100 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSaveModal}
                  className="px-5 py-2 rounded-xl font-bold text-white bg-emerald-700 hover:bg-emerald-800 shadow-sm cursor-pointer"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
