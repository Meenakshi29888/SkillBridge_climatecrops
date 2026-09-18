import React from 'react';
import HarvestBannerHeader from './HarvestBannerHeader';
import HarvestOverviewCards from './HarvestOverviewCards';

export default function HarvestIrrigationView({ onNavigateToDiagnostics }) {
  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      {/* 1. Lembang Farm Banner Header & Top Metrics */}
      <HarvestBannerHeader
        onRunDiagnostics={() => {
          alert('Running Sentinel-2 L2A & Multispectral Drone Health Inference...');
          if (onNavigateToDiagnostics) onNavigateToDiagnostics();
        }}
        onDownloadReport={() => alert('Generating Lembang Farm AA+ Health & Telemetry PDF Report...')}
        onFieldInspection={() => alert('Initiating Field Inspection Route for 14 active parcels...')}
      />

      {/* 2. 4 Health/Weather/Soil/Harvest Overview Cards + Satellite Site Map */}
      <HarvestOverviewCards onNavigateToDiagnostics={onNavigateToDiagnostics} />
    </div>
  );
}

