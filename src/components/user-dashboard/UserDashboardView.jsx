import React from 'react';
import UserProfileCard from './UserProfileCard';
import FarmTeamSection from './FarmTeamSection';
import EquipmentFleetSection from './EquipmentFleetSection';
import AccountSettingsSection from './AccountSettingsSection';

export default function UserDashboardView({
  userData,
  team,
  equipment,
  onOpenAddWorker,
  onEditProfile,
  onExportData,
}) {
  return (
    <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 space-y-6">
      {/* 1. Farmer Profile & Farmland Overview Header */}
      <UserProfileCard
        userData={userData}
        onEditProfile={onEditProfile}
        onExportData={onExportData}
      />

      {/* 2. Farm Team & Smart IoT Equipment Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        <FarmTeamSection team={team} onOpenAddWorker={onOpenAddWorker} />
        <EquipmentFleetSection equipment={equipment} />
      </div>

      {/* 3. Account Settings, Subscriptions & Alert Preferences */}
      <AccountSettingsSection />
    </div>
  );
}
