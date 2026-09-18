import React from 'react';
import CropAnalysisHeaderCard from './CropAnalysisHeaderCard';
import AIRecommendations from './AIRecommendations';
import NDVITrendChart from './NDVITrendChart';
import PlantHealthScoreCard from './PlantHealthScoreCard';
import IrrigationForecastCard from './IrrigationForecastCard';
import ScanHistoryCard from './ScanHistoryCard';
import CropCalendarCard from './CropCalendarCard';

export default function AICropAnalysisView({
  stages,
  tasks,
  onToggleTask,
  onOpenAddTask,
  onOpenFullCalendar,
}) {
  return (
    <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 space-y-6">
      {/* 2-Column Grid matching reference design */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column (7 cols on large screens) */}
        <div className="lg:col-span-7 space-y-6">
          <CropAnalysisHeaderCard
            zoneName="Zone 3"
            cropType="Wheat"
            growthStage="Tillering"
            stressIndex="Moderate"
            canopyCoverage={78}
          />

          <AIRecommendations />

          <NDVITrendChart zoneName="Zone 3" />
        </div>

        {/* Right Column (5 cols on large screens) */}
        <div className="lg:col-span-5 space-y-6">
          <PlantHealthScoreCard score={82} statusLabel="Good Health" />

          <IrrigationForecastCard />

          <ScanHistoryCard />
        </div>
      </div>

      {/* Integrated Crop Calendar & Stage Tracker */}
      <div className="w-full">
        <CropCalendarCard
          stages={stages}
          tasks={tasks}
          onToggleTask={onToggleTask}
          onOpenAddTask={onOpenAddTask}
          onOpenFullCalendar={onOpenFullCalendar}
        />
      </div>
    </div>
  );
}
