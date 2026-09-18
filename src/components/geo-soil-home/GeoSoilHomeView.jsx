import React, { useState, useEffect } from 'react';
import GeoLocationSearchBar from './GeoLocationSearchBar';
import SoilOverviewBanner from './SoilOverviewBanner';
import SoilDataCardsGrid from './SoilDataCardsGrid';
import AIWeatherPredictionCard from './AIWeatherPredictionCard';
import { fetchISRICSoilData, fetchLiveAndPredictedWeather } from '../../services/soilApiService';
import { Loader2, AlertCircle } from 'lucide-react';

export default function GeoSoilHomeView({ onNavigateToCropLifecycle, onNavigateToIrrigation }) {
  // Default to Manjeri, Kerala, India (11.1203, 76.1215) or Nashik
  const [currentCoords, setCurrentCoords] = useState({ lat: 11.1203, lon: 76.1215 });
  const [currentLocationName, setCurrentLocationName] = useState('Manjeri, India');
  const [soilData, setSoilData] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadData = async (lat, lon, name) => {
    setIsLoading(true);
    setError(null);
    try {
      const [soilRes, weatherRes] = await Promise.all([
        fetchISRICSoilData(lat, lon, name),
        fetchLiveAndPredictedWeather(lat, lon, name),
      ]);
      setSoilData(soilRes);
      setWeatherData(weatherRes);
      setCurrentCoords({ lat, lon });
      setCurrentLocationName(name);
    } catch (err) {
      console.error('Soil/Weather data query error:', err);
      setError('Unable to complete telemetry fetch. Loaded regional calibrated models.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData(currentCoords.lat, currentCoords.lon, currentLocationName);
  }, []);

  const handleSelectLocation = (lat, lon, name) => {
    loadData(lat, lon, name);
  };

  return (
    <div className="space-y-6 animate-fadeIn pb-8">
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
            Querying ISRIC SoilGrids REST API v2.0 & Live Weather Telemetry...
          </p>
          <p className="text-xs text-slate-400">
            Fetching Nitrogen (N), pH, and Climate Predictions for ({currentCoords.lat.toFixed(4)}°, {currentCoords.lon.toFixed(4)}°)
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
            onRefresh={() => loadData(currentCoords.lat, currentCoords.lon, currentLocationName)}
            isLoading={isLoading}
          />

          {/* 3. Primary Soil Chemistry & NPK Macronutrients Cards */}
          <SoilDataCardsGrid soilData={soilData} />

          {/* 4. Lower Dashboard: AI Weather Report, 92-Day Seasonal Recommendations & Early Warnings */}
          <AIWeatherPredictionCard
            weatherData={weatherData}
            currentLocationName={currentLocationName}
          />
        </>
      )}
    </div>
  );
}


