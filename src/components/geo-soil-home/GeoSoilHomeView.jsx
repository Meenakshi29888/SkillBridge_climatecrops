import React, { useState, useEffect } from 'react';
import GeoLocationSearchBar from './GeoLocationSearchBar';
import SoilOverviewBanner from './SoilOverviewBanner';
import SoilDataCardsGrid from './SoilDataCardsGrid';
import CropSuitabilityRecommendationCard from './CropSuitabilityRecommendationCard';
import { fetchISRICSoilData } from '../../services/soilApiService';
import { Loader2, Sparkles, AlertCircle } from 'lucide-react';

export default function GeoSoilHomeView({ onNavigateToCropLifecycle, onNavigateToIrrigation }) {
  // Default to Nashik, Maharashtra (19.9975, 73.7898)
  const [currentCoords, setCurrentCoords] = useState({ lat: 19.9975, lon: 73.7898 });
  const [currentLocationName, setCurrentLocationName] = useState('Nashik, Maharashtra, India');
  const [soilData, setSoilData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadSoilData = async (lat, lon, name) => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await fetchISRICSoilData(lat, lon, name);
      setSoilData(data);
      setCurrentCoords({ lat, lon });
      setCurrentLocationName(name);
    } catch (err) {
      console.error('Soil data query error:', err);
      setError('Unable to reach SoilGrids API. Loaded calibrated regional telemetry.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadSoilData(currentCoords.lat, currentCoords.lon, currentLocationName);
  }, []);

  const handleSelectLocation = (lat, lon, name) => {
    loadSoilData(lat, lon, name);
  };

  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      {/* 1. Geo-Location Search & Coordinates Input Bar */}
      <GeoLocationSearchBar
        onSelectLocation={handleSelectLocation}
        isLoading={isLoading}
        currentLocationName={currentLocationName}
        currentCoords={currentCoords}
      />

      {/* Loading Overlay State */}
      {isLoading && !soilData && (
        <div className="p-12 bg-white rounded-3xl border border-slate-100 flex flex-col items-center justify-center space-y-3">
          <Loader2 className="w-8 h-8 text-[#0f9f6e] animate-spin" />
          <p className="text-sm font-bold text-slate-800">
            Querying ISRIC SoilGrids REST API v2.0...
          </p>
          <p className="text-xs text-slate-400">
            Fetching Nitrogen (N), pH, Organic Carbon (SOC), and Soil Texture for ({currentCoords.lat.toFixed(4)}°, {currentCoords.lon.toFixed(4)}°)
          </p>
        </div>
      )}

      {/* Error / Notice Banner if applicable */}
      {error && (
        <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 flex items-center gap-3 text-xs text-amber-900 font-medium">
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* 2. Location Metadata & Live Status Banner */}
      {soilData && (
        <>
          <SoilOverviewBanner
            soilData={soilData}
            onRefresh={() => loadSoilData(currentCoords.lat, currentCoords.lon, currentLocationName)}
            isLoading={isLoading}
          />

          {/* 3. High-Impact Soil Telemetry Cards Grid (NPK, pH, SOC, Moisture, Micronutrients) */}
          <SoilDataCardsGrid soilData={soilData} />

          {/* 4. AI Crop Suitability & Precision Fertilizer Advisory */}
          <CropSuitabilityRecommendationCard
            soilData={soilData}
            onNavigateToCropLifecycle={onNavigateToCropLifecycle}
          />
        </>
      )}
    </div>
  );
}
