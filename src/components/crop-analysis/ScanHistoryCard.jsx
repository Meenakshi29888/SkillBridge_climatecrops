import React from 'react';

export default function ScanHistoryCard() {
  const scans = [
    {
      id: 'sat',
      name: 'Satellite NDVI',
      timestamp: 'Apr 10, 09:14',
      status: 'Improved',
      statusStyle: 'bg-emerald-50 text-emerald-700 border border-emerald-200/60',
      dotColor: 'bg-emerald-500',
    },
    {
      id: 'drone',
      name: 'Drone RGB',
      timestamp: 'Apr 8, 14:22',
      status: 'Stable',
      statusStyle: 'bg-sky-50 text-sky-700 border border-sky-200/60',
      dotColor: 'bg-sky-500',
    },
    {
      id: 'ground',
      name: 'Ground Sensor',
      timestamp: 'Apr 5, 11:00',
      status: 'Warning',
      statusStyle: 'bg-amber-50 text-amber-700 border border-amber-200/60',
      dotColor: 'bg-amber-500',
    },
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200/70 p-6 shadow-xs flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">
          Scan History
        </h3>
      </div>

      {/* Rows */}
      <div className="space-y-4">
        {scans.map((scan) => (
          <div
            key={scan.id}
            className="flex items-center justify-between py-1 hover:translate-x-0.5 transition-transform"
          >
            <div className="flex items-start gap-2.5">
              <span
                className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${scan.dotColor}`}
              />
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                  {scan.name}
                </h4>
                <p className="text-[11px] text-slate-400 font-medium">
                  {scan.timestamp}
                </p>
              </div>
            </div>

            <span
              className={`px-3 py-1 rounded-lg text-xs font-semibold ${scan.statusStyle}`}
            >
              {scan.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
