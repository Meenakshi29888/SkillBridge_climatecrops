import React, { useState } from 'react';
import { ArrowUpDown } from 'lucide-react';

function CircularProgress({ percentage, color = '#10b981' }) {
  const size = 18;
  const strokeWidth = 2.5;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#e2e8f0"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          fill="transparent"
        />
      </svg>
    </div>
  );
}

export default function FieldStatusTable({ fields, onSeeAllClick }) {
  const [sortField, setSortField] = useState(null);
  const [sortAsc, setSortAsc] = useState(true);

  const handleSort = (fieldKey) => {
    if (sortField === fieldKey) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(fieldKey);
      setSortAsc(true);
    }
  };

  const sortedFields = [...fields].sort((a, b) => {
    if (!sortField) return 0;
    let valA = a[sortField];
    let valB = b[sortField];
    if (typeof valA === 'string') valA = valA.toLowerCase();
    if (typeof valB === 'string') valB = valB.toLowerCase();
    if (valA < valB) return sortAsc ? -1 : 1;
    if (valA > valB) return sortAsc ? 1 : -1;
    return 0;
  });

  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-bold text-slate-900 tracking-tight">
          Field Status
        </h2>
        <button
          onClick={onSeeAllClick}
          className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer"
        >
          See All
        </button>
      </div>

      {/* Table Content */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-100 text-[11px] font-bold text-slate-400 tracking-wider">
              <th
                onClick={() => handleSort('name')}
                className="pb-3 pr-4 cursor-pointer hover:text-slate-600 transition-colors uppercase"
              >
                <div className="flex items-center gap-1">
                  <span>FIELD</span>
                  <ArrowUpDown className="w-3 h-3 text-slate-400" />
                </div>
              </th>
              <th
                onClick={() => handleSort('crop')}
                className="pb-3 px-3 cursor-pointer hover:text-slate-600 transition-colors uppercase"
              >
                <div className="flex items-center gap-1">
                  <span>CROPS</span>
                  <ArrowUpDown className="w-3 h-3 text-slate-400" />
                </div>
              </th>
              <th
                onClick={() => handleSort('soilMoisture')}
                className="pb-3 px-3 cursor-pointer hover:text-slate-600 transition-colors uppercase"
              >
                <div className="flex items-center gap-1">
                  <span>SOIL MOISTURE</span>
                  <ArrowUpDown className="w-3 h-3 text-slate-400" />
                </div>
              </th>
              <th
                onClick={() => handleSort('temp')}
                className="pb-3 px-3 cursor-pointer hover:text-slate-600 transition-colors uppercase"
              >
                <div className="flex items-center gap-1">
                  <span>TEMP °</span>
                  <ArrowUpDown className="w-3 h-3 text-slate-400" />
                </div>
              </th>
              <th
                onClick={() => handleSort('healthStatus')}
                className="pb-3 pl-3 text-right cursor-pointer hover:text-slate-600 transition-colors uppercase"
              >
                <div className="flex items-center justify-end gap-1">
                  <span>HEALTH</span>
                  <ArrowUpDown className="w-3 h-3 text-slate-400" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {sortedFields.map((row) => (
              <tr
                key={row.id}
                className="hover:bg-slate-50/70 transition-colors text-xs text-slate-700 group"
              >
                {/* Field Code & Name */}
                <td className="py-3.5 pr-4">
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`w-7 h-7 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 ${row.codeBg}`}
                    >
                      {row.code}
                    </span>
                    <span className="font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors">
                      {row.name}
                    </span>
                  </div>
                </td>

                {/* Crop */}
                <td className="py-3.5 px-3 font-medium text-slate-600">
                  {row.crop}
                </td>

                {/* Soil Moisture */}
                <td className="py-3.5 px-3">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-slate-800">
                      {row.soilMoisture}%
                    </span>
                    <CircularProgress
                      percentage={row.soilMoisture}
                      color={
                        row.soilMoisture > 60
                          ? '#10b981'
                          : row.soilMoisture >= 40
                          ? '#10b981'
                          : '#10b981'
                      }
                    />
                  </div>
                </td>

                {/* Temp */}
                <td className="py-3.5 px-3 font-semibold text-slate-800">
                  {row.temp}
                </td>

                {/* Health Badge */}
                <td className="py-3.5 pl-3 text-right">
                  <span
                    className={`inline-block px-3 py-1 rounded-lg text-[11px] font-bold tracking-tight ${row.healthStyle}`}
                  >
                    {row.healthStatus}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
