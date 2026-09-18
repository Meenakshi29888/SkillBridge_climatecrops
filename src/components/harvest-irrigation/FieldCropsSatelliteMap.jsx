import React, { useState } from 'react';
import { Layers, ZoomIn, ZoomOut, Maximize2, ExternalLink, MapPin, Eye } from 'lucide-react';

export default function FieldCropsSatelliteMap() {
  const [activeLayer, setActiveLayer] = useState('NDVI');
  const [zoomLevel, setZoomLevel] = useState(1);
  const [selectedSector, setSelectedSector] = useState('Sector 4A');

  return (
    <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-2xs space-y-4 h-full flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Site Map</span>
          <h3 className="text-base font-black text-slate-900 tracking-tight">Field Crops Main Area</h3>
        </div>

        <div className="flex items-center gap-2">
          <span className="bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded text-[11px] border border-emerald-200">
            {activeLayer} Layer
          </span>
          <button
            onClick={() => setActiveLayer(activeLayer === 'NDVI' ? 'Moisture' : 'NDVI')}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
          >
            <Layers className="w-3 h-3 text-slate-500" />
            <span>Layers ▾</span>
          </button>
        </div>
      </div>

      {/* Satellite Imagery Simulation Container */}
      <div className="relative w-full h-[220px] rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-inner group select-none">
        {/* Synthetic Map Terrain Graphics */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500"
          style={{
            backgroundImage: `radial-gradient(ellipse at 30% 40%, rgba(16, 185, 129, 0.45) 0%, rgba(5, 150, 105, 0.25) 45%, rgba(15, 23, 42, 0.9) 100%),
            linear-gradient(135deg, #1e3a1e 0%, #11261a 50%, #0d1f14 100%)`,
            transform: `scale(${zoomLevel})`,
          }}
        >
          {/* Topographic and Field Parcel Grid lines */}
          <svg className="w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            {/* Organic Parcel Polygonal Boundaries */}
            <polygon points="30,20 180,30 160,110 40,95" fill="rgba(16, 185, 129, 0.35)" stroke="#34d399" strokeWidth="1.5" />
            <polygon points="190,35 340,25 320,130 170,115" fill="rgba(52, 211, 153, 0.4)" stroke="#10b981" strokeWidth="1.5" />
            <polygon points="50,110 165,120 145,200 35,190" fill="rgba(245, 158, 11, 0.35)" stroke="#fbbf24" strokeWidth="1.5" />
            <polygon points="175,125 330,135 310,210 155,205" fill="rgba(16, 185, 129, 0.3)" stroke="#34d399" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Sector Pin Callout 1 (Corn 88% Vigor) */}
        <div
          onClick={() => setSelectedSector('Sector 4A')}
          className="absolute top-5 left-16 bg-slate-900/90 backdrop-blur-md text-white px-2.5 py-1.5 rounded-xl border border-emerald-500/40 text-[10px] font-bold shadow-lg flex items-center gap-1.5 cursor-pointer hover:scale-105 transition-transform"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Sector 4A - Corn (88% Vigor)</span>
        </div>

        {/* Sector Pin Callout 2 (Soy Moisture Stress) */}
        <div
          onClick={() => setSelectedSector('Sector 2B')}
          className="absolute bottom-10 left-12 bg-slate-900/90 backdrop-blur-md text-white px-2.5 py-1.5 rounded-xl border border-amber-500/40 text-[10px] font-bold shadow-lg flex items-center gap-1.5 cursor-pointer hover:scale-105 transition-transform"
        >
          <span className="w-2 h-2 rounded-full bg-amber-400" />
          <span>Sector 2B - Soy (Moisture Stress)</span>
        </div>

        {/* Zoom & Control Tools */}
        <div className="absolute top-3 right-3 flex flex-col gap-1 bg-slate-900/80 backdrop-blur-md p-1 rounded-lg border border-white/10 shadow">
          <button
            onClick={() => setZoomLevel((z) => Math.min(z + 0.2, 1.6))}
            className="p-1 hover:bg-white/20 text-white rounded text-xs transition-colors cursor-pointer"
            title="Zoom In"
          >
            <ZoomIn className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setZoomLevel((z) => Math.max(z - 0.2, 0.8))}
            className="p-1 hover:bg-white/20 text-white rounded text-xs transition-colors cursor-pointer"
            title="Zoom Out"
          >
            <ZoomOut className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom NDVI Scale Legend */}
        <div className="absolute bottom-2.5 right-3 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 text-[9px] text-white flex items-center gap-2">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500" /> Healthy (0.7-1.0)
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-amber-400" /> Moderate (0.4-0.6)
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-rose-500" /> Critical (&lt;0.3)
          </span>
        </div>
      </div>

      {/* Footer Parcel Info */}
      <div className="flex items-center justify-between text-xs pt-1 border-t border-slate-100">
        <p className="text-slate-500 font-medium">
          Parcel ID: <span className="font-bold text-slate-800">#D-LMB-932</span> (585 ha total monitored)
        </p>
        <button
          onClick={() => alert('Opening Parcel #D-LMB-932 Deep Telemetry & GIS Layers')}
          className="flex items-center gap-1 font-bold text-emerald-700 hover:text-emerald-800 hover:underline cursor-pointer"
        >
          <span>Inspect Parcels</span>
          <ExternalLink className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
}
