import React, { useState } from 'react';
import { Search, Filter, Download, ChevronLeft, ChevronRight } from 'lucide-react';

export const initialParcels = [
  {
    id: 'LMB-01',
    code: '#LMB-01',
    crop: 'Sweet Corn',
    scientific: '(Zea mays)',
    soil: 'Volcanic Loam',
    sowingArea: '120.0 ha',
    harvestedArea: '95.0 ha',
    yield: '0.42',
    healthScore: 92,
    healthColor: 'bg-[#10b981]',
    recommendedAction: 'Standard drip schedule',
    status: 'Harvesting',
    statusStyle: 'text-emerald-700 bg-emerald-50 border-emerald-200',
    dotColor: 'bg-emerald-500',
  },
  {
    id: 'LMB-02',
    code: '#LMB-02',
    crop: 'Soybeans',
    scientific: '(Glycine max)',
    soil: 'Clay Loam',
    sowingArea: '85.0 ha',
    harvestedArea: '30.0 ha',
    yield: '4.15',
    healthScore: 71,
    healthColor: 'bg-[#f59e0b]',
    recommendedAction: 'Apply NPK Foliar Spray',
    status: 'Moisture Stress',
    statusStyle: 'text-amber-800 bg-amber-50 border-amber-200',
    dotColor: 'bg-amber-500',
  },
  {
    id: 'LMB-03',
    code: '#LMB-03',
    crop: 'Lowland Paddy Rice',
    scientific: '(Oryza sativa)',
    soil: 'Silty Clay',
    sowingArea: '180.0 ha',
    harvestedArea: '140.0 ha',
    yield: '6.80',
    healthScore: 89,
    healthColor: 'bg-[#10b981]',
    recommendedAction: 'Drainage check prior harvest',
    status: 'Maturation',
    statusStyle: 'text-teal-700 bg-teal-50 border-teal-200',
    dotColor: 'bg-teal-500',
  },
  {
    id: 'LMB-04',
    code: '#LMB-04',
    crop: 'Arabica Coffee Rows',
    scientific: '(Coffea arabica)',
    soil: 'Andosol',
    sowingArea: '200.0 ha',
    harvestedArea: '45.0 ha',
    yield: '3.20',
    healthScore: 95,
    healthColor: 'bg-[#10b981]',
    recommendedAction: 'Shade canopy pruning',
    status: 'Vegetative',
    statusStyle: 'text-sky-700 bg-sky-50 border-sky-200',
    dotColor: 'bg-sky-500',
  },
];

export default function AgronomicDataTable({ onActionClick }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [filterStatus, setFilterStatus] = useState('All');

  const filtered = initialParcels.filter((p) => {
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      p.code.toLowerCase().includes(q) ||
      p.crop.toLowerCase().includes(q) ||
      p.soil.toLowerCase().includes(q) ||
      p.status.toLowerCase().includes(q);
    const matchesFilter = filterStatus === 'All' || p.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-2xs space-y-4">
      {/* Top Header & Search/Filter Controls */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-3 border-b border-slate-100">
        <div>
          <h3 className="text-base font-black text-slate-900 tracking-tight">
            Crops List & Agronomic Data
          </h3>
          <p className="text-xs text-slate-500 font-medium">
            Detailed parcel status, soil classification and current health scores
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          {/* Search Input */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search parcel or crop..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 w-48 sm:w-56"
            />
          </div>

          {/* Filters Button */}
          <button
            onClick={() => setFilterStatus(filterStatus === 'All' ? 'Harvesting' : 'All')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border transition-colors cursor-pointer ${
              filterStatus !== 'All'
                ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            <Filter className="w-3 h-3 text-slate-500" />
            <span>{filterStatus !== 'All' ? filterStatus : 'Filters'}</span>
          </button>

          {/* Export Button */}
          <button
            onClick={() => alert('Exporting Agronomic CSV & GeoJSON parcel dataset...')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 transition-colors cursor-pointer"
          >
            <Download className="w-3 h-3 text-slate-500" />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 border-b border-slate-100">
              <th className="py-3 px-3">Parcel No.</th>
              <th className="py-3 px-3">Crop Type</th>
              <th className="py-3 px-3">Soil Type</th>
              <th className="py-3 px-3">Sowing Area (ha)</th>
              <th className="py-3 px-3">Harvested Area (ha)</th>
              <th className="py-3 px-3">Yield (tons/ha)</th>
              <th className="py-3 px-3">Health Score</th>
              <th className="py-3 px-3">Recommended Action</th>
              <th className="py-3 px-3 text-center">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 font-medium">
            {filtered.map((parcel) => (
              <tr key={parcel.id} className="hover:bg-slate-50/70 transition-colors">
                {/* Parcel Code */}
                <td className="py-3 px-3 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${parcel.dotColor}`} />
                    <span className="font-extrabold text-slate-900">{parcel.code}</span>
                  </div>
                </td>

                {/* Crop Type */}
                <td className="py-3 px-3 whitespace-nowrap">
                  <div>
                    <span className="font-bold text-slate-800">{parcel.crop}</span>
                    <span className="text-[10px] text-slate-400 block font-normal">{parcel.scientific}</span>
                  </div>
                </td>

                {/* Soil Type */}
                <td className="py-3 px-3 text-slate-600 whitespace-nowrap">{parcel.soil}</td>

                {/* Sowing Area */}
                <td className="py-3 px-3 font-bold text-slate-900 whitespace-nowrap">{parcel.sowingArea}</td>

                {/* Harvested Area */}
                <td className="py-3 px-3 font-medium text-slate-600 whitespace-nowrap">{parcel.harvestedArea}</td>

                {/* Yield */}
                <td className="py-3 px-3 font-extrabold text-[#0f9f6e] whitespace-nowrap">{parcel.yield}</td>

                {/* Health Score */}
                <td className="py-3 px-3 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-slate-900 min-w-[28px]">{parcel.healthScore}%</span>
                    <div className="w-16 h-2 rounded-full bg-slate-100 overflow-hidden">
                      <div
                        className={`h-full rounded-full ${parcel.healthColor}`}
                        style={{ width: `${parcel.healthScore}%` }}
                      />
                    </div>
                  </div>
                </td>

                {/* Recommended Action */}
                <td className="py-3 px-3 text-slate-700 whitespace-nowrap font-medium">
                  {parcel.recommendedAction}
                </td>

                {/* Status Pill */}
                <td className="py-3 px-3 text-center whitespace-nowrap">
                  <span
                    className={`inline-block px-2.5 py-1 rounded-full text-[11px] font-bold border ${parcel.statusStyle}`}
                  >
                    {parcel.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-slate-100 text-xs">
        <span className="text-slate-400 font-medium">
          Showing <span className="font-bold text-slate-700">1-4</span> of <span className="font-bold text-slate-700">14</span> parcels
        </span>

        <div className="flex items-center gap-1 self-end sm:self-auto">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            className="px-2.5 py-1 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 font-bold transition-colors cursor-pointer"
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentPage(1)}
            className={`w-7 h-7 rounded-lg font-bold text-xs flex items-center justify-center cursor-pointer ${
              currentPage === 1 ? 'bg-[#0f9f6e] text-white' : 'hover:bg-slate-100 text-slate-600'
            }`}
          >
            1
          </button>
          <button
            onClick={() => setCurrentPage(2)}
            className={`w-7 h-7 rounded-lg font-bold text-xs flex items-center justify-center cursor-pointer ${
              currentPage === 2 ? 'bg-[#0f9f6e] text-white' : 'hover:bg-slate-100 text-slate-600'
            }`}
          >
            2
          </button>
          <button
            onClick={() => setCurrentPage(3)}
            className={`w-7 h-7 rounded-lg font-bold text-xs flex items-center justify-center cursor-pointer ${
              currentPage === 3 ? 'bg-[#0f9f6e] text-white' : 'hover:bg-slate-100 text-slate-600'
            }`}
          >
            3
          </button>
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, 3))}
            className="px-2.5 py-1 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 font-bold transition-colors cursor-pointer"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
