import React, { useState } from 'react';
import { Search, MapPin, Navigation, Compass, Sparkles, Loader2 } from 'lucide-react';
import { PRESET_LOCATIONS, searchLocationCoordinates } from '../../services/soilApiService';

export default function GeoLocationSearchBar({
  onSelectLocation,
  isLoading,
  currentLocationName,
  currentCoords,
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showManualCoords, setShowManualCoords] = useState(false);
  const [manualLat, setManualLat] = useState(currentCoords?.lat || 19.9975);
  const [manualLon, setManualLon] = useState(currentCoords?.lon || 73.7898);

  const handleSearchChange = async (e) => {
    const val = e.target.value;
    setSearchQuery(val);
    if (val.trim().length >= 2) {
      setIsSearching(true);
      const results = await searchLocationCoordinates(val);
      setSearchResults(results);
      setIsSearching(false);
    } else {
      setSearchResults([]);
    }
  };

  const handleSelectResult = (item) => {
    setSearchQuery(item.name);
    setSearchResults([]);
    onSelectLocation(item.lat, item.lon, item.name);
  };

  const handleUseGPS = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser.');
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        onSelectLocation(latitude, longitude, `GPS Location (${latitude.toFixed(4)}°, ${longitude.toFixed(4)}°)`);
      },
      (err) => {
        alert(`Unable to retrieve GPS location: ${err.message}`);
      }
    );
  };

  const handleManualCoordsSubmit = (e) => {
    e.preventDefault();
    const lat = parseFloat(manualLat);
    const lon = parseFloat(manualLon);
    if (isNaN(lat) || isNaN(lon)) {
      alert('Please enter valid numeric latitude and longitude coordinates.');
      return;
    }
    onSelectLocation(lat, lon, `Custom Coordinates (${lat.toFixed(4)}°, ${lon.toFixed(4)}°)`);
    setShowManualCoords(false);
  };

  return (
    <div className="bg-white p-5 sm:p-6 rounded-3xl border border-slate-100 shadow-2xs space-y-4">
      {/* Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
            <Compass className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-base font-black text-slate-900 tracking-tight">
              Global Soil Telemetry Explorer
            </h2>
            <p className="text-xs text-slate-400 font-medium">
              Enter any geo-location or coordinates to query live ISRIC SoilGrids v2.0 properties
            </p>
          </div>
        </div>

        <button
          onClick={() => setShowManualCoords(!showManualCoords)}
          className="text-xs font-bold text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-xl border border-emerald-200/60 transition-colors self-start sm:self-auto cursor-pointer"
        >
          {showManualCoords ? 'Search by City' : 'Input Lat / Lon'}
        </button>
      </div>

      {/* Main Search Input & GPS Button */}
      {!showManualCoords ? (
        <div className="relative">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search location (e.g. Nashik, Kodungallur, Fresno, Lembang)..."
                className="w-full pl-10 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
              />
              {isSearching && (
                <Loader2 className="w-4 h-4 animate-spin absolute right-3.5 top-1/2 -translate-y-1/2 text-emerald-600" />
              )}
            </div>

            <button
              onClick={handleUseGPS}
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-2xl text-xs sm:text-sm font-bold text-white bg-[#0f9f6e] hover:bg-[#087f5b] shadow-sm hover:shadow transition-all shrink-0 cursor-pointer"
            >
              <Navigation className="w-4 h-4" />
              <span>Use My GPS</span>
            </button>
          </div>

          {/* Autocomplete Suggestions Dropdown */}
          {searchResults.length > 0 && (
            <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl shadow-2xl border border-slate-100 py-2 z-50 animate-in fade-in zoom-in-95 duration-100 max-h-60 overflow-y-auto">
              <div className="px-3.5 py-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                Matching Geographic Locations
              </div>
              {searchResults.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectResult(item)}
                  className="w-full px-4 py-2.5 text-left flex items-center justify-between hover:bg-emerald-50 transition-colors cursor-pointer text-xs"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="font-bold text-slate-800 truncate">{item.name}</span>
                  </div>
                  <span className="text-[10px] font-semibold text-slate-400 shrink-0">
                    {item.lat.toFixed(2)}°, {item.lon.toFixed(2)}°
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      ) : (
        /* Manual Lat/Lon Coordinates Form */
        <form onSubmit={handleManualCoordsSubmit} className="flex flex-col sm:flex-row items-center gap-3">
          <div className="flex-1 w-full relative">
            <input
              type="number"
              step="any"
              placeholder="Latitude (e.g. 19.9975)"
              value={manualLat}
              onChange={(e) => setManualLat(e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-2xl text-xs font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
              required
            />
          </div>
          <div className="flex-1 w-full relative">
            <input
              type="number"
              step="any"
              placeholder="Longitude (e.g. 73.7898)"
              value={manualLon}
              onChange={(e) => setManualLon(e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-2xl text-xs font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-2.5 rounded-2xl text-xs font-bold text-white bg-[#0f9f6e] hover:bg-[#087f5b] shadow-sm transition-colors shrink-0 cursor-pointer"
          >
            Fetch Soil Data
          </button>
        </form>
      )}

      {/* Quick Preset Location Chips */}
      <div className="pt-2 flex items-center gap-2 overflow-x-auto text-xs scrollbar-none">
        <span className="text-[11px] font-bold text-slate-400 whitespace-nowrap">Explore Presets:</span>
        {PRESET_LOCATIONS.map((preset) => (
          <button
            key={preset.name}
            onClick={() => onSelectLocation(preset.lat, preset.lon, preset.name)}
            className="px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-emerald-50 text-slate-600 hover:text-emerald-800 border border-slate-200 hover:border-emerald-200 font-semibold text-[11px] whitespace-nowrap transition-all cursor-pointer shadow-2xs"
          >
            {preset.name.split(',')[0]}
          </button>
        ))}
      </div>
    </div>
  );
}
