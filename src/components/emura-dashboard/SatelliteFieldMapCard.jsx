import React, { useState } from 'react';
import { Layers, Search, Plus, Minus, ChevronUp, ChevronDown } from 'lucide-react';

export default function SatelliteFieldMapCard() {
  const [isSensorLogOpen, setIsSensorLogOpen] = useState(true);
  const [zoomLevel, setZoomLevel] = useState(1);

  return (
    <div className="relative w-full h-[340px] sm:h-[380px] bg-[#0c4e2e] rounded-3xl overflow-hidden shadow-xs border border-emerald-900/40 p-6 flex flex-col justify-between">
      {/* Background satellite farm grid effect */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#a7f3d0 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Top Map Controls */}
      <div className="relative z-10 flex items-center justify-between">
        {/* Layer button */}
        <button
          onClick={() => alert('Layer switched to NDVI Infrared Composite')}
          className="w-9 h-9 rounded-xl bg-black/40 backdrop-blur-md text-white/90 hover:text-white flex items-center justify-center border border-white/10 transition-colors cursor-pointer"
          title="Map Layers"
        >
          <Layers className="w-4 h-4" />
        </button>

        {/* Search button */}
        <button
          onClick={() => alert('Search farm coordinates')}
          className="w-9 h-9 rounded-xl bg-black/40 backdrop-blur-md text-white/90 hover:text-white flex items-center justify-center border border-white/10 transition-colors cursor-pointer"
          title="Search Field Coordinates"
        >
          <Search className="w-4 h-4" />
        </button>
      </div>

      {/* Floating Dark Telemetry Card: Area 1: Rice Field */}
      <div className="relative z-10 self-center sm:self-end w-full max-w-[290px] bg-[#121c16]/90 backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-xl text-white space-y-3">
        <div className="text-center pb-2 border-b border-white/10">
          <h4 className="text-xs font-bold tracking-tight text-white">
            Area 1: Rice Field
          </h4>
        </div>

        <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-300">
          <div>
            <span className="text-slate-400 block">Planting date</span>
            <span className="font-bold text-white">24 Aug 25</span>
          </div>
          <div>
            <span className="text-slate-400 block">Harvest Date</span>
            <span className="font-bold text-white">12 Dec 25</span>
          </div>
        </div>

        {/* Crop Health Bar */}
        <div>
          <div className="flex justify-between items-center text-[10px] mb-1">
            <span className="text-slate-400">Crop health</span>
            <span className="font-bold text-emerald-400">87 %</span>
          </div>
          <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
            <div className="h-full bg-emerald-400 rounded-full" style={{ width: '87%' }} />
          </div>
        </div>

        {/* Sensor Log Accordion */}
        <div className="pt-2 border-t border-white/10">
          <button
            onClick={() => setIsSensorLogOpen(!isSensorLogOpen)}
            className="w-full flex items-center justify-between text-[10px] text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Sensor log</span>
            {isSensorLogOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>

          {isSensorLogOpen && (
            <div className="mt-2 space-y-1 text-[10px]">
              <div className="flex justify-between text-slate-300">
                <span>Temperature</span>
                <span className="font-bold text-white">24 °C</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Humidity</span>
                <span className="font-bold text-white">80 %</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Soil Moisture</span>
                <span className="font-bold text-white">68 %</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Zoom Controls */}
      <div className="relative z-10 flex items-center gap-1.5">
        <div className="flex flex-col bg-black/40 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden">
          <button
            onClick={() => setZoomLevel((z) => Math.min(z + 0.2, 2))}
            className="p-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
          </button>
          <div className="h-px bg-white/10" />
          <button
            onClick={() => setZoomLevel((z) => Math.max(z - 0.2, 0.6))}
            className="p-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            <Minus className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
