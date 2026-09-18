import React from 'react';
import UserProfileCard from './UserProfileCard';
import FarmTeamSection from './FarmTeamSection';
import EquipmentFleetSection from './EquipmentFleetSection';
import AccountSettingsSection from './AccountSettingsSection';

// AI Crop Analysis summary cards to embed inside user profile
import CropAnalysisHeaderCard from '../crop-analysis/CropAnalysisHeaderCard';
import PlantHealthScoreCard from '../crop-analysis/PlantHealthScoreCard';
import AIRecommendations from '../crop-analysis/AIRecommendations';

export default function UserDashboardView({
  userData,
  team,
  equipment,
  onOpenAddWorker,
  onEditProfile,
  onExportData,
  onNavigateToAIAnalysis,
}) {
  return (
    <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 space-y-6">
      {/* 1. Farmer Profile & Farmland Overview Header */}
      <UserProfileCard
        userData={userData}
        onEditProfile={onEditProfile}
        onExportData={onExportData}
      />

      {/* 2. AI Crop Analysis Summary Attached to User Account */}
      <div className="bg-white rounded-2xl border border-slate-200/70 p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div>
            <h3 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">
              My Monitored Crop Health & AI Telemetry
            </h3>
            <p className="text-xs text-slate-400">
              Active diagnosis for Zone 3 · Wheat (Linked to your Agronomist Profile)
            </p>
          </div>
          {onNavigateToAIAnalysis && (
            <button
              onClick={onNavigateToAIAnalysis}
              className="text-xs font-semibold px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 rounded-xl border border-emerald-200/60 transition-colors cursor-pointer"
            >
              Open Full AI Analysis &rarr;
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-7 space-y-4">
            <CropAnalysisHeaderCard
              zoneName="Zone 3"
              cropType="Wheat"
              growthStage="Tillering"
              stressIndex="Moderate"
              canopyCoverage={78}
            />
            <AIRecommendations />
          </div>

          <div className="lg:col-span-5 space-y-4">
            <PlantHealthScoreCard score={82} statusLabel="Good Health" />
          </div>
        </div>
      </div>

      {/* 3. Farm Team & Smart IoT Equipment Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        <FarmTeamSection team={team} onOpenAddWorker={onOpenAddWorker} />
        <EquipmentFleetSection equipment={equipment} />
      </div>

      {/* 4. Account Settings, Subscriptions & Alert Preferences */}
      <AccountSettingsSection />
    </div>
  );
}
