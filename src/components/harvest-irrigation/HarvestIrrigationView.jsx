import React, { useState } from 'react';
import HarvestBannerHeader from './HarvestBannerHeader';
import HarvestOverviewCards from './HarvestOverviewCards';
import AgronomicRecommendations from './AgronomicRecommendations';
import CropGrowthCharts from './CropGrowthCharts';
import AgronomicDataTable from './AgronomicDataTable';
import ScheduleWorkOrderModal from './ScheduleWorkOrderModal';

export default function HarvestIrrigationView({ onNavigateToDiagnostics }) {
  const [selectedPrescription, setSelectedPrescription] = useState(null);
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);

  const handleOpenScheduleModal = (prescription) => {
    setSelectedPrescription(prescription);
    setIsScheduleModalOpen(true);
  };

  const handleConfirmWorkOrder = (data) => {
    alert(
      `Dispatched: "${data.title}" for ${data.target} on ${data.date} assigned to ${data.assignedOperator}!`
    );
  };

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

      {/* 3. AI & Agronomic Priority Recommendations */}
      <AgronomicRecommendations onOpenScheduleModal={handleOpenScheduleModal} />

      {/* 4. Crop Growth Monitoring Biometrics & Farm Area Historical */}
      <CropGrowthCharts />

      {/* 5. Crops List & Agronomic Data Table */}
      <AgronomicDataTable onActionClick={handleOpenScheduleModal} />

      {/* Interactive Modal */}
      <ScheduleWorkOrderModal
        isOpen={isScheduleModalOpen}
        onClose={() => setIsScheduleModalOpen(false)}
        prescription={selectedPrescription}
        onConfirm={handleConfirmWorkOrder}
      />
    </div>
  );
}
